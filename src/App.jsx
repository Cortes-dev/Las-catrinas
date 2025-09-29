import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import Navbar from "./layouts/Navbar";
import Menu from "./views/Menu";
import Contacto from "./views/Contacto";
import Footer from "./layouts/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/contacto" element={<Contacto />} />
        {/* Add other routes as needed */}
        <Route path="*" element={<Home />} />

      </Routes>
      <Footer />
    </>
  );
};

export default App;
