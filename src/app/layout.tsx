import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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
  description: "みやてぃ～ぬの学習記録サイトです！",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} 
              ${geistMono.variable} 
              antialiased 
              `}
      >
        <div
          className="
            min-h-dvh 
            w-[1440px] 
            mx-auto 
            grid 
            grid-cols-[350px_740px_350px]
          "
        >
          <aside
            className="\
              bg-[#FFF3DC]
              border-r
              border-[#EBDDC3]
            "
          >
            left
          </aside>
          <main
            className="
              min-w-0
              bg-[#FBF0DB]
            "
          >
            {children}
          </main>
          <aside
            className="
             bg-[#FFF3DC]
              border-l
             border-[#EBDDC3]
          "
          >
            right
          </aside>
        </div>
      </body>
    </html>
  );
}
