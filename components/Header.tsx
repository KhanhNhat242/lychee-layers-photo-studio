'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

interface NavItem {
  label: string
  href: string
}

const navItems: NavItem[] = [
  { label: 'Trang chủ', href: '#hero' },
  { label: 'Concept', href: '#concepts' },
  { label: 'Bảng giá', href: '#pricing' },
  { label: 'Thư viện', href: '#gallery' },
  { label: 'Liên hệ', href: '#contact' },
]

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
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
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FFFDF9]/90 backdrop-blur-md shadow-[0_4px_20px_rgba(200,157,124,0.08)] border-b border-[#EFE8DC]/80 py-3.5'
          : 'bg-[#FFFDF9]/80 backdrop-blur-sm border-b border-[#EFE8DC]/60 py-4.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo nghệ thuật bên trái */}
          <Link
            href="/"
            className="group flex items-center gap-2.5 transition-opacity hover:opacity-90"
          >
            <div className="w-8 h-8 rounded-full overflow-hidden border border-[#C89D7C]/40 relative flex-shrink-0">
              <Image
                src="/images/logo-img.jpg"
                alt="Lychee Layers Logo"
                fill
                sizes="32px"
                className="object-cover"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl sm:text-2xl font-normal tracking-wide text-[#2E2728]">
                Lychee Layers
              </span>
              <span className="text-[9px] tracking-[0.22em] uppercase text-[#C89D7C] -mt-1 font-medium">
                Artistic Studio
              </span>
            </div>
          </Link>

          {/* Menu điều hướng ở giữa */}
          <nav className="hidden md:flex items-center space-x-8 lg:space-x-10">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className="text-sm font-normal text-[#2E2728]/80 hover:text-[#C89D7C] transition-colors duration-200 tracking-wide relative group py-1"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#C89D7C] transition-all duration-300 group-hover:w-full rounded-full" />
              </a>
            ))}
          </nav>

          {/* Nút Đặt lịch ngay bên phải */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#booking"
              onClick={(e) => scrollToSection(e, '#booking')}
              className="inline-flex items-center justify-center px-5 py-2 rounded-full text-xs sm:text-sm font-medium tracking-wide text-white bg-[#C89D7C] hover:bg-[#B88D6C] shadow-sm hover:shadow-[0_4px_14px_rgba(200,157,124,0.35)] transition-all duration-300 active:scale-95"
            >
              Đặt lịch ngay
            </a>
          </div>

          {/* Mobile hamburger toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="p-2 rounded-lg text-[#2E2728] hover:bg-[#F3EDE2] transition-colors focus:outline-none"
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
          <div className="md:hidden pt-3 pb-4 border-t border-[#EFE8DC]/80 mt-3 animate-fadeIn">
            <div className="flex flex-col space-y-2.5">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className="px-3 py-2 text-sm text-[#2E2728] hover:bg-[#F3EDE2] rounded-lg transition-colors font-normal"
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-2 px-2">
                <a
                  href="#booking"
                  onClick={(e) => scrollToSection(e, '#booking')}
                  className="w-full inline-flex items-center justify-center px-5 py-2.5 rounded-full text-sm font-medium text-white bg-[#C89D7C] hover:bg-[#B88D6C] transition-all text-center"
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