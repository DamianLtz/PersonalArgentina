import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useUserContext } from "../context/UserContext";

// -------------------Iconos e Img ------------------- //

import Personal from "../img/personal.png";
import Tienda from "../img/Home/icons-white/storefront.svg";
import User from "../img/user.svg";
import LogOff from "../img/log-off.svg";

const Navbar = () => {
  const { user, setUser, clearUser } = useUserContext();

  const usuarioLogueado = JSON.parse(localStorage.getItem("usuario logueado"));
  const usuariosRegistrados = JSON.parse(
    localStorage.getItem("usuarios registrados")
  );

  const saveChanges = () => {
    const usuarioActivo = usuarioLogueado.user;

    const indiceDeUsuarioEnRegistros = usuariosRegistrados.findIndex(
      (usuario) => usuario.user === usuarioActivo
    );
    if (indiceDeUsuarioEnRegistros !== -1) {
      usuariosRegistrados[indiceDeUsuarioEnRegistros] = usuarioLogueado
      // usuarioEnRegistros.user = usuarioLogueado.user;
      // usuarioEnRegistros.password = usuarioLogueado.password;
      // usuarioEnRegistros.carrito = usuarioLogueado.carrito;
      // usuarioEnRegistros.datosPersonales = usuarioLogueado.datosPersonales;
      // usuarioEnRegistros.historialCompras = usuarioLogueado.historialCompras;
    }
    localStorage.setItem(
      "usuarios registrados",
      JSON.stringify(usuariosRegistrados)
    );
    clearUser();
  };

  useEffect(() => {
    if (usuarioLogueado) {
      setUser(usuarioLogueado.user);
    } else {
      setUser(null);
    }
  }, [usuarioLogueado, setUser]);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-navbar navbar-personal">
      <div className="container container-menu-mobile">
        <Link to="/" className="d-lg-none">
          <img src={Personal} alt="" className="logo-personal img-fluid" />
        </Link>
        <button
          className="navbar-toggler shadow-none border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav align-items-lg-center justify-content-between w-100">
            <div className="d-flex container-links-nav pt-3 pt-lg-0">
              <Link
                className="d-flex align-items-center pe-3 text-light py-2 py-lg-0 opcion-seleccionada"
                to="/tienda">
                <img src={Tienda} alt="" className="icons-navbar" />
                Tienda
                <span></span>
              </Link>
              {user ? (
                <Link
                  to="/profile"
                  className="d-flex align-items-center text-light py-2 py-lg-0 opcion-seleccionada">
                  <img src={User} alt="" className="icons-navbar" />
                  Mi Perfil
                  <span></span>
                </Link>
              ) : (
                <Link
                  to="/login"
                  className="d-flex align-items-center text-light opcion-seleccionada">
                  <img src={User} alt="" className="icons-navbar" />
                  Mi Perfil
                  <span></span>
                </Link>
              )}
            </div>
            <Link to="/" className="d-none d-lg-inline-block">
              <img src={Personal} alt="" />
            </Link>
            <div className="d-flex">
              {usuarioLogueado && user ? (
                <div className="d-flex align-items-center justify-content-between w-100 pt-3 pt-lg-0">
                  <Link to="/profile" className="d-flex align-items-center">
                    <img
                      src={User}
                      alt=""
                      className="img-fluid icons-header me-2"
                    />
                    <p className="fs-7 text-light user-logged">{`Bienvenido ${user}`}</p>
                  </Link>
                  <button
                    className="bg-transparent border-0 ms-2"
                    onClick={saveChanges}>
                    <img src={LogOff} alt="" />
                  </button>
                </div>
              ) : (
                <div className="d-flex align-items-center pt-3 pt-lg-0">
                  <Link to="/login" className="d-flex align-items-center">
                    <img
                      src={User}
                      alt=""
                      className="img-fluid icons-header me-2"
                    />
                    <p className="fs-7 text-iniciar-sesion">Iniciar Sesión</p>
                  </Link>
                  <Link className="nav-link ps-3 text-muted" to="/register">
                    ¿Aún no sos Personal?
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
