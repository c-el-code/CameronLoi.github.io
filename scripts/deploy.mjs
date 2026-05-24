import { cpSync, mkdirSync, readdirSync, rmSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const docs = path.join(root, "docs");
function copyDir(src, dest) {
  mkdirSync(dest, { recursive: true });
  cpSync(src, dest, { recursive: true });
}

if (!readdirSync(docs).includes("index.html")) {
  throw new Error("No docs/index.html found. Run npm run build first.");
}

rmSync(path.join(root, "assets"), { recursive: true, force: true });
rmSync(path.join(root, "logos"), { recursive: true, force: true });

cpSync(path.join(docs, "index.html"), path.join(root, "index.html"));
copyDir(path.join(docs, "assets"), path.join(root, "assets"));

if (readdirSync(docs).includes("logos")) {
  copyDir(path.join(docs, "logos"), path.join(root, "logos"));
}

console.log("Deployed docs/ to repo root (index.html, assets/, logos/).");
