import { client } from '@/lib/sanity'
import { urlFor } from '@/lib/sanity'
import BlogPostContent from './BlogPostContent'
import { Metadata } from 'next'
import Link from 'next/link'
import Script from 'next/script'

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
    body,
    categories[]->{
      title
    },
    author->{
      name,
      image
    },
    _updatedAt
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
  const resolvedParams = await params
  const post = await getPost(resolvedParams.slug)
  
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
  const resolvedParams = await params
  const post = await getPost(resolvedParams.slug)

  if (!post) {
    return (
      <div className="container mx-auto px-4 py-16 max-w-3xl text-center">
        <h1 className="text-4xl font-bold text-white mb-4">Post Not Found</h1>
        <p className="text-zinc-400 mb-8">The blog post you are looking for does not exist.</p>
        <Link
          href="/blog"
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Back to Blog
        </Link>
      </div>
    )
  }

  const imageUrl = post.mainImage ? urlFor(post.mainImage).url() : null
  const postUrl = `https://alexi.life/blog/${post.slug.current}`

  return (
    <>
      <Script
        id="blog-post-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id': postUrl
            },
            headline: post.title,
            description: post.excerpt,
            image: imageUrl ? {
              '@type': 'ImageObject',
              url: imageUrl,
              width: 1200,
              height: 630
            } : undefined,
            datePublished: post.publishedAt,
            dateModified: post._updatedAt || post.publishedAt,
            author: {
              '@type': 'Person',
              name: post.author?.name || 'Alexi Canamo',
              url: 'https://alexi.life',
              image: post.author?.image ? urlFor(post.author.image).url() : undefined
            },
            publisher: {
              '@type': 'Organization',
              name: 'Alexi Canamo',
              url: 'https://alexi.life',
              logo: {
                '@type': 'ImageObject',
                url: 'https://alexi.life/images/seo/profile.jpg',
                width: 400,
                height: 400
              }
            },
            keywords: post.categories?.map(cat => cat.title).join(', ') || 'software development, technology',
            articleBody: post.body,
            inLanguage: 'en-US',
            isAccessibleForFree: true,
            wordCount: post.body?.length || 0,
            speakable: {
              '@type': 'SpeakableSpecification',
              cssSelector: ['article', 'h1', 'h2', 'h3', 'p']
            },
            articleSection: post.categories?.[0]?.title || 'Technology',
            educationalLevel: 'Beginner',
            educationalUse: 'Self-Study',
            audience: {
              '@type': 'Audience',
              audienceType: 'Software Developers'
            }
          })
        }}
      />
      <BlogPostContent post={post} />
    </>
  )
} 