import React from 'react';
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import '../header/header.css';
import logo from "../../assets/logo";

const Header = () => {
  return (
    <header className="header">
      <div className="custom-container d-flex justify-content-between align-items-center container">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <nav className="navbar navbar-expand-lg">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/shop">
                Shop
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about">
                About
              </a>
            </li>
          </ul>
        </nav>
        <div className="search d-flex align-items-center">
          <input type="text" placeholder="Search" className="search-input" />
          <button className="search-button">Search</button>
        </div>
        <div className="cart">
          <FaShoppingCart className="icon" />
          <a href="/cart">Cart</a>
        </div>
        <div className="login">
          <FaUser className="icon" />
          <a href="/login">Login</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
