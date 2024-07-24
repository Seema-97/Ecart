import React, { Fragment, useEffect, useState } from "react";
import "../Pages.css";
import "./Products.css";

const Products = () => {
  const api = "https://fakestoreapi.com/products";

  const [products, setProducts] = useState([]);

  useEffect(() => {
    renderDataFromAPI();
  }, []);

  const renderDataFromAPI = () => {
    fetch(api)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        console.log(products);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="pages-container">
        <div className="products-container">
      {products.map((item) => (
        <Fragment key={item.id}>
          <div className="product-card">
            <img src={item.image} className="card-image-top" alt="..." />
            <div className="card-box">
              <h5 className="category">{item.category}</h5>
              <p className="price">{item.price}</p>
            </div>
          </div>
        </Fragment>
      ))}
      </div>
      </div>
    </>
  );
};

export default Products;
