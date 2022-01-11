import React from "react";
import Product from "./Product";

const ProductList = () => {
  return (
    <section className="product_section layout_padding">
      <div className="container">
        <div className="heading_container heading_center">
          <h2>
            Our <span>products</span>
          </h2>
        </div>
        <div className="row">
          <Product
            id="1"
            name="Men's Shirt"
            ImageUrl="static/images/p1.png"
            price={75}
          />
          <Product
            id="2"
            name="Men's Shirt"
            ImageUrl="static/images/p2.png"
            price={80}
          />
          <Product
            id="3"
            name="Women's Dress"
            ImageUrl="static/images/p3.png"
            price={68}
          />
          <Product
            id="4"
            name="Women's Dress"
            ImageUrl="static/images/p4.png"
            price={70}
          />
          <Product
            id="5"
            name="Women's Dress"
            ImageUrl="static/images/p5.png"
            price={75}
          />
          <Product
            id="6"
            name="Women's Dress"
            ImageUrl="static/images/p6.png"
            price={58}
          />
          <Product
            id="7"
            name="Women's Dress"
            ImageUrl="static/images/p7.png"
            price={80}
          />
          <Product
            id="8"
            name="Men's Shirt"
            ImageUrl="static/images/p8.png"
            price={65}
          />
          <Product
            id="9"
            name="Men's Shirt"
            ImageUrl="static/images/p9.png"
            price={65}
          />
          <Product
            id="10"
            name="Men's Shirt"
            ImageUrl="static/images/p10.png"
            price={65}
          />
          <Product
            id="11"
            name="Men's Shirt"
            ImageUrl="static/images/p11.png"
            price={65}
          />
          <Product
            id="12"
            name="Women's Dress"
            ImageUrl="static/images/p12.png"
            price={65}
          />
        </div>
        <div className="btn-box">
          <a href="">View All products</a>
        </div>
      </div>
    </section>
  );
};
export default ProductList;
