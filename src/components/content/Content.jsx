import React, { useState, useEffect  } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./content.css";
import StarRatingComponent from "react-star-rating-component";
import { AiOutlineFilter, AiOutlineSearch } from 'react-icons/ai';
import best1 from '../../assets/IMG1.webp'
import best2 from '../../assets/IMG2.webp'
import best3 from '../../assets/IMG3.webp'
import best4 from '../../assets/IMG4.webp'
import best5 from '../../assets/IMG5.webp'
import best6 from '../../assets/IMG6.webp'
import best7 from '../../assets/IMG7.webp'
import best8 from '../../assets/IMG8.webp'
import best9 from '../../assets/IMG9.webp'
import { getAllProducts } from './action_content';
import { error } from "jquery";


const getTokenFromLocalStorage = () => {
  return localStorage.getItem("token");
};

const Content = () => {

  const productList = [
    {
      id: 1,
      name: "Product 1",
      image: best1,
      rating: 4.5,
    },
    {
      id: 2,
      name: "Product 2",
      image: best2,
      rating: 4.6,
    },
    {
      id: 3,
      name: "Product 3",
      image: best3,
      rating: 3.5,
    },
    {
      id: 4,
      name: "Product 4",
      image: best4,
      rating: 2.3,
    },
    {
      id: 5,
      name: "Product 5",
      image:
        best5,
      rating: 2.9,
    },
    {
      id: 6,
      name: "Product 6",
      image:
      best6,
      rating: 9.5,
    },
    {
      id: 7,
      name: "Product 7",
      image:
      best7,
      rating: 3.6,
    },
    {
      id: 8,
      name: "Product 8",
      image:
      best8,
      rating: 2.8,
    },
    {
      id: 9,
      name: "Product 9",
      image:
      best9,
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

  const [productList1, setProductList] = useState([]);

  useEffect(() => {
    const token = getTokenFromLocalStorage();
    // console.log(token)
    getAllProducts(token)
    .then((data) => setProductList(data))
    .catch((error) => {
      console.error("Error fetching data from API: ", error);
    });
  }, []);

  const productsPerPage = 8;
  const totalPages = Math.ceil(productList.length / productsPerPage);

  const [currentPage, setCurrentPage] = useState(1);
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const currentProducts = productList1.slice(startIndex, endIndex);

  const goToPage = (page) => {
    setCurrentPage(page);
  };

  return (
    <section className="container container-content">
      <div className="row category-container">
        <div className="col-12">
          <h2>Category</h2>
        </div>
        <div className="col-12 sup-filter-category">
          <div className="sup-category">
            <div>Love</div>
            <div>Bussiness</div>
            <div>Family</div>
            <div>Ebook</div>
          </div>
          <div className="filter-category">
            <div className=""><AiOutlineFilter />{'\t'} Filter</div>
            <div className=""><AiOutlineSearch />{'\t'}Search</div>
          </div>
        </div>
      </div>
      <div className="row product-container">
        <div className="col-12 product-container_text">
          <h2>Danh sách sản phẩm</h2>
        </div>
        <div className="col-12">
          <div className="product-list">
            <div className="row">
              {currentProducts.map((product) => (
                <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6" key={product.id}>
                  <div className="product">
                    <Link to={`/product/${product.id}`}>
                      <div className="product-image">
                        <img
                          src={require(`../../assets/${product.image}`)}
                          alt={product.name}
                          className=""
                        />
                      </div>
                      <h4 className="product-name">{product.name}</h4>
                      <p className="author-name">Ten tac gia</p>
                    </Link>
                    <div className="product-price-rating">
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
                      <div className="product_price">
                          <p className="product_price-text">${product.price}</p>
                      </div>
                      
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
