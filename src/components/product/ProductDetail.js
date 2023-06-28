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
    <section className="product-detail">
      <div className="product-image">
        <img src="https://d1j8r0kxyu9tj8.cloudfront.net/images/1567492611Rj5siYiYrkqcvX8.jpg" alt="Product" />
      </div>
      <div className="product-info">
        <h2 className="product-name">Product Name</h2>
        <p className="author">Author Name</p>
        <p className="summary">Product Summary Description</p>
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
    </section>
  );
};

export default ProductDetail;
