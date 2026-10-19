import React from 'react'

// Hoạ tiết nét mảnh (line-art) trang trí 2 bên mép section.
// Tất cả dùng stroke="currentColor" nên đổi màu bằng class text-* của wrapper.

const svgProps = {
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.4,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
}

const leafPath = 'M0 0 C18 -16 52 -16 72 0 C52 16 18 16 0 0 Z M0 0 L72 0'

const Leaf = ({ x, y, angle, scale = 1 }: { x: number; y: number; angle: number; scale?: number }) => (
    <path d={leafPath} transform={`translate(${x} ${y}) rotate(${angle}) scale(${scale})`} />
)

// Quả vải: vòng tròn + vòng chấm gợi vỏ sần
const Lychee = ({ x, y, r = 13 }: { x: number; y: number; r?: number }) => (
    <g transform={`translate(${x} ${y})`}>
        <circle r={r} />
        <circle r={r * 0.62} strokeDasharray="0.5 4.5" strokeWidth={2} />
    </g>
)

// Ngôi sao lấp lánh 4 cánh
const Sparkle = ({ x, y, size = 10 }: { x: number; y: number; size?: number }) => (
    <path
        d={`M0 ${-size} C1 ${-size * 0.2} ${size * 0.2} -1 ${size} 0 C${size * 0.2} 1 1 ${size * 0.2} 0 ${size} C-1 ${size * 0.2} ${-size * 0.2} 1 ${-size} 0 C${-size * 0.2} -1 -1 ${-size * 0.2} 0 ${-size} Z`}
        transform={`translate(${x} ${y})`}
    />
)

// Hoa 5 cánh đơn giản
const Blossom = ({ x, y, scale = 1 }: { x: number; y: number; scale?: number }) => (
    <g transform={`translate(${x} ${y}) scale(${scale})`}>
        {[0, 72, 144, 216, 288].map((a) => (
            <path key={a} d="M0 -4 C-9 -12 -8 -24 0 -28 C8 -24 9 -12 0 -4 Z" transform={`rotate(${a})`} />
        ))}
        <circle r={3.5} />
    </g>
)

/** Cành vải thiều – biểu tượng thương hiệu Lychee Layers */
export const LycheeBranch = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 200 420" className={className} {...svgProps}>
        <path d="M95 418 C88 330 112 250 100 170 C92 115 108 70 128 22" />
        <Leaf x={93} y={360} angle={-150} />
        <Leaf x={97} y={320} angle={-25} />
        <Leaf x={103} y={260} angle={-160} scale={0.9} />
        <Leaf x={102} y={215} angle={-20} scale={0.95} />
        <Leaf x={98} y={160} angle={-145} scale={0.8} />
        <Leaf x={106} y={100} angle={-35} scale={0.75} />
        {/* Chùm quả */}
        <path d="M118 55 C130 70 140 78 150 84 M118 55 C126 78 128 92 132 104 M118 55 C140 62 156 62 168 58" />
        <Lychee x={152} y={98} />
        <Lychee x={130} y={118} r={12} />
        <Lychee x={172} y={70} r={11} />
    </svg>
)

/** Khẩu độ ống kính + lấp lánh */
export const ApertureSparkle = ({ className }: { className?: string }) => {
    const pt = (r: number, deg: number) => {
        const rad = (deg * Math.PI) / 180
        return `${(100 + r * Math.cos(rad)).toFixed(1)} ${(130 + r * Math.sin(rad)).toFixed(1)}`
    }
    return (
        <svg viewBox="0 0 200 300" className={className} {...svgProps}>
            <circle cx={100} cy={130} r={78} />
            <circle cx={100} cy={130} r={70} strokeDasharray="2 6" />
            {[0, 60, 120, 180, 240, 300].map((a) => (
                <path key={a} d={`M${pt(26, a)} L${pt(70, a + 48)}`} />
            ))}
            <path d={`M${[0, 60, 120, 180, 240, 300].map((a) => pt(26, a)).join(' L')} Z`} />
            <Sparkle x={40} y={32} size={11} />
            <Sparkle x={170} y={240} size={14} />
            <Sparkle x={58} y={262} size={7} />
        </svg>
    )
}

