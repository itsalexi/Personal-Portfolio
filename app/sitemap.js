import { client } from '@/lib/sanity'

async function getPosts() {
  const query = `*[_type == "post"] {
    slug {
      current
    },
    publishedAt,
    _updatedAt
  }`
  return client.fetch(query)
}

export default async function sitemap() {
  const baseUrl = 'https://alexi.life'
  
  // Get all blog posts
  const posts = await getPosts()
  
  // Create blog post URLs
  const postUrls = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug.current}`,
    lastModified: post._updatedAt || post.publishedAt,
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  // Add static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
  ]

  return [...staticPages, ...postUrls]
} 