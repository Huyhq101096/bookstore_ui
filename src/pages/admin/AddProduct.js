import React, { useState } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import AddProductForm from "../../components/product/AddProductForm";
import Category from "../../components/category/Category";
import "./css/addproduct.css";

const AdminAddProduct = () => {
  // TODO: Logic for adding product

  return (
    <div>
      <Header />
      <div className="ad-category-container">
        <div className="ad-category">
          <Category />

        </div>
        <div className="ad-add-product">
          <AddProductForm />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AdminAddProduct;
