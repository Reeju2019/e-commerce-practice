import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./Component/About/About";
import Blog from "./Component/Blog/Blog";
import Contacts from "./Component/Contacts/Contacts";
import Home from "./Component/Home/Home";
import AllProducts from "./Component/Products/AllProducts";
import Testimonial from "./Component/Testimonial/Testimonial";
import Checkout from "./Component/Checkout/Checkout";
import Login from "./Component/Login/Login";
import Payment from "./Component/Payment/Payment";
import Productdetails from "./Component/ProductDetails/Productdetails";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";

const promise = loadStripe(
  "pk_test_51KGlLxSD4dxFFUMshYA8QPhXW3cxKqwsVvpSjOafIWcKk5k3c7izBFe8z90bXtWyJG853FWiDgVaGv1GV8QOiCZ100sHZnb4sU"
);

function App() {
  const [{ user }, dispatch] = useStateValue();
  useEffect(() => {
    onAuthStateChanged(auth, (authUser) => {
      console.log(authUser?.email);
      if (authUser) {
        // the user just logged in
        dispatch({
          type: "SET_USER",
          user: authUser?.email,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contacts />} />
          <Route path="/product" element={<AllProducts />} />
          <Route path="/testimonial" element={<Testimonial />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route
            path="/payment"
            element={
              <Elements stripe={promise}>
                <Payment />
              </Elements>
            }
          />
          <Route path="/view-product" element={<Productdetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
