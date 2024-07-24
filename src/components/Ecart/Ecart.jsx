import React from "react";
import { Route, Routes } from 'react-router-dom'

import Header from "./Header/Header";
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import Contact from "./pages/Contact/Contact";

const Ecart = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
};

export default Ecart;