/** Dải phim – gợi những khung hình đã chụp */
export const FilmStrip = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 140 420" className={className} {...svgProps}>
        <g transform="rotate(8 70 210)">
            <rect x={25} y={10} width={90} height={400} rx={6} />
            {Array.from({ length: 16 }, (_, i) => (
                <g key={i}>
                    <rect x={31} y={20 + i * 24.5} width={7} height={10} rx={1.5} />
                    <rect x={102} y={20 + i * 24.5} width={7} height={10} rx={1.5} />
                </g>
            ))}
            {[0, 1, 2].map((i) => (
                <g key={i} transform={`translate(0 ${i * 128})`}>
                    <rect x={45} y={28} width={50} height={110} rx={3} />
                    {/* Dáng chân dung trong khung */}
                    <circle cx={70} cy={66} r={10} />
                    <path d="M52 132 C54 104 86 104 88 132" />
                </g>
            ))}
        </g>
    </svg>
)

/** Nhành hoa mảnh – nét nữ tính, nhẹ nhàng */
export const FlowerStems = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 200 420" className={className} {...svgProps}>
        <path d="M100 418 C96 330 82 240 70 120" />
        <path d="M98 330 C110 270 130 220 150 170" />
        <path d="M92 260 C100 210 104 180 104 150" />
        <Leaf x={97} y={380} angle={-140} scale={0.8} />
        <Leaf x={99} y={350} angle={-40} scale={0.75} />
        <Leaf x={86} y={210} angle={-150} scale={0.6} />
        <Leaf x={120} y={252} angle={-30} scale={0.6} />
        <Blossom x={70} y={95} scale={1.05} />
        <Blossom x={152} y={148} scale={0.85} />
        <path d="M104 150 C96 138 98 124 104 118 C110 124 112 138 104 150 Z" />
        <Sparkle x={150} y={60} size={9} />
        <Sparkle x={30} y={170} size={6} />
    </svg>
)

/** Máy ảnh phác hoạ */
export const CameraSketch = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 220 300" className={className} {...svgProps}>
        <g transform="rotate(-10 110 150)">
            <rect x={20} y={100} width={180} height={115} rx={16} />
            <path d="M72 100 L84 78 H136 L148 100" />
            <rect x={160} y={84} width={24} height={16} rx={3} />
            <circle cx={110} cy={158} r={40} />
            <circle cx={110} cy={158} r={28} />
            <circle cx={110} cy={158} r={12} />
            <path d="M100 148 A14 14 0 0 1 112 144" />
            <circle cx={42} cy={122} r={5} />
        </g>
        <Sparkle x={42} y={44} size={12} />
        <Sparkle x={186} y={262} size={9} />
        <Blossom x={60} y={268} scale={0.6} />
    </svg>
)

interface EdgeDecorProps {
    left: React.ReactNode
    right: React.ReactNode
    /** Class màu nét, ví dụ text-[#C08081]/40 */
    colorClassName?: string
    /** Class chiều rộng mỗi hoạ tiết */
    sizeClassName?: string
}

/**
 * Đặt 2 hoạ tiết sát 2 mép màn hình. Section cha cần `relative isolate overflow-hidden`
 * để hoạ tiết nằm dưới nội dung nhưng trên màu nền.
 */
export const EdgeDecor = ({
    left,
    right,
    colorClassName = 'text-[#C08081]/35',
    sizeClassName = 'w-36 xl:w-48 2xl:w-56',
}: EdgeDecorProps) => (
    <div aria-hidden="true" className={`pointer-events-none absolute inset-0 -z-10 hidden lg:block ${colorClassName}`}>
        {/* Lớp ngoài định vị, lớp trong chạy animation để transform không đè nhau */}
        <div className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-[18%] ${sizeClassName}`}>
            <div className="deco-float">{left}</div>
        </div>
        <div className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-[18%] ${sizeClassName}`}>
            <div className="deco-float [animation-delay:-4s]">{right}</div>
        </div>
    </div>
)
