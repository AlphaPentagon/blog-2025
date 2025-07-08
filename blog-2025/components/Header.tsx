"use client";

import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  // Defines and returns the page title.
  const getPageTitle = (path: string) => {
    if (path.startsWith('/blogs/')) return 'Blog Post';

    switch (path) {
      case '/':
        return 'NextJS and Strapi Blog 2025';
      case '/about':
        return 'About';
      case '/blogs':
        return 'Blogs';
      default:
        return 'Page'
    }
  }

  const title = getPageTitle(pathname);

  return (
    <header className="bg-green-300">
      <h1 className="text-8xl text-center p-10">{title}</h1>
    </header>
  )
}