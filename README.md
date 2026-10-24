# 🎭 Kịch Bản Tiểu Phẩm: RƯỢU VÀO… KỶ LUẬT RA
### Hội Thi Tuyên Truyền & Phổ Biến Giáo Dục Pháp Luật

> Ứng dụng web kịch bản tương tác hiện đại phục vụ tập kịch, diễn xuất, thi đua và tuyên truyền pháp luật. Sẵn sàng triển khai lên **Vercel** với đường dẫn `kichbanhoithiphapluat`.

---

## 🌟 Tính Năng Nổi Bật

1. **Giao diện hiện đại & Màu sắc chuyên nghiệp**:
   - Bảng màu phân biệt rõ ràng cho **9 nhân vật** (Sơn, Cường, Dũng, Chị Nhung, Tài Búa, Linh, Lan, Thượng úy Lai, An).
   - Thiết kế dạng thẻ, chia 5 cảnh kịch bản rõ ràng, kèm hiệu ứng âm thanh (SFX) sinh động.
   - Hỗ trợ **Chế độ Sáng (Light) & Tối (Dark mode)** mượt mà, lưu tùy chọn vào bộ nhớ.

2. **Lọc vai diễn & Đếm số câu thoại thông minh**:
   - Bấm vào từng nhân vật để highlight toàn bộ lời thoại của vai đó, làm mờ các vai khác để diễn viên dễ tập trung.
   - Hiển thị chính xác số lượng câu thoại của từng nhân vật.

3. **🎯 Chế độ Luyện tập / Học thuộc thoại (Rehearsal Mode)**:
   - Tự động che/làm mờ lời thoại của nhân vật đã chọn để diễn viên tự nhớ và nhẩm thoại trước khi thi.
   - Nhấn vào câu thoại bị che để mở xem đối chiếu đáp án ngay lập tức.

4. **📜 Máy nhắc chữ tự động cuộn (Teleprompter Mode)**:
   - Tự động cuộn trang theo nhịp diễn viên tập, có thanh trượt điều chỉnh tốc độ từ 1x đến 6x.

5. **🔊 Đọc thoại bằng giọng nói (Text-to-Speech)**:
   - Tích hợp giọng đọc Tiếng Việt trực tiếp trong trình duyệt để nghe thử đài từ của câu thoại.

6. **🖨️ Xuất PDF & In chuẩn A4**:
   - Tối ưu CSS `@media print` cho trang giấy in A4 không bị đứt đoạn, hỗ trợ tải file PDF chất lượng cao.

---

## 🚀 Hướng Dẫn Đẩy Lên GitHub Repo `kichbanhoithiphapluat`

Thư mục dự án đã được khởi tạo sẵn git. Để liên kết với tài khoản GitHub của bạn:

1. Truy cập [GitHub.com/new](https://github.com/new) và tạo một repository mới đặt tên là:
   ```text
   kichbanhoithiphapluat
   ```

2. Mở terminal tại thư mục này và chạy các lệnh:
   ```bash
   git branch -M main
   git remote add origin https://github.com/<tai-khoan-github-cua-ban>/kichbanhoithiphapluat.git
   git push -u origin main
   ```

---

## ⚡ Triển Khai Lên Vercel (Chỉ trong 1 phút)

### Cách 1: Triển khai trực tiếp qua Vercel CLI (Khuyên dùng)
Chạy lệnh sau ngay tại thư mục dự án:
```bash
npx vercel
```
- Khi được hỏi `Set up and deploy?` ➜ Nhập `y`
- Dự án sẽ được build và cấp ngay URL dạng:
  ```text
  https://kichbanhoithiphapluat.vercel.app
  ```

### Cách 2: Triển khai qua Vercel Dashboard (Giao diện Web)
1. Đăng nhập [Vercel.com](https://vercel.com).
2. Nhấn **"Add New Project"** ➜ Chọn **Import Git Repository**.
3. Chọn repo `kichbanhoithiphapluat`.
4. Giữ nguyên cấu hình mặc định (Static HTML) và bấm **"Deploy"**.
5. Trang web của bạn sẽ hoạt động 24/7 với chứng chỉ SSL HTTPS miễn phí.

---

## 📂 Cấu Trúc Thư Mục

```text
kichbanhoithiphapluat/
├── index.html       # Giao diện chính chứa toàn bộ kịch bản 5 cảnh & thông điệp
├── styles.css       # Hệ thống CSS Design System, Responsive, Dark Theme, Print A4
├── app.js           # Logic lọc vai, tìm kiếm, che thoại, máy nhắc chữ, TTS, PDF
├── vercel.json      # Cấu hình định tuyến tĩnh cho Vercel
└── README.md        # Tài liệu hướng dẫn sử dụng & triển khai
```

---

## ⚖️ Thông Điệp Hội Thi
- **“Vui có giới hạn – Kỷ luật không có ngoại lệ!”**
- **“Đã uống rượu bia – Tuyệt đối không điều khiển phương tiện giao thông!”**
- **“Kỷ luật giữ vững sức mạnh đơn vị – Trách nhiệm giữ gìn hình ảnh Bộ đội Cụ Hồ!”**
