import type { Metadata } from "next";
import { headers } from 'next/headers'
import { Cormorant_Garamond, Noto_Serif_JP } from "next/font/google";


import "./globals.css";
import favicon from "@/public/images/favicon_io/favicon.ico";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  // display: "swap"
});

const notoSerifJp = Noto_Serif_JP({
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
  // console.log(headerList);
  // for (const [key, value] of headerList.entries()) {
  //   console.log(`${key}: ${value}`);
  // }
  // const pathname = headerList.get('x-pathname') || '';

  // const isAdminRoute = pathname.startsWith('/admin');
  const isAdminRoute = false;
  return (
    <html lang="en" className={`${notoSerifJp.className} antialiased`}>
      {/* <link rel="icon" href={favicon} sizes="any" /> */}
      <body
      >
        {children}
      </body>
    </html>
  );
}
