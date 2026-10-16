import Image from 'next/image'
import React from 'react'
import { CheckOutlined, CameraOutlined } from '@ant-design/icons'

const HeroBanner = () => {
    return (
        <section
            id="hero"
            className="relative pt-8 pb-20 sm:pt-14 sm:pb-28 lg:pt-20 lg:pb-36 overflow-hidden bg-gradient-to-b from-[#FAF8F5] to-[#FFFDF9]"
        >
            {/* Họa tiết trang trí nền mềm mại */}
            <div className="absolute top-10 right-1/4 w-80 h-80 rounded-full bg-[#F8E7E7]/40 blur-3xl -z-10 pointer-events-none" />
            <div className="absolute bottom-10 left-10 w-96 h-96 rounded-full bg-[#F3EDE2]/60 blur-3xl -z-10 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
                    {/* Cột trái: Tiêu đề & Thông điệp thương hiệu */}
                    <div className="lg:col-span-6 space-y-6 lg:space-y-8 pr-0 lg:pr-6 text-center lg:text-left">
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F3EDE2] border border-[#EFE8DC] text-xs tracking-wider uppercase text-[#C89D7C] font-medium mx-auto lg:mx-0">
                            <span className="w-2 h-2 rounded-full bg-[#C89D7C] animate-pulse" />
                            Lychee Layers Photography Studio
                        </div>

                        <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-[#2E2728] leading-[1.2] tracking-tight">
                            Chạm vào từng tầng cảm xúc qua từng khung hình
                        </h1>

                        <p className="text-base sm:text-lg text-[#2E2728]/80 leading-relaxed max-w-xl mx-auto lg:mx-0 font-light">
                            Lưu giữ những khoảnh khắc tự nhiên, nữ tính và đầy chất thơ của riêng bạn tại Lychee Layers Studio.
                        </p>

                        {/* 2 CTA cạnh nhau: Khám phá Concept (nền be) & Đặt lịch chụp (viền mảnh) */}
                        <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4">
                            <a
                                href="#concepts"
                                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full text-sm font-medium tracking-wide text-white bg-[#C89D7C] hover:bg-[#B88D6C] shadow-[0_4px_16px_rgba(200,157,124,0.3)] hover:shadow-[0_6px_20px_rgba(200,157,124,0.4)] transition-all duration-300 active:scale-95"
                            >
                                Khám phá Concept
                            </a>

                            <a
                                href="#booking"
                                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full text-sm font-medium tracking-wide text-[#2E2728] bg-transparent border border-[#C89D7C] hover:bg-[#F3EDE2] transition-all duration-300 active:scale-95"
                            >
                                Đặt lịch chụp
                            </a>
                        </div>

                        {/* Cam kết nhỏ */}
                        <div className="pt-4 flex items-center justify-center lg:justify-start gap-6 text-xs text-[#2E2728]/70">
                            <span className="flex items-center gap-1.5">
                                <CheckOutlined className="text-[#C89D7C]" /> Makeup theo layout cá nhân
                            </span>
                            <span className="flex items-center gap-1.5">
                                <CheckOutlined className="text-[#C89D7C]" /> Không gian studio ấm áp
                            </span>
                        </div>
                    </div>

                    {/* Cột phải: Hình ảnh nàng thơ đầy cảm xúc */}
                    <div className="lg:col-span-6 flex justify-center">
                        <div className="relative w-full max-w-md lg:max-w-lg aspect-[4/5] sm:aspect-[3/4] p-3 sm:p-4 rounded-3xl bg-gradient-to-tr from-[#F3EDE2] to-[#FFFDF9] border border-[#EFE8DC] shadow-[0_20px_50px_rgba(200,157,124,0.12)]">
                            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-inner">
                                <Image
                                    src="/images/library/774668663_17985404445061701_6311156792851912271_n.jpg"
                                    alt="Nàng thơ Lychee Layers Studio"
                                    fill
                                    priority
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    className="object-cover transition-transform duration-700 hover:scale-105"
                                />
                            </div>

                            {/* Tag nhỏ nổi trên góc ảnh */}
                            <div className="absolute -bottom-4 right-6 sm:right-10 bg-[#FFFDF9]/95 backdrop-blur-md px-5 py-3 rounded-2xl border border-[#EFE8DC] shadow-[0_8px_25px_rgba(46,39,40,0.08)] flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-[#F8E7E7] flex items-center justify-center text-[#B77B82]">
                                    <CameraOutlined className="text-base" />
                                </div>
                                <div>
                                    <div className="font-serif text-sm font-medium text-[#2E2728]">Bộ ảnh Nàng Thơ</div>
                                    <div className="text-[11px] text-[#C89D7C] font-light">Natural & Poetic Style</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroBanner