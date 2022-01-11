import React from "react";
import Header from "../Common/Header/Header";
import CheckoutProduct from "./CheckoutProduct";
import SubTotal from "./SubTotal";
import Innerpage from "./Innerpage/Innerpage";
import "./Checkout.css";
import { useStateValue } from "../../StateProvider";
import Footer from "../Common/Footer/Footer";

const Checkout = () => {
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <div>
      <Header />
      <Innerpage />
      <div className="checkout">
        <div className="checkout__left">
          <div>
            <h3>Hello, {user}</h3>
            <h2 className="checkout__title">Your Shopping Cart</h2>

            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                name={item.name}
                ImageUrl={item.ImageUrl}
                price={item.price}
              />
            ))}
          </div>
        </div>
        <div className="checkout__right">
          <SubTotal />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Checkout;
