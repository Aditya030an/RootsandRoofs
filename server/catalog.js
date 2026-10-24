// Server-side catalogue: builds a light, cached summary of every published
// property and applies the same tab/search/filter rules the site used to run
// in the browser, so listing pages only ever download one page of cards.
import Property from "./models/Property.js";

export const AMENITY_FILTERS = [
  { label: "Swimming Pool", terms: ["pool"] },
  { label: "Clubhouse", terms: ["club"] },
  { label: "Garden", terms: ["garden", "landscape"] },
  { label: "Park / Green Area", terms: ["park", "green", "open area"] },
  { label: "Gym", terms: ["gym"] },
  { label: "Kids Play Area", terms: ["kid", "play", "children"] },
  { label: "Temple", terms: ["temple"] },
  { label: "Sports Courts", terms: ["sport", "court", "tennis", "basketball"] },
  { label: "Jogging Track", terms: ["jog", "track"] },
  { label: "Grand Entrance", terms: ["entrance", "gate"] },
  { label: "Wide Roads", terms: ["road"] },
  { label: "Security", terms: ["security", "cctv", "boundary"] },
];

const lc = (s) => String(s || "").toLowerCase();

export const matchesTab = (p, tab) => {
  const pt = lc(p.propertyType);
  const bhk = lc(p.bhk);
  if (tab === "Plot") return pt.includes("plot") || bhk.includes("plot");
  if (tab === "Commercial")
    return pt.includes("commercial") || pt.includes("office") || pt.includes("it park") || bhk.includes("office");
  if (tab === "Rent") return p.type === "Rent";
  if (tab === "Investment") return false; // placeholder tab, no listings yet
  return p.type === "Buy"; // Buy → full catalogue
};

const bhkNumbers = (bhk) => {
  if (!bhk || !/bhk/i.test(bhk)) return [];
  const before = bhk.slice(0, bhk.toLowerCase().indexOf("bhk"));
  return (before.match(/\d+/g) || []).map(Number);
};

const parseAreaSqft = (area) => {
  if (typeof area === "number") return area;
  if (!area || typeof area !== "string") return null;
  if (!/sq\.?\s*ft|sqft/i.test(area)) return null;
  const m = area.replace(/,/g, "").match(/\d+(\.\d+)?/);
  return m ? parseFloat(m[0]) : null;
};

const parsePrice = (price) => {
  if (typeof price === "number") return price > 0 ? price : null;
  if (!Array.isArray(price)) return null;
  const nums = price
    .map((p) => {
      const str = String(p?.price ?? p?.value ?? "");
      const m = str.replace(/,/g, "").match(/\d+(\.\d+)?/);
      if (!m) return null;
      let n = parseFloat(m[0]);
      if (/crore|\bcr\b/i.test(str)) n *= 1e7;
      else if (/lakh|lac|\bl\b/i.test(str)) n *= 1e5;
      return n;
    })
    .filter((n) => n != null && !isNaN(n));
  return nums.length ? Math.min(...nums) : null;
};

// Only what a listing card / similar-projects card needs.
const PROJECTION = {
  id: 1, title: 1, slug: 1, location: 1, city: 1, state: 1, type: 1, propertyType: 1,
  bhk: 1, area: 1, price: 1, verified: 1, parking: 1, bathrooms: 1, published: 1, promoted: 1, promotedOrder: 1,
  images: { $slice: 1 }, "developer.name": 1, "sections.amenities.title": 1,
};

const TTL_MS = 60 * 1000;
let cache = { at: 0, rows: null, pending: null };

export const invalidateCatalog = () => {
  cache = { at: 0, rows: null, pending: null };
};

const build = async () => {
  const docs = await Property.find({ published: { $ne: false } }, PROJECTION).sort({ id: 1 }).lean();
  return docs.map((d) => ({
    card: {
      id: d.id, title: d.title, slug: d.slug, location: d.location || "", city: d.city || "",
      state: d.state || "", type: d.type, propertyType: d.propertyType || "", bhk: d.bhk || "",
      area: d.area || "", price: d.price, verified: d.verified !== false, parking: !!d.parking,
      bathrooms: d.bathrooms || 0, images: (d.images || []).slice(0, 1),
      developer: { name: d.developer?.name || "" },
    },
    promoted: d.promoted === true,
    promotedOrder: Number(d.promotedOrder) || 0,
    search: `${lc(d.title)} ${lc(d.location)}`,
    amenityTitles: (d.sections?.amenities || []).map((a) => lc(a.title)),
    bhkNums: bhkNumbers(d.bhk),
    areaSqft: parseAreaSqft(d.area),
    priceValue: parsePrice(d.price),
  }));
};

