import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const rootDir = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const outputDir = path.join(rootDir, "netlify-dist");

const candidates = [
  path.join(rootDir, "dist", "client"),
  path.join(rootDir, "dist"),
  path.join(rootDir, "build", "client"),
  path.join(rootDir, "build"),
];

const sourceDir = candidates.find((dir) => fs.existsSync(path.join(dir, "index.html")));

if (!sourceDir) {
  console.error("[netlify] index.html introuvable après le build.");
  console.error(`[netlify] Dossiers vérifiés : ${candidates.join(", ")}`);
  process.exit(1);
}

fs.rmSync(outputDir, { recursive: true, force: true });
fs.cpSync(sourceDir, outputDir, { recursive: true });

const redirectsPath = path.join(outputDir, "_redirects");
fs.writeFileSync(redirectsPath, "/* /index.html 200\n", "utf8");

console.log(`[netlify] Build prêt : ${sourceDir} → ${outputDir}`);
