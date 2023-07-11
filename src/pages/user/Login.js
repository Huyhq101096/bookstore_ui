import React, { useState } from "react";
import "./css/login.css";
import jQuery from 'jquery'

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault(
      jQuery.ajax({
        type: "POST",
        url: "http://localhost:8084/login/signin",
        contentType: "application/json",
        data: {
          "email": username,
          "password": password
        },
        
        // dataType: "json",
        success: function (result) {
          if (result.statusCode === 200) {
            console.log(result.data)
          } else {
            console.log("Wrong email and password");
          }
        }
      })
    );
    // Xử lý đăng nhập - gửi dữ liệu username và password đi
    console.log("Đăng nhập với username:", username, "và password:", password);
    
  };

  const handleRegister = () => {
    // Xử lý đăng ký tài khoản
    window.location.href = "/register";
  };

  const handleForgotPassword = () => {
    // Xử lý quên mật khẩu
    console.log("Quên mật khẩu");
  };

  return (
    <div className="login-container">
      <h2>Đăng nhập</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Username:</label>
          <input
            type="text"
            className="form-control"
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type={showPassword ? "text" : "password"}
            className="form-control"
            value={password}
            onChange={handlePasswordChange}
          />
          <button
            type="button"
            className="password-toggle-btn"
            onClick={handleShowPassword}
          >
            {showPassword ? "Ẩn mật khẩu" : "Hiện mật khẩu"}
          </button>
        </div>
        <button type="submit" className="btn btn-primary btn-register">
          Đăng nhập
        </button>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={handleRegister}
        >
          Đăng ký tài khoản
        </button>
        <button
          type="button"
          className="btn btn-link"
          onClick={handleForgotPassword}
        >
          Quên mật khẩu
        </button>
      </form>
    </div>
  );
};

export default Login;
