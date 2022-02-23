import CaretDown from "../../img/Home/icons-dark/caret-down.svg";

const PreguntasFrecuentes = () => {
  return (
    <>
      <div className="row my-5">
        <div className="col-lg-12 py-1">
          <div className="d-flex align-items-center justify-content-between container-opciones">
            <p>¿Que celular me compro?</p>
            <img src={CaretDown} alt="" className="caret-down" />
          </div>
        </div>
        <div className="col-lg-12 py-1">
          <div className="d-flex align-items-center justify-content-between container-opciones">
            <p>¿Que tipo de financiación hay en Tienda Personal?</p>
            <img src={CaretDown} alt="" className="caret-down" />
          </div>
        </div>
        <div className="col-lg-12 py-1">
          <div className="d-flex align-items-center justify-content-between container-opciones">
            <p>¿Cómo compro un celular con descuento?</p>
            <img src={CaretDown} alt="" className="caret-down" />
          </div>
        </div>
        <div className="col-lg-12 py-1">
          <div className="d-flex align-items-center justify-content-between container-opciones">
            <p>¿En qué productos puedo utilizar el Descuento Conexión Total?</p>
            <img src={CaretDown} alt="" className="caret-down" />
          </div>
        </div>
      </div>
    </>
  );
};

export default PreguntasFrecuentes;
