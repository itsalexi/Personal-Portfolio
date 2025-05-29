'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { urlFor } from '@/lib/sanity'

const getGridClass = (count) => {
  if (count === 1) return 'max-w-2xl mx-auto'
  if (count === 2) return 'grid gap-8 md:grid-cols-2 max-w-4xl mx-auto'
  return 'grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto'
}

export default function BlogList({ posts }) {
  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-6 mb-12 text-center"
      >
        <h1 className="text-4xl font-bold text-white sm:text-5xl">
          Blog
        </h1>
        <p className="text-xl text-zinc-400">
          Thoughts, ideas, and updates
        </p>
      </motion.div>

      <div className={getGridClass(posts.length)}>
        {posts.map((post) => (
          <Link href={`/blog/${post.slug.current}`} key={post._id}>
            <motion.article
              whileHover={{ scale: 1.02 }}
              className="bg-zinc-800 rounded-xl overflow-hidden border border-zinc-700 h-full flex flex-col"
            >
              {post.mainImage && (
                <div className="relative h-48 w-full">
                  <Image
                    src={urlFor(post.mainImage).url()}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              <div className="p-6 flex-1 flex flex-col">
                <h2 className="text-xl font-semibold mb-2 line-clamp-2">{post.title}</h2>
                <p className="text-zinc-400 text-sm mb-4">
                  {new Date(post.publishedAt).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </p>
                {post.excerpt ? (
                  <p className="text-zinc-300 line-clamp-3 flex-1">{post.excerpt}</p>
                ) : (
                  <p className="text-zinc-500 italic flex-1">No excerpt available</p>
                )}
                <div className="mt-4 text-blue-400 hover:text-blue-300 transition-colors">
                  Read more →
                </div>
              </div>
            </motion.article>
          </Link>
        ))}
      </div>
    </div>
  )
} 