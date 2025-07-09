import Link from "next/link";

type NavLinkProps = {
  href: string,
  label: string,
  pathname: string
}

export default function NavLink({ href, label, pathname }: NavLinkProps) {
  const isActive = pathname === href || (href === '/blogs' && pathname.startsWith("/blogs/"));
  const classes = `text-xl hover:font-bold hover:underline ${isActive ? 'font-bold underline' : ''}`;

  return (
    <Link
      href={href}
      className={classes}
    >
      {label}
    </Link>
  )
}