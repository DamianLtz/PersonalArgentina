import React from "react";

const MsgBienvenida = () => {
  return (
    <div className="bg-welcome-profile p-4">
      <div className="border-welcome-profile"></div>
      <h1 className="text-light ps-3 fs-4 text-welcome">
        <span className="fw-bold">Hola!</span> te damos la bienvenida a{" "}
        <span className="fw-bold">Mi Personal</span>
      </h1>
    </div>
  );
};

export default MsgBienvenida;
