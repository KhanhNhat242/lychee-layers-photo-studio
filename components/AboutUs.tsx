import Image from 'next/image'
import React from 'react'

const AboutUs = () => {
    return (
        <div>
            <section
                id="about-us"
                className="bg-[#FFFDF9] relative border-t border-[#FAF5EF] overflow-hidden"
            >
                <div className="w-full">
                    {/* Phần trên: Content bên trái, Ảnh minh họa sát mép phải màn hình */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
                        {/* Content bên trái */}
                        <div className="order-1 lg:order-1 px-6 sm:px-10 lg:pl-12 lg:pr-16 xl:pl-24 xl:pr-24 2xl:pl-36 flex justify-end items-center">
                            <div className="max-w-xl xl:max-w-2xl w-full space-y-5 lg:space-y-6 py-6 lg:py-12">
                                <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#2E2728] font-normal leading-[1.3] tracking-tight">
                                    Studio 4 concept – 1 địa điểm, <span className="italic text-[#A65B64]">không phải chạy show</span> nhiều nơi
                                </h3>
                                <p className="text-lg sm:text-xl lg:text-[21px] text-[#433839] leading-relaxed sm:leading-loose font-light">
                                    Từ cổ điển sang trọng đến hiện đại phá cách, mỗi góc trong studio đều được chăm chút như một bối cảnh riêng, đủ để một buổi chụp cho ra nhiều phong cách ảnh khác nhau.
                                </p>
                            </div>
                        </div>

                        {/* Ảnh minh họa sát mép phải màn hình (không border, không rounded, không zoom) */}
                        <div className="relative order-2 lg:order-2 w-full h-[380px] sm:h-[480px] lg:h-[540px] xl:h-[600px] overflow-hidden">
                            <Image
                                src="/images/aboutus1.jpg"
                                alt="Studio 4 concept tại Lychee Layers"
                                fill
                                sizes="(max-width: 1024px) 100vw, 50vw"
                                className="object-cover"
                            />
                            {/* Cạnh Trái (tiếp giáp với text) */}
                            <div className="pointer-events-none absolute inset-y-0 left-0 w-32 sm:w-48 lg:w-64 xl:w-80 bg-gradient-to-r from-[#FFFDF9] via-[#FFFDF9]/70 to-transparent z-10" />
                        </div>
                    </div>

                    {/* Phần dưới: Ảnh minh họa sát mép trái màn hình, Content bên phải */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
                        {/* Ảnh minh họa sát mép trái màn hình (không border, không rounded, không zoom) */}
                        <div className="relative order-2 lg:order-1 w-full h-[380px] sm:h-[480px] lg:h-[540px] xl:h-[600px] overflow-hidden">
                            <Image
                                src="/images/aboutus2.jpg"
                                alt="Thiết bị studio chuyên nghiệp tại Lychee Layers"
                                fill
                                sizes="(max-width: 1024px) 100vw, 50vw"
                                className="object-cover"
                            />
                            {/* Cạnh Phải (tiếp giáp với text) */}
                            <div className="pointer-events-none absolute inset-y-0 right-0 w-32 sm:w-48 lg:w-64 xl:w-80 bg-gradient-to-l from-[#FFFDF9] via-[#FFFDF9]/70 to-transparent z-10" />
                        </div>

                        {/* Content bên phải */}
                        <div className="order-1 lg:order-2 px-6 sm:px-10 lg:pr-12 lg:pl-16 xl:pr-24 xl:pl-24 2xl:pr-36 flex justify-start items-center">
                            <div className="max-w-xl xl:max-w-2xl w-full space-y-5 lg:space-y-6 py-6 lg:py-12">
                                <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#2E2728] font-normal leading-[1.3] tracking-tight">
                                    Thiết bị studio <span className="italic text-[#A65B64]">chuyên nghiệp &amp; đầy đủ</span>
                                </h3>
                                <p className="text-lg sm:text-xl lg:text-[21px] text-[#433839] leading-relaxed sm:leading-loose font-light">
                                    Đèn Godox Qt600III &amp; Qt1200III, phông chụp, tản sáng, đèn quay – sẵn sàng cho cả ảnh nghệ thuật và video chất lượng cao.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default AboutUs