// After `vite build`, drop the bulky local property images that Vite copied
// from public/ — they're served from Cloudinary now. Keeps only the one folder
// the home page still imports, so dist/ is small enough to upload to hosting.
import fs from "node:fs";
import path from "node:path";

const dist = path.resolve("dist");
const keep = new Set(["madhuban"]);
const propertyDir = path.join(dist, "propertyList");

if (fs.existsSync(propertyDir)) {
  for (const entry of fs.readdirSync(propertyDir)) {
    if (!keep.has(entry)) fs.rmSync(path.join(propertyDir, entry), { recursive: true, force: true });
  }
}
fs.rmSync(path.join(dist, "propertyList_old"), { recursive: true, force: true });
console.log("dist pruned");
