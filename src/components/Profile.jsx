import { useState, useEffect } from "react";
import { db } from "./firestore-config";
import { collection, getDocs } from "firebase/firestore";
import Loader from "./common/Loader";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ProfileImg from "./Profile/ProfileImg";
import MsgBienvenida from "./Profile/MsgBienvenida";
import ProductPreview from "./Profile/ProductPreview";

const Profile = () => {
  const usuarioLogueado = JSON.parse(localStorage.getItem("usuario logueado"));

  const [users, setUsers] = useState([]); // Trae de Firebase los users.
  const usersCollectionRef = collection(db, "usuariosRegistrados");

  // ----------------------------- Obtener Users de Firebase ----------------------------- //

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getUsers();
    //eslint-disable-next-line
  }, []);

  const existeUsuario = users.find((data) => data.user === usuarioLogueado);

  return (
    <>
      <Navbar />
      {usuarioLogueado && users.length && existeUsuario ? (
        <main>
          <div className="container-profile">
            <div className="container">
              <div className="row">
                <div className="col-lg-3">
                  <ProfileImg />
                  {existeUsuario ? (
                    <p className="text-light pt-3">
                      {existeUsuario.datosPersonales.nombre}
                    </p>
                  ) : null}
                  <p
                    className={`text-light ${
                      existeUsuario.datosPersonales.nombre ? "py-1" : "py-3"
                    }`}>
                    {existeUsuario.user}
                  </p>
                </div>
                <div className="offset-lg-2 col-lg-4">
                  <MsgBienvenida />
                </div>
              </div>
            </div>
          </div>
          <div className="container py-5">
            <ul className="d-flex align-items-center justify-content-center justify-content-lg-between py-4">
              <li className="d-none d-lg-block">
                <p className="fs-3 text-muted">Información de mi Linea</p>
              </li>
              <li>
                <p className="fs-3 text-personal opcion-seleccionada">
                  Historial de Compras<span></span>
                </p>
              </li>
              <li className="d-none d-lg-block">
                <p className="fs-3 text-muted">Recargas</p>
              </li>
            </ul>
            {existeUsuario.historialCompras.length ? (
              existeUsuario.historialCompras.map((data) => {
                return (
                  <ProductPreview
                    key={data.nombre}
                    img={data.image}
                    titulo={data.nombre}
                    precio={data.precio}
                    cantidad={data.cantidad}
                  />
                );
              })
            ) : (
              <p className="text-personal text-center fs-2 py-5 fw-light">
                Aún no ha realizado compras
              </p>
            )}
          </div>
        </main>
      ) : (
        <Loader />
      )}
      <Footer />
    </>
  );
};

export default Profile;
