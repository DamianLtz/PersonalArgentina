import { Link } from "react-router-dom";
import enlacesIconos from "../Data/listaEnlacesIconosHome";

const EnlacesIconos = () => {
  return (
    <div className="row py-4">
      <div className="col-lg-12">
        <div className="d-flex justify-content-center align-items-center">
          {enlacesIconos.map((icono) => {
            return (
              <Link
                key={icono.titulo}
                to={icono.link}
                className="d-flex flex-column align-items-center justify-content-center px-2 px-sm-4 px-md-5 text-enlace">
                <img src={icono.image} alt="" className="icon-enlace" />
                {icono.titulo}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default EnlacesIconos;
