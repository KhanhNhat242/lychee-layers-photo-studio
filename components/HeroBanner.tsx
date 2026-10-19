import Image from 'next/image'
import { revealDelay } from './reveal'

const HeroBanner = () => {
    return (
        <section
            id="hero"
            className="relative isolate min-h-[min(100svh,900px)] flex items-center justify-center overflow-hidden pt-28 pb-14 sm:pt-32 sm:pb-16 lg:pt-28 lg:pb-14 xl:pt-32 xl:pb-16"
        >
            {/* Ảnh nền Full Màn Hình – hiện dần và "lắng" từ phóng to về đúng cỡ */}
            <div data-reveal="" className="absolute inset-0 -z-10 overflow-hidden">
                <Image
                    src="/images/banner4.jpg"
                    alt="Lychee Layers Studio Banner"
                    fill
                    priority
                    quality={95}
                    className="reveal-zoom object-cover object-[center_40%] pointer-events-none select-none"
                    sizes="100vw"
                />
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div id="hero-content" className="max-w-3xl xl:max-w-4xl space-y-4 sm:space-y-5 lg:space-y-6 text-center sm:text-left">
                    {/* Đường nhấn mảnh */}
                    <div
                        data-reveal="grow-x"
                        style={revealDelay(200)}
                        className="h-[2px] w-16 sm:w-20 mx-auto sm:mx-0 rounded-full bg-[#C08081]"
                    />

                    {/* Tiêu đề chính (bọc ngoài để filter của hiệu ứng không đè drop-shadow) */}
                    <div data-reveal="blur" style={revealDelay(350)}>
                        <h1 className="font-serif text-3xl sm:text-5xl lg:text-5xl xl:text-6xl font-semibold text-[#1F1A1B] leading-[1.22] tracking-tight drop-shadow-[0_2px_14px_rgba(255,253,249,0.85)]">
                            Chạm vào{' '}
                            <span className="text-[#A65B64] font-medium italic decoration-[#E8A598]/60">
                                từng tầng cảm xúc
                            </span>{' '}
                            qua từng khung hình
                        </h1>
                    </div>

                    {/* Đoạn mô tả */}
                    <div data-reveal="up" style={revealDelay(650)}>
                        <p className="text-base sm:text-lg lg:text-lg xl:text-xl text-[#2E2728] font-medium leading-relaxed max-w-2xl xl:max-w-3xl drop-shadow-[0_1px_10px_rgba(255,253,249,0.9)]">
                            Lưu giữ những khoảnh khắc tự nhiên, nữ tính và đầy chất thơ của riêng bạn tại{' '}
                            <span className="text-[#8C535A] font-semibold">Lychee Layers Studio</span>.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroBanner