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
        className="
        // body の全ての子要素を対象に、要素の最小の高さをビューポートの高さに設定
        *:min-h-dvh   
        // body の要素の display プロパティを gridに設定  
        grid 
        // gridの列を1列に設定。デフォルトのレイアウトとして適用される
        grid-cols-1
        // md とはレスポンシブブレークポイントの一つ
        // 画面幅 768px 以上の場合、後続のクラスに適用
        md:grid-cols-[20%_1fr_20%]
        // 背景色はglobal.cssで定義した色を使用
        bg-[blanchedalmond]"
      >
        <aside
          className="
          // hiddenにすることにより、画面幅が768px未満の場合にこのaside要素が表示されなくなる
          hidden
          // md: blockにすることにより、画面幅が768px以上の場合にこのaside要素が表示されるようになる
          md:block
          // 要素がスクロールに応じて特定の位置でビューポートに固定される
          md:sticky
          // sticky要素の上端をビューポートの上端から0ピクセルの位置に設定
          md:top-0
          // 要素が配置されるコンテナの交差軸に沿った位置を開始位置に設定
          md:self-start
          // 要素の高さをビューポートの高さに設定
          md:h-dvh
          // 要素の内容が要素の高さを超えた場合に垂直方向にスクロール可能にする
          overflow-y-auto
          // 要素の右側に1ピクセルの境界線を追加
          border-r"
        >
          <LeftNav />
        </aside>

        <main className="min-h-dvh overflow-x-hidden">{children}</main>

        <aside
          className="
          hidden 
          md:block 
          md:sticky 
          md:top-0 
          md:self-start 
          md:h-dvh 
          overflow-y-auto 
          border-l"
        >
          <RightTOC />
        </aside>
      </body>
    </html>
  );
}
