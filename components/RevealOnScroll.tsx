'use client'

import { useEffect } from 'react'

/**
 * Bật các hiệu ứng `[data-reveal]` định nghĩa trong globals.css:
 * thêm `.is-revealed` khi phần tử cuộn vào màn hình, gỡ ra khi nó rời khỏi mép dưới
 * (cuộn ngược lên) để lần cuộn xuống sau hiệu ứng chạy lại.
 */
const RevealOnScroll = () => {
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                for (const entry of entries) {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-revealed')
                    } else if (entry.boundingClientRect.top > 0) {
                        entry.target.classList.remove('is-revealed')
                    }
                }
            },
            // Không thu hẹp rootMargin: phần tử sát đáy trang (footer) vẫn phải hiện được
            { threshold: 0.12 }
        )

        const observed = new WeakSet<Element>()
        const scan = () => {
            document.querySelectorAll('[data-reveal]').forEach((el) => {
                if (observed.has(el)) return
                observed.add(el)
                observer.observe(el)
            })
        }
        scan()

        // Theo dõi phần tử mới render (ví dụ form đặt lịch đổi trạng thái)
        const mutation = new MutationObserver(scan)
        mutation.observe(document.body, { childList: true, subtree: true })

        return () => {
            observer.disconnect()
            mutation.disconnect()
        }
    }, [])

    return null
}

export default RevealOnScroll
