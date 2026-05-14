// Configuration Vite dédiée au déploiement Netlify statique.
// Netlify ne lance pas `server.js` comme un serveur Node permanent : il doit publier
// le dossier client généré par TanStack Start, avec un fallback SPA.
//
// Utilisation locale / CI :
//   bun run build:netlify
//
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Base URL configurable pour gérer les déploiements en sous-dossier.
// Par défaut "/" (racine de domaine, cas Netlify standard).
// Pour déployer dans un sous-dossier, définir BASE_URL="/mon-sous-dossier/" au build.
const BASE_URL = process.env.BASE_URL ?? "/";

export default defineConfig({
  base: BASE_URL,
  vite: {
    base: BASE_URL,
    experimental: {
      renderBuiltUrl(filename) {
        // Garantit des chemins absolus depuis la racine pour les assets,
        // ce qui évite les 404 lors du chargement depuis des routes profondes.
        return BASE_URL.endsWith("/")
          ? `${BASE_URL}${filename}`
          : `${BASE_URL}/${filename}`;
      },
    },
  },
  cloudflare: false,
  tanstackStart: {
    prerender: {
      enabled: true,
      crawlLinks: true,
      routes: ["/", "/about", "/services", "/realizations", "/contact", "/sitemap.xml"],
    },
    pages: [
      { path: "/" },
      { path: "/about" },
      { path: "/services" },
      { path: "/realizations" },
      { path: "/contact" },
    ],
  },
});
