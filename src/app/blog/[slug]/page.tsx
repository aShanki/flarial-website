import { getPostBySlug } from '@/lib/mdx'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { notFound } from 'next/navigation'
import Navbar from '@/components/Navbar'

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug)
  
  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-[#0F0607]">
      <Navbar />
      <article className="container mx-auto px-4 py-24 max-w-3xl">
        <div className="animate-fade-in">
          <h1 className="text-5xl font-bold mb-6 text-white font-space-grotesk">
            {post.meta.title}
          </h1>
          <time className="text-gray-400 block mb-12 font-ubuntu">
            {post.meta.date}
          </time>
        </div>
        
        <div className="prose prose-invert max-w-none animate-fade-in-delayed font-ubuntu">
          <MDXRemote source={post.content} />
        </div>
      </article>
    </div>
  )
}