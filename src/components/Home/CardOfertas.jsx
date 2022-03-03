import React from "react";
import listaCards from "../Data/listaCards";
import Tag from "../common/Tag";

const CardOfertas = () => {
  return (
    <>
      <div className="d-lg-flex justify-content-lg-between align-items-lg-center pb-3">
        <h3 className="fs-4 fw-light">
          Viví una experiencia ilimitada con nuestras ofertas
        </h3>
        <a href="/" className="d-inline-block pt-3">Ver Ofertas</a>
      </div>
      <div className="row">
        {listaCards.map((card) => {
          return (
            <div className="col-lg-4 col-md-6 py-3 py-lg-0" key={card.id}>
              <div className="card">
                <img src={card.image} className="card-img-top" alt="" />
                <div className="card-body">
                  <h5 className="card-title">
                    $ {card.precio}{" "}
                    <span className="fw-light fs-6">final por mes</span>
                  </h5>
                  <p className="text-muted pb-2">
                    Precio de lista: {""}
                    <span className="text-decoration-line-through">
                      $ {card.precioLista}
                    </span>
                  </p>
                  <p className="card-text fw-light">{card.info}</p>
                  {card.tag ? <Tag text={card.tag} /> : null}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default CardOfertas;
