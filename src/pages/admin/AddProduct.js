import React, { useState } from "react";
import Header from '../../components/header/Header';
import Footer from "../../components/footer/Footer";
import AddProductForm from "../../components/product/AddProductForm";


const AdminAddProduct = () => {
    // TODO: Logic for adding product
  
    return (
      <div>
        <Header />
        <AddProductForm />
        <Footer />
      </div>
    );
  };
  
  export default AdminAddProduct;