import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useUserContext } from "../context/UserContext";

// -------------- Iconos -------------- //
import Personal from "../img/personal.png";
import Tienda from "../img/Home/icons-white/storefront.svg";
import User from "../img/user.svg";
import LogOff from "../img/log-off.svg";

const Header = () => {
  const { user, setUser, clearUser } = useUserContext();

  const obtenerUsuarioLogueado = JSON.parse(
    localStorage.getItem("usuario logueado")
  );
  const obtenerUsuariosRegistrados = JSON.parse(
    localStorage.getItem("usuarios registrados")
  );

  const saveChanges = () => {
    const usuarioLogueado = obtenerUsuarioLogueado.user;

    const buscarUsuario = obtenerUsuariosRegistrados.find(
      (usuarios) => usuarios.user === usuarioLogueado
    );

    if (buscarUsuario) {
      buscarUsuario.user = obtenerUsuarioLogueado.user;
      buscarUsuario.password = obtenerUsuarioLogueado.password;
      buscarUsuario.carrito = obtenerUsuarioLogueado.carrito;
      buscarUsuario.datosPersonales = obtenerUsuarioLogueado.datosPersonales;
      buscarUsuario.historialCompras = obtenerUsuarioLogueado.historialCompras;
    }
    localStorage.setItem(
      "usuarios registrados",
      JSON.stringify(obtenerUsuariosRegistrados)
    );
    clearUser();
  };

  useEffect(() => {
    if (obtenerUsuarioLogueado) {
      setUser(obtenerUsuarioLogueado.user);
    } else {
      setUser(null);
    }
  }, [obtenerUsuarioLogueado, setUser]);

  return (
    <div className="bg-navbar">
      <div className="container py-2">
        <div className="d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center">
            <Link
              className="d-flex align-items-center dropdown-item"
              to="/tienda">
              <img src={Tienda} alt="" className="icons-navbar" />
              <p className="text-light">Tienda</p>
            </Link>
            <Link
              to="/profile"
              className="d-flex align-items-center dropdown-item">
              <img src={User} alt="" className="icons-navbar" />
              <p className="text-light">Mi Perfil</p>
            </Link>
          </div>
          <Link to="/" className="d-none d-lg-inline-block">
            <img src={Personal} alt="" />
          </Link>
          <div className="d-flex">
            {obtenerUsuarioLogueado && user ? (
              <div className="d-flex align-items-center">
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
              <div className="d-flex align-items-center">
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
  );
};

export default Header;
