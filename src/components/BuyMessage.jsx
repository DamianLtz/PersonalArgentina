import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const BuyMessage = () => {
  let navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 2500);
  }, [navigate]);

  return (
    <>
      <h1 className="text-personal fw-light fs-1 text-center py-5">
        Gracias Por Su Compra!
      </h1>
    </>
  );
};

export default BuyMessage;
