import listaBeneficios2 from "../Data/listaBeneficios2";

const CardBeneficios2 = () => {
  return (
    <div className="py-5">
      <div className="row">
        {listaBeneficios2.map((card) => {
          return (
            <div className="col-lg-3" key={card.id}>
              <div className="d-flex flex-column align-items-center">
                <img src={card.image} alt="" />
                <h5 className="fw-regular pt-2">{card.title}</h5>
                <p className="text-center pt-3">
                  <span className="fw-bold">{card.textBold}</span>{" "}
                  {card.text}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CardBeneficios2;
