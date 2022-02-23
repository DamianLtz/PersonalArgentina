import listaAyuda from "../Data/listaAyuda";

const Dudas = () => {
  return (
    <div className="py-5">
      <div className="row">
        <div className="col-lg-3">
          <div>
            <h4 className="fs-2 fw-light pb-2">¿Tenés Dudas?</h4>
            <p>Te acercamos algunas respuestas</p>
            <a href="/" className="d-inline-block pt-4">
              Ir a Ayuda
            </a>
          </div>
        </div>
        {listaAyuda.map((card) => {
          return (
            <div className="col-lg-3" key={card.id}>
              <div>
                <h4 className="fw-light pt-5 pt-lg-0 pb-3">{card.title}</h4>
                <p className="py-3 py-lg-0">{card.info}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Dudas;
