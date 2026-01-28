import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  // Substitua pela URL real do seu deploy se mudar
  const baseUrl = 'https://sejafluxo.com' 

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
    url: `${baseUrl}/quote`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
    },
  ]
}