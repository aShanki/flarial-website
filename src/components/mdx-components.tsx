
import type { MDXComponents } from 'mdx/types';
import Image from 'next/image';
import Link from 'next/link';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => <h1 className="text-4xl font-bold my-4">{children}</h1>,
    h2: ({ children }) => <h2 className="text-3xl font-bold my-4">{children}</h2>,
    h3: ({ children }) => <h3 className="text-2xl font-bold my-3">{children}</h3>,
    p: ({ children }) => <p className="my-4 leading-relaxed">{children}</p>,
    a: ({ href, children }) => <Link href={href || ''} className="text-blue-500 hover:underline">{children}</Link>,
    img: ({ src, alt }) => <Image src={src || ''} alt={alt || ''} width={800} height={400} className="rounded-lg my-8" />,
    pre: ({ children }) => <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg my-4 overflow-auto">{children}</pre>,
    code: ({ children }) => <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">{children}</code>,
    ...components,
  };
}