import { useEffect } from "react";
import ScrollReveal from "scrollreveal";

// ------------------ IMG ------------------ //
import FlowImg from "../../img/Home/flow.png";
import Monitor from "../../img/Home/icons-blue/monitor.svg";
import Tablet from "../../img/Home/icons-blue/device-tablet.svg";
import Mobile from "../../img/Home/icons-blue/device-mobile-alt.svg";
import FlowAppImg from "../../img/Home/flow-entreteniemiento-home-desktop.png";

const Flow = () => {
  useEffect(() => {
    ScrollReveal().reveal("#flow-img", {
      delay: 400,
      distance: "50px",
      duration: 1250,
    });
  });

  return (
    <div className="py-5">
      <div className="row">
        <div className="col-lg-4">
          <img src={FlowImg} alt="" className="img-fluid" />
          <h3 className="py-3">TV en vivo en casa y donde vayas</h3>
          <p>
            Con Flow tenés el mejor entretenimiento en cualquier dispositivo.
            Mirá, pausá, grabá y volvé a mirar todos tus programas en vivo,
            películas, series y eventos deportivos favoritos.
          </p>
          <div className="py-3">
            <p>Disponible para: </p>
            <ul className="d-flex pt-3">
              <li className="d-flex align-items-center">
                <img src={Monitor} alt="" className="icon-list" />
                <p>TV</p>
              </li>
              <li className="d-flex align-items-center px-3 px-lg-2">
                <img src={Tablet} alt="" className="icon-list" />
                <p>Tablet</p>
              </li>
              <li className="d-flex align-items-center">
                <img src={Mobile} alt="" className="icon-list" />
                <p>Celular</p>
              </li>
            </ul>
          </div>
          <a href="/" className="d-inline-block py-4 py-lg-0 pt-lg-4">
            Conoce más sobre flow
          </a>
        </div>
        <div className="col-lg-8" id="flow-img">
          <div className="d-flex justify-content-center justify-content-lg-end">
            <img src={FlowAppImg} alt="" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Flow;
