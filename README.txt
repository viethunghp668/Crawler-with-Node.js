
Đây là phần mềm đọc văn bản thành giọng nói cho các chương sách trên trang https://bachngocsach.com; chạy trên console, viết dựa vào NodeJS, module "puppeteer" và API của FPT AI.
Quý vị thể chạy nó trên console với NodeJS và nhập link của các chương sách vào và nó sẽ xuất ra file mp3 (có thể tải về ) đọc tiêu đề của chương và nội dung của chương.
Sau đây là các bước để sử dụng phần mềm:

1. Cài đặt NodeJS (Nếu đã có NodeJS v9 trở lên có thể bỏ qua)
2. Mở console, truy cập vào thư mục "bach-ngoc-sach-tts" đã được giải nén
3. Cài đặt module "puppeteer" bằng cách nhập cú pháp "npm install --save puppeteer"
4. Chạy file "crawler.js" bằng cách nhập cú pháp "node crawler.js"
5. Khi chương trình yêu cầu nhập link thì anh vui lòng nhập link đầy đủ của chương sách(vd: https://bachngocsach.com/reader/sat-nhan-dien/fyxw)
6. Xin hãy đợi khoảng 2-3 phút (thời gian phụ thuộc độ dài của nội dung) để AI của FPT có thể xử lý văn bản của chương sách và đọc thành file mp3 (Trong lúc này có thể sẽ xuất hiện cửa sổ  trình duyệt với nội dung "404 Not Found").
