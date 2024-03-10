/*!
=========================================================
* Steller Landing page
=========================================================

* Copyright: 2019 DevCRUD (https://devcrud.com)
* Licensed: (https://devcrud.com/licenses)
* Coded by www.devcrud.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// smooth scroll
$(document).ready(function(){
	$(".nav-link").on('click', function(event) {

    	if (this.hash !== "") {

			event.preventDefault();

			var hash = this.hash;

			$('html, body').animate({
				scrollTop: $(hash).offset().top
			}, 700, function(){
				window.location.hash = hash;
			});
      	} 
    });
});
document.getElementById('downloadButton').addEventListener('click', function() {
    // Tạo một đường dẫn tới file PDF của CV
    var pdfUrl = '/home/empty/Steller/public_html/assets/pdf/cv.pdf';

    // Tạo một phần tử a (link)
    var link = document.createElement('a');
    link.href = pdfUrl;

    // Đặt thuộc tính download của phần tử a thành tên file bạn muốn người dùng tải xuống
    link.download = 'cv.pdf';

    // Thêm phần tử a vào trong body của trang
    document.body.appendChild(link);

    // Kích hoạt sự kiện click trên phần tử a (link)
    link.click();

    // Xóa phần tử a sau khi đã kích hoạt sự kiện click
    document.body.removeChild(link);
});
