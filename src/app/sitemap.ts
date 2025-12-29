import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.psicologovalmirofilho.com.br' // Substitua pelo seu domínio real

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    // Como o site é SPA (Single Page Application) com navegação por âncoras (#),
    // apenas a URL raiz é necessária para o sitemap.
    // Se houverem outras páginas reais no futuro (ex: /blog), adicione-as aqui.
  ]
}
