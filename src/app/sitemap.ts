import { MetadataRoute } from 'next';
import { getPublishedArticles } from '@/lib/actions/articles';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://www.pusdiklatisalam.web.id';

  let articleEntries: MetadataRoute.Sitemap = [];
  
  try {
    const articles = await getPublishedArticles();
    articleEntries = articles.map((article) => ({
      url: `${baseUrl}/artikel/${article.slug}`,
      lastModified: new Date(article.updatedAt || article.createdAt),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }));
  } catch (error) {
    console.error("Sitemap generation error (articles):", error);
  }

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/artikel`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
  ];

  return [...staticPages, ...articleEntries];
}
