// server.js — Serveur Node.js pour déploiement Hostinger
//
// - Sert les fichiers statiques générés par `bun run build:hostinger` (dossier `dist/`)
// - SPA fallback : toutes les routes inconnues renvoient vers `index.html`
// - Écoute sur process.env.PORT (fourni par Hostinger) ou 3000 en local
// - Compression gzip activée
// - Aucun blocage des fichiers statiques (pas d'auth, pas de restriction IP)
//
// Démarrage : `node server.js`  (commande à mettre dans Hostinger : `node server.js`)

import express from "express";
import compression from "compression";
import path from "node:path";
import fs from "node:fs";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const app = express();
const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || "0.0.0.0";

// Détecte le dossier de build : TanStack Start peut produire `dist/` ou `dist/client/`.
const candidates = [
  path.join(__dirname, "dist", "client"),
  path.join(__dirname, "dist"),
  path.join(__dirname, "build"),
];
const distDir =
  candidates.find((p) => fs.existsSync(path.join(p, "index.html"))) || candidates[0];

const indexHtml = path.join(distDir, "index.html");

if (!fs.existsSync(indexHtml)) {
  console.error(
    `[server] index.html introuvable dans ${distDir}. Lancez d'abord : bun run build:hostinger`,
  );
}

app.disable("x-powered-by");
app.use(compression());

// Sert les assets statiques en lecture publique (corrige les 403 dus aux permissions).
app.use(
  express.static(distDir, {
    index: "index.html",
    extensions: ["html"],
    maxAge: "1h",
    setHeaders: (res, filePath) => {
      // Cache long pour les assets versionnés (avec hash dans le nom).
      if (/\.[0-9a-f]{8,}\.(js|css|woff2?|png|jpe?g|svg|webp|avif|ico)$/i.test(filePath)) {
        res.setHeader("Cache-Control", "public, max-age=31536000, immutable");
      }
    },
  }),
);

// SPA fallback — toutes les routes non statiques renvoient index.html.
// Express 5 utilise des regex pour les wildcards : /.*/ couvre tout sauf les fichiers déjà servis ci-dessus.
app.get(/.*/, (req, res, next) => {
  if (req.method !== "GET") return next();
  res.sendFile(indexHtml, (err) => {
    if (err) next(err);
  });
});

app.listen(PORT, HOST, () => {
  console.log(`[server] Site servi depuis ${distDir}`);
  console.log(`[server] En écoute sur http://${HOST}:${PORT}`);
});
