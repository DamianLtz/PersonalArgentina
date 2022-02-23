import Personal from "../../img/checkout/personal.png";
import Lock from "../../img/checkout/lock.svg";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <header className="bg-header-checkout">
      <div className="container py-3">
        <div className="d-flex align-items-center justify-content-between">
          <NavLink to="/">
            <img src={Personal} alt="" />
          </NavLink>
          <div className="d-flex align-items-center">
            <img src={Lock} alt="" className="lock-icon mx-3" />
            <p className="text-light fw-light">Sitio Seguro</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
