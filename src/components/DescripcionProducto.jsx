import React from "react";
import CaracteristicasProducto from "./DescripcionProducto/CaracteristicasProducto";
import ProductoInfo from "./DescripcionProducto/ProductoInfo";
import Footer from "./Footer";
import Navbar from "./Navbar";

const DescripcionProducto = () => {
  return (
    <>
      <Navbar />
      <ProductoInfo />
      <CaracteristicasProducto />
      <Footer />
    </>
  );
};

export default DescripcionProducto;
