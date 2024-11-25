import { getAllPosts } from '@/lib/mdx';
import Link from 'next/link';
import Navbar from '@/components/Navbar';

export default async function BlogPage() {
  const posts = await getAllPosts();
  
  return (
    <div className="min-h-screen bg-[#0F0607]">
      <Navbar />
      <div className="container mx-auto px-4 py-24">
        <h1 className="text-5xl font-bold mb-12 text-white font-space-grotesk animate-fade-in">
          Latest Posts
        </h1>
        <div className="grid gap-8 animate-fade-in-delayed">
          {posts.length === 0 ? (
            <div className="text-gray-400 font-ubuntu">
              No posts found. Create a .mdx file in the src/posts directory to get started.
            </div>
          ) : (
            posts.map((post) => (
              <article 
                key={post.slug} 
                className="p-6 bg-[#0F0607]/80 border border-gray-800 rounded-xl 
                           hover:border-[#9B1D1F]/20 transition-all duration-300 
                           hover:-translate-y-1 hover:shadow-xl"
              >
                <Link href={`/blog/${post.slug}`} className="block">
                  <h2 className="text-2xl font-bold mb-3 text-white font-ubuntu">{post.title}</h2>
                  <p className="text-gray-400 mb-4 font-ubuntu">{post.excerpt}</p>
                  <time className="text-sm text-gray-500 font-ubuntu">{post.date}</time>
                </Link>
              </article>
            ))
          )}
        </div>
      </div>
    </div>
  );
}