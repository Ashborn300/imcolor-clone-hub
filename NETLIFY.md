# Déploiement sur Netlify

Ce projet est une app TanStack Start. Sur Netlify, il faut la publier en **site statique prérendu** : Netlify ne doit pas lancer `server.js`.

## Configuration Netlify

Le fichier `netlify.toml` configure automatiquement :

| Champ | Valeur |
| --- | --- |
| Build command | `npm run build:netlify` |
| Publish directory | `netlify-dist` |
| Node.js | `20` |

## Si tu configures Netlify à la main

Dans **Site configuration → Build & deploy** :

```bash
npm run build:netlify
```

Et mets le dossier de publication :

```bash
netlify-dist
```

## Pourquoi Netlify affichait “Not Found” ?

Netlify publiait probablement le mauvais dossier (`dist` ou la racine du projet) ou n'avait pas de fallback pour les routes React. Ici :

- `vite.config.netlify.ts` génère un build statique compatible Netlify.
- `scripts/prepare-netlify.mjs` copie automatiquement le bon build dans `netlify-dist`.
- `netlify.toml` force le dossier publié fiable : `netlify-dist`.
- `public/_redirects` et la règle `[[redirects]]` renvoient les routes `/about`, `/services`, `/contact`, etc. vers `index.html`.

Après push sur Netlify, relance un deploy propre avec ces réglages.
