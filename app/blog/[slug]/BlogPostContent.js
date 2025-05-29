'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { PortableText } from '@portabletext/react'
import { urlFor } from '@/lib/sanity'
import Link from 'next/link'

const components = {
  block: {
    h1: ({ children }) => <h1 className="text-4xl font-bold text-white mt-8 mb-4">{children}</h1>,
    h2: ({ children }) => <h2 className="text-3xl font-bold text-white mt-8 mb-4">{children}</h2>,
    h3: ({ children }) => <h3 className="text-2xl font-bold text-white mt-6 mb-3">{children}</h3>,
    h4: ({ children }) => <h4 className="text-xl font-bold text-white mt-6 mb-3">{children}</h4>,
    normal: ({ children }) => <p className="text-zinc-300 mb-4 leading-relaxed">{children}</p>,
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-blue-500 pl-4 my-6 italic text-zinc-300">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => <ul className="list-disc list-inside mb-4 text-zinc-300 space-y-2">{children}</ul>,
    number: ({ children }) => <ol className="list-decimal list-inside mb-4 text-zinc-300 space-y-2">{children}</ol>,
  },
  marks: {
    link: ({ children, value }) => {
      const target = (value?.href || '').startsWith('http') ? '_blank' : undefined
      return (
        <a
          href={value?.href}
          target={target}
          rel={target === '_blank' ? 'noopener noreferrer' : undefined}
          className="text-blue-400 hover:text-blue-300 underline"
        >
          {children}
        </a>
      )
    },
    code: ({ children }) => <code className="bg-zinc-800 px-1 py-0.5 rounded text-sm">{children}</code>,
  },
}

export default function BlogPostContent({ post }) {
  return (
    <div className="container mx-auto px-4 py-16 max-w-3xl">
      <Link 
        href="/blog"
        className="inline-flex items-center text-zinc-400 hover:text-white mb-8 transition-colors"
      >
        <svg 
          className="w-5 h-5 mr-2" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M10 19l-7-7m0 0l7-7m-7 7h18" 
          />
        </svg>
        Back to Blog
      </Link>
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="prose prose-invert max-w-none"
      >
        {post.mainImage && (
          <div className="relative h-[400px] w-full mb-12 rounded-xl overflow-hidden">
            <Image
              src={urlFor(post.mainImage).url()}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}
        <header className="mb-12">
          <h1 className="text-5xl font-bold text-white mb-6 leading-tight">{post.title}</h1>
          <p className="text-zinc-400 text-lg">
            {new Date(post.publishedAt).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </p>
        </header>
        <div className="text-zinc-300 text-lg leading-relaxed">
          <PortableText value={post.body} components={components} />
        </div>
      </motion.article>
    </div>
  )
} 