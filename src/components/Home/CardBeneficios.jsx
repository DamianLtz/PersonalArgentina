import listaBeneficios from "../Data/listaBeneficios";

const CardBeneficios = () => {
  return (
    <>
      <h3 className="py-3 py-lg-5 fw-light text-personal">Con Personal tenés más beneficios</h3>
      <div className="row">
        {listaBeneficios.map((card) => {
          return (
            <div className="col-lg-3 gy-4 gy-lg-0 d-flex flex-column justify-content-between" key={card.id}>
              <div>
                <img src={card.image} alt="" className="mb-3"/>
                <div className="d-flex align-items-center pb-3">
                  <p className="fs-1 fw-light">{card.titleNumber}</p>
                  <p className="ps-2">{card.title}</p>
                </div>
                <p className="pb-3">{card.subtitle}</p>
                <p className="pb-5">{card.info}</p>
              </div>
              <p className="text-muted fs-7">{card.validez}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default CardBeneficios;
