import Image from 'next/image'
import React from 'react'
import { revealDelay } from './reveal'

const AboutUs = () => {
    return (
        <div>
            <section
                id="about-us"
                className="bg-[#FFFDF9] relative border-t border-[#FAF5EF] overflow-hidden py-20"
            >
                <div className="text-center space-y-3 mb-10">
                    <h2 data-reveal="blur" className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#2E2728]">
                        Về chúng tôi
                    </h2>
                    <div data-reveal="grow-c" style={revealDelay(250)} className="mx-auto h-[2px] w-16 rounded-full bg-[#C08081]" />
                </div>
                {/* Lưới thẻ bento: hàng 1 = ảnh rộng + thẻ chữ, hàng 2 = thẻ chữ + thẻ màu rộng có ảnh */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 md:auto-rows-[300px] lg:auto-rows-[340px] gap-4 lg:gap-5">
                    {/* Thẻ 1: ảnh thiết bị studio phủ kín, chữ đè lên phía dưới */}
                    <div
                        data-reveal="up"
                        className="relative min-h-[320px] md:min-h-0 md:col-span-2 rounded-3xl overflow-hidden flex flex-col justify-end p-6 sm:p-8"
                    >
                        <Image
                            src="/images/aboutus2.jpg"
                            alt="Thiết bị studio chuyên nghiệp tại Lychee Layers"
                            fill
                            sizes="(max-width: 768px) 100vw, 66vw"
                            className="reveal-zoom object-cover object-[center_45%]"
                        />
                        {/* Phủ tối phía dưới + bên trái để chữ không lẫn vào chi tiết trong ảnh */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#2E2728]/90 via-[#2E2728]/45 to-[#2E2728]/5" />
                        <div className="absolute inset-0 bg-gradient-to-r from-[#2E2728]/55 via-[#2E2728]/15 to-transparent" />
                        <div className="relative max-w-lg space-y-2">
                            <h3 className="font-serif text-2xl sm:text-3xl text-white font-normal leading-snug">
                                Thiết bị studio chuyên nghiệp &amp; đầy đủ
                            </h3>
                            <p className="text-sm sm:text-base text-white/85 font-light leading-relaxed">
                                Đèn Godox Qt600III &amp; Qt1200III, phông chụp, tản sáng, đèn quay – sẵn sàng cho cả ảnh nghệ thuật và video chất lượng cao.
                            </p>
                        </div>
                    </div>

                    {/* Thẻ 2: ảnh nền từ thư viện, chữ trắng phía dưới */}
                    <div
                        data-reveal="up"
                        style={revealDelay(150)}
                        className="relative min-h-[300px] md:min-h-0 rounded-3xl overflow-hidden bg-[#DFCDBA] flex flex-col justify-end p-6 sm:p-8"
                    >
                        <Image
                            src="/images/library/779167733_17985905124061701_3259760987923221280_n.jpg"
                            alt="Makeup và trang phục tại Lychee Layers"
                            fill
                            sizes="(max-width: 768px) 100vw, 33vw"
                            className="reveal-zoom object-cover object-[center_30%]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#2E2728]/85 via-[#2E2728]/35 to-transparent" />
                        <div className="relative space-y-2">
                            <h3 className="font-serif text-2xl text-white font-normal leading-snug">
                                Makeup &amp; trang phục <span className="italic text-[#F2D1D1]">tại studio</span>
                            </h3>
                            <p className="text-sm text-white/85 font-light leading-relaxed">
                                Makeup, làm tóc tự nhiên và các bộ trang phục thiết kế sẵn sàng ngay tại studio cho từng concept.
                            </p>
                        </div>
                    </div>

                    {/* Thẻ 3: ảnh nền từ thư viện, chữ trắng phía dưới */}
                    <div
                        data-reveal="up"
                        style={revealDelay(100)}
                        className="relative min-h-[300px] md:min-h-0 rounded-3xl overflow-hidden bg-[#DFCDBA] flex flex-col justify-end p-6 sm:p-8"
                    >
                        <Image
                            src="/images/library/776497217_17985404436061701_343478812626197170_n.jpg"
                            alt="Góc chụp nghệ thuật tại Lychee Layers"
                            fill
                            sizes="(max-width: 768px) 100vw, 33vw"
                            className="reveal-zoom object-cover object-[center_30%]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#2E2728]/85 via-[#2E2728]/35 to-transparent" />
                        <p className="relative text-sm sm:text-base text-white/90 font-light leading-relaxed">
                            Từ cổ điển sang trọng đến hiện đại phá cách, mỗi góc trong studio đều được chăm chút như một bối cảnh riêng, đủ để một buổi chụp cho ra nhiều phong cách ảnh khác nhau.
                        </p>
                    </div>

                    {/* Thẻ 4: nền hồng đất, ảnh người mẫu bên phải hoà dần vào nền */}
                    <div
                        data-reveal="up"
                        style={revealDelay(250)}
                        className="relative min-h-[320px] md:min-h-0 md:col-span-2 rounded-3xl overflow-hidden bg-[#A65B64] flex flex-col justify-end p-6 sm:p-8"
                    >
                        <div className="absolute inset-y-0 right-0 w-3/5 sm:w-1/2">
                            <Image
                                src="/images/library/766075495_17983487520061701_1222515516559665240_n.jpg"
                                alt="Ảnh chân dung tại Lychee Layers"
                                fill
                                sizes="(max-width: 768px) 60vw, 33vw"
                                className="reveal-zoom object-cover object-top"
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-[#A65B64] via-[#A65B64]/30 to-transparent" />
                        </div>
                        <div className="relative max-w-[55%] sm:max-w-[45%] space-y-2">
                            <h3 className="font-serif text-2xl sm:text-3xl text-white font-normal leading-snug">
                                Studio 4 concept – 1 địa điểm, không phải chạy show nhiều nơi
                            </h3>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default AboutUs