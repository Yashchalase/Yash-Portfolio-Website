import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import resumeData from './src/data/resumeData.js'

const DEFAULT_SITE_URL = 'https://yash-portfolio-website-mu.vercel.app'

function structuredData(siteUrl) {
  const { personal, skills, education } = resumeData
  const person = {
    '@type': 'Person',
    '@id': `${siteUrl}/#person`,
    name: personal.name,
    givenName: 'Yash',
    familyName: 'Chalase',
    url: `${siteUrl}/`,
    image: `${siteUrl}/yash-chalase.jpg`,
    jobTitle: personal.title,
    description: personal.summary,
    email: `mailto:${personal.email}`,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Mumbai',
      addressRegion: 'Maharashtra',
      addressCountry: 'IN',
    },
    alumniOf: education.map((e) => ({ '@type': 'EducationalOrganization', name: e.institution })),
    knowsAbout: skills.flatMap((group) => group.items.map((item) => item.name)),
    sameAs: [personal.github, personal.linkedin],
  }
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${siteUrl}/#website`,
        url: `${siteUrl}/`,
        name: personal.name,
        inLanguage: 'en-IN',
        publisher: { '@id': `${siteUrl}/#person` },
      },
      {
        '@type': 'ProfilePage',
        '@id': `${siteUrl}/#profile`,
        url: `${siteUrl}/`,
        name: `${personal.name} — ${personal.headline}`,
        isPartOf: { '@id': `${siteUrl}/#website` },
        mainEntity: { '@id': `${siteUrl}/#person` },
        dateModified: new Date().toISOString(),
      },
      person,
    ],
  }
}

// Fills the absolute-URL SEO tags in index.html and emits sitemap.xml + robots.txt.
function seo(siteUrl) {
  return {
    name: 'portfolio-seo',
    transformIndexHtml(html) {
      const json = JSON.stringify(structuredData(siteUrl)).replace(/</g, '\\u003c')
      return html
        .replaceAll('__SITE_URL__', siteUrl)
        .replace('<!--structured-data-->', `<script type="application/ld+json">${json}</script>`)
    },
    generateBundle() {
      if (this.environment?.config.build.ssr) return
      const today = new Date().toISOString().slice(0, 10)
      this.emitFile({
        type: 'asset',
        fileName: 'sitemap.xml',
        source: `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${siteUrl}/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
`,
      })
      this.emitFile({
        type: 'asset',
        fileName: 'robots.txt',
        source: `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`,
      })
    },
  }
}

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const siteUrl = (env.VITE_SITE_URL || DEFAULT_SITE_URL).replace(/\/+$/, '')
  return {
    plugins: [react(), seo(siteUrl)],
  }
})
