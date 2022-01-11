import React from "react";
import { useStateValue } from "../../StateProvider";
import "./CheckoutProduct.css";

function CheckoutProduct({ id, ImageUrl, name, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    //  remove the item from the basket
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={ImageUrl} />

      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{name}</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <button onClick={removeFromBasket}>Remove from Cart</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
