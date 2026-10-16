<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

---

# LYCHEE LAYERS PROJECT - CORE RULES & GUIDELINES

> **TÀI LIỆU QUY TẮC BẮT BUỘC CHO MỌI AGENT VÀ DEVELOPER THAM GIA DỰ ÁN**  
> Mọi thay đổi, tính năng mới hoặc chỉnh sửa mã nguồn trong kho lưu trữ này **BẮT BUỘC PHẢI TUÂN THỦ 100%** tài liệu yêu cầu tại [docs/REQUIREMENTS.md](file:///d:/source_dudi/lychee-layers/docs/REQUIREMENTS.md) và [lychee_rules.md](file:///d:/source_dudi/lychee-layers/.agents/rules/lychee_rules.md).

## 1. ĐỊNH DANH DỰ ÁN & THƯƠNG HIỆU
* **Tên thương hiệu:** `Lychee Layers` (Studio chụp ảnh nghệ thuật & concept cá nhân tại TP. Hồ Chí Minh).
* **Mã hồ sơ / Phiếu:** DN0102 - Phiếu DEV 23 (Sale phụ trách: Minh Toàn).
* **Hotline / Zalo:** `097 885 60 63` | [Fanpage Facebook](https://www.facebook.com/profile.php?id=61550731514182).
* **Địa chỉ Google Maps:** Tọa độ Studio Lychee Layers `10.7475968, 106.7218922` tại TP. Hồ Chí Minh.
* **QUY TẮC CẤM:** Tuyệt đối KHÔNG đưa vào dự án bất kỳ thông tin, tiêu đề, bản sao (boilerplate) nào của ngành khác (như Homestay, Khách sạn, v.v.).

## 2. QUY CHUẨN DESIGN & BẢNG MÀU (BẮT BUỘC TUÂN THỦ)
* **Phong cách:** `Feminine, Elegant, Artistic, Soft & Sang trọng` (Dành cho phái nữ 18-35 tuổi, sinh viên, người yêu ảnh nghệ thuật).
* **Bảng màu pastel chuẩn:**
  * **Hồng pastel chủ đạo:** `#F8E7E7`, `#F2D1D1`, `#E8A598`.
  * **Trắng kem & Be sáng (Nền):** `#FFFDF9`, `#FAF8F5`, `#F5EFE6`.
  * **Be ấm / Nude (Khung & Viền):** `#EFE8DC`, `#DFCDBA`.
  * **Chữ & Tương phản:** Nâu than ấm `#2E2728`, `#433839` (Tránh màu đen tuyền gắt).
  * **Accent:** Rose gold / Hồng đất `#C08081`, `#B77B82`.
* **QUY TẮC CẤM:** Tuyệt đối KHÔNG sử dụng màu xanh mòng két / teal (`#01796F` của template cũ), không dùng màu neon hoặc màu sắc không đúng gu pastel nhẹ nhàng, sang trọng.

## 3. DANH MỤC 10 CHỨC NĂNG BẮT BUỘC
Khi triển khai tính năng hoặc tạo trang mới, đối chiếu với danh mục:
1. `Trang chủ`: Hero nghệ thuật, giới thiệu phong cách, concept nổi bật, quy trình 4 bước, đánh giá khách hàng.
2. `Giới thiệu`: Câu chuyện thương hiệu, triết lý sáng tạo, đội ngũ studio.
3. `Danh sách concept`: 5 dịch vụ chính (Cá nhân, Nghệ thuật, Cổ trang, Chân dung, Phong cách riêng) + bộ lọc.
4. `Chi tiết concept`: Lookbook ảnh chất lượng cao, thông tin makeup/trang phục, nút đặt lịch.
5. `Bảng giá theo gói`: Các gói chụp minh bạch, dịch vụ cộng thêm, quyền lợi.
6. `Bộ sưu tập ảnh (Gallery)`: Layout Masonry, xem ảnh toàn màn hình với Lightbox.
7. `Đặt lịch chụp (Booking)`: Form đặt lịch theo từng bước trực quan.
8. `Liên hệ & Bản đồ`: Thông tin liên hệ, embed Google Maps thực tế.
9. `Nút hỗ trợ nhanh`: Floating buttons Zalo (`0978856063`), Messenger, Hotline.
10. `Quản lý đặt lịch`: Trang Admin quản lý danh sách yêu cầu đặt lịch của khách hàng.

## 4. CHECKLIST NGHIỆM THU
Mỗi khi sinh code hoặc sửa file:
- [ ] Đã kiểm tra giao diện đúng tone màu Hồng pastel – Trắng kem – Be chưa?
- [ ] Metadata tiêu đề và mô tả đã đúng tên "Lychee Layers Studio" chưa?
- [ ] Tương tác Zalo, Hotline, Facebook, Google Maps có chính xác không?
- [ ] Giao diện có hiển thị mượt mà trên Mobile và Desktop không?
