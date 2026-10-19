'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import HeroBanner from '@/components/HeroBanner'
import AboutUs from '@/components/AboutUs'
import Service from '@/components/Service'
import Collection from '@/components/Collection'
import RevealOnScroll from '@/components/RevealOnScroll'


export default function Home() {

  return (
    <div className="min-h-screen bg-[#FFFDF9] text-[#2E2728] selection:bg-[#F2D1D1] selection:text-[#2E2728]">
      {/* 💻 Header (Menu điều hướng Sticky) */}
      <Header />

      <main>
        {/* 🌸 SECTION 1: HERO BANNER (Ấn tượng đầu tiên - Bố cục bất đối xứng) */}
        <HeroBanner />

        {/* 📜 SECTION 2: CÂU CHUYỆN THƯƠNG HIỆU (About Us - Khoảng cách lớn 120px-150px) */}
        <AboutUs />

        {/* 📸 SECTION 3: CONCEPT NỔI BẬT (Highlights - Lưới so le / Masonry nhẹ, tạo cảm giác triển lãm) */}
        <Service />

        <Collection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Kích hoạt hiệu ứng [data-reveal] khi cuộn */}
      <RevealOnScroll />
    </div>
  )
}
