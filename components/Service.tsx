import Image from 'next/image'
import React, { useState } from 'react'
import { CloseOutlined, CheckOutlined, EnvironmentOutlined } from '@ant-design/icons'
import ConceptCarousel from './ConceptCarousel'
import { revealDelay } from './reveal'
import { EdgeDecor, LycheeBranch, ApertureSparkle } from './SectionDecor'

// Dữ liệu 4 Concept nổi bật theo thiết kế
const highlightConcepts = [
    {
        id: 'concept-1',
        title: 'Nàng thơ mùa hạ',
        code: 'Concept 01 / Cổ điển',
        price: '1.500.000đ',
        image: '/images/library/764975781_17983487451061701_3636045946579933472_n.jpg',
        description: 'Phong cách nàng thơ nhẹ nhàng, trong veo với ánh sáng tự nhiên và trang phục đầm voan mềm mại.',
        highlights: ['Trang phục đầm vintage', 'Tone makeup đào dịu ngọt', 'Chụp ngoại cảnh hoặc studio'],
    },
    {
        id: 'concept-2',
        title: 'Cổ điển & Tinh tế',
        code: 'Concept 02 / Nghệ thuật',
        price: '2.500.000đ',
        image: '/images/library/766317124_17983487592061701_4439795435283454152_n.jpg',
        description: 'Đậm chất điện ảnh cổ điển với chiều sâu ánh sáng, tôn vinh nét đằm thắm và sang trọng.',
        highlights: ['Layout makeup sắc sảo', 'Bối cảnh nghệ thuật ấm cúng', 'Phụ kiện hoa & sách cổ'],
    },
    {
        id: 'concept-3',
        title: 'Chân dung tự nhiên',
        code: 'Concept 03 / Tối giản',
        price: '1.800.000đ',
        image: '/images/library/765652706_17983487487061701_1719604522210793188_n.jpg',
        description: 'Bắt trọn từng đường nét tự nhiên, nụ cười và ánh mắt chân thật nhất của bạn mà không hề gượng gạo.',
        highlights: ['Ánh sáng mềm tôn da', 'Trang phục tối giản thanh lịch', 'Styling tóc tự nhiên'],
    },
    {
        id: 'concept-4',
        title: 'Nghệ thuật & Cảm xúc',
        code: 'Concept 04 / Signature',
        price: '2.800.000đ',
        image: '/images/library/780127522_17985905139061701_9159119217931105096_n.jpg',
        description: 'Những góc máy phá cách, giàu chất thơ và chiều sâu cảm xúc dành cho những ai tìm kiếm sự độc bản.',
        highlights: ['Concept độc quyền cá nhân hóa', 'Hậu kỳ tone màu điện ảnh', 'Bộ ảnh lookbook cao cấp'],
    },
]

// Gói giá studio
const pricingPlans = [
    {
        id: 'lite',
        name: 'Lite',
        tagline: 'Phù hợp trải nghiệm lần đầu',
        price: '1.500.000đ',
        popular: false,
        features: [
            'Chụp concept cá nhân 1 layout',
            '10 ảnh chỉnh sửa tỉ mỉ',
            '01 bộ trang phục thiết kế',
            'Hậu kỳ tone màu trong trẻo',
            'Bàn giao ảnh sau 3 - 5 ngày',
        ],
    },
    {
        id: 'standard',
        name: 'Standard',
        tagline: 'Được yêu thích nhất',
        price: '2.800.000đ',
        popular: true,
        features: [
            'Chụp trọn vẹn 2 layout concept',
            '18 ảnh chỉnh sửa chuyên sâu',
            '02 bộ trang phục cao cấp',
            'Makeup & làm tóc tự nhiên tại studio',
            'Gửi toàn bộ file ảnh gốc đã chụp',
            'Bàn giao ảnh sau 3 ngày',
        ],
    },
    {
        id: 'vip',
        name: 'VIP',
        tagline: 'Dành cho bộ ảnh nghệ thuật hoàn mỹ',
        price: '4.200.000đ',
        popular: false,
        features: [
            'Concept Signature sáng tạo riêng',
            '25 ảnh chỉnh sửa nghệ thuật đỉnh cao',
            'Trang phục thiết kế không giới hạn',
            'Makeup Artist & Stylist đồng hành suốt buổi',
            'Tặng kèm khung ảnh pha lai để bàn cao cấp',
            'Toàn bộ file gốc độ phân giải cao',
        ],
    },
]

