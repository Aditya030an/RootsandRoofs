/**
 * Builds the frontend for Hostinger and zips it, refusing to produce a build
 * that would not work in production.
 *
 * The API address is baked into the JavaScript at build time, so a build made
 * with a wrong value looks fine and then fails for every visitor. This script
 * stops that before upload.
 *
 *   VITE_API_URL=https://your-api.vercel.app npm run build:hostinger
 *
 * (or put it in .env.production). Output: rr-hostinger.zip — upload its
 * CONTENTS to public_html.
 */
import { spawnSync } from "node:child_process";
import { existsSync, readFileSync, readdirSync, statSync, rmSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("..", import.meta.url));

const fromFile = (file) => {
  const path = join(root, file);
  if (!existsSync(path)) return {};
  const out = {};
  for (const line of readFileSync(path, "utf8").split("\n")) {
    const match = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*?)\s*$/);
    if (match) out[match[1]] = match[2].replace(/^['"]|['"]$/g, "");
  }
  return out;
};

// Shell value wins, then .env.production. Plain .env is deliberately ignored.
const prod = fromFile(".env.production");
const api = (process.env.VITE_API_URL ?? prod.VITE_API_URL ?? "").replace(/\/+$/, "");

const fail = (message) => {
  console.error(`\nBuild stopped: ${message}\n`);
  process.exit(1);
};

if (!api) fail("VITE_API_URL is not set (your deployed backend, e.g. https://your-api.vercel.app).");
if (!/^https:\/\//i.test(api)) fail(`VITE_API_URL must start with https:// (got "${api}").`);
if (/localhost|127\.0\.0\.1|\[::1\]/i.test(api)) fail(`VITE_API_URL points at this computer ("${api}").`);

console.log(`API: ${api}\n`);
rmSync(join(root, "dist"), { recursive: true, force: true });

const build = spawnSync("npx", ["vite", "build"], {
  cwd: root,
  stdio: "inherit",
  env: { ...process.env, VITE_API_URL: api },
});
if (build.status !== 0) fail("vite build failed.");

const dist = join(root, "dist");

// Property images are served from Cloudinary; drop the bulky local copies Vite
// copied from public/ (keep only the folder the home page still imports).
const propertyDir = join(dist, "propertyList");
if (existsSync(propertyDir)) {
  for (const entry of readdirSync(propertyDir)) {
    if (entry !== "madhuban") rmSync(join(propertyDir, entry), { recursive: true, force: true });
  }
}
rmSync(join(dist, "propertyList_old"), { recursive: true, force: true });

if (!existsSync(join(dist, "index.html"))) fail("dist/index.html is missing.");
if (!existsSync(join(dist, ".htaccess"))) fail("dist/.htaccess is missing — page refreshes would 404 on Hostinger.");

const walk = (dir) =>
  readdirSync(dir).flatMap((name) => {
    const path = join(dir, name);
    return statSync(path).isDirectory() ? walk(path) : [path];
  });
const bundled = walk(join(dist, "assets"))
  .filter((file) => file.endsWith(".js"))
  .map((file) => readFileSync(file, "utf8"))
  .join("\n");
if (!bundled.includes(api)) fail("the API address did not make it into the build.");
if (/localhost:5000/.test(bundled)) fail("the build still contains a localhost API address.");

const zipName = "rr-hostinger.zip";
rmSync(join(root, zipName), { force: true });
// Zip the folder's contents (not the folder itself); "." also picks up .htaccess.
const zip = spawnSync("zip", ["-r", "-q", join(root, zipName), "."], { cwd: dist, stdio: "inherit" });
if (zip.status !== 0) fail("could not create the zip (is the `zip` command installed?).");

const mb = (statSync(join(root, zipName)).size / 1024 / 1024).toFixed(1);
console.log(`\nDone: ${zipName} (${mb} MB). Upload its contents to public_html.`);
