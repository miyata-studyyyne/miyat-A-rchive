import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import LeftNav from "@/components/LeftNav";
import RightTOC from "@/components/RightTOC";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "miyat-A-rchive",
  description: "大学生ミヤタの学習記録サイトです！",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body
        className="*:min-h-dvh
        grid 
        grid-cols-1
        md:grid-cols-[240px_1fr_280px]
        bg-[blanchedalmond]"
      >
        <aside
          className="
        hidden
        md:block
        md:sticky
        md:top-0
        md:self-start
        md:h-dvh
        overflow-y-auto
        border-r"
        >
          <LeftNav />
        </aside>

        <main className="min-h-dvh overflow-x-hidden">{children}</main>

        <aside className="hidden md:block md:sticky md:top-0 md:self-start md:h-dvh overflow-y-auto border-l">
          <RightTOC />
        </aside>
      </body>
    </html>
  );
}
