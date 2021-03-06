import { useState } from "react";
import { useUserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import { Formik } from "formik";
import { addDoc, getDocs } from "firebase/firestore";
import expresiones from "./common/expresionesRegulares";
import ErrorBDD from "./common/ErrorBDD";
// ---------------- IMG ---------------- //
import PersonalFlow from "../img/login/logo-nuevo.svg";
import Question from "../img/login/question.svg";

const Register = () => {
  let navigate = useNavigate();
  const { usersCollectionRef } = useUserContext();
  const [userExists, setUserExist] = useState(false);
  const [btnIsDisabled, setBtnIsDisabled] = useState(false);

  // ----------------------------- Funciones CRUD Firebase ----------------------------- //

  const createUser = async (user) => {
    await addDoc(usersCollectionRef, user);
  };

  // ----------------------------- Obtener Users de Firebase ----------------------------- //

  const redirectToCarrito = async (valores) => {
    try {
      const data = await getDocs(usersCollectionRef);
      const users = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      const productoGuardado = JSON.parse(
        sessionStorage.getItem("Celular Seleccionado")
      );
      if (productoGuardado) {
        const usuario = {
          user: parseInt(valores.telefono),
          password: parseInt(valores.password),
          carrito: {
            image: productoGuardado.image,
            nombre: productoGuardado.nombre,
            precio: productoGuardado.precio,
          },
          datosPersonales: { nombre: null, apellido: null, telefono: null },
          historialCompras: [],
        };
        if (users) {
          const existeUsuario = users.find(
            (data) => data.user === usuario.user
          );
          if (!existeUsuario) {
            createUser(usuario);
            sessionStorage.removeItem("Celular Seleccionado");
            localStorage.setItem(
              "usuario logueado",
              JSON.stringify(usuario.user)
            );
            navigate("/checkout");
          } else {
            localStorage.setItem(
              "usuario logueado",
              JSON.stringify(usuario.user)
            );
            navigate("/checkout");
          }
        }
      } else {
        // ---------------- Si NO HAY producto guardado en SessionStorage ---------------- //
        const usuario = {
          user: parseInt(valores.telefono),
          password: parseInt(valores.password),
          carrito: [],
          datosPersonales: { nombre: null, apellido: null, telefono: null },
          historialCompras: [],
        };
        if (users) {
          const existeUsuario = users.find(
            (data) => data.user === usuario.user
          );
          if (!existeUsuario) {
            createUser(usuario);
            localStorage.setItem(
              "usuario logueado",
              JSON.stringify(usuario.user)
            );
            navigate("/");
          } else {
            setUserExist(true);
            setTimeout(() => {
              setBtnIsDisabled(false);
              setUserExist(false);
            }, 3000);
          }
        } else {
          createUser(usuario);
          localStorage.setItem(
            "usuario logueado",
            JSON.stringify(usuario.user)
          );
        }
      }
    } catch (error) {
      console.log("El error es en register", error);
    }
  };

  return (
    <div className="bg-login container-login">
      <div className="container">
        <div className="col-lg-6 mx-auto">
          <div className="bg-inputs-login">
            <div className="d-flex justify-content-center p-5">
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
                  errores.telefono = "N??mero de linea invalido";
                } else if (!expresiones.telefono.test(valores.telefono)) {
                  errores.telefono =
                    "El n??mero de linea solo debe contener n??meros";
                }
                if (!valores.password) {
                  errores.password = "Ingrese su contrase??a";
                } else if (!expresiones.password.test(valores.password)) {
                  errores.password = "Contrase??a incorrecta";
                }
                return errores;
              }}
              onSubmit={(valores) => {
                // resetForm();
                setBtnIsDisabled(true);
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
                      aria-describedby="N??mero de telefono"
                      placeholder="N??mero de l??nea Personal"
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
                        : "N??mero de Personal no ingresado a??n"}
                    </p>
                  </div>
                  <div className="mb-2">
                    <input
                      type="password"
                      className="form-control shadow-none container-form-control"
                      id="exampleInputPassword1"
                      name="password"
                      placeholder="Contrase??a"
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
                        : "No ha ingresado una contrase??a a??n"}
                    </p>
                  </div>
                  <button
                    type="submit"
                    className="btn btn-form w-100 text-dark shadow-none mb-4"
                    disabled={btnIsDisabled}>
                    Registrarme
                  </button>
                  {userExists ? (
                    <ErrorBDD
                      text={"El Usuario ingresado ya existe en el Sistema."}
                      padding="pb-4"
                    />
                  ) : null}
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
              <p className="fs-7 text-muted">??Necesitas Ayuda?</p>
            </div>
            <p className="fs-7 text-muted">?? 2022 - Telecom Argentina S.A.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
