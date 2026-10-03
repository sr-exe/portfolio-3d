# SR.EXE — Shubham Rathod's Portfolio

Brutalist + 3D portfolio of a Computer Science student and Java Full Stack developer in progress.
Stack: React 19 · Vite · Tailwind v4 · React Three Fiber / Three.js · Framer Motion · Lenis.

## Run / build
```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # outputs dist/
npm run lint
```

## Edit content (one file)
Everything on the site and everything the assistant knows lives in **`src/data/portfolio.js`**
(profile, education, stack, progress, learning, projects, certificates, socials).
If a fact is not in that file, the site and the assistant will not claim it.

## Add your resume
**Replace `public/resume.pdf` with your current resume.** (Create the file if it does not exist.)
The RESUME / DOWNLOAD / VIEW buttons switch on automatically; until then they show as "not uploaded".

## Certificates
`public/certificates/unisoft-cybersecurity-certificate.pdf` and
`public/certificates/msbte-state-project-competition-2025-participation.pdf` are PDFs made from photos of the
originals. To use a better scan, overwrite the file with the same name.

## Ask Shubham's Portfolio (assistant)
* **FAQ mode (default, no setup):** `src/lib/assistant.js` matches the question to an intent and answers only from `portfolio.js`.
* **LLM mode (optional):** `api/ask.js` (Vercel serverless function) sends the same data to the Anthropic API with a strict
  "answer only from the supplied data" system prompt. If it is missing, errors, or times out, the UI falls back to FAQ mode.

Environment variables (set in Vercel → Settings → Environment Variables, never in frontend code):

| Variable | Required | Purpose |
|---|---|---|
| `ANTHROPIC_API_KEY` | no | enables LLM mode |
| `ANTHROPIC_MODEL` | no | default `claude-haiku-4-5-20251001` |

## Deploy
* **Vercel (current live site):** import the repo; `base` is `/` and `/api/ask` works out of the box.
* **GitHub Pages:** the workflow sets `VITE_BASE=/portfolio-3d/`. LLM mode is unavailable there (FAQ mode still works).

## Performance notes
The 3D scene is a lazy-loaded chunk (~36 nodes, wireframes, no textures). It loads only on screens ≥ 820px, when WebGL exists and
`prefers-reduced-motion` is off, pauses when scrolled out of view, and is replaced by a CSS cube otherwise.
