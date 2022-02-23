import { useState, useEffect } from "react";
import ScrollReveal from "scrollreveal";

// ----------------- IMG ----------------- //
import Banner from "../../img/Home/banner1.jpg";
import Cross from "../../img/cross.svg";

const BannerUno = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    ScrollReveal().reveal("#bannerUno", {
      delay: 250,
      distance: "15px",
      duration: 1000,
    });
  });

  return (
    <div
      className={`position-relative ${visible ? "d-none" : ""}`}
      id="bannerUno">
      <img src={Banner} alt="" className="img-fluid" />
      <button className="container-icon-cross" onClick={() => setVisible(true)}>
        <img src={Cross} alt="" className="icon-cross" />
      </button>
    </div>
  );
};

export default BannerUno;
