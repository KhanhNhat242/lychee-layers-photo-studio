import type { CSSProperties } from 'react'

/** Độ trễ cho hiệu ứng `data-reveal` (đọc bởi biến --reveal-delay trong globals.css) */
export const revealDelay = (ms: number) => ({ '--reveal-delay': `${ms}ms` }) as CSSProperties
