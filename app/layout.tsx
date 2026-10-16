import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { Suspense } from "react";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin", "vietnamese"],
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin", "vietnamese"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lychee Layers | Studio Chụp Ảnh Nghệ Thuật & Concept Cá Nhân",
  description: "Lychee Layers Studio - Chạm vào từng tầng cảm xúc qua từng khung hình. Chụp ảnh concept cá nhân, nàng thơ, nghệ thuật, chân dung tại TP. Hồ Chí Minh.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="vi"
      className={`${playfair.variable} ${plusJakarta.variable} scroll-smooth h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-[#FFFDF9] text-[#2E2728] selection:bg-[#F2D1D1] selection:text-[#2E2728]">
        <Suspense fallback={null}>
          <AntdRegistry>{children}</AntdRegistry>
        </Suspense>
      </body>
    </html>
  );
}
