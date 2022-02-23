import { useEffect } from "react";
import ScrollReveal from "scrollreveal";

import Banner1 from "../../img/Home/banner2.jpg";
import Banner2 from "../../img/Home/banner3.jpg";

const BannerDos = () => {
  useEffect(() => {
    ScrollReveal().reveal("#bannerDos", {
      delay: 500,
      distance: "15px",
      duration: 1500,
    });
    ScrollReveal().reveal("#bannerTres", {
      delay: 750,
      distance: "15px",
      duration: 1500,
    });
  });

  return (
    <div className="row">
      <div className="col-lg-8">
        <div className="position-relative my-3 my-lg-0" id="bannerDos">
          <img src={Banner1} alt="" className="img-fluid" />
          <div className="container-text-banner">
            <div>
              <p className="text-light pb-3">#TEAM VERANO</p>
              <p className="fs-2 fw-light text-light pb-3">
                Este verano te damos 10 GB <br /> gratis
              </p>
              <p className="text-light pb-4 fs-7 d-none d-lg-inline-block">
                Si tenés Conexión Total de Personal, navegá sin gastar los datos
                de tu
                <br />
                plan
              </p>
            </div>
            <div className="d-none d-lg-inline-block">
              <button className="btn btn-primary shadow-none fs-5 btn-beneficio">
                Ver Beneficio
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4" id="bannerTres">
        <div className="position-relative h-100">
          <img src={Banner2} alt="" className="img-fluid h-100" />
          <div className="container-text-banner">
            <div>
              <p className="text-light">SI TENES PERSONAL EN TU LÍNEA MÓVIL</p>
              <p className="fs-2 fw-light text-light pb-5">
                Conectate con los que querés
              </p>
              <div>
                <button className="btn btn-primary shadow-none fs-5 btn-beneficio mt-5">
                  Lo quiero
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerDos;
