import { Router } from "express";
import Property from "../models/Property.js";
import { requireAdmin } from "../middleware/auth.js";
import { getCloudinary } from "../cloudinary.js";
import { config } from "../config.js";
import { connectDb } from "../db.js";
import { cleanPayload, nextPropertyId, uniqueSlug } from "../utils.js";
import { invalidateCatalog } from "../catalog.js";

const router = Router();
router.use(requireAdmin);
// Only the property routes need MongoDB (uploads talk to Cloudinary directly).
router.use("/properties", async (req, res, next) => {
  try {
    await connectDb();
    next();
  } catch (err) {
    next(err);
  }
});

const validate = (data, { partial = false } = {}) => {
  const errors = [];
  if (!partial || "title" in data) {
    if (!String(data.title || "").trim()) errors.push("Title is required");
  }
  if ("promotedOrder" in data && !Number.isFinite(Number(data.promotedOrder)))
    errors.push("promotedOrder must be a number");
  if ("images" in data && !Array.isArray(data.images)) errors.push("images must be a list");
  if ("sections" in data && (typeof data.sections !== "object" || data.sections === null))
    errors.push("sections must be an object");
  return errors;
};

// Paginated list for the dashboard, including unpublished properties.
router.get("/properties", async (req, res, next) => {
  try {
    const limit = Math.min(Math.max(Number(req.query.limit) || 20, 1), 100);
    const filter = {};
    if (req.query.promoted === "true") filter.promoted = true;
    const q = String(req.query.q || "").trim();
    if (q) {
      const rx = new RegExp(q.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "i");
      filter.$or = [{ title: rx }, { location: rx }, { "developer.name": rx }, { propertyType: rx }];
    }
    const total = await Property.countDocuments(filter);
    const pages = Math.max(Math.ceil(total / limit), 1);
    const page = Math.min(Math.max(Number(req.query.page) || 1, 1), pages);
    const items = await Property.find(filter, {
      id: 1, title: 1, slug: 1, location: 1, city: 1, type: 1, propertyType: 1, published: 1, promoted: 1, promotedOrder: 1,
      images: { $slice: 1 }, "developer.name": 1,
    })
      .sort(req.query.promoted === "true" ? { promotedOrder: 1, id: 1 } : { id: -1 })
      .skip((page - 1) * limit)
      .limit(limit)
      .lean();
    res.json({ items, total, page, pages, limit });
  } catch (err) {
    next(err);
  }
});

router.get("/properties/:id", async (req, res, next) => {
  try {
    const item = await Property.findOne({ id: Number(req.params.id) }).select("-__v").lean();
    if (!item) return res.status(404).json({ message: "Property not found" });
    res.json(item);
  } catch (err) {
    next(err);
  }
});

router.post("/properties", async (req, res, next) => {
  try {
    const data = cleanPayload(req.body);
    const errors = validate(data);
    if (errors.length) return res.status(400).json({ message: errors.join(", "), errors });
    data.id = await nextPropertyId();
    data.slug = await uniqueSlug(data.slug || data.title);
    const created = await Property.create(data);
    invalidateCatalog();
    res.status(201).json(created.toObject());
  } catch (err) {
    next(err);
  }
});

router.put("/properties/:id", async (req, res, next) => {
  try {
    const id = Number(req.params.id);
    const data = cleanPayload(req.body);
    const errors = validate(data, { partial: true });
    if (errors.length) return res.status(400).json({ message: errors.join(", "), errors });
    if (data.slug || data.title) {
      const current = await Property.findOne({ id }).select("slug title").lean();
      if (!current) return res.status(404).json({ message: "Property not found" });
      data.slug = await uniqueSlug(data.slug || current.slug, id);
    }
    const updated = await Property.findOneAndUpdate({ id }, { $set: data }, { new: true, runValidators: true })
      .select("-__v")
      .lean();
    if (!updated) return res.status(404).json({ message: "Property not found" });
    invalidateCatalog();
    res.json(updated);
  } catch (err) {
    next(err);
  }
});

router.delete("/properties/:id", async (req, res, next) => {
  try {
    const removed = await Property.findOneAndDelete({ id: Number(req.params.id) }).lean();
    if (!removed) return res.status(404).json({ message: "Property not found" });
    invalidateCatalog();
    res.json({ message: "Deleted", id: removed.id });
  } catch (err) {
    next(err);
  }
});

// Signed upload params: the browser uploads straight to Cloudinary, so large
// brochures/photos never pass through the (size-limited) serverless function.
router.post("/upload-signature", (req, res, next) => {
  try {
    const cloudinary = getCloudinary();
    const slug = String(req.body?.folder || "misc").replace(/[^a-zA-Z0-9-_ ]/g, "").slice(0, 80) || "misc";
    const folder = `${config.folder}/${slug}`;
    const timestamp = Math.round(Date.now() / 1000);
    const signature = cloudinary.utils.api_sign_request({ timestamp, folder }, config.cloudinary.apiSecret);
    res.json({
      signature,
      timestamp,
      folder,
      apiKey: config.cloudinary.apiKey,
      cloudName: config.cloudinary.cloudName,
      uploadUrl: `https://api.cloudinary.com/v1_1/${config.cloudinary.cloudName}/auto/upload`,
    });
  } catch (err) {
    next(err);
  }
});

// Remove an image from Cloudinary when the admin deletes it in the form.
router.post("/delete-image", async (req, res, next) => {
  try {
    const url = String(req.body?.url || "");
    const match = url.match(/\/upload\/(?:v\d+\/)?(.+?)\.[a-z0-9]+$/i);
    if (!url.includes("res.cloudinary.com") || !match) {
      return res.status(400).json({ message: "Not a Cloudinary image URL" });
    }
    const result = await getCloudinary().uploader.destroy(match[1]);
    res.json({ result: result.result });
  } catch (err) {
    next(err);
  }
});

export default router;
