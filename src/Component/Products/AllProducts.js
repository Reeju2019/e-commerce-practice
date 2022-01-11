import React from "react";
import InnerPage from "./Innerpage/Innerpage";
import Footer from "../Common/Footer/Footer";
import Header from "../Common/Header/Header";
import ProductList from "../Common/Products/ProductList";

const AllProducts = () => {
  return (
    <>
      <Header />
      <InnerPage />
      <ProductList />
      <Footer />
    </>
  );
};
export default AllProducts;
