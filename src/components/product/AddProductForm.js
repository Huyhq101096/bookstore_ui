import React, { useState } from "react";
import "./css/addproductform.css";

const AddProductForm = () => {
  const [bookTitle, setBookTitle] = useState("");
  const [bookImage, setBookImage] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [price, setPrice] = useState("");
  const [summary, setSummary] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();

    // TODO: Logic for adding product

    // Clear form fields after submission
    setBookTitle("");
    setBookImage("");
    setAuthorName("");
    setPrice("");
    setSummary("");
  };

  return (
    <div className="add-product-form">
      <h2>Add Product</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="form-group">
          <label htmlFor="bookTitle">Book Title</label>
          <input
            type="text"
            id="bookTitle"
            value={bookTitle}
            onChange={(e) => setBookTitle(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="bookImage">Book Image</label>
          <input
            type="text"
            id="bookImage"
            value={bookImage}
            onChange={(e) => setBookImage(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="authorName">Author Name</label>
          <input
            type="text"
            id="authorName"
            value={authorName}
            onChange={(e) => setAuthorName(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="price">Price</label>
          <input
            type="text"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="summary">Summary</label>
          <textarea
            id="summary"
            value={summary}
            onChange={(e) => setSummary(e.target.value)}
          ></textarea>
        </div>

        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default AddProductForm;
