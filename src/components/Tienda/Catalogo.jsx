import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import Loader from "../common/Loader";
import Tag from "../common/Tag";

const Catalogo = () => {
  const [celulares, setCelulares] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    const celularesCollection = collection(db, "listaCelulares");

    getDocs(celularesCollection).then((snapshot) => {
      setCelulares(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
      );
    });
  }, []);

  return (
    <>
      <h1 className="fw-light text-center text-personal py-5 fs-2">
        Celulares y Accesorios en Oferta
      </h1>
      {celulares.length ? (
        <div className="row my-5">
          {celulares.map((celular) => {
            return (
              <Link
                to={celular.id}
                className="col-lg-3 d-flex justify-content-center py-4"
                key={celular.id}>
                <div className="d-flex flex-column justify-content-between h-100">
                  <img
                    src={celular.image}
                    alt={celular.nombre}
                    className="product-preview-card"
                  />
                  {celular.tag ? (
                    <Tag text={celular.tag} margin={true} />
                  ) : null}
                  <div className="pt-4">
                    <p className="py-1 fs-3 fw-light text-dark">{`$ ${new Intl.NumberFormat(
                      "de-DE"
                    ).format(celular.precio)}`}</p>
                    <p className="text-primary fs-7 pb-2">
                      Hasta 6 cuotas sin interés
                    </p>
                    <p className="text-dark pb-2">{celular.nombre}</p>
                    <p className="tag-lanzamiento">Lanzamiento</p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default Catalogo;
