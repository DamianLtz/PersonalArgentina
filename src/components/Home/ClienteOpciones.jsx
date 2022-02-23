import { listaOpciones1, listaOpciones2 } from "../Data/listaOpciones";

const ClienteOpciones = () => {
  return (
    <div className="mt-5">
      <h3>Lo que querés, en un mismo lugar</h3>
      <div className="bg-card-container mt-4">
        <div className="p-5">
          <div className="row">
            <div className="col-lg-6">
              <h4 className="text-light fw-light pb-3">Quiero ser Personal</h4>
              <div className="row">
                {listaOpciones1.map((card) => {
                  return (
                    <div className="col-lg-6 mb-3 px-2" key={card.id}>
                      <div className="bg-card">
                        <img
                          src={card.image}
                          alt=""
                          className="icon-card-opciones"
                        />
                        <p className="text-light pt-2 fw-light">{card.text}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="col-lg-6">
              <h4 className="text-light fw-light pb-3">Ya soy Personal</h4>
              <div className="row">
                {listaOpciones2.map((card) => {
                  return (
                    <div className="col-lg-6 mb-3 px-2" key={card.id}>
                      <div className="bg-card">
                        <img
                          src={card.image}
                          alt=""
                          className="icon-card-opciones"
                        />
                        <p className="text-light pt-2 fw-light">{card.text}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClienteOpciones;
