import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useUserContext } from "../../context/UserContext";
import { getDocs } from "firebase/firestore";
import BannerTelecom from "../Home/BannerTelecom";

// -------------------- Iconos -------------------- //

import CPU from "../../img/Home/icons-blue/chip.svg";
import SD from "../../img/Home/icons-blue/sd-card.svg";
import Camera from "../../img/Home/icons-blue/camera.svg";
import ScreenSize from "../../img/Home/icons-blue/screenSize.svg";
import CaretRight from "../../img/Home/icons-dark/caret-right.svg";

const CaracteristicasProducto = () => {
  const [products, setProducts] = useState([]);
  const { productsCollectionRef } = useUserContext();
  const { id } = useParams();

  useEffect(() => {
    const getProducts = async () => {
      const data = await getDocs(productsCollectionRef);
      setProducts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getProducts();
  }, [productsCollectionRef]);

  const selectedProduct = products.find((product) => id === product.id);

  return products.length ? (
    <>
      <div className="container py-5">
        <h2 className="fw-light text-center">
          Caracteristicas de {selectedProduct.nombre}
        </h2>
        <div className="d-flex align-items-center justify-content-center pt-5 pb-4">
          <p className="px-4 py-2 caracteristicas-dest text-personal">
            Caracteristicas destacadas
          </p>
          <p className="px-4 text-muted">Legales</p>
        </div>
        <div className="row my-5">
          <div className="col-lg-3">
            <div className="d-flex flex-column justify-content-center align-items-center">
              <img src={CPU} alt="" className="icons-caract-producto" />
              <p className="pt-2 fw-bold text-personal">Procesador</p>
              <p>{selectedProduct.cpu}</p>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="d-flex flex-column justify-content-center align-items-center">
              <img src={SD} alt="" className="icons-caract-producto" />
              <p className="pt-2 fw-bold text-personal">Almacenamiento</p>
              <p>{selectedProduct.almacenamiento2}</p>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="d-flex flex-column justify-content-center align-items-center">
              <img src={Camera} alt="" className="icons-caract-producto" />
              <p className="pt-2 fw-bold text-personal">Cámaras</p>
              <p>{selectedProduct.camara}</p>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="d-flex flex-column justify-content-center align-items-center">
              <img src={ScreenSize} alt="" className="icons-caract-producto" />
              <p className="pt-2 fw-bold text-personal">Tamaño de Pantalla</p>
              <p>{selectedProduct.pantalla}</p>
            </div>
          </div>
          <div className="col-lg-6 mx-auto py-5 my-3">
            <p className="text-personal">{selectedProduct.info2}</p>
          </div>
        </div>
        {selectedProduct.video ? (
          <>
            <h2 className="text-center fw-light pb-5">
              Conoce el nuevo {selectedProduct.nombre}
            </h2>
            <div className="d-flex align-items-center justify-content-center">
              <iframe
                width="937"
                height="499"
                src={selectedProduct.video}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen></iframe>
            </div>
          </>
        ) : null}
        <div className="d-flex align-items-center pt-5">
          <p className="text-primary fs-7">Tienda</p>
          <img src={CaretRight} alt="" className="caret-right mx-2" />
          <p className="text-primary fs-7">{selectedProduct.marca}</p>
          <img src={CaretRight} alt="" className="caret-right mx-2" />
          <p className="text-muted fs-7">{selectedProduct.nombre}</p>
        </div>
      </div>
      <BannerTelecom className={true} />
    </>
  ) : null;
};

export default CaracteristicasProducto;
