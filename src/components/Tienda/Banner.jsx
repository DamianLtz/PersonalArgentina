import Dollar from "../../img/Home/icons-white/dollar.svg";
import CreditCard from "../../img/Home/icons-white/credit-card.svg";
import Truck from "../../img/Home/icons-white/truck.svg";
import Wallet from "../../img/Home/icons-white/wallet.svg";

const Banner = () => {
  return (
    <div className="bg-banner-tienda d-none d-xl-block">
      <div className="container-xxl">
        <div className="row">
          <div className="col-lg-3">
            <div className="d-flex align-items-center py-3">
              <img src={Dollar} alt="" className="icons-banner-tienda me-3" />
              <div>
                <p className="text-light">Descuento Conexión Total</p>
                <p className="text-primary fs-7 text-nowrap">
                  Conocé este beneficio pensado para vos
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="d-flex align-items-center py-3">
              <img
                src={CreditCard}
                alt=""
                className="icons-banner-tienda me-3"
              />
              <div>
                <p className="text-light">Hasta 6 cuotas sin interés</p>
                <p className="text-primary fs-7">Ver planes de financiación</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="d-flex align-items-center py-3">
              <img src={Truck} alt="" className="icons-banner-tienda me-3" />
              <div>
                <p className="text-light">Envío y retiro gratis</p>
                <p className="text-primary fs-7">
                  Conocé los tiempos de entrega
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="d-flex align-items-center py-3">
              <img src={Wallet} alt="" className="icons-banner-tienda me-3" />
              <div>
                <p className="text-light">Beneficio exclusivo Personal Pay</p>
                <p className="text-primary fs-7">
                  Hasta 20% de reintegro en tu compra
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
