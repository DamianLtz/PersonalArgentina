import React from "react";
import Uncheck from "../../img/Home/uncheck.svg";

const SinStock = () => {
  return (
    <div className="d-flex align-items-center mt-3">
      <img src={Uncheck} alt="" className="check" />
      <p className="text-danger ms-2">Sin Stock</p>
    </div>
  );
};

export default SinStock;