export const getCatalog = async () => {
  if (cache.rows && Date.now() - cache.at < TTL_MS) return cache.rows;
  if (!cache.pending) {
    cache.pending = build()
      .then((rows) => {
        cache = { at: Date.now(), rows, pending: null };
        return rows;
      })
      .catch((err) => {
        cache.pending = null;
        throw err;
      });
  }
  return cache.pending;
};

const csv = (v) => (v ? String(v).split(",").map((s) => s.trim()).filter(Boolean) : []);
const num = (v, fallback) => (v !== undefined && v !== "" && !isNaN(Number(v)) ? Number(v) : fallback);

export const listCatalog = async (query) => {
  const rows = await getCatalog();
  const tab = query.tab || "Buy";
  const inTab = rows.filter((r) => matchesTab(r.card, tab));

  // Filter options come from the whole tab, so every option has ≥1 result.
  const facets = {
    bhkOptions: [...new Set(inTab.flatMap((r) => r.bhkNums))].sort((a, b) => a - b).map((n) => `${n} BHK`),
    propertyTypes: [...new Set(inTab.map((r) => r.card.propertyType).filter(Boolean))].sort(),
    amenityOptions: AMENITY_FILTERS.filter((a) =>
      inTab.some((r) => r.amenityTitles.some((t) => a.terms.some((term) => t.includes(term)))),
    ).map((a) => a.label),
  };

  const q = lc(query.q).trim();
  const bhk = csv(query.bhk).map((o) => parseInt(o, 10));
  const types = csv(query.propertyType);
  const amenities = csv(query.amenities);
  const minPrice = num(query.minPrice, 0);
  const maxPrice = num(query.maxPrice, Infinity);
  const minArea = num(query.minArea, 0);
  const maxArea = num(query.maxArea, Infinity);

  const matched = inTab.filter((r) => {
    if (q && !r.search.includes(q)) return false;
    if (bhk.length && !bhk.some((n) => r.bhkNums.includes(n))) return false;
    if (types.length && !types.includes(r.card.propertyType)) return false;
    if (amenities.length) {
      const ok = amenities.every((label) => {
        const def = AMENITY_FILTERS.find((x) => x.label === label);
        return def && r.amenityTitles.some((t) => def.terms.some((term) => t.includes(term)));
      });
      if (!ok) return false;
    }
    if (query.verified === "true" && !r.card.verified) return false;
    if (query.parking === "true" && !r.card.parking) return false;
    // Price/area only constrain listings that actually have a parseable value.
    if (r.priceValue != null && (r.priceValue < minPrice || r.priceValue > maxPrice)) return false;
    if (r.areaSqft != null && (r.areaSqft < minArea || r.areaSqft > maxArea)) return false;
    return true;
  });

  const limit = Math.min(Math.max(num(query.limit, 12), 1), 60);
  const pages = Math.max(Math.ceil(matched.length / limit), 1);
  const page = Math.min(Math.max(num(query.page, 1), 1), pages);
  return {
    items: matched.slice((page - 1) * limit, page * limit).map((r) => r.card),
    total: matched.length,
    page,
    pages,
    limit,
    facets,
  };
};

// Cards the admin chose to advertise, in the admin's order.
export const listPromoted = async () => {
  const rows = await getCatalog();
  return rows
    .filter((r) => r.promoted)
    .sort((a, b) => a.promotedOrder - b.promotedOrder || a.card.id - b.card.id)
    .map((r) => r.card);
};

// Same-builder-first ranking used by "Similar Projects" on the detail page.
export const similarTo = async (property, count = 7) => {
  const rows = await getCatalog();
  const dev = lc(property.developer?.name).trim();
  const type = lc(property.propertyType).trim();
  const city = lc(property.city).trim();
  const bhk = lc(property.bhk).trim();
  return rows
    .filter((r) => r.card.id !== property.id)
    .map((r) => {
      let score = 0;
      if (dev && lc(r.card.developer.name).trim() === dev) score += 100;
      if (lc(r.card.propertyType).trim() === type) score += 10;
      if (lc(r.card.city).trim() === city) score += 5;
      if (lc(r.card.bhk).trim() === bhk) score += 3;
      return { card: r.card, score };
    })
    .filter((x) => x.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, count)
    .map((x) => x.card);
};
