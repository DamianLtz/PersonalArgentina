import Navbar from "./Navbar";
import Footer from "./Footer";

import Banner from "./Tienda/Banner";
import Catalogo from "./Tienda/Catalogo";
import InfoCompraEquipos from "./Tienda/InfoCompraEquipos";
import LogoMarcas from "./Tienda/LogoMarcas";
import PreguntasFrecuentes from "./Tienda/PreguntasFrecuentes";
import BannerTelecom from "../components/Home/BannerTelecom";
import FakeCarousel from "./Tienda/FakeCarousel";
const Tienda = () => {
  return (
    <>
      <Navbar />
      <main>
        <FakeCarousel />
        <Banner />
        <div className="container">
          <Catalogo />
          <PreguntasFrecuentes />
          <LogoMarcas />
          <InfoCompraEquipos />
        </div>
        <BannerTelecom className={true} />
      </main>
      <Footer />
    </>
  );
};

export default Tienda;
