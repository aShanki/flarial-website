import { getAllPosts } from '@/lib/mdx';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/Navbar';

export default async function BlogPage() {
  const posts = await getAllPosts();
  
  return (
    <div className="min-h-screen bg-[#0F0607]">
      <Navbar />
      <div className="container mx-auto px-4 py-24">
        <h1 className="text-5xl font-bold mb-12 text-white font-space-grotesk animate-fade-in text-center">
          Latest Posts
        </h1>
        <div className="grid gap-8 animate-fade-in-delayed max-w-3xl mx-auto">
          {posts.length === 0 ? (
            <div className="text-gray-400 font-ubuntu">
              No posts found. Create a .mdx file in the src/posts directory to get started.
            </div>
          ) : (
            posts.map((post) => (
              <article 
                key={post.slug} 
                className="flex gap-6 p-6 bg-[#0F0607]/80 border border-gray-800 rounded-xl 
                           hover:border-[#9B1D1F]/20 transition-all duration-300 
                           hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex-shrink-0 w-48 h-32 relative">
                  <Image
                    src={`/blog-thumbnails/${post.slug}.webp`}
                    alt={post.title}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <div className="flex-1">
                  <Link href={`/blog/${post.slug}`} className="block">
                    <h2 className="text-2xl font-bold mb-3 text-white font-ubuntu">{post.title}</h2>
                    <p className="text-gray-400 mb-4 font-ubuntu">{post.excerpt}</p>
                    <time className="text-sm text-gray-500 font-ubuntu">{post.date}</time>
                  </Link>
                </div>
              </article>
            ))
          )}
        </div>
      </div>
    </div>
  );
}