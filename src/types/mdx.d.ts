
declare module '*.mdx' {
  import { ReactNode } from 'react'
  
  export const metadata: {
    title: string
    date: string
    excerpt: string
    [key: string]: any
  }

  const MDXContent: (props: any) => ReactNode
  export default MDXContent
}