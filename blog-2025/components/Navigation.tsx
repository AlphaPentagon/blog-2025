"use client";

import { usePathname } from "next/navigation";
import NavLink from "@/components/NavLink";

export default function Navigation() {
  const pathname = usePathname();

  // Set active page.

  return (
    <nav className="bg-green-200 flex justify-center">
      <div className="flex justify-around w-md py-2">
        <NavLink href="/" pathname={pathname} label="Home" />
        <NavLink href="/blogs" pathname={pathname} label="Blogs" />
        <NavLink href="/about" pathname={pathname} label="About" />
      </div>
    </nav>
  )
}