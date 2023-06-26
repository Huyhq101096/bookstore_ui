import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "./App.css";
import Home from "./pages/user/Home";
import Detail from './pages/user/Detail';
import Login from './pages/user/Login';
import Registration from './pages/user/Registration';
import Cart from './pages/user/Cart'
import AddProduct from './pages/admin/AddProduct';

import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<Detail />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Registration />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/addproduct' element={<AddProduct />} />
      </Routes>
    </BrowserRouter>
  )
};

export default App;