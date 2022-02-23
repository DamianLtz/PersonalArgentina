import listaLinks from "./Data/listaLinks";

import Facebook from "../img/Footer/facebook-logo.svg";
import Twitter from "../img/Footer/twitter-logo.svg";
import LinkedIn from "../img/Footer/linkedin-logo.svg";
import qrUno from "../img/Footer/QR.jpg";
import qrDos from "../img/Footer/QR-DataFiscal.jpg";

const Footer = () => {
  return (
    <>
      <div className="container">
        <div className="row justify-content-center py-5">
          {listaLinks.map((card) => {
            return (
              <div className="col-lg-2 my-4 my-lg-0" key={card.id}>
                <div>
                  <h6>{card.title}</h6>
                  <ul className="pt-4">
                    {card.opciones.map((link) => {
                      return (
                        <li className="py-2" key={link}>
                          <p className="text-muted">{link}</p>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="bg-footer">
        <div className="container-footer">
          <div className="container">
            <div className="row">
              <div className="col-lg-2">
                <h6 className="pb-3 text-light">Acerca de</h6>
                <ul>
                  <li className="py-1">
                    <p className="text-light">Compañia</p>
                  </li>
                  <li className="py-1">
                    <p className="text-light">Inversores</p>
                  </li>
                  <li className="py-1">
                    <p className="text-light">Prensa</p>
                  </li>
                  <li className="py-1">
                    <p className="text-light">RRHH</p>
                  </li>
                  <li className="py-1">
                    <p className="text-light">RSE</p>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3">
                <h6 className="pb-3 text-light">Asistencia</h6>
                <ul>
                  <li className="py-1">
                    <p className="text-light">Conexiones clandestinas</p>
                  </li>
                  <li className="py-1">
                    <p className="text-light">Enacom contacto@enacom.gob.ar</p>
                  </li>
                  <li className="py-1">
                    <p className="text-light">Accesibilidad</p>
                  </li>
                  <li className="py-1">
                    <p className="text-light">Prestación Básica Universal</p>
                  </li>
                </ul>
              </div>
              <div className="col-lg-4">
                <h6 className="pb-3 text-light">Confianza en tus compras</h6>
                <ul>
                  <li className="py-1">
                    <p className="text-light">
                      Defensa de las y los Consumidores. Para Reclamos Ingrese{" "}
                      <span className="text-primary">Aquí</span>
                    </p>
                  </li>
                  <li className="py-1">
                    <p className="text-light">
                      Política de privacidad de Telecom Argentina S.A
                    </p>
                  </li>
                  <li className="py-1">
                    <p className="text-light">
                      Contratos de adhesión - Ley N° 24.240 de Defensa del
                      Consumidor
                    </p>
                  </li>
                  <li className="py-1">
                    <p className="text-light">
                      Reglamento de cliente servicios TIC
                    </p>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3">
                <h6 className="pb-3 text-light">Ayuda</h6>
                <ul>
                  <li className="py-1">
                    <p className="text-light">Contacto</p>
                  </li>
                  <li className="py-1">
                    <p className="text-light">Centro de ayuda</p>
                  </li>
                  <li className="py-1">
                    <p className="text-light">Arrepentimiento</p>
                  </li>
                  <li className="py-1">
                    <div className="d-flex align-items-center mt-2">
                      <div>
                        <img src={Facebook} alt="" className="social-icon" />
                      </div>
                      <div>
                        <img
                          src={Twitter}
                          alt=""
                          className="social-icon mx-2"
                        />
                      </div>
                      <div>
                        <img src={LinkedIn} alt="" className="social-icon" />
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-footer-2">
        <div className="container py-4">
          <div className="row">
            <div className="col-lg-10">
              <p className="text-muted text-light fs-7">
                Los servicios que presta Telecom Argentina S.A. están sujetos a
                disponibilidad técnica y geográfica dentro del territorio de la
                República Argentina
              </p>
              <p className="text-muted text-light fs-7">
                © 1997 / 2022 Telecom Argentina S.A. Todos los derechos
                reservados - General Hornos 690 - Ciudad de Bs. As. CUIT
                30-63945373-8 ©2022 - 0.0.5
              </p>
            </div>
            <div className="col-lg-2 mt-4">
              <div>
                <img src={qrUno} alt="" className="qr-icon" />
                <img src={qrDos} alt="" className="qr-icon ms-3" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
