import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Field } from "formik";
import { useUserContext } from "../../context/UserContext";
import { getDocs } from "firebase/firestore";
import expresiones from "../common/expresionesRegulares";
import Loader from "../common/Loader";
// ------------------------- IMG ------------------------- //
import Left from "../../img/checkout/leftBlue.svg";
import arrow from "../../img/Home/icons-blue/caret-down.svg";
import ErrorImg from "../../img/Home/uncheck.svg";

const Main = () => {
  let navigate = useNavigate();
  const [visible, setVisible] = useState(false);
  const [users, setUsers] = useState([]);
  const [products, setProducts] = useState([]);
  const [checkbox, setCheckbox] = useState({ checked: false, focused: false });
  const userLoggedStorage = JSON.parse(
    localStorage.getItem("usuario logueado")
  );
  const {
    user,
    setUser,
    updateCartUser,
    updateShoppingHistory,
    updateUserInfo,
    usersCollectionRef,
    productsCollectionRef,
  } = useUserContext();

  useEffect(() => {
    if (userLoggedStorage) {
      setUser(userLoggedStorage);
    } else {
      setUser(null);
    }
    const getProducts = async () => {
      const data = await getDocs(productsCollectionRef);
      setProducts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getProducts();
    getUsers();
  }, [setUser, userLoggedStorage, productsCollectionRef, usersCollectionRef]);

  const userExist = users.find((userLogged) => userLogged.user === user);
  const terminarTransaccion = (valores, producto) => {
    if (checkbox) {
      const newUserInfo = {
        nombre: valores.nombre,
        apellido: valores.apellido,
        email: valores.email,
        direccion: valores.direccion,
      };
      const userShoppingHistory = userExist.historialCompras;
      const productExist = userShoppingHistory.find(
        (product) => product.nombre === producto.nombre
      );
      if (productExist) {
        productExist.cantidad++;
        //debe pasar algo si existe el producto y algo si no existe.
        const productExistIndex = userShoppingHistory.findIndex(
          (product) => product.nombre === productExist.nombre
        );
        if (productExistIndex !== -1) {
          userShoppingHistory[productExistIndex] = productExist;
        }
        updateCartUser(userExist.id, []);
        updateUserInfo(userExist.id, newUserInfo);
        updateShoppingHistory(userExist.id, userShoppingHistory);
        navigate("/BuyMessage");
      } else {
        userShoppingHistory.push(producto);
        updateCartUser(userExist.id, []);
        updateUserInfo(userExist.id, newUserInfo);
        updateShoppingHistory(userExist.id, userShoppingHistory);
        navigate("/BuyMessage");
      }
    }
  };

  return users.length && products.length && userLoggedStorage ? (
    <main className="container py-5">
      <div
        className="d-flex align-items-center"
        onClick={() => navigate(-1)}
        style={{ cursor: "pointer" }}>
        <img src={Left} alt="" className="arrow-left mx-2" />
        <p>Volver</p>
      </div>
      <div className="my-5 bg-checkout">
        <div className="row g-0">
          <div className="col-lg-12">
            <div className="d-flex align-items-center justify-content-between">
              <p className="fs-4 fw-light">Total</p>
              <p className="fs-4">{`$ ${new Intl.NumberFormat("de-DE").format(
                userExist.carrito.precio
              )}`}</p>
            </div>
          </div>
        </div>
        <div className="col-lg-12">
          <div className="d-flex align-items-center justify-content-between pt-4">
            <p className="fs-4">Detalle del pedido</p>
            <button
              className="bg-transparent border-0"
              onClick={() => setVisible(!visible)}>
              <img
                src={arrow}
                alt=""
                className={`caret-down-icon ${visible ? "show-up" : ""}`}
              />
            </button>
          </div>
        </div>
        <div className={`col-lg-12 pt-4 ${visible ? "d-block" : "d-none"}`}>
          <div className="d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center">
              <img
                src={userExist.carrito.image}
                alt=""
                className="img-product-checkout"
              />
              <div>
                <p>{userExist.carrito.nombre}</p>
                <p className="text-muted">Cantidad: 1</p>
              </div>
            </div>
            <p className="fs-4">{`$ ${new Intl.NumberFormat("de-DE").format(
              userExist.carrito.precio
            )}`}</p>
          </div>
          <hr className="my-4" />
          <div className="d-flex align-items-center justify-content-between">
            <p>Env??o Gratis</p>
            <p className="text-success">Gratis</p>
          </div>
        </div>
      </div>
      <p className="text-personal text-center fw-light fs-3">??Empecemos!</p>
      <p className="text-personal text-center fw-light fs-3">
        Ingres?? tus datos para avanzar con la compra
      </p>
      <div className="py-5">
        <p className="fw-light fs-4">Datos Personales</p>
        <Formik
          initialValues={{
            nombre: "",
            apellido: "",
            email: "",
            direccion: "Rivadavia 135",
          }}
          validate={(valores) => {
            let errores = {};
            if (!valores.nombre) {
              errores.nombre = "Nombre invalido";
            } else if (!expresiones.nombre.test(valores.nombre)) {
              errores.nombre =
                "El nombre solo debe contener caracteres alfabeticos.";
            }
            if (!valores.apellido) {
              errores.apellido = "Apellido invalido";
            } else if (!expresiones.apellido.test(valores.apellido)) {
              errores.apellido =
                "El apellido solo debe contener caracteres alfabeticos.";
            }
            if (!valores.email) {
              errores.email = "Email invalido";
            } else if (!expresiones.email.test(valores.email)) {
              errores.email = "Email invalido";
            }
            return errores;
          }}
          onSubmit={(valores) => {
            terminarTransaccion(valores, userExist.carrito);
          }}>
          {({
            handleSubmit,
            values,
            handleChange,
            handleBlur,
            errors,
            touched,
          }) => (
            <form className="row" onSubmit={handleSubmit}>
              <div className="col-lg-3 mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Nombre
                </label>
                <input
                  type="text"
                  name="nombre"
                  className="form-control shadow-none"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  value={values.nombre}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <div
                  className={`d-flex align-items-center pt-1 ${
                    touched.nombre && errors.nombre
                      ? "opacity-100"
                      : "opacity-0"
                  }`}>
                  <img src={ErrorImg} alt="" className="check" />
                  <p className="fs-7 text-danger ps-2">{errors.nombre}</p>
                </div>
              </div>
              <div className="col-lg-3 mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Apellido
                </label>
                <input
                  type="text"
                  name="apellido"
                  className="form-control shadow-none"
                  id="exampleInputPassword1"
                  value={values.apellido}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <div
                  className={`d-flex align-items-center pt-1 ${
                    touched.apellido && errors.apellido
                      ? "opacity-100"
                      : "opacity-0"
                  }`}>
                  <img src={ErrorImg} alt="" className="check" />
                  <p className="fs-7 text-danger ps-2">{errors.apellido}</p>
                </div>
              </div>
              <div className="col-lg-3 mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  className="form-control shadow-none"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <div
                  className={`d-flex align-items-center pt-1 ${
                    touched.email && errors.email ? "opacity-100" : "opacity-0"
                  }`}>
                  <img src={ErrorImg} alt="" className="check" />
                  <p className="fs-7 text-danger ps-2">{errors.email}</p>
                </div>
              </div>
              <div className="col-lg-3 mb-3">
                <fieldset disabled>
                  <label htmlFor="disabledTextInput" className="form-label">
                    Direcci??n
                  </label>
                  <input
                    type="text"
                    name="direccion"
                    className="form-control shadow-none"
                    id="disabledTextInput"
                    value={values.direccion}
                    onChange={handleChange}
                  />
                </fieldset>
              </div>
              <div className="col-lg-12 ms-2 mb-3 form-check">
                <Field
                  type="checkbox"
                  name="toggle"
                  className="form-check-input"
                  id="exampleCheck1"
                  onClick={() =>
                    setCheckbox({ checked: !checkbox.checked, focused: true })
                  }
                />
                <label className="form-check-label" htmlFor="exampleCheck1">
                  Acepto los Terminos y Condiciones.
                </label>
                {!checkbox.checked && Object.keys(errors).length ? (
                  <div className="d-flex align-items-center pt-1 opacity-100 position-relative error-terminos">
                    <img src={ErrorImg} alt="" className="check" />
                    <p className="fs-7 text-danger ps-2">
                      Debe aceptar los terminos y condiciones.
                    </p>
                  </div>
                ) : null}
              </div>
              <button type="submit" className="btn btn-primary fw-light">
                Confirmar Compra
              </button>
            </form>
          )}
        </Formik>
      </div>
    </main>
  ) : (
    <Loader />
  );
};

export default Main;
