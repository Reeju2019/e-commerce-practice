import React from "react";
import Arrival from "../Common/Arrival/Arrival";
import Banner from "./Banner/Banner";
import Client from "../Common/Client/Client";
import Footer from "./Footer/Footer";
import Header from "../Common/Header/Header";
import Subscribe from "./Subscribe/Subscribe";
import WhyShop from "../Common/WhyShop/WhyShop";
import ProductList from "../Common/Products/ProductList";

const Home = () => {
  return (
    <>
      <Header />
      <Banner />
      <WhyShop />
      <Arrival />
      <ProductList />
      <Subscribe />
      <Client />
      <Footer />
    </>
  );
};

export default Home;
