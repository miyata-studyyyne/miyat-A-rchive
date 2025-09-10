"use client";
import Link from "next/link";
import Image from "next/image";

const LeftNav = () => {
  return (
    <nav
      className="sticky 
                    top-0
                    h-dvh
                    w-full
                    flex flex-col items-center gap-6 px-3 py-4
                    "
    >
      <div
        className="
          relative 
          w-[clamp(56px,20%,112px)] h-[clamp(56px,20%,112px)]
          supports-[width:1cqw]:w-[clamp(56px,20cqw,112px)]
          supports-[width:1cqw]:h-[clamp(56px,20cqw,112px)]
          rounded-full 
          overflow-hidden
          ring-1 
          ring-black/20
          bg-blue-500
          "
      >
        <Image
          src="/site-logo.png"
          alt="サイトロゴ"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 112px, 80px"
          priority
        ></Image>
      </div>
    </nav>
  );
};

export default LeftNav;
