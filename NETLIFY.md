# Déploiement sur Netlify

Ce projet est une app TanStack Start. Sur Netlify, il faut la publier en **site statique prérendu** : Netlify ne doit pas lancer `server.js`.

## Configuration Netlify

Le fichier `netlify.toml` configure automatiquement :

| Champ | Valeur |
| --- | --- |
| Build command | `npm run build:netlify` |
| Publish directory | `dist/client` |
| Node.js | `20` |

## Si tu configures Netlify à la main

Dans **Site configuration → Build & deploy** :

```bash
npm run build:netlify
```

Et mets le dossier de publication :

```bash
dist/client
```

## Pourquoi Netlify affichait “Not Found” ?

Netlify publiait probablement le mauvais dossier (`dist` ou la racine du projet) ou n'avait pas de fallback pour les routes React. Ici :

- `vite.config.netlify.ts` génère un build statique compatible Netlify.
- `netlify.toml` force le bon dossier publié : `dist/client`.
- `public/_redirects` et la règle `[[redirects]]` renvoient les routes `/about`, `/services`, `/contact`, etc. vers `index.html`.

Après push sur Netlify, relance un deploy propre avec ces réglages.
