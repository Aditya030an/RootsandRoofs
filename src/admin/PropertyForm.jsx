import { useEffect, useMemo, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { api } from "../utils/api";
import {
  Card, Field, ImageList, inputCls, LinesField, RowsEditor, SmallButton, Toggle, UrlField,
} from "./fields";

const PROPERTY_TYPES = ["Plot", "Villa", "Row House", "Apartment", "Commercial", "Office", "IT Park", "Shop"];

const BLANK = {
  title: "",
  slug: "",
  location: "",
  city: "Indore",
  state: "Madhya Pradesh",
  type: "Buy",
  propertyType: "",
  bhk: "",
  area: "",
  description: "",
  price: 0,
  pricePerSqFt: 0,
  bathrooms: 0,
  verified: true,
  featured: false,
  promoted: false,
  promotedOrder: 0,
  readyToMove: false,
  parking: false,
  published: true,
  keyHighlights: [],
  projectData: [],
  images: [],
  floorPlan: { image: "", pdf: "", images: [] },
  map: { image: "", locationLink: "" },
  sections: { overview: "", amenities: [], specifications: [], connectivity: [], vision: [] },
  developer: { name: "", description: "" },
  disclaimer: "",
};

const slugify = (t) =>
  String(t || "").toLowerCase().replace(/&/g, " and ").replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");

// Merge a stored property onto BLANK so every field the form edits exists.
const hydrate = (p) => {
  const floorImages = p.floorPlan?.images?.length ? p.floorPlan.images : p.floorPlan?.image ? [p.floorPlan.image] : [];
  return {
    ...BLANK,
    ...p,
    price: Array.isArray(p.price)
      ? p.price.map((x) => ({ type: x.type ?? x.label ?? "", value: x.value ?? x.price ?? "" }))
      : p.price || 0,
    keyHighlights: (p.keyHighlights || []).map((h) => ({ ...h, points: h.points || [] })),
    floorPlan: { ...BLANK.floorPlan, ...(p.floorPlan || {}), images: floorImages },
    map: { ...BLANK.map, ...(p.map || {}) },
    sections: { ...BLANK.sections, ...(p.sections || {}) },
    developer: { ...BLANK.developer, ...(p.developer || {}) },
  };
};

const compact = (list) => (list || []).map((s) => String(s).trim()).filter(Boolean);

// Strip empty rows/lines and coerce numbers just before saving.
const toPayload = (f) => {
  const floorImages = compact(f.floorPlan.images);
  return {
    ...f,
    title: f.title.trim(),
    slug: f.slug.trim(),
    price: Array.isArray(f.price) ? f.price.filter((r) => r.type?.trim() || String(r.value).trim()) : Number(f.price) || 0,
    pricePerSqFt: Number(f.pricePerSqFt) || 0,
    bathrooms: Number(f.bathrooms) || 0,
    images: compact(f.images),
    keyHighlights: f.keyHighlights
      .map((h) => ({ ...h, title: (h.title || "").trim(), points: compact(h.points) }))
      .filter((h) => h.title || h.points.length),
    projectData: f.projectData.filter((r) => r.label?.trim()),
    floorPlan: { ...f.floorPlan, images: floorImages, image: floorImages[0] || f.floorPlan.image || "" },
    sections: {
      ...f.sections,
      amenities: f.sections.amenities.filter((a) => a.title?.trim()),
      specifications: compact(f.sections.specifications),
      connectivity: compact(f.sections.connectivity),
      vision: compact(f.sections.vision),
    },
  };
};

const PropertyForm = () => {
  const { id } = useParams();
  const isNew = !id;
  const navigate = useNavigate();
  const [form, setForm] = useState(BLANK);
  const [loading, setLoading] = useState(!isNew);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [saved, setSaved] = useState("");
  const [json, setJson] = useState("");

  useEffect(() => {
    if (isNew) return;
    api
      .adminGet(id)
      .then((p) => setForm(hydrate(p)))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [id, isNew]);

  const set = (patch) => setForm((f) => ({ ...f, ...patch }));
  const setIn = (key, patch) => setForm((f) => ({ ...f, [key]: { ...f[key], ...patch } }));
  const folder = slugify(form.title) || "untitled";
  const priceIsList = Array.isArray(form.price);
  const hasCustomType = form.propertyType && !PROPERTY_TYPES.includes(form.propertyType);
  const gallery = useMemo(() => compact(form.images), [form.images]);

  const submit = async (e) => {
    e.preventDefault();
    setError("");
    setSaved("");
    if (!form.title.trim()) {
      setError("Title is required");
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    setSaving(true);
    try {
      const payload = toPayload(form);
      const result = isNew ? await api.create(payload) : await api.update(id, payload);
      if (isNew) {
        navigate(`/admin/property/${result.id}`, { replace: true });
      } else {
        setForm(hydrate(result));
      }
      setSaved(`Saved. Live at /property/${result.slug}`);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (err) {
      setError(err.message);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } finally {
      setSaving(false);
    }
  };

  if (loading) return <p className="text-slate-500">Loading…</p>;

  return (
    <form onSubmit={submit} className="space-y-6 pb-24">
      <div className="flex items-center justify-between">
        <div>
          <Link to="/admin" className="text-sm text-slate-500 hover:text-slate-800">← All properties</Link>
          <h1 className="text-2xl font-bold">{isNew ? "Add property" : `Edit: ${form.title || "property"}`}</h1>
        </div>
        {!isNew && (
          <a href={`/property/${form.slug || id}`} target="_blank" rel="noreferrer" className="text-sm text-[#4f8f1a] hover:underline">
            View on site ↗
          </a>
        )}
      </div>

      {error && <p className="text-sm text-red-700 bg-red-50 border border-red-200 rounded-lg px-3 py-2">{error}</p>}
      {saved && <p className="text-sm text-green-700 bg-green-50 border border-green-200 rounded-lg px-3 py-2">{saved}</p>}

      <Card title="Basic details">
        <div className="grid md:grid-cols-2 gap-4">
          <Field label="Title *"><input className={inputCls} value={form.title} onChange={(e) => set({ title: e.target.value })} required /></Field>
          <Field label="URL slug" hint="Leave blank to generate from the title."><input className={inputCls} value={form.slug} onChange={(e) => set({ slug: e.target.value })} /></Field>
          <Field label="Listing type">
            <select className={inputCls} value={form.type} onChange={(e) => set({ type: e.target.value })}>
              <option>Buy</option><option>Rent</option>
            </select>
          </Field>
          <Field label="Property type" hint="Plots show under the Plot tab; Commercial/Office under Commercial.">
            <select className={inputCls} value={form.propertyType} onChange={(e) => set({ propertyType: e.target.value })}>
              <option value="">Select…</option>
              {hasCustomType && <option value={form.propertyType}>{form.propertyType}</option>}
              {PROPERTY_TYPES.map((t) => <option key={t}>{t}</option>)}
            </select>
          </Field>
          <Field label="Configuration (BHK)" hint='e.g. "3 BHK", "1/2/3 BHK", or "Plots".'><input className={inputCls} value={form.bhk} onChange={(e) => set({ bhk: e.target.value })} /></Field>
          <Field label="Area / sizes" hint='e.g. "1200 - 1800 Sq.ft."'><input className={inputCls} value={form.area} onChange={(e) => set({ area: e.target.value })} /></Field>
          <Field label="Location / address"><input className={inputCls} value={form.location} onChange={(e) => set({ location: e.target.value })} /></Field>
          <div className="grid grid-cols-2 gap-4">
            <Field label="City"><input className={inputCls} value={form.city} onChange={(e) => set({ city: e.target.value })} /></Field>
            <Field label="State"><input className={inputCls} value={form.state} onChange={(e) => set({ state: e.target.value })} /></Field>
          </div>
        </div>
        <Field label="Description"><textarea rows={5} className={inputCls} value={form.description} onChange={(e) => set({ description: e.target.value })} /></Field>
        <div className="flex flex-wrap gap-x-6 gap-y-3">
          <Toggle label="Published (visible on site)" checked={form.published} onChange={(v) => set({ published: v })} />
          <Toggle label="Verified badge" checked={form.verified} onChange={(v) => set({ verified: v })} />
          <Toggle label="Featured" checked={form.featured} onChange={(v) => set({ featured: v })} />
          <Toggle label="Promote (show in right-side Featured panel)" checked={form.promoted} onChange={(v) => set({ promoted: v })} />
          <Toggle label="Ready to move" checked={form.readyToMove} onChange={(v) => set({ readyToMove: v })} />
          <Toggle label="Parking" checked={form.parking} onChange={(v) => set({ parking: v })} />
        </div>
        {form.promoted && (
          <Field label="Promotion order" hint="1 shows first. Properties with the same number are sorted by ID.">
            <input type="number" min="0" className={`${inputCls} sm:w-40`} value={form.promotedOrder ?? 0} onChange={(e) => set({ promotedOrder: Number(e.target.value) || 0 })} />
          </Field>
        )}
      </Card>

      <Card title="Price" hint="Leave at 0 / empty to show “Price on Request”.">
        <div className="flex gap-4 text-sm">
          <label className="flex items-center gap-2"><input type="radio" checked={!priceIsList} onChange={() => set({ price: 0 })} /> Single amount</label>
          <label className="flex items-center gap-2"><input type="radio" checked={priceIsList} onChange={() => set({ price: [{ type: "", value: "" }] })} /> Price list (by type)</label>
        </div>
        {priceIsList ? (
          <RowsEditor
            items={form.price}
            onChange={(price) => set({ price })}
            blank={{ type: "", value: "" }}
            addLabel="Add price"
            render={(row, update) => (
              <div className="grid sm:grid-cols-2 gap-3">
                <Field label="Label"><input className={inputCls} placeholder="e.g. 2 BHK / Plot" value={row.type} onChange={(e) => update({ type: e.target.value })} /></Field>
                <Field label="Price"><input className={inputCls} placeholder="₹ 68 Lakh" value={row.value} onChange={(e) => update({ value: e.target.value })} /></Field>
              </div>
            )}
          />
        ) : (
          <div className="grid sm:grid-cols-2 gap-4">
            <Field label="Price (₹)"><input type="number" min="0" className={inputCls} value={form.price} onChange={(e) => set({ price: e.target.value })} /></Field>
            <Field label="Price per sq.ft (₹)"><input type="number" min="0" className={inputCls} value={form.pricePerSqFt} onChange={(e) => set({ pricePerSqFt: e.target.value })} /></Field>
          </div>
        )}
      </Card>

      <Card title="Builder / developer">
        <Field label="Name"><input className={inputCls} value={form.developer.name} onChange={(e) => setIn("developer", { name: e.target.value })} /></Field>
        <Field label="About the builder"><textarea rows={3} className={inputCls} value={form.developer.description} onChange={(e) => setIn("developer", { description: e.target.value })} /></Field>
      </Card>

      <Card title="Photos" hint="The first image is the cover shown on the listing card. Use the arrows to reorder.">
        <ImageList urls={form.images} onChange={(images) => set({ images })} folder={folder} onError={setError} firstLabel="Cover" />
      </Card>

      <Card title="Overview & key highlights">
        <Field label="Overview"><textarea rows={4} className={inputCls} value={form.sections.overview} onChange={(e) => setIn("sections", { overview: e.target.value })} /></Field>
        <RowsEditor
          items={form.keyHighlights}
          onChange={(keyHighlights) => set({ keyHighlights })}
          blank={{ title: "", points: [] }}
          addLabel="Add highlight group"
          render={(h, update) => (
            <div className="space-y-3">
              <Field label="Group title"><input className={inputCls} placeholder="Key Highlights of the Project" value={h.title || ""} onChange={(e) => update({ title: e.target.value })} /></Field>
              <Field label="Points"><LinesField rows={4} value={h.points} onChange={(points) => update({ points })} /></Field>
            </div>
          )}
        />
      </Card>

      <Card title="Amenities" hint="Each amenity can have a photo — pick one from the gallery above or upload a new one.">
        <RowsEditor
          items={form.sections.amenities}
          onChange={(amenities) => setIn("sections", { amenities })}
          blank={{ title: "", img: "" }}
          addLabel="Add amenity"
          render={(a, update) => (
            <div className="grid md:grid-cols-2 gap-3">
              <Field label="Name"><input className={inputCls} value={a.title || ""} onChange={(e) => update({ title: e.target.value })} /></Field>
              <Field label="Photo"><UrlField value={a.img} onChange={(img) => update({ img })} folder={folder} options={gallery} onError={setError} /></Field>
            </div>
          )}
        />
      </Card>

      <Card title="Specifications, connectivity & vision">
        <Field label="Specifications"><LinesField value={form.sections.specifications} onChange={(v) => setIn("sections", { specifications: v })} /></Field>
        <Field label="Connectivity / nearby places"><LinesField value={form.sections.connectivity} onChange={(v) => setIn("sections", { connectivity: v })} placeholder="e.g. Airport – 15 mins" /></Field>
        <Field label="Vision"><LinesField rows={3} value={form.sections.vision} onChange={(v) => setIn("sections", { vision: v })} /></Field>
      </Card>

      <Card title="Project data" hint="Shown as a fact table (RERA no., plots, sizes, website…).">
        <RowsEditor
          items={form.projectData}
          onChange={(projectData) => set({ projectData })}
          blank={{ label: "", value: "" }}
          addLabel="Add row"
          render={(r, update) => (
            <div className="grid sm:grid-cols-2 gap-3">
              <Field label="Label"><input className={inputCls} value={r.label || ""} onChange={(e) => update({ label: e.target.value })} /></Field>
              <Field label="Value"><input className={inputCls} value={r.value || ""} onChange={(e) => update({ value: e.target.value })} /></Field>
            </div>
          )}
        />
      </Card>

      <Card title="Floor plans / layout">
        <ImageList urls={form.floorPlan.images} onChange={(images) => setIn("floorPlan", { images })} folder={folder} onError={setError} />
        <Field label="Floor plan PDF (optional)"><UrlField value={form.floorPlan.pdf} onChange={(pdf) => setIn("floorPlan", { pdf })} folder={folder} accept="application/pdf" onError={setError} /></Field>
      </Card>

      <Card title="Map">
        <Field label="Location map image"><UrlField value={form.map.image} onChange={(image) => setIn("map", { image })} folder={folder} options={gallery} onError={setError} /></Field>
        <Field label="Google Maps link"><input className={inputCls} placeholder="https://maps.google.com/…" value={form.map.locationLink} onChange={(e) => setIn("map", { locationLink: e.target.value })} /></Field>
      </Card>

      <Card title="Disclaimer">
        <textarea rows={3} className={inputCls} value={form.disclaimer} onChange={(e) => set({ disclaimer: e.target.value })} />
      </Card>

      <details className="bg-white border border-slate-200 rounded-2xl p-5" onToggle={(e) => e.target.open && setJson(JSON.stringify(toPayload(form), null, 2))}>
        <summary className="cursor-pointer font-semibold text-slate-800">Advanced: edit raw JSON</summary>
        <p className="text-xs text-slate-500 mt-2">For fields not covered above. Click “Apply JSON” to load it into the form, then Save.</p>
        <textarea rows={14} className={`${inputCls} mt-3 font-mono text-xs`} value={json} onChange={(e) => setJson(e.target.value)} />
        <div className="mt-3">
          <SmallButton
            onClick={() => {
              try {
                setForm(hydrate(JSON.parse(json)));
                setError("");
              } catch (err) {
                setError(`Invalid JSON: ${err.message}`);
              }
            }}
          >
            Apply JSON
          </SmallButton>
        </div>
      </details>

      <div className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur border-t border-slate-200 z-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-3 flex justify-end gap-3">
          <Link to="/admin" className="px-4 py-2 rounded-lg border border-slate-300 text-sm hover:bg-slate-100">Cancel</Link>
          <button disabled={saving} className="px-6 py-2 rounded-lg bg-[#7cc933] text-white text-sm font-medium hover:bg-[#6bb028] disabled:opacity-60">
            {saving ? "Saving…" : isNew ? "Create property" : "Save changes"}
          </button>
        </div>
      </div>
    </form>
  );
};

export default PropertyForm;
