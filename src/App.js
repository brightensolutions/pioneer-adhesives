import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./component/Navbar/Navbar";
import Home from "./component/Home/Home";
import ProductDetail from "./component/ProductDetail/ProductDetail";
import Footer from "./component/Footer/Footer";
import ScrollToTop from "./component/ScrollToTop";
import Product from "./component/Product/Product";
import Aboutus from "./component/Aboutus/Aboutus";
import Partners from "./component/Partners/Partners";
import Contactus from "./component/Contactus/Contactus";
import Home_Customers from "./component/Home_Customers/Home_Customers";

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productview/:id" element={<ProductDetail />} />
        <Route path="/product" element={<Product />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/clients" element={<Home_Customers />} />
        <Route path="/contactus" element={<Contactus />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
