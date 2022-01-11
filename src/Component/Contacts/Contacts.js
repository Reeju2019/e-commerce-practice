import React from "react";
import Arrival from "../Common/Arrival/Arrival";
import ContactForm from "./ContactForm/ContactForm";
import Footer from "../Common/Footer/Footer";
import Header from "../Common/Header/Header";
import InnerPage from "./Innerpage/Innerpage";

const Contacts = () => {
  return (
    <>
      <Header />
      <InnerPage />
      <ContactForm />
      <Arrival />
      <Footer />
    </>
  );
};
export default Contacts;
