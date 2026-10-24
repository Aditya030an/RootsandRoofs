import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { api } from "../utils/api";
import { optimizeImage } from "../utils/image";

const DEFAULT_PAGE_SIZE = 5; // cards visible at once on desktop
const ROTATE_MS = 8000;

const priceText = (price) => {
  if (typeof price === "number") return price > 0 ? `₹${price.toLocaleString()}` : "";
  if (Array.isArray(price)) {
    const first = price.map((p) => p?.price ?? p?.value).filter(Boolean)[0];
    return first || "";
  }
  return "";
};

// Admin-chosen properties, shown beside the listing (a swipe strip on mobile).
// Renders nothing when no property is promoted.
// `compact` is for narrow columns (property page): no own width/stickiness,
// fewer cards, and the open property is left out.
const PromotedPanel = ({ compact = false, excludeId, pageSize }) => {
  const PAGE_SIZE = pageSize || (compact ? 2 : DEFAULT_PAGE_SIZE);
  const [allItems, setAllItems] = useState([]);
  const items = excludeId ? allItems.filter((p) => p.id !== excludeId) : allItems;
  const [start, setStart] = useState(0);

  useEffect(() => {
    const controller = new AbortController();
    api
      .listPromoted(controller.signal)
      .then((res) => setAllItems(res.items || []))
      .catch(() => {});
    return () => controller.abort();
  }, []);

  // With more than PAGE_SIZE promoted, rotate so each one gets seen.
  useEffect(() => {
    if (items.length <= PAGE_SIZE) return;
    const t = setInterval(() => setStart((s) => (s + PAGE_SIZE >= items.length ? 0 : s + PAGE_SIZE)), ROTATE_MS);
    return () => clearInterval(t);
  }, [items.length, PAGE_SIZE]);

  if (!items.length) return null;

  return (
    <aside className={compact ? "w-full mt-5" : "w-full lg:w-72 xl:w-80 shrink-0 lg:sticky lg:top-28 self-start"} aria-label="Featured properties">
      <div className="flex items-center gap-2 mb-3 text-slate-800 font-bold">
        <FaStar className="text-amber-500" /> Featured
      </div>
      <div className="flex lg:flex-col gap-4 overflow-x-auto lg:overflow-visible snap-x pb-2 lg:pb-0">
        {items.map((p, i) => {
          const visible = i >= start && i < start + PAGE_SIZE;
          const price = priceText(p.price);
          return (
            <a
              key={p.id}
              href={`/property/${p.slug || p.id}`}
              target="_blank"
              rel="noopener noreferrer"
              className={`snap-start shrink-0 w-64 lg:w-auto border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-md transition ${visible ? "" : "lg:hidden"}`}
            >
              <div className="relative h-36 bg-slate-100">
                {p.images?.[0] && (
                  <img src={optimizeImage(p.images[0], 400)} alt={p.title} loading="lazy" className="h-full w-full object-cover" />
                )}
                <span className="absolute top-2 left-2 bg-amber-500 text-white text-[10px] font-semibold px-2 py-0.5 rounded-full">
                  Sponsored
                </span>
              </div>
              <div className="p-3">
                <h4 className="font-semibold text-slate-800 line-clamp-1">{p.title}</h4>
                <p className="text-xs text-slate-600 flex items-center gap-1 line-clamp-1">
                  <MdLocationOn className="text-[#7cc933] shrink-0" /> {p.location || p.city}
                </p>
                {price && <p className="text-sm font-semibold text-slate-800 mt-1">{price}</p>}
              </div>
            </a>
          );
        })}
      </div>
    </aside>
  );
};

export default PromotedPanel;
