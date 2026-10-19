'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

interface NavItem {
  label: string
  href: string
  /** Các section khác cũng làm sáng mục này khi cuộn tới */
  extraSections?: string[]
}

const navItems: NavItem[] = [
  { label: 'Trang chủ', href: '#hero' },
  { label: 'Về chúng tôi', href: '#about-us' },
  { label: 'Dịch vụ', href: '#service', extraSections: ['pricing'] },
  { label: 'Bộ sưu tập', href: '#collection' },
  { label: 'Liên hệ', href: '#contact-us' },
]

// Danh sách [id section, href mục nav tương ứng]
const sectionTargets = navItems.flatMap((item) => [
  [item.href.slice(1), item.href],
  ...(item.extraSections ?? []).map((id) => [id, item.href]),
])

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeHref, setActiveHref] = useState(navItems[0].href)

  useEffect(() => {
    const handleScroll = () => {
      const heroContent = document.getElementById('hero-content')
      const headerElem = document.querySelector('header')
      const headerHeight = headerElem ? headerElem.offsetHeight : 70

      if (heroContent) {
        const contentTop = heroContent.getBoundingClientRect().top
        // Chuyển sang nền trắng khi cuộn xuống chạm đúng vị trí của đoạn text content ở HeroBanner
        setIsScrolled(contentTop <= headerHeight)
      } else {
        setIsScrolled(window.scrollY > 30)
      }

      // Section đang active: section cuối cùng có mép trên đã vượt qua vạch 1/3 màn hình (tính từ dưới header)
      const line = headerHeight + window.innerHeight / 3
      const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2
      let current = navItems[0].href
      for (const [id, href] of sectionTargets) {
        const section = document.getElementById(id)
        if (section && (atBottom || section.getBoundingClientRect().top <= line)) current = href
      }
      setActiveHref(current)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [])

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault()
      const elem = document.querySelector(href)
      if (elem) {
        elem.scrollIntoView({ behavior: 'smooth' })
        setIsOpen(false)
      }
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${isScrolled
        ? 'bg-[#FFFDF9]/95 backdrop-blur-md shadow-[0_4px_20px_rgba(200,157,124,0.08)] py-3.5'
        : 'bg-transparent shadow-none py-5 sm:py-6'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo nghệ thuật bên trái */}
          <Link
            href="#hero"
            onClick={(e) => scrollToSection(e, '#hero')}
            className="group flex items-center gap-2.5 transition-opacity hover:opacity-90"
          >
            <div className={`w-50 h-8 overflow-hidden relative flex-shrink-0 transition-colors duration-300`}>
              <Image
                src="/images/mainlogo-Photoroom.svg"
                alt="Lychee Layers Logo"
                fill
                sizes="32px"
                priority
              />
            </div>
          </Link>

          {/* Menu điều hướng ở giữa */}
          <nav className="hidden md:flex items-center space-x-8 lg:space-x-10">
            {navItems.map((item) => {
              const isActive = item.href === activeHref
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  aria-current={isActive ? 'location' : undefined}
                  className={`text-sm tracking-wide relative group py-1 transition-all duration-300 ${isScrolled
                    ? `${isActive ? 'text-[#C89D7C]' : 'text-[#2E2728]/80'} hover:text-[#C89D7C] font-normal`
                    : `${isActive ? 'text-[#A65B64]' : 'text-[#1F1A1B]'} hover:text-[#A65B64] font-medium drop-shadow-[0_1px_8px_rgba(255,253,249,0.95)]`
                    }`}
                >
                  {item.label}
                  <span className={`absolute bottom-0 left-0 h-[2px] transition-all duration-300 group-hover:w-full rounded-full ${isActive ? 'w-full' : 'w-0'} ${isScrolled ? 'bg-[#C89D7C]' : 'bg-[#A65B64]'
                    }`} />
                </a>
              )
            })}
          </nav>

          {/* Nút Đặt lịch ngay bên phải */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#booking"
              onClick={(e) => scrollToSection(e, '#booking')}
              className={`inline-flex items-center justify-center px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium tracking-wide transition-all duration-300 active:scale-95 ${isScrolled
                ? 'text-white bg-[#C89D7C] hover:bg-[#B88D6C] shadow-sm hover:shadow-[0_4px_14px_rgba(200,157,124,0.35)]'
                : 'text-white bg-[#A65B64] hover:bg-[#8C535A] shadow-[0_4px_16px_rgba(166,91,100,0.35)] hover:shadow-[0_6px_20px_rgba(166,91,100,0.45)]'
                }`}
            >
              Đặt lịch ngay
            </a>
          </div>

          {/* Mobile hamburger toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className={`p-2 rounded-lg transition-colors focus:outline-none ${isScrolled
                ? 'text-[#2E2728] hover:bg-[#F3EDE2]'
                : 'text-[#1F1A1B] hover:bg-white/40'
                }`}
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className={`md:hidden pt-3 pb-4 mt-3 rounded-2xl transition-all duration-300 animate-fadeIn ${isScrolled
            ? 'border-t border-[#EFE8DC]/80'
            : 'bg-[#FFFDF9]/95 backdrop-blur-md border border-[#EFE8DC] shadow-lg px-4'
            }`}>
            <div className="flex flex-col space-y-2.5">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  aria-current={item.href === activeHref ? 'location' : undefined}
                  className={`px-3 py-2 text-sm hover:bg-[#F3EDE2] rounded-lg transition-colors font-medium ${item.href === activeHref ? 'bg-[#F3EDE2] text-[#A65B64]' : 'text-[#2E2728]'
                    }`}
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-2 px-1">
                <a
                  href="#booking"
                  onClick={(e) => scrollToSection(e, '#booking')}
                  className="w-full inline-flex items-center justify-center px-5 py-2.5 rounded-full text-sm font-medium text-white bg-[#A65B64] hover:bg-[#8C535A] transition-all text-center shadow-sm"
                >
                  Đặt lịch ngay
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header