import { client } from '@/lib/sanity'
import BlogList from './BlogList'

export const metadata = {
  title: 'Blog | Alexi',
  description: 'Personal blog sharing thoughts on technology, development, and life experiences',
  openGraph: {
    title: 'Blog | Alexi',
    description: 'Personal blog sharing thoughts on technology, development, and life experiences',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog | Alexi',
    description: 'Personal blog sharing thoughts on technology, development, and life experiences',
  },
}

async function getPosts() {
  const query = `*[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    publishedAt,
    mainImage,
    excerpt
  }`
  return client.fetch(query)
}

export default async function BlogPage() {
  const posts = await getPosts()
  return <BlogList posts={posts} />
} 