# Yash Chalase — Portfolio

Personal portfolio of Yash Chalase, a Full Stack Developer (React.js, Next.js, TypeScript, Node.js).

Live: https://yash-portfolio-website-mu.vercel.app

## Tech Stack

- React 19 + Vite, prerendered to static HTML at build time
- Framer Motion (lazy-loaded features) for interactive motion
- Hand-written CSS — monochrome editorial design system with light/dark themes

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Updating content

All copy lives in `src/data/resumeData.js` and mirrors the resume at `public/Yash_Chalase_Resume.pdf`. When the resume changes, replace the PDF and update the data file — the page, structured data (JSON-LD) and SEO tags are generated from it.

Project screenshots are WebP files in `public/projects/` (crop out browser chrome; ~1600px wide).

## SEO

`npm run build` does three things:

1. `vite build` — client bundle. A small plugin in `vite.config.js` fills canonical / Open Graph URLs, injects Person + ProfilePage JSON-LD, and emits `sitemap.xml` and `robots.txt`.
2. `vite build --ssr` — server bundle of the app.
3. `scripts/prerender.js` — renders the app into `dist/index.html`, so crawlers get full content without running JavaScript.

The site URL defaults to the Vercel domain; set `VITE_SITE_URL` if you move to a custom domain.

## Environment variables (optional)

```bash
# .env
VITE_WEB3FORMS_ACCESS_KEY=your_access_key_here   # contact form; falls back to mailto: without it
VITE_SITE_URL=https://your-domain.com            # canonical + sitemap URL
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Production build + prerender |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

## Project Structure

```
src/
  components/   # Navbar, ThemeToggle, BrowserFrame, SectionHeading, ...
  sections/     # Hero, About, Experience, Projects, Skills, Education, Resume, Contact, Footer
  data/         # resumeData.js — single source of content
  hooks/        # useReveal — CSS-driven scroll reveals
scripts/        # prerender.js
public/         # Portrait, project screenshots, resume PDF, OG image, favicon
```

## Deploy

Pushing to `main` deploys on Vercel (`vercel.json` adds long-term caching for hashed assets).
