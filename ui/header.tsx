'use client';
import Link from "next/link";
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path;
  }

  return <>
    <div className="w-full py-[18px] border-b border-[#000000]">
      <div className="">
        <div className="w-full flex justify-center">
          <Link className={`px-4`} href="/">
            <span className={`leading-0 ${isActive('/') ? "border-b-[6px] border-[#77FF00]" : ""}`}>Home</span>
          </Link>
          <Link className={`px-4`} href="/post">
            <span className={`leading-0 ${isActive('/post') ? "border-b-[6px] border-[#77FF00]" : ""}`}>Posts</span>
          </Link>
          <Link className={`px-4`} href="/about">
            <span className={`leading-0 ${isActive('/about') ? "border-b-[6px] border-[#77FF00]" : ""}`}>About</span>
          </Link>
        </div>
      </div>
    </div>
  </>
}
