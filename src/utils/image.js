// Ask Cloudinary for a resized, auto-format/quality version of an image.
// Non-Cloudinary URLs (e.g. old local paths) are returned unchanged.
export const optimizeImage = (url, width = 600) => {
  if (typeof url !== "string" || !url.includes("res.cloudinary.com") || !url.includes("/upload/")) return url;
  if (/\/upload\/[^/]*(f_auto|w_\d+)/.test(url)) return url; // already transformed
  return url.replace("/upload/", `/upload/f_auto,q_auto,w_${width}/`);
};
