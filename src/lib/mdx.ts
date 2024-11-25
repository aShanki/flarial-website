import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

interface PostData {
  title: string
  date: string
  excerpt: string
  slug: string
}

const postsDirectory = path.join(process.cwd(), 'src/posts')

// Create posts directory if it doesn't exist
if (!fs.existsSync(postsDirectory)) {
  fs.mkdirSync(postsDirectory, { recursive: true })
  console.log('Created posts directory at:', postsDirectory)
}

export async function getPostBySlug(slug: string) {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`)
  
  try {
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)
    
    return {
      meta: {
        ...data,
        slug,
      },
      content,
    }
  } catch (error) {
    return null
  }
}

export async function getAllPosts(): Promise<PostData[]> {
  console.log('Reading posts from:', postsDirectory)
  
  try {
    const files = fs.readdirSync(postsDirectory)
    console.log('Found files:', files)

    if (files.length === 0) {
      console.log('No posts found. Creating example post...')
      const examplePost = `---
title: "Welcome to Flarial Blog"
date: "${new Date().toISOString().split('T')[0]}"
excerpt: "This is your first blog post"
---

# Welcome to Flarial Blog

This is your first blog post. Edit this file or add new .mdx files to create more posts.`

      fs.writeFileSync(path.join(postsDirectory, 'welcome.mdx'), examplePost)
      files.push('welcome.mdx')
    }

    const posts = files
      .filter(fileName => fileName.endsWith('.mdx'))
      .map((fileName) => {
        const slug = fileName.replace(/\.mdx$/, '')
        const fullPath = path.join(postsDirectory, fileName)
        const fileContents = fs.readFileSync(fullPath, 'utf8')
        
        try {
          const { data } = matter(fileContents)
          console.log('Raw frontmatter:', data)

          // Validate frontmatter
          if (!data.title || !data.date || !data.excerpt) {
            console.warn(`Post ${slug} is missing required frontmatter fields:`, {
              hasTitle: !!data.title,
              hasDate: !!data.date,
              hasExcerpt: !!data.excerpt
            })
          }

          const post: PostData = {
            title: String(data.title || 'Untitled'),
            date: String(data.date || new Date().toISOString().split('T')[0]),
            excerpt: String(data.excerpt || 'No excerpt available'),
            slug
          }
          
          console.log('Processed post:', post)
          return post
        } catch (error) {
          console.error(`Error parsing frontmatter for ${slug}:`, error)
          return null
        }
      })
      .filter((post): post is PostData => post !== null)

    return posts.sort((a, b) => (new Date(b.date).getTime() - new Date(a.date).getTime()))
  } catch (error) {
    console.error('Error reading posts:', error)
    return []
  }
}