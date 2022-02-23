import listaApps from "../Data/listaApps";

const SeccionApps = () => {
  return (
    <div className="mt-5">
      <h3 className="fw-light text-center">Aplicaciones diseñadas para vos</h3>
      <p className="text-center pt-2">Descargalas y comenzá a disfrutar</p>
      <div className="row mt-4">
        {listaApps.map((card) => {
          return (
            <div className="col-lg-3" key={card.id}>
              <div className="card">
                <img src={card.image} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title fw-light">{card.title}</h5>
                  <p className="card-text text-personal">{card.info}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SeccionApps;
