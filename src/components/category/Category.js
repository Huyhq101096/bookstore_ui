import React from 'react';
import './category.css';

const Category = ({ handleMenuClick }) => {
  return (
    <div className="category">
      <h2>Dash Board</h2>
      <ul>
        <li onClick={() => handleMenuClick('addProduct')}>Add Product</li>
        <li onClick={() => handleMenuClick('productManagement')}>Product Management</li>
      </ul>
    </div>
  );
};

export default Category;