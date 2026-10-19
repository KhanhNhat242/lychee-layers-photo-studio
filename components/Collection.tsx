'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import { createPortal } from 'react-dom'
import Image from 'next/image'
import { CloseOutlined, LeftOutlined, RightOutlined } from '@ant-design/icons'
import { EdgeDecor, FilmStrip, FlowerStems } from './SectionDecor'
import { revealDelay } from './reveal'

const photos = [
    '/images/library/764975781_17983487451061701_3636045946579933472_n.jpg',
    '/images/library/765652706_17983487487061701_1719604522210793188_n.jpg',
    '/images/library/766075491_17983487478061701_6713944062424248304_n.jpg',
    '/images/library/766075495_17983487520061701_1222515516559665240_n.jpg',
    '/images/library/766317124_17983487592061701_4439795435283454152_n.jpg',
    '/images/library/767244076_17983487529061701_4187325223144733272_n.jpg',
    '/images/library/767743922_17983487538061701_8594507113150659238_n.jpg',
    '/images/library/767819370_17983487496061701_6860743269219180509_n.jpg',
    '/images/library/768577341_17983487469061701_5334452822886529234_n.jpg',
    '/images/library/768662759_17983487460061701_7633468563299443607_n.jpg',
    '/images/library/774668663_17985404445061701_6311156792851912271_n.jpg',
    '/images/library/775245328_17985404463061701_5295672598680562023_n.jpg',
    '/images/library/776165610_17985404475061701_8767142822172335926_n.jpg',
    '/images/library/776497217_17985404436061701_343478812626197170_n.jpg',
    '/images/library/776553833_17985404532061701_3666223100271374980_n.jpg',
    '/images/library/778426496_17985404454061701_7225558674345568160_n.jpg',
    '/images/library/778426756_17985905142061701_4490819478481575903_n.jpg',
    '/images/library/778543520_17985404493061701_3900758443217201685_n.jpg',
    '/images/library/779167700_17985905163061701_4689542155376248204_n.jpg',
    '/images/library/779167721_17985905190061701_4160320773148136325_n.jpg',
    '/images/library/779167726_17985905205061701_2844090817971469752_n.jpg',
    '/images/library/779167733_17985905124061701_3259760987923221280_n.jpg',
    '/images/library/780127522_17985905139061701_9159119217931105096_n.jpg',
    '/images/library/780140088_17985404499061701_946340651558657246_n.jpg',
    '/images/library/782413399_17985905166061701_8237293039032008484_n.jpg',
]

// Vị trí từng ô trong lưới mặc định.
// Mobile: lưới 2 cột tự xếp. Desktop (md+): lưới 4 cột x 6 hàng giống bố cục mẫu.
const gridCells = [
    'row-span-2 md:col-start-1 md:row-start-1 md:row-span-4', // ảnh dọc lớn bên trái
    'md:col-start-2 md:row-start-1 md:row-span-2', // ảnh nhỏ cột 2 - trên
    'md:col-start-2 md:row-start-3 md:row-span-2', // ảnh nhỏ cột 2 - dưới
    'col-span-2 row-span-2 md:col-start-3 md:row-start-1 md:col-span-2 md:row-span-3', // ảnh ngang lớn bên phải
    'col-span-2 md:col-start-1 md:row-start-5 md:col-span-2 md:row-span-2', // ảnh ngang dưới bên trái
    'row-span-2 md:col-start-3 md:row-start-4 md:row-span-3', // ảnh nhỏ dưới - cột 3
]
// Ô "Xem thêm" chiếm vị trí ảnh nhỏ cuối cùng (cột 4)
const moreCell = 'row-span-2 md:col-start-4 md:row-start-4 md:row-span-3'

