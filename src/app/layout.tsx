import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";
import LeftNav from "@/components/LeftNav";

const geistSans = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const geistMono = Roboto_Mono({
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
            w-full
            max-w-[var(--container-max)]
            mx-auto
            grid
            grid-cols-[1fr_3fr_1fr]
            min-h-dvh
          "
        >
          <LeftNav />
          <main className="min-w-0">
            <div
              className="
              w-full
              min-h-dvh
              bg-[#FBF0DB]
              "
            >
              {children}
            </div>
          </main>
          <aside
            className="
              w-full
              bg-[#FBF0DB]
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
