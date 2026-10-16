import Image from 'next/image'
import React from 'react'
import { SmileOutlined, SkinOutlined, PictureOutlined, MessageOutlined, CameraOutlined } from '@ant-design/icons'

const AboutUs = () => {
    return (
        <div>
            <section
                id="about"
                className="py-24 sm:py-32 lg:py-36 bg-[#FFFDF9] relative border-t border-[#FAF5EF]"
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                        {/* Cột trái: Bức ảnh chân dung rất có thần thái của khách hàng */}
                        <div className="lg:col-span-5 flex justify-center order-2 lg:order-1">
                            <div className="relative w-full max-w-sm sm:max-w-md aspect-[3/4] p-3 rounded-3xl bg-[#FAF8F5] border border-[#EFE8DC] shadow-[0_15px_40px_rgba(200,157,124,0.08)]">
                                <div className="relative w-full h-full rounded-2xl overflow-hidden">
                                    <Image
                                        src="/images/library/767244076_17983487529061701_4187325223144733272_n.jpg"
                                        alt="Khách hàng thần thái tại Lychee Layers"
                                        fill
                                        sizes="(max-width: 768px) 100vw, 40vw"
                                        className="object-cover transition-transform duration-700 hover:scale-105"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Cột phải: Câu chuyện nhỏ & 3 giá trị cốt lõi */}
                        <div className="lg:col-span-7 space-y-6 lg:space-y-8 order-1 lg:order-2">
                            <div className="text-xs font-semibold tracking-widest uppercase text-[#C89D7C]">
                                Câu chuyện thương hiệu
                            </div>

                            <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-normal text-[#2E2728] leading-tight">
                                Về chúng tôi — Lychee Layers
                            </h2>

                            <p className="text-base sm:text-lg text-[#2E2728]/85 leading-relaxed font-light">
                                Tại Lychee Layers, chúng tôi tin rằng mỗi cá nhân là một câu chuyện nghệ thuật độc bản. Không chỉ là bấm máy, chúng tôi trân trọng từng &ldquo;tầng&rdquo; cảm xúc, từng nét tự nhiên và sự ngọt ngào rất riêng của bạn.
                            </p>

                            <p className="text-sm sm:text-base text-[#2E2728]/70 leading-relaxed font-light">
                                Mỗi khung hình được ra đời từ sự lắng nghe tỉ mỉ, kết hợp sự mềm mại của ánh sáng và sự tự nhiên trong tâm trạng, để bạn luôn cảm thấy tự tin và rạng rỡ nhất là chính mình.
                            </p>

                            {/* 3 Cột nhỏ bên dưới kèm icon thanh mảnh */}
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 border-t border-[#EFE8DC]">
                                {/* Cột 1 */}
                                <div className="flex flex-col items-start space-y-2 p-3 rounded-2xl bg-[#FAF8F5]/80 border border-[#EFE8DC]/60 hover:bg-[#F3EDE2]/50 transition-colors">
                                    <div className="w-10 h-10 rounded-full bg-[#F8E7E7] flex items-center justify-center text-[#B77B82]">
                                        <SmileOutlined className="text-lg" />
                                    </div>
                                    <div className="font-serif text-base font-medium text-[#2E2728]">Makeup tự nhiên</div>
                                    <p className="text-xs text-[#2E2728]/70 font-light leading-relaxed">
                                        Layout trang điểm trong trẻo, tôn vinh làn da và đường nét vốn có.
                                    </p>
                                </div>

                                {/* Cột 2 */}
                                <div className="flex flex-col items-start space-y-2 p-3 rounded-2xl bg-[#FAF8F5]/80 border border-[#EFE8DC]/60 hover:bg-[#F3EDE2]/50 transition-colors">
                                    <div className="w-10 h-10 rounded-full bg-[#F3EDE2] flex items-center justify-center text-[#C89D7C]">
                                        <SkinOutlined className="text-lg" />
                                    </div>
                                    <div className="font-serif text-base font-medium text-[#2E2728]">Trang phục thiết kế</div>
                                    <p className="text-xs text-[#2E2728]/70 font-light leading-relaxed">
                                        Tuyển chọn đầm váy, áo dài và cổ trang cao cấp, chuẩn form dáng.
                                    </p>
                                </div>

                                {/* Cột 3 */}
                                <div className="flex flex-col items-start space-y-2 p-3 rounded-2xl bg-[#FAF8F5]/80 border border-[#EFE8DC]/60 hover:bg-[#F3EDE2]/50 transition-colors">
                                    <div className="w-10 h-10 rounded-full bg-[#F8E7E7] flex items-center justify-center text-[#B77B82]">
                                        <PictureOutlined className="text-lg" />
                                    </div>
                                    <div className="font-serif text-base font-medium text-[#2E2728]">Hậu kỳ tỉ mỉ</div>
                                    <p className="text-xs text-[#2E2728]/70 font-light leading-relaxed">
                                        Chỉnh sửa làn da mịn màng, giữ màu sắc tự nhiên và cảm xúc chân thật.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section
                id="workflow"
                className="py-24 sm:py-32 lg:py-36 bg-[#F8F2EB] relative border-y border-[#EFE8DC]"
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-xl mx-auto space-y-3 mb-16">
                        <div className="text-xs font-semibold tracking-widest uppercase text-[#C89D7C]">
                            Quy trình studio
                        </div>
                        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#2E2728]">
                            Quy trình 4 bước
                        </h2>
                        <p className="text-sm sm:text-base text-[#2E2728]/70 font-light">
                            Trải nghiệm chụp ảnh thảnh thơi, chu đáo từ lúc lên ý tưởng đến khi nhận sản phẩm hoàn thiện.
                        </p>
                    </div>

                    {/* Trải ngang 4 bước */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
                        {/* Bước 1 */}
                        <div className="relative bg-[#FFFDF9] rounded-2xl p-6 border border-[#EFE8DC] shadow-[0_4px_18px_rgba(200,157,124,0.06)] hover:shadow-md transition-shadow">
                            <div className="flex items-center justify-between mb-4">
                                <div className="w-11 h-11 rounded-full bg-[#F8E7E7] text-[#B77B82] flex items-center justify-center text-lg">
                                    <MessageOutlined />
                                </div>
                                <span className="font-serif text-2xl font-light text-[#C89D7C]/60">01</span>
                            </div>
                            <h3 className="font-serif text-base font-semibold text-[#2E2728] mb-2">
                                1. Tư vấn & Ý tưởng
                            </h3>
                            <p className="text-xs sm:text-sm text-[#2E2728]/75 font-light leading-relaxed">
                                Lắng nghe mong muốn, lựa chọn concept phù hợp với phong cách và cá tính của bạn.
                            </p>
                        </div>

                        {/* Bước 2 */}
                        <div className="relative bg-[#FFFDF9] rounded-2xl p-6 border border-[#EFE8DC] shadow-[0_4px_18px_rgba(200,157,124,0.06)] hover:shadow-md transition-shadow">
                            <div className="flex items-center justify-between mb-4">
                                <div className="w-11 h-11 rounded-full bg-[#F3EDE2] text-[#C89D7C] flex items-center justify-center text-lg">
                                    <SkinOutlined />
                                </div>
                                <span className="font-serif text-2xl font-light text-[#C89D7C]/60">02</span>
                            </div>
                            <h3 className="font-serif text-base font-semibold text-[#2E2728] mb-2">
                                2. Chuẩn bị (Makeup & Đồ)
                            </h3>
                            <p className="text-xs sm:text-sm text-[#2E2728]/75 font-light leading-relaxed">
                                Chăm chút trang phục, layout trang điểm tự nhiên tôn lên nét dịu dàng.
                            </p>
                        </div>

                        {/* Bước 3 */}
                        <div className="relative bg-[#FFFDF9] rounded-2xl p-6 border border-[#EFE8DC] shadow-[0_4px_18px_rgba(200,157,124,0.06)] hover:shadow-md transition-shadow">
                            <div className="flex items-center justify-between mb-4">
                                <div className="w-11 h-11 rounded-full bg-[#F8E7E7] text-[#B77B82] flex items-center justify-center text-lg">
                                    <CameraOutlined />
                                </div>
                                <span className="font-serif text-2xl font-light text-[#C89D7C]/60">03</span>
                            </div>
                            <h3 className="font-serif text-base font-semibold text-[#2E2728] mb-2">
                                3. Buổi chụp thực tế
                            </h3>
                            <p className="text-xs sm:text-sm text-[#2E2728]/75 font-light leading-relaxed">
                                Không gian thoải mái, bắt trọn từng khoảnh khắc tự nhiên không gượng gạo.
                            </p>
                        </div>

                        {/* Bước 4 */}
                        <div className="relative bg-[#FFFDF9] rounded-2xl p-6 border border-[#EFE8DC] shadow-[0_4px_18px_rgba(200,157,124,0.06)] hover:shadow-md transition-shadow">
                            <div className="flex items-center justify-between mb-4">
                                <div className="w-11 h-11 rounded-full bg-[#F3EDE2] text-[#C89D7C] flex items-center justify-center text-lg">
                                    <PictureOutlined />
                                </div>
                                <span className="font-serif text-2xl font-light text-[#C89D7C]/60">04</span>
                            </div>
                            <h3 className="font-serif text-base font-semibold text-[#2E2728] mb-2">
                                4. Hậu kỳ & Nhận ảnh
                            </h3>
                            <p className="text-xs sm:text-sm text-[#2E2728]/75 font-light leading-relaxed">
                                Chỉnh sửa tỉ mỉ từng khung hình, bàn giao đúng hẹn toàn bộ file chất lượng cao.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default AboutUs