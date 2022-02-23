import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Formik } from "formik";
import expresiones from "./common/expresionesRegulares";
import ErrorBDD from "./common/ErrorBDD";
// ---------------- IMG ---------------- //
import PersonalFlow from "../img/login/logo-nuevo.svg";
import Question from "../img/login/question.svg";

const Login = () => {
  let navigate = useNavigate();
  const [userExists, setUserExist] = useState(true);
  const redirectToCarrito = (valores) => {
    const productoGuardado = JSON.parse(
      localStorage.getItem("Celular Seleccionado")
    );
    if (productoGuardado) {
      const usuario = {
        user: parseInt(valores.telefono),
        password: parseInt(valores.password),
        carrito: [
          {
            image: productoGuardado.image,
            nombre: productoGuardado.nombre,
            precio: productoGuardado.precio,
          },
        ],
      };
      const usuariosRegistrados = JSON.parse(
        localStorage.getItem("usuarios registrados")
      );
      const existeUsuario = usuariosRegistrados.find(
        (data) =>
          data.user === usuario.user && data.password === usuario.password
      );
      if (!existeUsuario) {
        setUserExist(false);
        setTimeout(() => {
          setUserExist(true);
        }, 3000);
      } else {
        const replaceDatosUsuario = {
          ...usuario,
          datosPersonales: existeUsuario.datosPersonales,
          historialCompras: existeUsuario.historialCompras,
        };
        localStorage.setItem(
          "usuario logueado",
          JSON.stringify(replaceDatosUsuario)
        );
        localStorage.removeItem("Celular Seleccionado");
        navigate("/checkout");
      }
    } else {
      const usuario = {
        user: parseInt(valores.telefono),
        password: parseInt(valores.password),
        carrito: [],
      };
      const usuariosRegistrados = JSON.parse(
        localStorage.getItem("usuarios registrados")
      );
      const existeUsuario = usuariosRegistrados.find(
        (data) =>
          data.user === usuario.user && data.password === usuario.password
      );
      if (!existeUsuario) {
        setUserExist(false);
        setTimeout(() => {
          setUserExist(true);
        }, 3000);
      } else {
        const replaceDatosUsuario = {
          ...usuario,
          datosPersonales: existeUsuario.datosPersonales,
          historialCompras: existeUsuario.historialCompras,
        };
        localStorage.setItem(
          "usuario logueado",
          JSON.stringify(replaceDatosUsuario)
        );
        navigate("/");
      }
    }
  };

  return (
    <div className="bg-login container-login">
      <div className="container">
        <div className="col-lg-6 col-md-12 col-sm-12 mx-auto">
          <div className="bg-inputs-login my-3 my-lg-0">
            <div className="d-flex justify-content-center p-4 p-lg-5">
              <img src={PersonalFlow} alt="" className="img-fluid logo-login" />
            </div>
            <Formik
              initialValues={{
                telefono: "",
                password: "",
              }}
              validate={(valores) => {
                let errores = {};
                if (!valores.telefono) {
                  errores.telefono = "Número de linea invalido";
                } else if (!expresiones.telefono.test(valores.telefono)) {
                  errores.telefono =
                    "El número de linea solo debe contener números";
                }
                if (!valores.password) {
                  errores.password = "Ingrese su contraseña";
                } else if (!expresiones.password.test(valores.password)) {
                  errores.password = "Contraseña incorrecta";
                }
                return errores;
              }}
              onSubmit={(valores) => {
                redirectToCarrito(valores);
              }}>
              {({
                handleSubmit,
                values,
                handleChange,
                handleBlur,
                errors,
                touched,
              }) => (
                <form className="container-form" onSubmit={handleSubmit}>
                  <div className="mb-2">
                    <input
                      type="text"
                      className="form-control shadow-none container-form-control"
                      id="exampleInputEmail1"
                      name="telefono"
                      aria-describedby="Número de telefono"
                      placeholder="Número de línea Personal"
                      value={values.telefono}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <p
                      className={`text-error pt-2 fs-7 fw-light ${
                        touched.telefono && errors.telefono
                          ? "opacity-100 ps-1"
                          : "opacity-0"
                      }`}>
                      {errors.telefono
                        ? errors.telefono
                        : "Número de Personal no ingresado aún"}
                    </p>
                  </div>
                  <div className="mb-2">
                    <input
                      type="password"
                      className="form-control shadow-none container-form-control"
                      id="exampleInputPassword1"
                      name="password"
                      placeholder="Contraseña"
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <p
                      className={`text-error pt-2 fs-7 fw-light ${
                        touched.password && errors.password
                          ? "opacity-100 ps-1"
                          : "opacity-0"
                      }`}>
                      {errors.password
                        ? errors.password
                        : "No ha ingresado una contraseña aún"}
                    </p>
                  </div>
                  <button
                    type="submit"
                    className="btn btn-form w-100 text-dark shadow-none">
                    Ingresar
                  </button>
                  {!userExists ? (
                    <ErrorBDD
                      text={"Credenciales Invalidas"}
                      padding="pt-4 pb-2"
                    />
                  ) : null}
                  <hr style={{ backgroundColor: "#cccccc", height: "2px" }} />
                  <button type="submit" className="btn btn-form-2 w-100 mb-5">
                    Ingresar sin contraseña
                  </button>
                  <p className="text-muted text-center fs-7 pb-5">
                    No tengo usuario y quiero{" "}
                    <span>
                      <Link
                        to="/register"
                        className="text-uppercase text-register">
                        Registrarme
                      </Link>
                    </span>
                  </p>
                </form>
              )}
            </Formik>
          </div>
        </div>
      </div>
      <div className="bg-footer-login w-100 py-4">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center w-100">
            <div className="d-flex align-items-center">
              <img src={Question} alt="" className="question-icon mx-2" />
              <p className="fs-7 text-muted">¿Necesitas Ayuda?</p>
            </div>
            <p className="fs-7 text-muted">© 2022 - Telecom Argentina S.A.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
