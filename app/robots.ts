import { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      // Se tiver alguma página de admin ou login que não deve aparecer no Google:
      // disallow: '/admin/', 
    },
    sitemap: 'https://sejafluxo.com/sitemap.xml',
  }
}