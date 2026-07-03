# Yash Chalase — Portfolio

Personal portfolio website showcasing projects, experience, and skills as a Software Developer.

## Tech Stack

- React 19 + Vite
- Framer Motion
- Custom CSS (responsive, dark theme)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Contact Form (Optional)

By default, the contact form opens your email client via `mailto:`. For direct form submissions, sign up at [Web3Forms](https://web3forms.com/) and add your access key:

```bash
# .env
VITE_WEB3FORMS_ACCESS_KEY=your_access_key_here
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

## Project Structure

```
src/
  components/   # Navbar, ScrollProgress, BackToTop, etc.
  sections/     # Hero, About, Experience, Projects, ...
  data/         # resumeData.js — single source of content
public/         # Images, favicon, OG image, project previews
```

## Customization

Edit `src/data/resumeData.js` to update all portfolio content. Replace SVG previews in `public/projects/` with real screenshots when available.

## Deploy

Build and deploy the `dist` folder to Vercel, Netlify, or GitHub Pages:

```bash
npm run build
```
