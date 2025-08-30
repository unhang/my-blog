import type { Metadata } from "next";
import { headers } from 'next/headers'
import { Cormorant_Garamond, Noto_Sans_JP } from "next/font/google";

import "./globals.css";
import Header from "@/ui/header"
import Footer from "@/ui/footer";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  // display: "swap"
});

const notoSans = Noto_Sans_JP({
  variable: "--font-noto-sans",
  // display: "fallback"
});

export const metadata: Metadata = {
  title: "It'me",
  description: "personal blog of Hang",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headerList = headers();
  console.log(headerList);
  // const pathname = headerList.get('x-pathname') || '';

  // const isAdminRoute = pathname.startsWith('/admin');
  const isAdminRoute = false;
  return (
    <html lang="en" className={`${cormorant.className} antialiased`}>
      <body
      >
        {children}
      </body>
    </html>
  );
}