const Service = () => {
    const [selectedConcept, setSelectedConcept] = useState<(typeof highlightConcepts)[0] | null>(null)
    const [bookingSuccess, setBookingSuccess] = useState(false)


    const [formData, setFormData] = useState({
        fullName: '',
        phone: '',
        email: '',
        packageId: 'standard',
        date: '',
        notes: '',
    })

    const selectPackageAndScroll = (packageId: string) => {
        setFormData((prev) => ({ ...prev, packageId }))
        const elem = document.querySelector('#booking')
        if (elem) {
            elem.scrollIntoView({ behavior: 'smooth' })
        }
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleBookingSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (!formData.fullName || !formData.phone) {
            alert('Vui lòng nhập Họ tên và Số điện thoại để Lychee Layers liên hệ tư vấn!')
            return
        }
        setBookingSuccess(true)
    }

    return (
        <div>
            <section
                id="service"
                className="py-24 sm:py-32 lg:py-20 bg-[#FAF8F5] relative isolate overflow-hidden border-t border-[#EFE8DC]"
            >
                <EdgeDecor
                    left={<LycheeBranch />}
                    right={<ApertureSparkle />}
                    colorClassName="text-[#C08081]/30"
                />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Header section */}
                    <div className="text-center space-y-3 mb-10">
                        <h2 data-reveal="blur" className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#2E2728]">
                            Những Concept Được Yêu Thích
                        </h2>
                        <div data-reveal="grow-c" style={revealDelay(250)} className="mx-auto h-[2px] w-16 rounded-full bg-[#C08081]" />
                    </div>

                    <div data-reveal="up" style={revealDelay(200)}>
                        <ConceptCarousel concepts={highlightConcepts} onSelect={setSelectedConcept} />
                    </div>

                    {/* CTA nhỏ phía dưới */}
                    <div data-reveal="up" style={revealDelay(350)} className="mt-5 text-center">
                        <a
                            href="#booking"
                            className="inline-flex items-center gap-2 text-sm text-[#C89D7C] hover:text-[#B88D6C] font-medium tracking-wide transition-colors group"
                        >
                            <span>Bạn muốn thực hiện một concept mang dấu ấn của riêng mình?</span>
                            <span className="group-hover:translate-x-1 transition-transform">→ Đặt lịch tư vấn ngay</span>
                        </a>
                    </div>
                </div>
            </section>
            {/* 🌸 MODAL CHI TIẾT CONCEPT (Khi bấm "Xem chi tiết") */}
            {selectedConcept && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#2E2728]/50 backdrop-blur-sm animate-fadeIn">
                    <div className="bg-[#FFFDF9] rounded-3xl max-w-2xl w-full p-6 sm:p-8 border border-[#EFE8DC] shadow-2xl relative max-h-[90vh] overflow-y-auto">
                        <button
                            onClick={() => setSelectedConcept(null)}
                            className="absolute top-5 right-5 w-8 h-8 rounded-full bg-[#FAF8F5] border border-[#EFE8DC] flex items-center justify-center text-[#2E2728] hover:bg-[#F3EDE2] transition-colors"
                        >
                            <CloseOutlined className="text-xs" />
                        </button>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
                            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-sm">
                                <Image
                                    src={selectedConcept.image}
                                    alt={selectedConcept.title}
                                    fill
                                    sizes="(max-width: 640px) 100vw, 300px"
                                    className="object-cover"
                                />
                            </div>

                            <div className="space-y-4">
                                <div className="text-xs uppercase tracking-wider text-[#C89D7C] font-semibold">
                                    {selectedConcept.code}
                                </div>
                                <h3 className="font-serif text-2xl font-normal text-[#2E2728]">
                                    {selectedConcept.title}
                                </h3>
                                <p className="text-xs sm:text-sm text-[#2E2728]/80 font-light leading-relaxed">
                                    {selectedConcept.description}
                                </p>

                                <div className="space-y-2 pt-2 border-t border-[#FAF5EF]">
                                    <div className="text-xs font-medium text-[#2E2728]">Điểm nổi bật:</div>
                                    <ul className="space-y-1.5 text-xs text-[#2E2728]/75 font-light">
                                        {selectedConcept.highlights.map((h, i) => (
                                            <li key={i} className="flex items-center gap-2">
                                                <span className="w-1.5 h-1.5 rounded-full bg-[#C89D7C]" />
                                                <span>{h}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="pt-2">
                                    <div className="text-xs text-[#2E2728]/60">Giá tham khảo trọn gói:</div>
                                    <div className="font-serif text-2xl font-semibold text-[#2E2728] text-[#C89D7C]">
                                        {selectedConcept.price}
                                    </div>
                                </div>

                                <div className="pt-2">
                                    <button
                                        onClick={() => {
                                            setSelectedConcept(null)
                                            selectPackageAndScroll('standard')
                                        }}
                                        className="w-full py-3 rounded-full text-xs font-medium text-white bg-[#C89D7C] hover:bg-[#B88D6C] transition-all duration-300"
                                    >
                                        Đặt lịch chụp concept này
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            <section
                id="pricing"
                className="py-24 sm:py-32 lg:py-20 bg-[#F2D1D1] relative selection:bg-[#C08081]"
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Header section */}
                    <div className="text-center max-w-2xl mx-auto space-y-3 mb-16 sm:mb-20 selection:text-white">
                        <h2 data-reveal="blur" className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#2E2728]">
                            Bảng giá & Đặt lịch
                        </h2>
                        <div data-reveal="grow-c" style={revealDelay(250)} className="mx-auto h-[2px] w-16 rounded-full bg-[#C08081]" />
                    </div>

                    {/* Bố cục chia 2 phần lớn song song */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
                        {/* Phần bên trái: 3 Cột bảng giá (Lite, Standard, VIP) */}
                        <div className="lg:col-span-7">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                                {pricingPlans.map((plan, planIdx) => (
                                    <div
                                        key={plan.id}
                                        data-reveal="flip"
                                        style={revealDelay(planIdx * 150)}
                                        className={`relative rounded-3xl p-6 transition-all duration-300 flex flex-col justify-between ${plan.popular
                                            // Vầng sáng gradient toả ra ngoài: hồng đào phía trên-trái → hồng đất phía dưới-phải
                                            ? 'bg-[#FFFDF9] border-2 border-[#C89D7C] z-10 shadow-[-16px_-18px_50px_-4px_rgba(232,165,152,0.95),18px_22px_56px_-4px_rgba(183,123,130,0.9),0_0_90px_10px_rgba(192,128,129,0.45)] scale-100 md:-translate-y-2'
                                            : 'bg-[#FFFDF9]/80 border border-[#EFE8DC] shadow-[0_6px_20px_rgba(200,157,124,0.05)]'
                                            }`}
                                    >
                                        {plan.popular && (
                                            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap bg-[#C89D7C] text-white text-[10px] tracking-wider uppercase font-semibold px-3 py-1 rounded-full shadow-sm">
                                                Được chọn nhiều
                                            </div>
                                        )}

                                        <div>
                                            <div className="font-serif text-xl font-medium text-[#2E2728] mb-1">
                                                {plan.name}
                                            </div>
                                            <div className="text-[11px] text-[#2E2728]/60 font-light mb-3">
                                                {plan.tagline}
                                            </div>

                                            <div className="font-serif text-2xl font-semibold text-[#2E2728] pb-4 mb-4 border-b border-[#FAF5EF]">
                                                {plan.price}
                                            </div>

                                            {/* Danh sách quyền lợi */}
                                            <ul className="space-y-2.5 text-xs text-[#2E2728]/80 font-light mb-6">
                                                {plan.features.map((feat, fIdx) => (
                                                    <li key={fIdx} className="flex items-start gap-2">
                                                        <CheckOutlined className="text-[#C89D7C] text-[10px] mt-0.5 flex-shrink-0" />
                                                        <span>{feat}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        {/* Nút Đặt lịch ngay cho gói */}
                                        <button
                                            onClick={() => selectPackageAndScroll(plan.id)}
                                            className={`w-full py-2.5 rounded-full text-xs font-medium tracking-wide transition-all duration-300 cursor-pointer ${plan.popular
                                                ? 'bg-[#C89D7C] hover:bg-[#B88D6C] text-white shadow-sm'
                                                : 'bg-[#F3EDE2] hover:bg-[#C89D7C] hover:text-white text-[#2E2728]'
                                                }`}
                                        >
                                            Đặt lịch ngay
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Phần bên phải: Form đăng ký đặt lịch gọn gàng + Bản đồ Studio nhỏ */}
                        <div id="booking" data-reveal="right" style={revealDelay(300)} className="lg:col-span-5 scroll-mt-24">
                            <div className="bg-[#FFFDF9] rounded-3xl p-6 sm:p-8 border border-[#EFE8DC] shadow-[0_15px_45px_rgba(200,157,124,0.1)]">
                                {/* Studio mini card + Google map preview */}
                                <div className="mb-6 p-3 rounded-2xl bg-[#FAF8F5] border border-[#EFE8DC] flex items-center gap-3.5">
                                    <div className="relative w-16 h-16 rounded-xl overflow-hidden flex-shrink-0">
                                        <Image
                                            src="/images/library/768577341_17983487469061701_5334452822886529234_n.jpg"
                                            alt="Lychee Layers Studio"
                                            fill
                                            sizes="64px"
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className="space-y-0.5 text-xs">
                                        <div className="font-serif text-sm font-medium text-[#2E2728]">
                                            Lychee Layers Studio
                                        </div>
                                        <div className="text-[#2E2728]/70 flex items-center gap-1 font-light">
                                            <EnvironmentOutlined className="text-[#C89D7C]" />
                                            <span>TP. Hồ Chí Minh</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Form đặt lịch */}
                                {bookingSuccess ? (
                                    <div className="text-center py-8 space-y-4 animate-fadeIn">
                                        <div className="w-14 h-14 rounded-full bg-[#F8E7E7] text-[#B77B82] flex items-center justify-center mx-auto text-2xl">
                                            <CheckOutlined />
                                        </div>
                                        <h3 className="font-serif text-xl font-medium text-[#2E2728]">
                                            Đặt lịch thành công!
                                        </h3>
                                        <p className="text-xs sm:text-sm text-[#2E2728]/75 font-light leading-relaxed max-w-xs mx-auto">
                                            Cảm ơn {formData.fullName}. Chuyên viên của Lychee Layers sẽ liên hệ trực tiếp qua số {formData.phone} trong 15-30 phút để xác nhận lịch chụp.
                                        </p>
                                        <button
                                            onClick={() => {
                                                setBookingSuccess(false)
                                                setFormData({
                                                    fullName: '',
                                                    phone: '',
                                                    email: '',
                                                    packageId: 'standard',
                                                    date: '',
                                                    notes: '',
                                                })
                                            }}
                                            className="text-xs text-[#C89D7C] hover:underline font-medium cursor-pointer"
                                        >
                                            Gửi một yêu cầu khác
                                        </button>
                                    </div>
                                ) : (
                                    <form onSubmit={handleBookingSubmit} className="space-y-4">
                                        <div className="text-sm font-medium text-[#2E2728] pb-1">
                                            Thông tin khách hàng
                                        </div>

                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                            <div>
                                                <label className="block text-[11px] text-[#2E2728]/70 uppercase tracking-wider mb-1 font-medium">
                                                    Họ và tên *
                                                </label>
                                                <input
                                                    type="text"
                                                    name="fullName"
                                                    required
                                                    placeholder="Nguyễn Thị Mai"
                                                    value={formData.fullName}
                                                    onChange={handleInputChange}
                                                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF8F5] border border-[#EFE8DC] text-xs text-[#2E2728] placeholder-[#2E2728]/35 focus:outline-none focus:border-[#C89D7C] transition-colors"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-[11px] text-[#2E2728]/70 uppercase tracking-wider mb-1 font-medium">
                                                    Số điện thoại *
                                                </label>
                                                <input
                                                    type="tel"
                                                    name="phone"
                                                    required
                                                    placeholder="0987 654 321"
                                                    value={formData.phone}
                                                    onChange={handleInputChange}
                                                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF8F5] border border-[#EFE8DC] text-xs text-[#2E2728] placeholder-[#2E2728]/35 focus:outline-none focus:border-[#C89D7C] transition-colors"
                                                />
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                            <div>
                                                <label className="block text-[11px] text-[#2E2728]/70 uppercase tracking-wider mb-1 font-medium">
                                                    Email (tùy chọn)
                                                </label>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    placeholder="mai.nguyen@gmail.com"
                                                    value={formData.email}
                                                    onChange={handleInputChange}
                                                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF8F5] border border-[#EFE8DC] text-xs text-[#2E2728] placeholder-[#2E2728]/35 focus:outline-none focus:border-[#C89D7C] transition-colors"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-[11px] text-[#2E2728]/70 uppercase tracking-wider mb-1 font-medium">
                                                    Gói chụp quan tâm
                                                </label>
                                                <select
                                                    name="packageId"
                                                    value={formData.packageId}
                                                    onChange={handleInputChange}
                                                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF8F5] border border-[#EFE8DC] text-xs text-[#2E2728] focus:outline-none focus:border-[#C89D7C] transition-colors"
                                                >
                                                    <option value="lite">Gói Lite (1.500.000đ)</option>
                                                    <option value="standard">Gói Standard (2.800.000đ)</option>
                                                    <option value="vip">Gói VIP (4.200.000đ)</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-[11px] text-[#2E2728]/70 uppercase tracking-wider mb-1 font-medium">
                                                Ngày chụp dự kiến
                                            </label>
                                            <input
                                                type="date"
                                                name="date"
                                                value={formData.date}
                                                onChange={handleInputChange}
                                                className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF8F5] border border-[#EFE8DC] text-xs text-[#2E2728] focus:outline-none focus:border-[#C89D7C] transition-colors"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-[11px] text-[#2E2728]/70 uppercase tracking-wider mb-1 font-medium">
                                                Ghi chú / Yêu cầu riêng
                                            </label>
                                            <textarea
                                                rows={2}
                                                name="notes"
                                                placeholder="Ví dụ: Mong muốn phong cách nàng thơ nhẹ nhàng, chụp vào buổi sáng..."
                                                value={formData.notes}
                                                onChange={handleInputChange}
                                                className="w-full px-3.5 py-2 rounded-xl bg-[#FAF8F5] border border-[#EFE8DC] text-xs text-[#2E2728] placeholder-[#2E2728]/35 focus:outline-none focus:border-[#C89D7C] transition-colors"
                                            />
                                        </div>

                                        <button
                                            type="submit"
                                            className="w-full py-3.5 rounded-full text-xs sm:text-sm font-medium tracking-wide text-white bg-[#C89D7C] hover:bg-[#B88D6C] shadow-[0_4px_16px_rgba(200,157,124,0.3)] hover:shadow-[0_6px_22px_rgba(200,157,124,0.4)] transition-all duration-300 active:scale-95 cursor-pointer mt-2"
                                        >
                                            Đặt lịch ngay
                                        </button>

                                        <div className="text-[11px] text-center text-[#2E2728]/60 font-light pt-1">
                                            Hoặc nhắn nhanh qua Hotline / Zalo:{' '}
                                            <a
                                                href="https://zalo.me/0978856063"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-[#C89D7C] font-medium hover:underline"
                                            >
                                                097 885 60 63
                                            </a>
                                        </div>
                                    </form>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    )
}

export default Service