<div align="center">

# `<SR.EXE>` — Shubham Rathod

**Computer Science Student · Java Full Stack Developer in progress**

Brutalist, 3D, honest portfolio. Real projects, real learning, no inflated claims.

[**Live site**](https://shubham-rathod-144.vercel.app/) · [GitHub](https://github.com/sr-exe) · [LinkedIn](https://www.linkedin.com/in/shubham-rathod-/) · [Email](mailto:shubhamrathod4040@gmail.com)

</div>

---

## Why this portfolio is different

I'm a student, not a senior engineer, so the site doesn't pretend otherwise.

- Skills are grouped as **Current Focus / Building Toward / Exploring / Tools** instead of one giant "expert" list.
- Progress bars are labelled **self-assessed**. They show progression, not mastery.
- Every project links to a real repository. A Live Demo button appears only when a real demo exists.
- Certificates are the actual documents. The competition certificate is shown as what it is: a *participation* certificate.
- The AI assistant answers **only** from the data in this repo and says so when it doesn't know.

## Sections

| # | Section | What it shows |
|---|---------|---------------|
| — | Hero | Name, role, typing terminal, interactive 3D "developer system" |
| 01 | Work | 6 selected projects: problem, solution, stack, my part, source/demo |
| 02 | About | Short, honest intro |
| 03 | Stack | Focus, building toward, exploring, tools |
| 04 | Journey | Java/DSA progress, topics covered, education timeline |
| 05 | Certs | Unisoft cyber security internship, MSBTE State Level Project Competition 2025 |
| 06 | Resume | View / download (activates when `public/resume.pdf` exists) |
| 07 | Ask | "Ask Shubham's Portfolio" assistant |
| 08 | Contact | Email, GitHub, LinkedIn |

## Tech stack

React 19 · Vite · Tailwind CSS v4 · React Three Fiber / Three.js · Framer Motion · Lenis · Vercel serverless function (optional LLM mode)

## Design and performance notes

- **Brutalism:** oversized type, 2px borders, hard shadows, grid overlay, monospace labels, one orange accent.
- **Themes:** separately designed dark and light modes, persisted, respects `prefers-color-scheme`.
- **3D scene:** wireframe geometry only (about 36 nodes, no textures). It is a lazy-loaded chunk that loads only on screens of 820px or wider, with WebGL available and no `prefers-reduced-motion`. It pauses when off-screen. Everywhere else a lightweight CSS cube is used.
- **Accessibility:** semantic landmarks, skip link, visible focus states, keyboard-operable theme switch and nav, `aria-live` chat log, reduced-motion support.
- **SEO:** title, description, Open Graph, canonical URL, favicon.

## Ask Shubham's Portfolio

| Mode | How it works | Setup |
|------|--------------|-------|
| **FAQ mode** (default) | `src/lib/assistant.js` matches the question to an intent and answers from `src/data/portfolio.js` | none |
| **LLM mode** (optional) | `api/ask.js` sends the same data to the Anthropic API with a strict "answer only from supplied data" prompt | set `ANTHROPIC_API_KEY` |

If the key is missing, the request fails or it times out, the UI falls back to FAQ mode automatically. The API key is only ever read server-side.

## Getting started

```bash
git clone https://github.com/sr-exe/portfolio-3d.git
cd portfolio-3d
npm install
npm run dev        # http://localhost:5173
```

```bash
npm run build      # production build → dist/
npm run preview    # serve the build locally
npm run lint
```

To test LLM mode locally, run the project with the [Vercel CLI](https://vercel.com/docs/cli) (`vercel dev`) so `/api/ask` is served.

### Environment variables (all optional)

Copy `.env.example` and set these in **Vercel → Project → Settings → Environment Variables**:

| Variable | Purpose |
|----------|---------|
| `ANTHROPIC_API_KEY` | Enables LLM mode |
| `ANTHROPIC_MODEL` | Model override (default `claude-haiku-4-5-20251001`) |

## Customising

All content lives in one file: **`src/data/portfolio.js`** (profile, education, stack, progress, learning, projects, certificates, socials). Edit it and both the site and the assistant update.

**Resume:** replace `public/resume.pdf` with your current resume. The Download/View buttons activate automatically.

**Certificates:** replace the PDFs in `public/certificates/` (keep the file names) or edit the paths in `portfolio.js`.

## Project structure

```
api/ask.js                  Optional LLM endpoint (Vercel serverless)
public/
  resume.pdf                ← your resume goes here
  certificates/             ← certificate PDFs
src/
  data/portfolio.js         Single source of truth
  lib/assistant.js          Offline FAQ engine
  sections/                 Hero, Work, About, Stack, Journey, Certificates, Resume, AskAI, Contact
  components/               Navbar, ThemeToggle, Scene3D, Cursor, Magnetic, Reveal, ...
  hooks/                    useTheme, useLenis, useReducedMotion, useFileExists
  styles/globals.css        Design tokens + styles
```

## Deployment

- **Vercel (recommended, current live site):** import the repo. Base path is `/` and `/api/ask` works out of the box.
- **GitHub Pages:** the included workflow builds with `VITE_BASE=/portfolio-3d/`. FAQ mode works; LLM mode needs a serverless host.

## Contact

- Email: [shubhamrathod4040@gmail.com](mailto:shubhamrathod4040@gmail.com)
- GitHub: [@sr-exe](https://github.com/sr-exe)
- LinkedIn: [shubham-rathod-](https://www.linkedin.com/in/shubham-rathod-/)

---

<sub>© Shubham Rathod. Design and code are my own; the reference sites only informed the ambition level.</sub>
