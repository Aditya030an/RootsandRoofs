import Property from "./models/Property.js";

export const slugify = (text) =>
  String(text || "")
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

export const nextPropertyId = async () => {
  const last = await Property.findOne().sort({ id: -1 }).select("id").lean();
  return (last?.id || 0) + 1;
};

// Make a slug unique by appending -2, -3, … (ignoring the document being edited).
export const uniqueSlug = async (base, ignoreId) => {
  const root = slugify(base) || "property";
  let slug = root;
  for (let n = 2; ; n++) {
    const clash = await Property.findOne({ slug }).select("id").lean();
    if (!clash || clash.id === ignoreId) return slug;
    slug = `${root}-${n}`;
  }
};

// Fields clients may never set directly.
const PROTECTED = ["_id", "__v", "createdAt", "updatedAt", "id"];

export const cleanPayload = (body) => {
  const data = { ...body };
  for (const key of PROTECTED) delete data[key];
  return data;
};
