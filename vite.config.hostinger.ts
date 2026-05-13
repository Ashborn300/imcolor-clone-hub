// Configuration Vite dédiée au déploiement Hostinger.
// - Désactive le plugin Cloudflare (le build Lovable par défaut cible Cloudflare Workers).
// - Active le prerender de TanStack Start pour générer du HTML statique pour chaque route.
// - Le résultat (dans `dist/`) peut être :
//     a) uploadé tel quel sur un hébergement Web Hostinger (statique / partagé), OU
//     b) servi par le petit serveur Node `hostinger-server.mjs` sur un plan Node.js.
//
// Utilisation :
//   bun run build:hostinger
//
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  // Désactive complètement l'intégration Cloudflare Workers pour ce build.
  cloudflare: false,
  tanstackStart: {
    // Prerender toutes les routes statiques + suit les <Link> internes.
    prerender: {
      enabled: true,
      crawlLinks: true,
      // Routes connues à pré-générer même si elles ne sont pas atteintes par crawl.
      routes: [
        "/",
        "/about",
        "/services",
        "/realizations",
        "/contact",
        "/sitemap.xml",
      ],
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
