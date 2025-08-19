# Instructions Site (GitHub Pages Ready)

A tiny static site for quick guides. No build tools, no frameworks — just HTML/CSS/JS.

## Structure
```
/
├─ index.html
├─ assets/
│  ├─ styles.css
│  └─ script.js
└─ .nojekyll
```

## Features
- RU/EN language toggle
- Search in guide titles/tags
- Clean layout, collapsible steps
- Deep link to a guide (`#/guide/<id>?lang=ru`)
- Print/Save to PDF
- Copy all steps / copy per step

## Add or edit guides
Open `assets/script.js` and modify the `GUIDES` array. Each guide has:
- `id`: URL id (unique)
- `tags`: array of keywords
- `title`: `{ ru, en }`
- `steps`: list of `{ title: {ru,en}, body: {ru,en} }`

## Publish on GitHub Pages
1. Create a new public repository (e.g., `instructions`).
2. Upload files from this folder (or push via git).
3. In repository settings → **Pages** → Source: `main` / root. Save.
4. Your site will be available at `https://<username>.github.io/<repo>/`

## Local preview
Just open `index.html` in your browser.