const Collection = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null)
    const touchX = useRef<number | null>(null)
    const total = photos.length
    const previewCount = gridCells.length
    const isOpen = activeIndex !== null

    const close = useCallback(() => setActiveIndex(null), [])
    const next = useCallback(() => setActiveIndex((i) => (i === null ? i : (i + 1) % total)), [total])
    const prev = useCallback(() => setActiveIndex((i) => (i === null ? i : (i - 1 + total) % total)), [total])

    // Phím tắt + khóa cuộn trang khi popup đang mở
    useEffect(() => {
        if (!isOpen) return
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') close()
            if (e.key === 'ArrowRight') next()
            if (e.key === 'ArrowLeft') prev()
        }
        const prevOverflow = document.body.style.overflow
        document.body.style.overflow = 'hidden'
        window.addEventListener('keydown', handleKey)
        return () => {
            document.body.style.overflow = prevOverflow
            window.removeEventListener('keydown', handleKey)
        }
    }, [isOpen, close, next, prev])

    return (
        <section id="collection" className="py-20 sm:py-24 bg-[#FAF8F5] relative isolate overflow-hidden">
            <EdgeDecor left={<FilmStrip />} right={<FlowerStems />} colorClassName="text-[#C08081]/30" />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header section */}
                <div className="text-center space-y-3 mb-12 sm:mb-16">
                    <h2 data-reveal="blur" className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#2E2728]">
                        Bộ Sưu Tập
                    </h2>
                    <div data-reveal="grow-c" style={revealDelay(250)} className="mx-auto h-[2px] w-16 rounded-full bg-[#C08081]" />
                    <p data-reveal="up" style={revealDelay(350)} className="text-sm sm:text-base text-[#2E2728]/70 font-light">
                        Những khoảnh khắc nghệ thuật được lưu giữ tại Lychee Layers Studio
                    </p>
                </div>

                {/* Lưới ảnh mặc định */}
                <div className="grid grid-cols-2 auto-rows-[140px] sm:auto-rows-[180px] md:grid-cols-4 md:grid-rows-6 md:auto-rows-auto md:h-[600px] lg:h-[680px] gap-3 sm:gap-4">
                    {photos.slice(0, previewCount).map((src, i) => (
                        <button
                            key={src}
                            onClick={() => setActiveIndex(i)}
                            aria-label={`Xem ảnh ${i + 1}`}
                            data-reveal="up"
                            style={revealDelay(i * 90)}
                            className={`group relative overflow-hidden rounded-2xl bg-[#EFE8DC] cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-[#C08081] ${gridCells[i]}`}
                        >
                            <Image
                                src={src}
                                alt={`Tác phẩm Lychee Layers ${i + 1}`}
                                fill
                                sizes="(max-width: 768px) 100vw, 50vw"
                                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-[#2E2728]/0 group-hover:bg-[#2E2728]/10 transition-colors duration-300" />
                        </button>
                    ))}

                    {/* Nút Xem thêm - mở popup tại ảnh tiếp theo */}
                    {total > previewCount && (
                        <button
                            onClick={() => setActiveIndex(previewCount)}
                            data-reveal="up"
                            style={revealDelay(previewCount * 90)}
                            className={`group relative overflow-hidden rounded-2xl bg-[#EFE8DC] cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-[#C08081] ${moreCell}`}
                        >
                            <Image
                                src={photos[previewCount]}
                                alt=""
                                fill
                                sizes="(max-width: 768px) 50vw, 25vw"
                                className="object-cover blur-[3px] scale-110 transition-transform duration-700 group-hover:scale-125"
                            />
                            <div className="absolute inset-0 bg-[#C08081]/55 group-hover:bg-[#B77B82]/65 transition-colors duration-300" />
                            <div className="relative h-full flex flex-col items-center justify-center text-white gap-1">
                                <span className="font-serif text-3xl sm:text-4xl">+{total - previewCount}</span>
                                <span className="text-xs sm:text-sm uppercase tracking-[0.2em] font-medium">Xem thêm</span>
                            </div>
                        </button>
                    )}
                </div>
            </div>

            {/* Popup xem ảnh lớn – render vào body để không bị giới hạn bởi stacking context (isolate) của section */}
            {isOpen && createPortal(
                <div
                    role="dialog"
                    aria-modal="true"
                    aria-label="Xem ảnh bộ sưu tập"
                    className="fixed inset-0 z-[100] bg-[#2E2728]/95 backdrop-blur-sm flex items-center justify-center"
                    onClick={close}
                    onTouchStart={(e) => {
                        touchX.current = e.touches[0].clientX
                    }}
                    onTouchEnd={(e) => {
                        if (touchX.current === null) return
                        const dx = e.changedTouches[0].clientX - touchX.current
                        if (Math.abs(dx) > 40) {
                            if (dx < 0) next()
                            else prev()
                        }
                        touchX.current = null
                    }}
                >
                    {/* Bộ đếm */}
                    <div className="absolute top-5 left-1/2 -translate-x-1/2 text-sm tracking-widest text-[#F5EFE6]/80 font-light">
                        {activeIndex + 1} / {total}
                    </div>

                    {/* Nút đóng */}
                    <button
                        onClick={close}
                        aria-label="Đóng"
                        className="absolute top-4 right-4 w-11 h-11 rounded-full bg-[#FFFDF9]/10 hover:bg-[#FFFDF9]/20 text-[#FFFDF9] flex items-center justify-center transition-colors cursor-pointer"
                    >
                        <CloseOutlined />
                    </button>

                    {/* Ảnh lớn */}
                    <div
                        className="relative w-[calc(100%-2rem)] sm:w-[calc(100%-10rem)] max-w-5xl h-[75vh] sm:h-[85vh]"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <Image
                            key={photos[activeIndex]}
                            src={photos[activeIndex]}
                            alt={`Tác phẩm Lychee Layers ${activeIndex + 1}`}
                            fill
                            sizes="100vw"
                            priority
                            className="object-contain lightbox-fade"
                        />
                    </div>

                    {/* Nút prev / next */}
                    <button
                        onClick={(e) => {
                            e.stopPropagation()
                            prev()
                        }}
                        aria-label="Ảnh trước"
                        className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-[#FFFDF9]/90 hover:bg-[#FFFDF9] text-[#2E2728] hover:text-[#B77B82] shadow-lg flex items-center justify-center transition-all hover:scale-110 active:scale-95 cursor-pointer"
                    >
                        <LeftOutlined />
                    </button>
                    <button
                        onClick={(e) => {
                            e.stopPropagation()
                            next()
                        }}
                        aria-label="Ảnh tiếp theo"
                        className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-[#FFFDF9]/90 hover:bg-[#FFFDF9] text-[#2E2728] hover:text-[#B77B82] shadow-lg flex items-center justify-center transition-all hover:scale-110 active:scale-95 cursor-pointer"
                    >
                        <RightOutlined />
                    </button>
                </div>,
                document.body
            )}
        </section>
    )
}

export default Collection
