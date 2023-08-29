import React, { useState } from "react";
import "./css/productdetail.css";

const ProductDetail = () => {
  const [quantity, setQuantity] = useState(1);
  const pricePerItem = 10; // Replace with the actual price per item

  const handleIncreaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = () => {
    // Add your logic to add the product to the cart
  };

  const totalPrice = pricePerItem * quantity;

  return (
    <section className="container product-detail">
      <div className="product-image-info">
        <div className="product-detail-image">
          <img
            src="https://d1j8r0kxyu9tj8.cloudfront.net/images/1567492611Rj5siYiYrkqcvX8.jpg"
            alt="Product"
          />
        </div>
        <div className="product-info">
          <h2 className="product-name">Product Name</h2>
          <p className="author">Author Name</p>

          <p className="price">Price: ${totalPrice.toFixed(2)}</p>
          <div className="quantity-control">
            <button className="decrease-btn" onClick={handleDecreaseQuantity}>
              -
            </button>
            <span className="quantity">{quantity}</span>
            <button className="increase-btn" onClick={handleIncreaseQuantity}>
              +
            </button>
          </div>
          <button className="add-to-cart-btn" onClick={handleAddToCart}>
            Add to Cart
          </button>
        </div>
      </div>
      <div className="product-description">
        <p className="product-sumary">Product Summary Description</p>
        <p className="">
          Cuốn sách chứa đựng những câu chuyện đẹp nhất của tuổi trẻ mà ai cũng
          muốn được trải qua. Mùa hè là mùa của những chuyến đi, của những cuộc
          phiêu lưu mới. Bởi sự rực rỡ tươi đẹp chẳng thể giấu giếm nổi và bầu
          không khí phóng khoáng của trời hè xanh ngắt cứ thôi thúc ta đứng lên
          đi để tìm cho mình một hành trình mới. Và cuốn sách cũng đã được bắt
          đầu từ những hành trình như vậy.
        </p>
      </div>
    </section>
  );
};

export default ProductDetail;
