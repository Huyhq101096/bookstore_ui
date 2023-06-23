import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import "./banner.css"

const Banner = () => {
  const images = [
    "https://toquoc.mediacdn.vn/280518851207290880/2022/12/22/12-1671683430473740576022.jpg",
    "https://toquoc.mediacdn.vn/280518851207290880/2022/12/22/12-1671683430473740576022.jpg",
    "https://toquoc.mediacdn.vn/280518851207290880/2022/12/22/12-1671683430473740576022.jpg",
  ]; // Đường dẫn đến ảnh phong cảnh

  return (
    <div className="container">
      <div className="carousel-container">
        <Carousel autoPlay interval={2000} infiniteLoop showThumbs={false}>
          {images.map((imageUrl, index) => (
            <div key={index} className="banner d-flex justify-content-center align-items-center">
              <img src={imageUrl} alt={`Banner ${index + 1}`} className="img-fluid" />
            </div>
          ))}
        </Carousel>
      </div>
      <div className="carousel-navigation">
        <button type="button" className="carousel-arrow carousel-arrow-left">
          <FiChevronLeft />
        </button>
        <button type="button" className="carousel-arrow carousel-arrow-right">
          <FiChevronRight />
        </button>
      </div>
    </div>
  );
};

export default Banner;
