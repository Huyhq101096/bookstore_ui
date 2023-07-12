import $ from "jquery";

const handleLoginSubmit = (username, password) => {

  $.ajax({
    url: "http://localhost:8084/login/signin",
    method: "POST",
    contentType: "application/json",
    data: JSON.stringify({
      "email": username,
      "password": password,
    }),
    success: function (response) {
      // Xử lý phản hồi từ máy chủ
      console.log(response.data);

      // Lưu token vào localStorage
      localStorage.setItem("token", response.data);

      // Xử lý sau khi xác thực thành công, ví dụ: chuyển hướng đến trang chính
      window.location.href = "/";
    },
    error: function (error) {
      // Xử lý lỗi xác thực, ví dụ: hiển thị thông báo lỗi
      console.error(error);
    },
  });
};

export default handleLoginSubmit;
