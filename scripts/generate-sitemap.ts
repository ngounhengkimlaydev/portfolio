import fs from 'fs'

const hostname = 'https://ngounhengkimlay-dev.vercel.app'

const routes = [
  '/',
]

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map(r => `
  <url>
    <loc>${hostname}${r}</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
`).join('')}
</urlset>`

fs.writeFileSync('public/sitemap.xml', sitemap)
console.log('Sitemap generated at public/sitemap.xml')
