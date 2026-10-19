'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import { createPortal } from 'react-dom'
import Image from 'next/image'
import { CloseOutlined, LeftOutlined, RightOutlined } from '@ant-design/icons'
import { EdgeDecor, FilmStrip, FlowerStems } from './SectionDecor'
import { revealDelay } from './reveal'

// Kích thước gốc (px) của từng ảnh để hiển thị đúng tỉ lệ, không bị cắt
const photos = [
    { src: '/images/library/764975781_17983487451061701_3636045946579933472_n.jpg', width: 1639, height: 2048 },
    { src: '/images/library/765652706_17983487487061701_1719604522210793188_n.jpg', width: 1639, height: 2048 },
    { src: '/images/library/766075491_17983487478061701_6713944062424248304_n.jpg', width: 1639, height: 2048 },
    { src: '/images/library/766075495_17983487520061701_1222515516559665240_n.jpg', width: 1639, height: 2048 },
    { src: '/images/library/766317124_17983487592061701_4439795435283454152_n.jpg', width: 1921, height: 2401 },
    { src: '/images/library/767244076_17983487529061701_4187325223144733272_n.jpg', width: 1639, height: 2048 },
    { src: '/images/library/767743922_17983487538061701_8594507113150659238_n.jpg', width: 1639, height: 2048 },
    { src: '/images/library/767819370_17983487496061701_6860743269219180509_n.jpg', width: 1638, height: 2047 },
    { src: '/images/library/768577341_17983487469061701_5334452822886529234_n.jpg', width: 1639, height: 2048 },
    { src: '/images/library/768662759_17983487460061701_7633468563299443607_n.jpg', width: 1639, height: 2048 },
    { src: '/images/library/774668663_17985404445061701_6311156792851912271_n.jpg', width: 1290, height: 1720 },
    { src: '/images/library/775245328_17985404463061701_5295672598680562023_n.jpg', width: 1290, height: 1712 },
    { src: '/images/library/776165610_17985404475061701_8767142822172335926_n.jpg', width: 1290, height: 1717 },
    { src: '/images/library/776497217_17985404436061701_343478812626197170_n.jpg', width: 1290, height: 1720 },
    { src: '/images/library/776553833_17985404532061701_3666223100271374980_n.jpg', width: 1290, height: 1720 },
    { src: '/images/library/778426496_17985404454061701_7225558674345568160_n.jpg', width: 1290, height: 1720 },
    { src: '/images/library/778426756_17985905142061701_4490819478481575903_n.jpg', width: 1290, height: 1703 },
    { src: '/images/library/778543520_17985404493061701_3900758443217201685_n.jpg', width: 1290, height: 1720 },
    { src: '/images/library/779167700_17985905163061701_4689542155376248204_n.jpg', width: 1290, height: 1704 },
    { src: '/images/library/779167721_17985905190061701_4160320773148136325_n.jpg', width: 1290, height: 1701 },
    { src: '/images/library/779167726_17985905205061701_2844090817971469752_n.jpg', width: 1290, height: 1701 },
    { src: '/images/library/779167733_17985905124061701_3259760987923221280_n.jpg', width: 1290, height: 1708 },
    { src: '/images/library/780127522_17985905139061701_9159119217931105096_n.jpg', width: 1290, height: 1701 },
    { src: '/images/library/780140088_17985404499061701_946340651558657246_n.jpg', width: 1290, height: 1720 },
    { src: '/images/library/782413399_17985905166061701_8237293039032008484_n.jpg', width: 1290, height: 1708 },
]

// Bố cục desktop: 6 cột hình chữ V, tiêu đề nằm ở khoảng trống giữa phía dưới (cột 2–5).
// Số đo tính theo bội số chiều rộng cột: offset = khoảng đẩy xuống, tiles = chiều cao từng ô.
// Mọi ô có tỉ lệ rộng/cao <= 1/1.36 ≈ 0.735, hẹp hơn mọi ảnh gốc (0.75–0.8)
// nên object-cover chỉ cắt bớt 2 bên, luôn giữ trọn chiều cao ảnh.
const desktopColumns = [
    { offset: 0.3, tiles: [1.42, 1.42] },
    { offset: 0.3, tiles: [1.75] },
    { offset: 0.05, tiles: [1.5] },
    { offset: 0.05, tiles: [1.5] },
    { offset: 0.3, tiles: [1.75] },
    { offset: 0.3, tiles: [1.42, 1.42] },
]

// Tổng số ô = 8; ô cuối cùng (cột phải, dưới) là nút "Xem thêm"
const TILE_COUNT = desktopColumns.reduce((n, c) => n + c.tiles.length, 0)
const PREVIEW_COUNT = TILE_COUNT - 1

// Gán ảnh lần lượt vào từng cột desktop (cột 1 nhận ảnh 0-1, cột 2 nhận 2-3, ...)
const columnsWithPhotos = desktopColumns.map((col, c) => {
    const start = desktopColumns.slice(0, c).reduce((n, prev) => n + prev.tiles.length, 0)
    return { ...col, indices: col.tiles.map((_, t) => start + t) }
})

