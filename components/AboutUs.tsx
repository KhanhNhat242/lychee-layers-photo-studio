import Image from 'next/image'
import React from 'react'

const AboutUs = () => {
    return (
        <div>
            <section
                id="about-us"
                className="py-24 sm:py-32 lg:py-36 bg-[#FFFDF9] relative border-t border-[#FAF5EF]"
            >
                <div className="text-center max-w-2xl mx-auto space-y-3 mb-14 sm:mb-20">
                    <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#2E2728]">
                        Về chúng tôi — Lychee Layers
                    </h2>
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="space-y-16 lg:space-y-24">
                        {/* Phần trên: Content bên trái, Ảnh minh họa bên phải */}
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                            {/* Content bên trái */}
                            <div className="lg:col-span-7 space-y-5 order-1 lg:order-1">
                                <div className="space-y-3 text-base sm:text-lg text-[#2E2728]/85 leading-relaxed font-light">
                                    <p>
                                        <strong className="font-semibold text-[#2E2728]">Studio 4 concept – 1 địa điểm, không phải chạy show nhiều nơi.</strong> Từ cổ điển sang trọng đến hiện đại phá cách, mỗi góc trong studio đều được chăm chút như một bối cảnh riêng, đủ để một buổi chụp cho ra nhiều phong cách ảnh khác nhau.
                                    </p>
                                </div>
                            </div>

                            {/* Ảnh minh họa bên phải */}
                            <div className="lg:col-span-5 flex justify-center order-2 lg:order-2">
                                <div className="relative w-full max-w-sm sm:max-w-md aspect-[3/4] p-3 rounded-3xl bg-[#FAF8F5] border border-[#EFE8DC] shadow-[0_15px_40px_rgba(200,157,124,0.08)]">
                                    <div className="relative w-full h-full rounded-2xl overflow-hidden">
                                        <Image
                                            src="/images/aboutus1.jpg"
                                            alt="Studio 4 concept tại Lychee Layers"
                                            fill
                                            sizes="(max-width: 768px) 100vw, 40vw"
                                            className="object-cover transition-transform duration-700 hover:scale-105"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Phần dưới: Ảnh minh họa bên trái, Content bên phải */}
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                            {/* Ảnh minh họa bên trái */}
                            <div className="lg:col-span-5 flex justify-center order-2 lg:order-1">
                                <div className="relative w-full max-w-sm sm:max-w-md aspect-[3/4] p-3 rounded-3xl bg-[#FAF8F5] border border-[#EFE8DC] shadow-[0_15px_40px_rgba(200,157,124,0.08)]">
                                    <div className="relative w-full h-full rounded-2xl overflow-hidden">
                                        <Image
                                            src="/images/aboutus2.jpg"
                                            alt="Thiết bị studio chuyên nghiệp tại Lychee Layers"
                                            fill
                                            sizes="(max-width: 768px) 100vw, 40vw"
                                            className="object-cover transition-transform duration-700 hover:scale-105"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Content bên phải */}
                            <div className="lg:col-span-7 space-y-5 order-1 lg:order-2">
                                <div className="space-y-3 text-base sm:text-lg text-[#2E2728]/85 leading-relaxed font-light">
                                    <p className="text-[#433839]">
                                        <span className="font-medium text-[#2E2728]">Thiết bị đầy đủ:</span> Đèn Godox Qt600III &amp; Qt1200III, phông chụp, tản sáng, đèn quay – sẵn sàng cho cả ảnh và video.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default AboutUs