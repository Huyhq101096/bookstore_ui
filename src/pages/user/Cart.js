import React, { useState } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import "./css/cart.css";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      image:
        "https://toquoc.mediacdn.vn/280518851207290880/2022/12/22/12-1671683430473740576022.jpg",
      name: "Product 1",
      quantity: 2,
      price: 10,
    },
    {
      id: 2,
      image:
        "https://toquoc.mediacdn.vn/280518851207290880/2022/12/22/12-1671683430473740576022.jpg",
      name: "Product 2",
      quantity: 1,
      price: 20,
    },
    {
      id: 3,
      image:
        "https://toquoc.mediacdn.vn/280518851207290880/2022/12/22/12-1671683430473740576022.jpg",
      name: "Product 3",
      quantity: 3,
      price: 15,
    },
  ]);

  const increaseQuantity = (itemId) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (itemId) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.quantity * item.price,
    0
  );

  const removeItem = (itemId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  return (
    <div>
      <Header />
      <div className="container cart-container">
        <div className="cart-container_header">
          <a href="/">Home</a>
          <span>Giỏ hàng</span>
        </div>
        
        <div className="row cart-items">
          {cartItems.map((item) => (
            <div key={item.id} className="col-md-4">
              <div className="card mb-3">
                <div className="d-flex align-items-start">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="card-img-top larger-image"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text">Số lượng: {item.quantity}</p>
                    <div className="btn-group">
                      <button
                        className="btn btn-primary"
                        onClick={() => increaseQuantity(item.id)}
                      >
                        +
                      </button>
                      <button
                        className="btn btn-primary"
                        onClick={() => decreaseQuantity(item.id)}
                      >
                        -
                      </button>
                    </div>
                    <button
                      className="btn btn-danger mt-2"
                      onClick={() => removeItem(item.id)}
                    >
                      Xóa
                    </button>
                    <p className="card-text mt-2">
                      Tổng giá tiền: {item.quantity * item.price}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="cart-total">
          <button>Thanh toán</button>
          <p className="font-weight-bold">Tổng số tiền: {totalPrice}</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CartPage;
