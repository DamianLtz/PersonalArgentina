import React from "react";
import Check from "../../img/Home/check.svg";

const Stock = () => {
  return (
    <div className="d-flex align-items-center mt-3">
      <img src={Check} alt="" className="check" />
      <p className="check-text ms-2">Stock Disponible</p>
    </div>
  );
};

export default Stock;
