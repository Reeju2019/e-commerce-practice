import React from "react";
import { useStateValue } from "../../../StateProvider";

const Product = (props) => {
  const [{ basket }, dispatch] = useStateValue();

  // console.log("this is the basket", basket);

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: props.id,
        name: props.name,
        ImageUrl: props.ImageUrl,
        price: props.price,
      },
    });
  };

  return (
    <div className="col-sm-6 col-md-4 col-lg-4">
      <div className="box">
        <div className="option_container">
          <div className="options">
            <a
              style={{ cursor: "pointer" }}
              onClick={addToBasket}
              className="option1"
            >
              Add to Cart
            </a>
            <a href="" className="option2">
              Buy Now
            </a>
          </div>
        </div>
        <div className="img-box">
          <img src={props.ImageUrl} alt="" />
        </div>
        <div className="detail-box">
          <h5>{props.name}</h5>
          <h6>
            <small>$</small>
            {props.price}
          </h6>
        </div>
      </div>
    </div>
  );
};

export default Product;
