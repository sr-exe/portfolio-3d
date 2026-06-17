# Shubham Rathod — 3D Portfolio

A premium, futuristic personal portfolio built with React, Vite, Tailwind CSS, and React Three
Fiber. Visual direction: **3D brutalism** — raw bordered blocks, hard offset shadows, and
monospace HUD labels, layered over a glowing glassmorphic dark/light theme and an interactive
3D scene built around BIOMARK's face-verification and QR features.

---

## 1. Run it locally

```bash
npm install
npm run dev
```

Open the printed local URL (usually http://localhost:5173).

## 2. Push it to GitHub

If you haven't already, create an empty repository on GitHub first (do **not** add a README,
license, or .gitignore there — this project already has them). Name it `portfolio-3d`, or
whatever you prefer — just remember the name for step 3.

From inside the project folder:

```bash
git init
git add .
git commit -m "Initial commit — 3D portfolio"
git branch -M main
git remote add origin https://github.com/sr-exe/portfolio-3d.git
git push -u origin main
```

Replace the remote URL with your repo's actual URL (GitHub shows it on the new repo's page).
If you use SSH instead of HTTPS, use the `git@github.com:sr-exe/portfolio-3d.git` form.

## 3. Get a live link (GitHub Pages, auto-deploy)

This repo already includes a GitHub Actions workflow at `.github/workflows/deploy.yml` that
builds and publishes the site automatically every time you push to `main`. You only need to
flip one switch:

1. On GitHub, go to your repo → **Settings → Pages**.
2. Under "Build and deployment", set **Source** to **GitHub Actions**.
3. Push to `main` (or re-run the workflow from the **Actions** tab).
4. After the workflow finishes (~1 minute), your live link will be:

   ```
   https://sr-exe.github.io/portfolio-3d/
   ```

   It also appears under **Settings → Pages** once the first deploy succeeds.

### If your repo name is different

`vite.config.js` has this line:

```js
base: '/portfolio-3d/',
```

Change `/portfolio-3d/` to match your actual repo name (e.g. `/my-repo/`). Two exceptions:

- If you deploy this as your **user page** repo, named exactly `sr-exe.github.io`, set
  `base: '/'` instead — user pages are served from the domain root.
- If you later attach a **custom domain**, also set `base: '/'`.

### Manual alternative (no GitHub Actions)

If you'd rather deploy by hand instead of using the included workflow:

```bash
npm install -D gh-pages
npm run build
npx gh-pages -d dist
```

Then in repo **Settings → Pages**, set Source to "Deploy from a branch" → `gh-pages` → `/(root)`.

## 4. Images

Real images are already included and bundled by Vite (so they ship with the build automatically
— no separate upload step needed):

- `src/assets/profile-avatar.jpg` — your avatar, used in the About section.
- `src/assets/biomark-icon.png` — the BIOMARK app icon, used on the BIOMARK project card.
- `public/favicon.svg` — browser tab icon.

To swap any of them, just replace the file at the same path and keep the same filename (or update
the `import` line that references it in `src/sections/About.jsx` / `src/utils/data.js`).

## 5. Editing content

All text content — bio, stats, skills, projects, achievements, contact links — lives in one file:
`src/utils/data.js`. Edit that file and everything on the site updates; no need to touch any
component.

## Folder structure

```
.github/workflows/deploy.yml   # auto-deploy to GitHub Pages on push to main
src/
 ├── assets/        # profile-avatar.jpg, biomark-icon.png
 ├── components/    # Cursor, Loader, Navbar, ThemeToggle, MagneticButton, GlassCard, Reveal, Scene3D, Footer
 ├── sections/       # Hero, About, Skills, Projects, Achievements, Contact
 ├── hooks/          # useTheme, useLenis, useMagnetic
 ├── utils/          # data.js — all editable content
 ├── styles/         # globals.css — design tokens + Tailwind import
 └── pages/          # Home.jsx — composes all sections
public/favicon.svg
vite.config.js        # base path lives here — see step 3
```

## What's inside

- **3D scene** (`src/components/Scene3D.jsx`) — a floating ID-badge object referencing BIOMARK's
  face-verification and QR features, surrounded by glowing geometric shapes, particles, and
  wireframe rings. Reacts to mouse position for parallax.
- **Light / dark mode** — toggle in the navbar, persisted to `localStorage`, driven entirely by
  CSS variables in `src/styles/globals.css`.
- **Smooth scroll** — via `lenis` (`src/hooks/useLenis.js`).
- **Scroll reveals & magnetic buttons** — via `framer-motion`.
- **Custom cursor** — disabled automatically on touch devices, and respects
  `prefers-reduced-motion`.
