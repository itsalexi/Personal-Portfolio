import { client } from '@/lib/sanity'
import { urlFor } from '@/lib/sanity'
import BlogPostContent from './BlogPostContent'
import { Metadata } from 'next'

// Add revalidate option
export const revalidate = 60 // revalidate every 60 seconds

async function getPost(slug) {
  const query = `*[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    publishedAt,
    mainImage,
    excerpt,
    body
  }`
  return client.fetch(query, { slug })
}

export async function generateStaticParams() {
  const query = `*[_type == "post"] {
    slug {
      current
    }
  }`
  const posts = await client.fetch(query)
  return posts.map((post) => ({
    slug: post.slug.current,
  }))
}

export async function generateMetadata({ params }) {
  const post = await getPost(params.slug)
  
  if (!post) {
    return {
      title: 'Post Not Found',
      description: 'The requested blog post could not be found.'
    }
  }

  const imageUrl = post.mainImage ? urlFor(post.mainImage).url() : null

  return {
    title: `${post.title} | Alexi`,
    description: post.excerpt || 'A personal blog post sharing thoughts and experiences',
    openGraph: {
      title: post.title,
      description: post.excerpt || 'A personal blog post sharing thoughts and experiences',
      type: 'article',
      publishedTime: post.publishedAt,
      authors: ['Alexi'],
      images: imageUrl ? [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: post.title,
        }
      ] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt || 'A personal blog post sharing thoughts and experiences',
      images: imageUrl ? [imageUrl] : [],
    },
  }
}

export default async function BlogPost({ params }) {
  const post = await getPost(params.slug)

  if (!post) {
    return (
      <div className="container mx-auto px-4 py-16 max-w-3xl text-center">
        <h1 className="text-4xl font-bold text-white mb-4">Post Not Found</h1>
        <p className="text-zinc-400 mb-8">The blog post you're looking for doesn't exist.</p>
        <a
          href="/blog"
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Back to Blog
        </a>
      </div>
    )
  }

  return <BlogPostContent post={post} />
} 