import BannerMoto from "../../img/Tienda/motobanner.webp";

const FakeCarousel = () => {
  return (
    <div className="position-relative">
      <img src={BannerMoto} alt="" className="img-fluid"/>
      <div className="container-text-banner-tienda d-none d-lg-block">
        <p className="text-uppercase">Más pantalla. Más diversión</p>
        <p className="py-2">Moto E20</p>
        <p className="fw-light py-1">$22.499 Precio contado final</p>
        <p className="fw-light py-1">+10% dto. Conexión Total cliente Línea Móvil + Internet y/o TV.</p>
      </div>
    </div>
  );
};

export default FakeCarousel;
