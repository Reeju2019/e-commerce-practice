import React, { useEffect } from "react";
import { useStateValue } from "../../StateProvider";
import "./CheckoutProduct.css";

function CheckoutProduct({ id, ImageUrl, name, price, quentity }) {
  const [{ basket }, dispatch] = useStateValue();

  const addQuantity = () => {
    dispatch({
      type: "ADD_QUANTITY",
      item: { id, ImageUrl, name, price, quentity },
    });
  };

  const removeQuantity = () => {
    dispatch({
      type: "REMOVE_QUANTITY",
      item: { id, ImageUrl, name, price, quentity },
    });
  };

  const removeFromBasket = () => {
    //  remove the item from the basket
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  useEffect(() => {
    console.log("useEffect");
  }, [basket]);

  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={ImageUrl} />

      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{name}</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__quantity">
          <div className="checkoutProduct__quantity--minus">
            <button onClick={removeQuantity}>-</button>
          </div>
          <div className="checkoutProduct__quantity--number">{quentity}</div>
          <div className="checkoutProduct__quantity--plus">
            <button onClick={addQuantity}>+</button>
          </div>
        </div>
        <button onClick={removeFromBasket}>Remove from Cart</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