const Collection = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null)
    const touchX = useRef<number | null>(null)
    const total = photos.length
    const previewCount = PREVIEW_COUNT
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

    const tileClass =
        'group relative block w-full overflow-hidden rounded-2xl bg-[#EFE8DC] cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-[#C08081]'

    // Một ô ảnh (hoặc ô "Xem thêm" khi index === previewCount); kích thước do className/style của ô quyết định
    const renderTile = (index: number, extra: { className?: string; style?: React.CSSProperties; sizes: string; delay: number }) => {
        const photo = photos[index]
        const isMore = index === previewCount
        return (
            <button
                key={photo.src}
                onClick={() => setActiveIndex(index)}
                aria-label={isMore ? `Xem thêm ${total - previewCount} ảnh` : `Xem ảnh ${index + 1}`}
                data-reveal="up"
                style={{ ...revealDelay(extra.delay), ...extra.style }}
                className={`${tileClass} ${extra.className ?? ''}`}
            >
                <Image
                    src={photo.src}
                    alt={isMore ? '' : `Tác phẩm Lychee Layers ${index + 1}`}
                    fill
                    sizes={extra.sizes}
                    className={`object-cover transition-transform duration-700 ease-out ${isMore ? 'blur-[3px] scale-110 group-hover:scale-125' : 'group-hover:scale-105'
                        }`}
                />
                {isMore ? (
                    <>
                        <div className="absolute inset-0 bg-[#C08081]/55 group-hover:bg-[#B77B82]/65 transition-colors duration-300" />
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-white gap-1">
                            <span className="font-serif text-2xl xl:text-3xl">+{total - previewCount}</span>
                            <span className="text-[10px] xl:text-xs uppercase tracking-[0.2em] font-medium">Xem thêm</span>
                        </div>
                    </>
                ) : (
                    <div className="absolute inset-0 bg-[#2E2728]/0 group-hover:bg-[#2E2728]/10 transition-colors duration-300" />
                )}
            </button>
        )
    }

    return (
        <section id="collection" className="py-20 sm:py-24 bg-[#FAF8F5] relative isolate overflow-hidden">
            <EdgeDecor left={<FilmStrip />} right={<FlowerStems />} colorClassName="text-[#C08081]/30" />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="relative">
                    {/* Desktop: 8 cột hình chữ V */}
                    <div className="hidden lg:flex items-start gap-4">
                        {columnsWithPhotos.map((col, c) => (
                            <div key={c} className="flex-1 min-w-0 flex flex-col gap-4">
                                {/* Khoảng đẩy xuống, tỉ lệ theo chiều rộng cột */}
                                <div style={{ aspectRatio: `1 / ${col.offset}` }} />
                                {col.indices.map((index, t) =>
                                    renderTile(index, {
                                        style: { aspectRatio: `1 / ${col.tiles[t]}` },
                                        sizes: '(min-width: 1280px) 210px, 17vw',
                                        // Hiện từ giữa toả ra 2 bên
                                        delay: Math.abs(c - 2.5) * 130 + t * 120,
                                    })
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Tiêu đề: mobile nằm trên lưới; desktop nằm trong khoảng trống giữa phía dưới (cột 2–5) */}
                    <div className="text-center space-y-3 mb-10 sm:mb-12 lg:mb-0 lg:absolute lg:bottom-35 lg:left-1/6 lg:right-1/6 lg:px-4">
                        <span
                            data-reveal="up"
                            className="inline-block px-4 py-1 rounded-full border border-[#DFCDBA] bg-[#FFFDF9] text-[11px] uppercase tracking-[0.2em] text-[#B77B82] font-medium"
                        >
                            Lychee Layers Collection
                        </span>
                        <h2 data-reveal="blur" style={revealDelay(150)} className="font-serif text-3xl sm:text-4xl xl:text-5xl font-normal text-[#2E2728]">
                            Bộ Sưu Tập
                        </h2>
                        <p data-reveal="up" style={revealDelay(300)} className="text-sm sm:text-base text-[#2E2728]/70 font-light">
                            Những khoảnh khắc nghệ thuật được lưu giữ tại Lychee Layers Studio
                        </p>
                    </div>

                    {/* Mobile / tablet: lưới đều, ô 3:4 (hẹp hơn ảnh gốc nên chỉ cắt 2 bên) */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 lg:hidden">
                        {Array.from({ length: TILE_COUNT }, (_, i) =>
                            renderTile(i, {
                                className: 'aspect-[3/4]',
                                sizes: '(max-width: 768px) 50vw, 25vw',
                                delay: (i % 4) * 90,
                            })
                        )}
                    </div>
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
                            key={photos[activeIndex].src}
                            src={photos[activeIndex].src}
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
