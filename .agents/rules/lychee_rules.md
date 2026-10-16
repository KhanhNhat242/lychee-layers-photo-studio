# QUY TẮC PHÁT TRIỂN DỰ ÁN LYCHEE LAYERS (PROJECT RULES)

> **Phạm vi áp dụng:** Toàn bộ mã nguồn, giao diện, tính năng và nội dung phát triển trong repository `lychee-layers`.  
> **Tài liệu tham chiếu gốc:** [REQUIREMENTS.md](file:///d:/source_dudi/lychee-layers/docs/REQUIREMENTS.md) và [lychee-layers.docx](file:///d:/source_dudi/lychee-layers/docs/lychee-layers.docx).  
> **Hiệu lực:** BẮT BUỘC TUÂN THỦ 100%. Mọi pull request, commit, hoặc code do Agent/Dev sinh ra đều phải tuân thủ nghiêm ngặt các quy tắc dưới đây.

---

## NGUYÊN TẮC 1: ĐÚNG LĨNH VỰC & THƯƠNG HIỆU (DOMAIN INTEGRITY)

1. **Thương hiệu duy nhất:** `Lychee Layers` - Studio chụp ảnh nghệ thuật & concept cá nhân tại TP. Hồ Chí Minh.
2. **Tuyệt đối cấm nhầm lẫn:** Không để sót bất kỳ nội dung, tiêu đề, từ khóa hay boilerplate nào liên quan đến ngành khác (như "Homestay", "Booking Homestay", "Khách sạn", "Bất động sản").
3. **Thông tin liên hệ chuẩn hóa:**
   * **Hotline / Zalo:** `097 885 60 63` (Link: `tel:0978856063` và `https://zalo.me/0978856063`)
   * **Facebook Fanpage:** `https://www.facebook.com/profile.php?id=61550731514182`
   * **Google Maps Studio:** Tọa độ `10.7475968, 106.7218922` tại TP. Hồ Chí Minh.

---

## NGUYÊN TẮC 2: QUY CHUẨN THIẾT KẾ & THẨM MỸ (DESIGN SYSTEM & AESTHETICS)

1. **Phong cách thị giác (Tone & Mood):**
   * `Feminine, Elegant, Artistic, Soft, Sang trọng và Tinh tế`.
   * Giao diện phải mang lại cảm giác nghệ thuật, êm dịu, gợi cảm xúc như đang bước vào một studio nhiếp ảnh cao cấp.
2. **Bảng màu bắt buộc (Strict Color Palette):**
   * **Hồng pastel chủ đạo:** Nền phụ, hover effect, badge, tag concept (`#F8E7E7`, `#F2D1D1`, `#E8A598`).
   * **Trắng kem & Be sáng:** Nền chính của toàn trang (`#FFFDF9`, `#FAF8F5`, `#F5EFE6`).
   * **Be ấm / Nude:** Đường viền, khung card, tab chọn (`#EFE8DC`, `#DFCDBA`).
   * **Màu chữ chính:** Nâu cà phê đậm / Than ấm (`#2E2728`, `#433839`), tuyệt đối không dùng đen tuyền gắt `#000000`.
   * **Accent / Rose Gold:** Chi tiết điểm nhấn, nút CTA quan trọng (`#C08081`, `#B77B82`, `#C89D7C`).
   * **ĐIỀU CẤM KỴ:** Tuyệt đối **KHÔNG** sử dụng màu xanh mòng két / teal (`#01796F` của mẫu cũ), không dùng màu neon hoặc các màu đối nghịch phong cách pastel nhẹ nhàng.
3. **Typography:**
   * Headings (H1, H2, H3): Sử dụng Serif cổ điển, thanh lịch (ví dụ: `Playfair Display`, `Cormorant Garamond` hoặc font serif thanh thoát).
   * Body & Navigation: Sans-serif hiện đại, nét mảnh, dễ đọc (`Plus Jakarta Sans`, `Inter` hoặc `Be Vietnam Pro`).

---

## NGUYÊN TẮC 3: ĐẦY ĐỦ 10 TÍNH NĂNG CHUẨN THEO ĐẶC TẢ

Mọi trang và luồng người dùng phải xây dựng xoay quanh 10 chức năng đã duyệt trong phiếu DEV 23:
1. **Trang chủ (Home):** Hero banner nghệ thuật, giới thiệu phong cách studio, concept tiêu biểu, các bước làm việc, đánh giá khách hàng.
2. **Giới thiệu (About):** Triết lý sáng tạo, phong cách nghệ thuật, đội ngũ photographer & makeup, cam kết chất lượng.
3. **Danh sách Concept (Concepts Catalog):** Phân loại theo 5 dịch vụ chính (Concept cá nhân, Nghệ thuật, Cổ trang/Cổ phục, Chân dung, Chủ đề riêng) kèm bộ lọc style.
4. **Chi tiết Concept (Concept Detail):** Trình diễn bộ ảnh lookbook nét cao, thông tin makeup/trang phục/thời gian chụp, nút đặt lịch trực tiếp cho concept.
5. **Bảng giá theo gói (Pricing):** Các gói dịch vụ minh bạch (Gói cá nhân, Gói nghệ thuật, Gói cổ trang cao cấp), bảng so sánh quyền lợi và dịch vụ thêm.
6. **Bộ sưu tập ảnh (Gallery/Portfolio):** Bố cục ảnh dạng Masonry nghệ thuật, tích hợp Lightbox xem ảnh kích thước đầy đủ.
7. **Đặt lịch chụp (Booking Workflow):** Form chọn concept, ngày giờ, số lượng người, ghi chú đặc biệt, xác nhận đặt lịch kèm mã hẹn.
8. **Liên hệ & Bản đồ (Contact):** Thông tin studio tại TP.HCM, nhúng Google Maps iframe chuẩn tọa độ, form gửi lời nhắn.
9. **Nút hỗ trợ nhanh nổi (Floating Action Buttons):** Nút Zalo, Messenger, Hotline gọi ngay ở góc màn hình.
10. **Quản lý lịch chụp (Admin Bookings):** Trang xem danh sách đơn đặt lịch, trạng thái xử lý và thông tin khách hàng.

---

## NGUYÊN TẮC 4: QUY TẮC KỸ THUẬT & CODE QUALITY (ENGINEERING RULES)

1. **Next.js App Router (Next 16+):**
   * Sử dụng cấu trúc thư mục `app/` chuẩn.
   * Chú ý Client Component: Chỉ đặt `'use client'` khi có tương tác state/event; giữ Server Component cho các trang tĩnh để tối ưu SEO và tốc độ.
2. **TypeScript nghiêm ngặt:** Định nghĩa interface/type rõ ràng cho Concept, Booking, PricingPackage, NavItem. Tuyệt đối không dùng `any`.
3. **Responsive Design:** Bắt buộc test và tối ưu trên cả 3 kích thước:
   * Mobile (< 768px): Hamburger menu, card ảnh co giãn hợp lý, nút bấm chạm vừa ngón tay.
   * Tablet (768px - 1024px): Bố cục 2 cột hài hòa.
   * Desktop (> 1024px): Bố cục sang trọng, spacing thoáng đãng, hiệu ứng hover mượt mà.
4. **Tối ưu hình ảnh:**
   * Luôn dùng thẻ `next/image` với `alt` miêu tả chi tiết.
   * Tối ưu kích thước và tỉ lệ hiển thị để tránh Layout Shift (CLS).

---

## NGUYÊN TẮC 5: CHECKLIST KIỂM TRA TRƯỚC KHI BÀN GIAO MỖI TÍNH NĂNG

Trước khi thông báo hoàn thành bất kỳ task nào, phải tự kiểm tra 5 câu hỏi sau:
- [ ] Giao diện có đúng màu Hồng pastel – Trắng kem – Be không? (Có bị lọt màu `#01796F` hay màu lạ không?)
- [ ] Tiêu đề trang, metadata và nội dung có chuẩn thương hiệu **Lychee Layers** không?
- [ ] Hotline `097 885 60 63` và link Zalo/Facebook/Google Maps có hoạt động chính xác không?
- [ ] Trên thiết bị di động (Mobile) có bị tràn màn hình hay vỡ layout không?
- [ ] Code có gặp lỗi build, lint hoặc TypeScript error nào không?
