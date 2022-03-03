import { useState, useEffect } from "react";
import { useUserContext } from "../../context/UserContext";
import { getDocs } from "firebase/firestore";
import ScrollReveal from "scrollreveal";
import { useParams, useNavigate } from "react-router-dom";
import Loader from "../common/Loader";
import Stock from "../common/Stock";
import SinStock from "../common/SinStock";
import Tag from "../common/Tag";

const ProductoInfo = () => {
  const [users, setUsers] = useState([]);
  const [products, setProducts] = useState([]);
  const { updateCartUser, productsCollectionRef, usersCollectionRef } =
    useUserContext();
  useEffect(() => {
    const getProducts = async () => {
      const data = await getDocs(productsCollectionRef);
      setProducts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getProducts();
    getUsers();
    ScrollReveal().reveal("#img-producto", {
      delay: 250,
      distance: "50px",
      duration: 1500,
    });
  }, [productsCollectionRef, usersCollectionRef]);

  const { id } = useParams();
  let navigate = useNavigate();

  const selectedProduct = products.find((product) => id === product.id);

  const userLogged = JSON.parse(localStorage.getItem("usuario logueado"));

  const userExist = users.find((data) => data.user === userLogged);

  const comenzarTransaccion = () => {
    if (userLogged) {
      updateCartUser(userExist.id, selectedProduct);
      navigate("/checkout");
    } else {
      sessionStorage.setItem(
        "Celular Seleccionado",
        JSON.stringify(selectedProduct)
      );
      navigate("/login");
    }
  };
  return products.length ? (
    <div className="container py-5">
      <div className="row">
        <div className="col-lg-6" id="img-producto">
          <img
            src={selectedProduct.image}
            alt={selectedProduct.nombre}
            className="img-fluid img-producto"
          />
        </div>
        <div className="col-lg-6">
          <div className="d-flex align-items-center">
            {selectedProduct.tag ? <Tag text={selectedProduct.tag} /> : null}
            <p
              className={`tag-lanzamiento mt-2 fs-7 ${
                selectedProduct.tag ? "mx-2" : ""
              }`}>
              Lanzamiento
            </p>
          </div>
          <h1 className="pt-3">{selectedProduct.nombre}</h1>
          <p className="pt-3">
            {selectedProduct.info ? selectedProduct.info : "Soon"}
          </p>
          <p className="fs-2 py-3">{`$ ${new Intl.NumberFormat("de-DE").format(
            selectedProduct.precio
          )}`}</p>
          <p className="fw-light text-primary pb-2">
            Hasta 6 cuotas sin interés
          </p>
          <p className="fw-light text-primary fs-7">
            Ver planes de financiación
          </p>

          <div className="d-flex align-items-center pt-3">
            <p>
              Color: {selectedProduct.color ? selectedProduct.color : "soon"}
            </p>
            <div
              className="rounded-color mx-2"
              style={{
                backgroundColor: selectedProduct.colorHex,
              }}></div>
            <p className="ps-2">
              Almacenamiento:{" "}
              <span className="tag-almacenamiento p-2 fs-7 ms-1">
                {selectedProduct.almacenamiento
                  ? selectedProduct.almacenamiento
                  : "soon"}
              </span>
            </p>
          </div>
          {selectedProduct.stock !== 0 ? <Stock /> : <SinStock />}
          {selectedProduct.stock !== 0 ? (
            <button
              className="btn btn-primary mt-4 px-4"
              onClick={() => comenzarTransaccion()}>
              Comprar Ahora
            </button>
          ) : null}
        </div>
      </div>
    </div>
  ) : (
    <Loader />
  );
};

export default ProductoInfo;
