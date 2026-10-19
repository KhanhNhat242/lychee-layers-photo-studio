'use client'

import React, { useState, useEffect, useRef, useCallback } from 'react'
import Image from 'next/image'

export interface ConceptItem {
    id: string
    title: string
    code: string
    price: string
    image: string
    description: string
    highlights: string[]
}

interface ConceptCarouselProps {
    concepts: ConceptItem[]
    /** Gọi khi bấm "Xem chi tiết" trên card đang ở giữa */
    onSelect?: (concept: ConceptItem) => void
}

const SIDE_SCALE = 0.88
const CARD_GAP = 20
const MIN_CARD_WIDTH = 240
const MAX_CARD_WIDTH = 400

export default function ConceptCarousel({ concepts, onSelect }: ConceptCarouselProps) {
    const [current, setCurrent] = useState(0)
    const [layout, setLayout] = useState({ containerWidth: 1200, windowWidth: 1200 })
    const trackRef = useRef<HTMLDivElement>(null)
    const touchX = useRef<number | null>(null)
    const total = concepts.length

    useEffect(() => {
        const el = trackRef.current
        if (!el) return
        const observer = new ResizeObserver(() =>
            setLayout({ containerWidth: el.clientWidth, windowWidth: window.innerWidth })
        )
        observer.observe(el)
        return () => observer.disconnect()
    }, [])

    // Khoảng từ mép carousel tới mép trong của nút prev/next (khớp class left-*/w-* của nút) + khoảng hở
    const { containerWidth, windowWidth } = layout
    const buttonEdge = (windowWidth < 640 ? 4 + 40 : windowWidth < 1024 ? 8 + 48 : 16 + 48) + 12
    const halfAvailable = containerWidth / 2 - buttonEdge
    // Chia đều không gian giữa 2 nút cho card giữa + 2 card bên (đã thu nhỏ) + 2 khe hở
    const cardWidth = Math.min(
        Math.max((2 * halfAvailable - 2 * CARD_GAP) / (1 + 2 * SIDE_SCALE), MIN_CARD_WIDTH),
        MAX_CARD_WIDTH
    )
    // Mép ngoài card bên chạm sát nút; trên mobile card bên được phép lấp dưới nút
    const sideX = Math.max(halfAvailable - (cardWidth * SIDE_SCALE) / 2, cardWidth * 0.55)

    const nextSlide = useCallback(() => setCurrent((p) => (p + 1) % total), [total])
    const prevSlide = useCallback(() => setCurrent((p) => (p - 1 + total) % total), [total])

    // Vị trí tương đối so với card đang chọn, xoay vòng trong [-floor(total/2) ... +floor(total/2)]
    const getOffset = (index: number) => {
        let offset = (index - current) % total
        if (offset > Math.floor(total / 2)) offset -= total
        if (offset < -Math.floor(total / 2)) offset += total
        return offset
    }

    // Hiệu ứng coverflow cho từng card
    const getCardStyle = (offset: number): React.CSSProperties => {
        const abs = Math.abs(offset)

        // Chỉ hiển thị 3 card: card giữa + 1 card mỗi bên. Card còn lại ẩn phía sau card giữa
        if (abs > 1) {
            return {
                transform: 'translateX(-50%) scale(0.7)',
                opacity: 0,
                zIndex: 0,
                pointerEvents: 'none',
            }
        }

        const x = abs === 0 ? 0 : Math.sign(offset) * sideX
        const scale = abs === 0 ? 1 : SIDE_SCALE

        return {
            width: cardWidth,
            transform: `translateX(calc(-50% + ${x}px)) scale(${scale})`,
            opacity: abs === 0 ? 1 : 0.55,
            zIndex: abs === 0 ? 30 : 20,
            filter: abs === 0 ? 'none' : 'blur(1.5px) brightness(0.97)',
            pointerEvents: 'auto',
        }
    }

    if (total === 0) return null

    return (
        <div
            className="relative w-full overflow-hidden py-4 select-none outline-none"
            tabIndex={0}
            role="region"
            aria-roledescription="carousel"
            aria-label="Những concept được yêu thích"
            onKeyDown={(e) => {
                if (e.key === 'ArrowLeft') prevSlide()
                if (e.key === 'ArrowRight') nextSlide()
            }}
        >
            <div
                ref={trackRef}
                className="relative h-[450px] sm:h-[480px] lg:h-[530px] w-full flex items-center justify-center"
                onTouchStart={(e) => {
                    touchX.current = e.touches[0].clientX
                }}
                onTouchEnd={(e) => {
                    if (touchX.current === null) return
                    const dx = e.changedTouches[0].clientX - touchX.current
                    if (Math.abs(dx) > 40) {
                        if (dx < 0) nextSlide()
                        else prevSlide()
                    }
                    touchX.current = null
                }}
            >
                {/* Nút điều hướng */}
                <button
                    onClick={prevSlide}
                    aria-label="Concept trước"
                    className="absolute left-1 sm:left-2 lg:left-4 top-1/2 -translate-y-1/2 z-40 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#FFFDF9]/95 backdrop-blur-md border border-[#EFE8DC] text-[#2E2728] hover:text-[#B77B82] hover:border-[#C89D7C] shadow-[0_8px_24px_rgba(200,157,124,0.2)] flex items-center justify-center transition-all hover:scale-110 active:scale-95 cursor-pointer"
                >
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
                <button
                    onClick={nextSlide}
                    aria-label="Concept tiếp theo"
                    className="absolute right-1 sm:right-2 lg:right-4 top-1/2 -translate-y-1/2 z-40 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#FFFDF9]/95 backdrop-blur-md border border-[#EFE8DC] text-[#2E2728] hover:text-[#B77B82] hover:border-[#C89D7C] shadow-[0_8px_24px_rgba(200,157,124,0.2)] flex items-center justify-center transition-all hover:scale-110 active:scale-95 cursor-pointer"
                >
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                </button>

                {concepts.map((item, index) => {
                    const offset = getOffset(index)
                    const isCenter = offset === 0

                    return (
                        <div
                            key={item.id}
                            onClick={() => {
                                if (!isCenter) setCurrent(index)
                            }}
                            style={getCardStyle(offset)}
                            aria-hidden={!isCenter}
                            className={`absolute top-0 left-1/2 h-[420px] sm:h-[450px] lg:h-[500px] bg-[#FFFDF9] rounded-3xl p-3.5 flex flex-col border border-[#EFE8DC] transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] motion-reduce:transition-none ${isCenter
                                ? 'shadow-[0_24px_50px_rgba(200,157,124,0.22)] ring-1 ring-[#C89D7C]/30'
                                : 'shadow-[0_10px_30px_rgba(200,157,124,0.08)] cursor-pointer'
                                }`}
                        >
                            {/* Ảnh */}
                            <div className="relative flex-1 min-h-0 w-full rounded-2xl overflow-hidden bg-[#F3EDE2]">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    sizes={`${MAX_CARD_WIDTH}px`}
                                    className="object-cover"
                                />
                                <div className="absolute top-3 left-3 bg-[#FFFDF9]/90 backdrop-blur-sm px-2.5 py-1 rounded-full text-[10px] uppercase font-medium tracking-wider text-[#2E2728] border border-[#EFE8DC]">
                                    {item.code}
                                </div>
                            </div>

                            {/* Thông tin */}
                            <div className="shrink-0 pt-3.5 px-1.5 space-y-1.5">
                                <h3 className="font-serif text-lg sm:text-xl font-medium text-[#2E2728] leading-snug truncate">
                                    {item.title}
                                </h3>
                                <p className="text-xs text-[#2E2728]/70 font-light leading-relaxed line-clamp-2 min-h-[2.4em]">
                                    {item.description}
                                </p>
                                <div className="flex items-center justify-between pt-2 border-t border-[#FAF5EF]">
                                    <div className="text-xs text-[#2E2728]/60 font-light">
                                        Từ <span className="font-medium text-[#2E2728]">{item.price}</span>
                                    </div>
                                    <button
                                        tabIndex={isCenter ? 0 : -1}
                                        onClick={(e) => {
                                            if (isCenter) {
                                                e.stopPropagation()
                                                onSelect?.(item)
                                            }
                                        }}
                                        className="py-1.5 px-4 rounded-full text-xs font-medium tracking-wide text-[#2E2728] bg-[#F3EDE2] hover:bg-[#C89D7C] hover:text-white transition-colors duration-300 cursor-pointer"
                                    >
                                        Xem chi tiết
                                    </button>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>

            {/* Dấu chấm phân trang */}
            <div className="mt-5 flex items-center justify-center gap-1.5">
                {concepts.map((c, i) => (
                    <button
                        key={c.id}
                        onClick={() => setCurrent(i)}
                        aria-label={`Đến concept ${i + 1}: ${c.title}`}
                        className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${i === current ? 'w-6 bg-[#C89D7C]' : 'w-1.5 bg-[#E8DEC8] hover:bg-[#C89D7C]/60'
                            }`}
                    />
                ))}
            </div>
        </div>
    )
}