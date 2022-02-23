import Apple from "../../img/Tienda/apple-logo.jpg";
import Samsung from "../../img/Tienda/samsung-logo.jpg";
import Motorola from "../../img/Tienda/motorola_logo.jpg";
import Nokia from "../../img/Tienda/nokia-logo.jpg";
import TCL from "../../img/Tienda/tcl-logo.jpg";
import LG from "../../img/Tienda/LG-logo.jpg";

const LogoMarcas = () => {
  return (
    <div className="row justify-content-center">
      <div className="col-lg-2 col-md-4 col-sm-6 d-flex justify-content-center">
        <img src={Apple} alt="" className="img-fluid marca" />
      </div>
      <div className="col-lg-2 col-md-4 col-sm-6 d-flex justify-content-center">
        <img src={Samsung} alt="" className="img-fluid marca" />
      </div>
      <div className="col-lg-2 col-md-4 col-sm-6 d-flex justify-content-center">
        <img src={Motorola} alt="" className="img-fluid marca" />
      </div>
      <div className="col-lg-2 col-md-4 col-sm-6 d-flex justify-content-center">
        <img src={Nokia} alt="" className="img-fluid marca" />
      </div>
      <div className="col-lg-2 col-md-4 col-sm-6 d-flex justify-content-center">
        <img src={TCL} alt="" className="img-fluid marca" />
      </div>
      <div className="col-lg-2 col-md-4 col-sm-6 d-flex justify-content-center">
        <img src={LG} alt="" className="img-fluid marca" />
      </div>
    </div>
  );
};

export default LogoMarcas;
