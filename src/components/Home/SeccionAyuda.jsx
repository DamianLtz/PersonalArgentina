import listaOpcionesAyuda from "../Data/listaOpcionesAyuda";

const SeccionAyuda = () => {
  return (
    <div className="mt-5">
      <h1 className="text-personal fw-light text-center fs-4">
        ¿En que podemos ayudar?
      </h1>
      <div className="row justify-content-center mt-5">
        {listaOpcionesAyuda.map((card) => {
          return (
            <div className="col-lg-auto col-md-6 col-sm-12 py-2 py-lg-0" key={card.id}>
              <div className="d-flex flex-column justify-content-center align-items-center">
                <img
                  src={card.image}
                  alt={card.text}
                  className="icon-help-section"
                />
                <p className="text-center pt-2">{card.text}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SeccionAyuda;
