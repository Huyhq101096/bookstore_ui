import { URLs } from "../../../constants";

export const sendPaymentData = async (data) => {
    try {
        console.log(data)
      // Gửi dữ liệu lên server thông qua API
      const response = await fetch(`${URLs}order/addOrder`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
  
      // Xử lý response từ server
      if (response.ok) {
        console.log("Payment successful!");
        // Xóa dữ liệu giỏ hàng sau khi thanh toán thành công
        localStorage.removeItem("cartItems");
      } else {
        console.error("Payment failed.");
      }
    } catch (error) {
      console.error("Error sending payment data:", error);
    }
  };
  