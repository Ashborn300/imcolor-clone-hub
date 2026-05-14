// Configuration Vite dédiée au déploiement Netlify statique.
// Netlify ne lance pas `server.js` comme un serveur Node permanent : il doit publier
// le dossier client généré par TanStack Start, avec un fallback SPA.
//
// Utilisation locale / CI :
//   bun run build:netlify
//
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
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
