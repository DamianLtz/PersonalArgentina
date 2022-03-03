import React from "react";

const ProductPreview = ({ img, titulo, precio, cantidad }) => {
  return (
    <div className="row py-5">
      <div className="col-lg-6">
        <div className="d-flex justify-content-center justify-content-lg-start">
          <img src={img} alt="" className="img-fluid img-producto-historial" />
        </div>
      </div>
      <div className="col-lg-6 pt-4 pt-lg-0">
        <div className="d-flex flex-column justify-content-center align-items-center align-items-lg-start h-100">
          <p className="fs-3 fw-light text-personal">{titulo}</p>
          <p className="fs-3 fw-light text-personal">{`$ ${new Intl.NumberFormat(
            "de-DE"
          ).format(precio)}`}</p>
          <p className="fs-3 fw-light text-personal">
            {`Cantidad: ${cantidad}`}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductPreview;
