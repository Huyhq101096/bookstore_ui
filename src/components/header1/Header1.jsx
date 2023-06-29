import React from "react";
import {
  FaShoppingCart,
  FaUser,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaDribbble,
} from "react-icons/fa";
import "./css/style.css";

const Header1 = () => {
  return (
    <section className="ftco-section">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col">
            <a className="navbar-brand" href="index.html">
              Papermag <span>Magazine</span>
            </a>
          </div>
          <div className="col d-flex justify-content-end">
            <div className="social-media">
              <p className="mb-0 d-flex">
                <a
                  href="#"
                  className="d-flex align-items-center justify-content-center"
                >
                  <FaFacebook /> {/* Icon Facebook */}
                  <i className="sr-only">Facebook</i>
                </a>
                <a
                  href="#"
                  className="d-flex align-items-center justify-content-center"
                >
                  <FaTwitter /> {/* Icon Twitter */}
                  <i className="sr-only">Twitter</i>
                </a>
                <a
                  href="#"
                  className="d-flex align-items-center justify-content-center"
                >
                  <FaInstagram /> {/* Icon Instagram */}
                  <i className="sr-only">Instagram</i>
                </a>
                <a
                  href="#"
                  className="d-flex align-items-center justify-content-center"
                >
                  <FaDribbble /> {/* Icon Dribbble */}
                  <i className="sr-only">Dribbble</i>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
        <div className="container">
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a href="/" className="nav-link">
                  Home
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="dropdown04"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Page
                </a>
                <div className="dropdown-menu" aria-labelledby="dropdown04">
                  <a className="dropdown-item" href="#">
                    Page 1
                  </a>
                  <a className="dropdown-item" href="#">
                    Page 2
                  </a>
                  <a className="dropdown-item" href="#">
                    Page 3
                  </a>
                  <a className="dropdown-item" href="#">
                    Page 4
                  </a>
                </div>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Catalog
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Blog
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Contact
                </a>
              </li>
              <li className="nav-item">
                  <div className="search d-flex align-items-center">
                    <input
                      type="text"
                      placeholder="Search"
                      className="search-input"
                    />
                    <button className="search-button">Search</button>
                  </div>
              </li>
            </ul>
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
      </nav>
    </section>
  );
};

export default Header1;
