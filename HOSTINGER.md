# Déploiement sur Hostinger (Node.js)

Ce projet est construit avec **TanStack Start** (Vite + React 19).
Pour Hostinger Node.js, on génère un build statique préendu et on le sert avec un petit serveur Express (`server.js`) qui gère le fallback SPA.

---

## 1. Build local

```bash
bun install
bun run build:hostinger
```

Cela génère le site dans `dist/` (ou `dist/client/`) avec un `index.html` à la racine + tous les assets.

## 2. Fichiers à uploader sur Hostinger

Upload **tout le projet** (ou au minimum) :

```
dist/                ← le build
server.js            ← serveur Express
package.json
package-lock.json    (ou bun.lock)
node_modules/        ← OU lance `npm install --production` côté Hostinger
```

> Astuce : sur le panneau Hostinger, utilise le gestionnaire de fichiers ou Git pour pousser le repo, puis clique sur **Run NPM Install**.

## 3. Configuration dans hPanel Hostinger

Dans **Hosting → Avancé → Node.js** :

| Champ                 | Valeur                          |
| --------------------- | ------------------------------- |
| Node.js version       | 20.x (ou plus)                  |
| Application root      | `/` (la racine de ton projet)   |
| Application URL       | ton domaine                     |
| Application startup   | `server.js`                     |
| **Startup command**   | `node server.js`                |
| Mode                  | `production`                    |

Variables d'environnement (optionnel) :
- `PORT` — Hostinger l'injecte automatiquement, ne pas le forcer
- `NODE_ENV=production`

Puis clique sur **Run NPM Install** → **Restart**.

## 4. Pourquoi le 403 Forbidden ?

Le 403 sur Hostinger Node.js vient en général d'une de ces causes — toutes corrigées par ce setup :

1. **Pas de `index.html` à la racine du dossier servi** → `server.js` détecte automatiquement `dist/` ou `dist/client/`.
2. **Le serveur n'écoutait pas sur `process.env.PORT`** → corrigé (`PORT || 3000`).
3. **Le serveur écoutait sur `127.0.0.1`** au lieu de `0.0.0.0` → corrigé (`HOST = 0.0.0.0`).
4. **Permissions des fichiers** → vérifie côté Hostinger que `dist/` est en `755` et les fichiers en `644` (le gestionnaire de fichiers le fait par défaut).
5. **Routes React qui renvoient 404/403** au refresh → corrigé par le fallback SPA `app.get(/.*/, …)`.

---

## Fichiers créés / modifiés

- **`server.js`** (nouveau) — serveur Express avec compression, static, fallback SPA, port dynamique.
- **`vite.config.hostinger.ts`** (nouveau) — config Vite sans Cloudflare, avec prerender de toutes les routes.
- **`package.json`** — ajout des scripts `build:hostinger` et `start`.
- Dépendances ajoutées : `express`, `compression`, `@types/express`.

## Commande de démarrage Hostinger

```
node server.js
```

C'est tout. Le site doit s'ouvrir sur ton domaine sans 403.
