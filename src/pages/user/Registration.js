import React, { useState } from 'react';
import './css/registration.css';

const Registration = () => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordMatchError, setPasswordMatchError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePhoneChange = (e) => {
    const value = e.target.value;
    setPhone(value);
    // Kiểm tra tính hợp lệ của số điện thoại ngay lúc người dùng nhập
    setPhoneError(!isValidPhoneNumber(value));
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    const value = e.target.value;
    setConfirmPassword(value);
    // Kiểm tra tính khớp của mật khẩu ngay lúc người dùng nhập
    setPasswordMatchError(value !== password);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Kiểm tra tính khớp của mật khẩu khi người dùng nhấn nút Đăng ký
    if (password !== confirmPassword) {
      setPasswordMatchError(true);
      return;
    }
    // Kiểm tra tính hợp lệ của số điện thoại khi người dùng nhấn nút Đăng ký
    if (!isValidPhoneNumber(phone)) {
      setPhoneError(true);
      return;
    }
    
    // Xử lý đăng ký tài khoản - gửi dữ liệu email, số điện thoại và password đi
    console.log('Đăng ký tài khoản với email:', email, 'số điện thoại:', phone, 'và password:', password);
    // Các xử lý đăng ký khác có thể được thực hiện ở đây (ví dụ: gọi API, kiểm tra thông tin đăng ký, tạo tài khoản thành công...)
  };

  // Hàm kiểm tra tính hợp lệ của số điện thoại
  const isValidPhoneNumber = (phone) => {
    const phonePattern = /^[0-9]{10}$/; // Định dạng số điện thoại: 10 chữ số
    return phonePattern.test(phone);
  };

  return (
    <div className="registration-container">
      <h2>Đăng ký tài khoản</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div className="form-group">
          <label>Số điện thoại:</label>
          <input
            type="text"
            className="form-control"
            value={phone}
            onChange={handlePhoneChange}
          />
          {phoneError && <p className="error-message">Số điện thoại không hợp lệ. Vui lòng nhập lại.</p>}
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <div className="form-group">
          <label>Confirm Password:</label>
          <input
            type="password"
            className="form-control"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
          />
          {passwordMatchError && <p className="error-message">Mật khẩu không khớp. Vui lòng nhập lại.</p>}
        </div>
        <button type="submit" className="btn btn-primary">Đăng ký</button>
      </form>
    </div>
  );
};

export default Registration;
