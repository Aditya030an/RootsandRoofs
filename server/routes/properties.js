import { Router } from "express";
import Property from "../models/Property.js";
import { listCatalog, listPromoted, similarTo } from "../catalog.js";

const router = Router();

const cacheHeaders = (res) =>
  res.set("Cache-Control", "public, max-age=30, s-maxage=60, stale-while-revalidate=300");

// Paginated, filtered listing of light cards.
// ?tab=Buy|Plot|Commercial &page=1 &limit=12 &q= &bhk=2 BHK,3 BHK &propertyType= &amenities=
// &minPrice= &maxPrice= &minArea= &maxArea= &verified=true &parking=true
router.get("/", async (req, res, next) => {
  try {
    cacheHeaders(res);
    res.json(await listCatalog(req.query));
  } catch (err) {
    next(err);
  }
});

// Advertised properties for the right-side panel (must precede /:idOrSlug).
router.get("/promoted", async (req, res, next) => {
  try {
    res.set("Cache-Control", "public, max-age=10, s-maxage=30, stale-while-revalidate=120");
    res.json({ items: await listPromoted() });
  } catch (err) {
    next(err);
  }
});

const findOne = (key) => {
  const query = /^\d+$/.test(key) ? { id: Number(key) } : { slug: key };
  return Property.findOne({ ...query, published: { $ne: false } }).select("-__v").lean();
};

// Full property for the detail page (numeric id or slug).
router.get("/:idOrSlug", async (req, res, next) => {
  try {
    const item = await findOne(req.params.idOrSlug);
    if (!item) return res.status(404).json({ message: "Property not found" });
    cacheHeaders(res);
    res.json(item);
  } catch (err) {
    next(err);
  }
});

router.get("/:idOrSlug/similar", async (req, res, next) => {
  try {
    const item = await findOne(req.params.idOrSlug);
    if (!item) return res.status(404).json({ message: "Property not found" });
    cacheHeaders(res);
    res.json(await similarTo(item));
  } catch (err) {
    next(err);
  }
});

export default router;
