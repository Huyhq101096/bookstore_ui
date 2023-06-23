import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./content.css";

const Content = () => {
  const productList = [
    { id: 1, name: "Product 1", image: "https://khothietke.net/wp-content/uploads/2021/05/PNGkhothietke.net-02705.png" },
    { id: 2, name: "Product 2", image: "https://khothietke.net/wp-content/uploads/2021/05/PNGkhothietke.net-02705.png" },
    { id: 3, name: "Product 3", image: "https://khothietke.net/wp-content/uploads/2021/05/PNGkhothietke.net-02705.png" },
    { id: 4, name: "Product 4", image: "https://khothietke.net/wp-content/uploads/2021/05/PNGkhothietke.net-02705.png" },
    { id: 5, name: "Product 5", image: "https://khothietke.net/wp-content/uploads/2021/05/PNGkhothietke.net-02705.png" },
    { id: 6, name: "Product 6", image: "https://khothietke.net/wp-content/uploads/2021/05/PNGkhothietke.net-02705.png" },
    { id: 7, name: "Product 7", image: "https://khothietke.net/wp-content/uploads/2021/05/PNGkhothietke.net-02705.png"},
    { id: 8, name: "Product 8", image: "https://khothietke.net/wp-content/uploads/2021/05/PNGkhothietke.net-02705.png" },
    { id: 9, name: "Product 9", image: "https://khothietke.net/wp-content/uploads/2021/05/PNGkhothietke.net-02705.png" },
    { id: 10, name: "Product 10", image: "https://khothietke.net/wp-content/uploads/2021/05/PNGkhothietke.net-02705.png" },
    { id: 11, name: "Product 11", image: "https://khothietke.net/wp-content/uploads/2021/05/PNGkhothietke.net-02705.png" },
    { id: 12, name: "Product 12", image: "https://khothietke.net/wp-content/uploads/2021/05/PNGkhothietke.net-02705.png" },
    { id: 13, name: "Product 13", image: "https://khothietke.net/wp-content/uploads/2021/05/PNGkhothietke.net-02705.png" },
    { id: 14, name: "Product 14", image: "https://khothietke.net/wp-content/uploads/2021/05/PNGkhothietke.net-02705.png" },
    { id: 15, name: "Product 15", image: "https://khothietke.net/wp-content/uploads/2021/05/PNGkhothietke.net-02705.png" }
  ];

  const productsPerPage = 8;
  const totalPages = Math.ceil(productList.length / productsPerPage);

  const [currentPage, setCurrentPage] = useState(1);
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const currentProducts = productList.slice(startIndex, endIndex);

  const goToPage = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="container container-content">
      <div className="row category-container">
        <div className="col-12">
          <h2>Category</h2>
        </div>
        <div className="col-12">
          <div className="category">
            <div>Category 1</div>
            <div>Category 2</div>
            <div>Category 3</div>
            <div>Category 4</div>
          </div>
        </div>
      </div>
      <div className="row product-container">
        <div className="col-12">
          <h2>Danh sách sản phẩm</h2>
        </div>
        <div className="col-12">
          <div className="product-list">
            <div className="row">
              {currentProducts.map((product) => (
                <div className="col-md-3" key={product.id}>
                  <div className="product">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="product-image"
                    />
                    <h4 className="product-name">{product.name}</h4>
                    <div className="product-rating">
                      <span className="rating">{product.rating}</span>
                      <span className="stars">
                        {Array.from({ length: product.rating }).map(
                          (_, index) => (
                            <i className="fa fa-star" key={index}></i>
                          )
                        )}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="col-12">
          <div className="pagination">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                className={`btn ${
                  currentPage === index + 1 ? "btn-primary" : "btn-secondary"
                }`}
                onClick={() => goToPage(index + 1)}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
