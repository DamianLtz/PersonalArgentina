import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

import BannerDos from "./Home/BannerDos";
import BannerTelecom from "./Home/BannerTelecom";
import VentaTelefonica from "./Home/VentaTelefonica"
import BannerUno from "./Home/BannerUno";
import CardBeneficios from "./Home/CardBeneficios";
import CardBeneficios2 from "./Home/CardBeneficios2";
import CardOfertas from "./Home/CardOfertas";
import ClienteOpciones from "./Home/ClienteOpciones";
import Dudas from "./Home/Dudas";
import EnlacesIconos from "./Home/EnlacesIconos";
import Flow from "./Home/Flow";
import SeccionApps from "./Home/SeccionApps";
import SeccionAyuda from "./Home/SeccionAyuda";
// import FirestoreOptions from "./common/FirestoreOptions";
// import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Navbar />
      <VentaTelefonica />
      <main className="container">
        <BannerUno />
        <EnlacesIconos />
        {/* <FirestoreOptions /> // Envia Productos a Firebase */}
        {/* <Outlet /> */}
        <BannerDos />
        <h2 className="text-center pt-5">
          Potenciá tu conectividad con Personal
        </h2>
        <p className="text-center pt-2 pb-5 fw-normal">
          Encontrá combos de internet, telefonía móvil y TV
        </p>
        <CardOfertas />
        <Flow />
        <CardBeneficios />
        <ClienteOpciones />
        <SeccionAyuda />
        <SeccionApps />
        <CardBeneficios2 />
        <Dudas />
        <BannerTelecom />
      </main>
      <Footer />
    </>
  );
};

export default Home;
