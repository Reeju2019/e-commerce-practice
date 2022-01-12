import React from "react";
import { useStateValue } from "../../StateProvider";
import Footer from "../Common/Footer/Footer";
import Header from "../Common/Header/Header";
import "./Productdetails.css";

const Productdetails = () => {
  const [{ selectedProduct, basket }, dispatch] = useStateValue();
  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: selectedProduct.id,
        name: selectedProduct.name,
        ImageUrl: selectedProduct.ImageUrl,
        price: selectedProduct.price,
      },
    });
  };
  return (
    <>
      <Header />
      <div className="container productdetails">
        <img src={selectedProduct.ImageUrl} alt="" />
        <div className="productdetails__info">
          <h1>{selectedProduct.name}</h1>
          <p>{selectedProduct.description}</p>
          <p className="productdetails__price">
            <small>$</small>
            <strong>{selectedProduct.price}</strong>
          </p>
          <div className="productdetails__action">
            <button
              onClick={addToBasket}
              className="productdetails__action--button"
            >
              Add to basket
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Productdetails;
