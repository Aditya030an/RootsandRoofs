// One-time migration: copies every property in src/utils/propertyList.js into
// MongoDB and (with --upload-images) moves each local image/PDF to Cloudinary,
// rewriting the paths to Cloudinary URLs.
//
//   node server/scripts/seed.js                   # data only, keeps /propertyList/... paths
//   node server/scripts/seed.js --upload-images   # also upload files to Cloudinary
//   node server/scripts/seed.js --dry-run         # report only, writes nothing
//
// Safe to re-run: properties are upserted by id and finished uploads are
// remembered in server/scripts/.upload-cache.json.
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { execFileSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import mongoose from "mongoose";
import { connectDb } from "../db.js";
import { config } from "../config.js";
import { getCloudinary } from "../cloudinary.js";
import Property from "../models/Property.js";
import propertyList from "../../src/utils/propertyList.js";

const here = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.resolve(here, "../../public");
const cachePath = path.join(here, ".upload-cache.json");
const args = new Set(process.argv.slice(2));
const uploadImages = args.has("--upload-images");
const dryRun = args.has("--dry-run");

const cache = fs.existsSync(cachePath) ? JSON.parse(fs.readFileSync(cachePath, "utf8")) : {};
const saveCache = () => fs.writeFileSync(cachePath, JSON.stringify(cache, null, 2));

const isLocalAsset = (v) =>
  typeof v === "string" && v.startsWith("/") && /\.(jpe?g|png|webp|gif|svg|pdf)$/i.test(v);

const collectAssets = (node, out = new Set()) => {
  if (typeof node === "string") {
    if (isLocalAsset(node)) out.add(node);
  } else if (Array.isArray(node)) node.forEach((n) => collectAssets(n, out));
  else if (node && typeof node === "object") Object.values(node).forEach((n) => collectAssets(n, out));
  return out;
};

const rewrite = (node) => {
  if (typeof node === "string") return cache[node] || node;
  if (Array.isArray(node)) return node.map(rewrite);
  if (node && typeof node === "object")
    return Object.fromEntries(Object.entries(node).map(([k, v]) => [k, rewrite(v)]));
  return node;
};

const uploadOne = async (assetPath) => {
  if (cache[assetPath]) return;
  const file = path.join(publicDir, decodeURI(assetPath));
  if (!fs.existsSync(file)) {
    console.warn(`  missing file, left as-is: ${assetPath}`);
    return;
  }
  // Cloudinary's free plan rejects files over 10 MB: shrink big images first (macOS sips).
  let source = file;
  if (fs.statSync(file).size > 9.5 * 1024 * 1024 && /\.(png|jpe?g)$/i.test(file)) {
    source = path.join(os.tmpdir(), `seed-${Date.now()}-${path.basename(file)}`);
    execFileSync("sips", ["-Z", "2000", file, "--out", source], { stdio: "ignore" });
  }
  const dir = path.dirname(assetPath).replace(/^\/propertyList\/?/, "").replace(/^\//, "");
  const res = await getCloudinary().uploader.upload(source, {
    folder: [config.folder, dir].filter(Boolean).join("/"),
    use_filename: true,
    unique_filename: false,
    overwrite: false,
    resource_type: "auto",
  });
  cache[assetPath] = res.secure_url;
  if (source !== file) fs.rmSync(source, { force: true });
};

const runPool = async (items, size, worker) => {
  let i = 0;
  let done = 0;
  await Promise.all(
    Array.from({ length: size }, async () => {
      while (i < items.length) {
        const item = items[i++];
        try {
          await worker(item);
        } catch (err) {
          console.error(`  upload failed: ${item} — ${err.message}`);
        }
        if (++done % 25 === 0) {
          saveCache();
          console.log(`  uploaded ${done}/${items.length}`);
        }
      }
    }),
  );
  saveCache();
};

const main = async () => {
  console.log(`${propertyList.length} properties in propertyList.js`);
  const assets = [...collectAssets(propertyList)];
  console.log(`${assets.length} local image/PDF paths referenced`);

  if (dryRun) return;
  await connectDb();

  if (uploadImages) {
    const todo = assets.filter((a) => !cache[a]);
    console.log(`Uploading ${todo.length} files to Cloudinary (${assets.length - todo.length} already done)…`);
    await runPool(todo, 4, uploadOne);
  }

  const ops = propertyList.map((p) => {
    const doc = rewrite(JSON.parse(JSON.stringify(p)));
    return {
      updateOne: { filter: { id: doc.id }, update: { $set: { ...doc, published: true } }, upsert: true },
    };
  });
  const result = await Property.bulkWrite(ops);
  console.log(`Done. upserted ${result.upsertedCount}, updated ${result.modifiedCount}.`);
};

main()
  .catch((err) => {
    console.error(err);
    process.exitCode = 1;
  })
  .finally(() => mongoose.disconnect());
