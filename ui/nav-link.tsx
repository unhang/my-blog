"use client";

import Link from "next/link";
import { usePathname } from 'next/navigation';
import path from "path";

export default function NavLink({ href, children }: { href: string; children: React.ReactNode; }) {
  const pathname = usePathname();
  return (
    <Link className={`px-4`} href={href}>
      <span className={`leading-0 ${pathname.startsWith(href) ? 'border-b-[6px] border-[#77FF00]' : ''}`}>{children}</span>
    </Link>
  );
}