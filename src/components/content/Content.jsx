import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./content.css";
import StarRatingComponent from "react-star-rating-component";

const Content = () => {
  const productList = [
    {
      id: 1,
      name: "Product 1",
      image:
        "https://marketplace.canva.com/EAD5DFBuM78/1/0/1003w/canva-c%E1%BA%B7p-%C4%91%C3%B4i-trong-c%E1%BB%8F-khoa-h%E1%BB%8Dc-vi%E1%BB%85n-t%C6%B0%E1%BB%9Fng-s%C3%A1ch-b%C3%ACa-eRK4o7m6a6c.jpg",
      rating: 4.5,
    },
    {
      id: 2,
      name: "Product 2",
      image:
        "https://d1j8r0kxyu9tj8.cloudfront.net/images/1567492611Rj5siYiYrkqcvX8.jpg",
      rating: 4.6,
    },
    {
      id: 3,
      name: "Product 3",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqVsk3AihFj1RfaiZ0XkM6rXTEQ_yZINU19w&usqp=CAU",
      rating: 3.5,
    },
    {
      id: 4,
      name: "Product 4",
      image:
        "https://khothietke.net/wp-content/uploads/2021/05/PNGkhothietke.net-02705.png",
      rating: 2.3,
    },
    {
      id: 5,
      name: "Product 5",
      image:
        "https://khothietke.net/wp-content/uploads/2021/05/PNGkhothietke.net-02705.png",
      rating: 2.9,
    },
    {
      id: 6,
      name: "Product 6",
      image:
        "https://khothietke.net/wp-content/uploads/2021/05/PNGkhothietke.net-02705.png",
      rating: 9.5,
    },
    {
      id: 7,
      name: "Product 7",
      image:
        "https://khothietke.net/wp-content/uploads/2021/05/PNGkhothietke.net-02705.png",
      rating: 3.6,
    },
    {
      id: 8,
      name: "Product 8",
      image:
        "https://khothietke.net/wp-content/uploads/2021/05/PNGkhothietke.net-02705.png",
      rating: 2.8,
    },
    {
      id: 9,
      name: "Product 9",
      image:
        "https://khothietke.net/wp-content/uploads/2021/05/PNGkhothietke.net-02705.png",
      rating: 3.9,
    },
    {
      id: 10,
      name: "Product 10",
      image:
        "https://khothietke.net/wp-content/uploads/2021/05/PNGkhothietke.net-02705.png",
      rating: 4.6,
    },
    {
      id: 11,
      name: "Product 11",
      image:
        "https://khothietke.net/wp-content/uploads/2021/05/PNGkhothietke.net-02705.png",
      rating: 4.65,
    },
    {
      id: 12,
      name: "Product 12",
      image:
        "https://khothietke.net/wp-content/uploads/2021/05/PNGkhothietke.net-02705.png",
      rating: 3.23,
    },
    {
      id: 13,
      name: "Product 13",
      image:
        "https://khothietke.net/wp-content/uploads/2021/05/PNGkhothietke.net-02705.png",
      rating: 2.36,
    },
    {
      id: 14,
      name: "Product 14",
      image:
        "https://khothietke.net/wp-content/uploads/2021/05/PNGkhothietke.net-02705.png",
      rating: 4.36,
    },
    {
      id: 15,
      name: "Product 15",
      image:
        "https://khothietke.net/wp-content/uploads/2021/05/PNGkhothietke.net-02705.png",
      rating: 2.36,
    },
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
    <section className="container container-content">
      <div className="row category-container">
        <div className="col-12">
          <h2>Category</h2>
        </div>
        <div className="col-12">
          <div className="sup-category">
            <div>Love</div>
            <div>Bussiness</div>
            <div>Family</div>
            <div>Ebook</div>
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
                    <div className="product-image">
                      <img
                        src={product.image}
                        alt={product.name}
                        className=""
                      />
                    </div>

                    <h4 className="product-name">{product.name}</h4>
                    <div className="product-rating">
                      <StarRatingComponent
                        name={`rating_${product.id}`}
                        value={product.rating}
                        starCount={5}
                        starColor="#ffd700"
                        emptyStarColor="#ddd"
                        editing={false}
                      />
                      <span className="rating-value">{product.rating}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="col-12">
          <div className="pagination product-pagination">
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
    </section>
  );
};

export default Content;
