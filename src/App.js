import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./Component/About/About";
import Blog from "./Component/Blog/Blog";
import Contacts from "./Component/Contacts/Contacts";
import Home from "./Component/Home/Home";
import AllProducts from "./Component/Products/AllProducts";
import Testimonial from "./Component/Testimonial/Testimonial";
import Checkout from "./Component/Checkout/Checkout";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contacts />} />
          <Route path="/product" element={<AllProducts />} />
          <Route path="/testimonial" element={<Testimonial />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
