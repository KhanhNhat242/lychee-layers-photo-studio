'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  PhoneOutlined,
  FacebookOutlined,
  EnvironmentOutlined,
  InstagramOutlined,
  HeartFilled,
} from '@ant-design/icons'
import { EdgeDecor, FlowerStems, CameraSketch } from './SectionDecor'
import { revealDelay } from './reveal'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer id='contact-us' className="relative isolate overflow-hidden bg-[#F2D1D1] text-[#2E2728] pt-16 sm:pt-20 pb-10 border-t border-[#EFE8DC] selection:text-white">
      <EdgeDecor
        left={<FlowerStems />}
        right={<CameraSketch />}
        colorClassName="text-[#B77B82]/45"
        sizeClassName="w-24 xl:w-32 2xl:w-40"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 pb-14">
          {/* Cột 1: Thương hiệu */}
          <div data-reveal="up" className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className={`w-50 h-8 overflow-hidden relative flex-shrink-0 transition-colors duration-300`}>
                <Image
                  src="/images/mainlogo-Photoroom.svg"
                  alt="Lychee Layers Logo"
                  fill
                  sizes="32px"
                  priority
                />
              </div>
            </div>
            <p className="text-sm text-[#2E2728]/75 leading-relaxed max-w-md font-light">
              Nơi lưu giữ từng tầng cảm xúc, tôn vinh nét đẹp tự nhiên, ngọt ngào và đầy chất thơ của riêng bạn qua từng khung hình nghệ thuật.
            </p>
            <div className="pt-2 flex items-center gap-3">
              <a
                href="https://www.facebook.com/profile.php?id=61550731514182"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook Fanpage"
                className="w-9 h-9 rounded-full bg-[#FFFDF9] border border-[#EFE8DC] flex items-center justify-center text-[#2E2728] hover:bg-[#C89D7C] hover:text-white hover:border-[#C89D7C] transition-all duration-300"
              >
                <FacebookOutlined className="text-base" />
              </a>
              <a
                href="tel:0978856063"
                aria-label="Hotline"
                className="w-9 h-9 rounded-full bg-[#FFFDF9] border border-[#EFE8DC] flex items-center justify-center text-[#2E2728] hover:bg-[#C89D7C] hover:text-white hover:border-[#C89D7C] transition-all duration-300"
              >
                <PhoneOutlined className="text-base" />
              </a>
              <a
                href="https://zalo.me/0978856063"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Zalo"
                className="h-9 px-3 rounded-full bg-[#FFFDF9] border border-[#EFE8DC] flex items-center justify-center text-xs font-semibold text-[#2E2728] hover:bg-[#C89D7C] hover:text-white hover:border-[#C89D7C] transition-all duration-300"
              >
                Zalo
              </a>
            </div>
          </div>

          {/* Cột 2: Điều hướng */}
          <div data-reveal="up" style={revealDelay(150)} className="md:col-span-3 space-y-3">
            <h3 className="text-xs font-semibold tracking-widest uppercase text-[#C89D7C]">
              Danh mục
            </h3>
            <ul className="space-y-2.5 text-sm text-[#2E2728]/80 font-light">
              {[
                { href: '#hero', label: 'Trang chủ' },
                { href: '#about-us', label: 'Về chúng tôi' },
                { href: '#service', label: 'Dịch vụ' },
                { href: '#collection', label: 'Bộ sưu tập' },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="hover:text-[#C89D7C] hover:translate-x-1 inline-block transition-all duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Cột 3: Liên hệ Studio */}
          <div data-reveal="up" style={revealDelay(300)} className="md:col-span-4 space-y-3">
            <h3 className="text-xs font-semibold tracking-widest uppercase text-[#C89D7C]">
              Thông tin liên hệ
            </h3>
            <ul className="space-y-3 text-sm text-[#2E2728]/80 font-light">
              {/* <li className="flex items-start gap-2.5">
                <a href="https://www.google.com/maps/place/Lychee+Layers/@10.7475968,106.7218922,17z/data=!4m14!1m7!3m6!1s0x31752f005375be05:0x1b414021ba19f5e!2sLychee+Layers!8m2!3d10.7475968!4d106.7244671!16s%2Fg%2F11x2mh629t!3m5!1s0x31752f005375be05:0x1b414021ba19f5e!8m2!3d10.7475968!4d106.7244671!16s%2Fg%2F11x2mh629t?entry=ttu&g_ep=EgoyMDI2MTAxMi4wIKXMDSoASAFQAw%3D%3D" target='_blank'>
                  <EnvironmentOutlined className="text-base text-[#C89D7C] mt-0.5" />
                  <span>
                    Xem địa chỉ
                  </span>
                </a>
              </li> */}
              <li>
                <a
                  href="https://www.google.com/maps/place/Lychee+Layers/@10.7475968,106.7218922,17z/data=!4m14!1m7!3m6!1s0x31752f005375be05:0x1b414021ba19f5e!2sLychee+Layers!8m2!3d10.7475968!4d106.7244671!16s%2Fg%2F11x2mh629t!3m5!1s0x31752f005375be05:0x1b414021ba19f5e!8m2!3d10.7475968!4d106.7244671!16s%2Fg%2F11x2mh629t?entry=ttu&g_ep=EgoyMDI2MTAxMi4wIKXMDSoASAFQAw%3D%3D" target='_blank'
                  className="flex items-center gap-2.5 hover:text-[#C89D7C] transition-colors"
                >
                  <EnvironmentOutlined className="text-base text-[#C89D7C]" />
                  <span className="font-medium text-[#2E2728]">Xem địa chỉ</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:0978856063"
                  className="flex items-center gap-2.5 hover:text-[#C89D7C] transition-colors"
                >
                  <PhoneOutlined className="text-base text-[#C89D7C]" />
                  <span className="font-medium text-[#2E2728]">097 885 60 63</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/profile.php?id=61550731514182"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 hover:text-[#C89D7C] transition-colors"
                >
                  <FacebookOutlined className="text-base text-[#C89D7C]" />
                  <span className='font-medium'>Facebook</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/lycheelayers"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 hover:text-[#C89D7C] transition-colors"
                >
                  <InstagramOutlined className="text-base text-[#C89D7C]" />
                  <span className='font-medium'>Instagram</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Đường phân cách kéo dài từ giữa ra */}
        <div data-reveal="grow-c" style={revealDelay(200)} className="h-px bg-[#EFE8DC]" />

        {/* Bản quyền & Lên đầu trang */}
        <div data-reveal="" style={revealDelay(450)} className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-[#2E2728]/60 font-light gap-3">
          <div className="flex items-center gap-1.5">
            <span>© {new Date().getFullYear()} Lychee Layers Studio. All rights reserved. Crafted with</span>
            <HeartFilled className="text-[#B77B82] text-xs" />
          </div>
          <button
            onClick={scrollToTop}
            className="group hover:text-[#C89D7C] transition-colors inline-flex items-center gap-1.5 cursor-pointer"
          >
            <span className="inline-block transition-transform duration-300 group-hover:-translate-y-1">
              ↑
            </span>
            <span>Lên đầu trang</span>
          </button>
        </div>
      </div>
    </footer>
  )
}

export default Footer