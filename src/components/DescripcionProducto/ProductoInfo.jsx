import { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import { useParams, useNavigate } from "react-router-dom";
import listaCelulares from "../Data/listaCelulares";
import Stock from "../common/Stock";
import SinStock from "../common/SinStock";
import Tag from "../common/Tag";

const ProductoInfo = () => {

  useEffect(() => {
    ScrollReveal().reveal("#img-producto", {
      delay: 250,
      distance: "50px",
      duration: 1500,
    });
  });

  const { id } = useParams();
  let navigate = useNavigate();

  const productoSeleccionado = listaCelulares.find(
    (listaCelulares) => id === listaCelulares.id
  );

  const obtenerDatosLocalStorage = JSON.parse(
    localStorage.getItem("usuario logueado")
  );

  const comenzarTransaccion = () => {
    if (obtenerDatosLocalStorage) {
      obtenerDatosLocalStorage.carrito.push(productoSeleccionado);
      localStorage.setItem("usuario logueado", JSON.stringify(obtenerDatosLocalStorage))
      navigate("/checkout");
    } else {
      localStorage.setItem(
        "Celular Seleccionado",
        JSON.stringify(productoSeleccionado)
      );
      navigate("/login");
    }
  };
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-lg-6" id="img-producto">
          <img
            src={productoSeleccionado.image}
            alt={productoSeleccionado.nombre}
            className="img-fluid img-producto"
          />
        </div>
        <div className="col-lg-6">
          <div className="d-flex align-items-center">
            {productoSeleccionado.tag ? (
              <Tag text={productoSeleccionado.tag} />
            ) : null}
            <p
              className={`tag-lanzamiento mt-2 fs-7 ${
                productoSeleccionado.tag ? "mx-2" : ""
              }`}>
              Lanzamiento
            </p>
          </div>
          <h1 className="pt-3">{productoSeleccionado.nombre}</h1>
          <p className="pt-3">
            {productoSeleccionado.info ? productoSeleccionado.info : "Soon"}
          </p>
          <p className="fs-2 py-3">{`$ ${new Intl.NumberFormat("de-DE").format(
            productoSeleccionado.precio
          )}`}</p>
          <p className="fw-light text-primary pb-2">
            Hasta 6 cuotas sin interés
          </p>
          <p className="fw-light text-primary fs-7">
            Ver planes de financiación
          </p>

          <div className="d-flex align-items-center pt-3">
            <p>
              Color:{" "}
              {productoSeleccionado.color ? productoSeleccionado.color : "soon"}
            </p>
            <div
              className="rounded-color mx-2"
              style={{
                backgroundColor: productoSeleccionado.colorHex,
              }}></div>
            <p className="ps-2">
              Almacenamiento:{" "}
              <span className="tag-almacenamiento p-2 fs-7 ms-1">
                {productoSeleccionado.almacenamiento
                  ? productoSeleccionado.almacenamiento
                  : "soon"}
              </span>
            </p>
          </div>
          {productoSeleccionado.stock !== 0 ? <Stock /> : <SinStock />}
          {productoSeleccionado.stock !== 0 ? (
            <button
              className="btn btn-primary mt-4 px-4"
              onClick={() => comenzarTransaccion()}>
              Comprar Ahora
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default ProductoInfo;
