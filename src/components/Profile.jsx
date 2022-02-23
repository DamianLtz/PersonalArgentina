import Navbar from "./Navbar";
import Footer from "./Footer";
import ProfileImg from "./Profile/ProfileImg";
import MsgBienvenida from "./Profile/MsgBienvenida";
import ProductPreview from "./Profile/ProductPreview";

const Profile = () => {
  const obtenerUsuarioLogueado = JSON.parse(
    localStorage.getItem("usuario logueado")
  );

  const obtenerHistorialDeCompras = obtenerUsuarioLogueado.historialCompras;

  const obtenerNombreUsuario = obtenerUsuarioLogueado.datosPersonales.nombre;

  const obtenerNumeroUsuario = obtenerUsuarioLogueado.user;

  return (
    <>
      <Navbar />
      {obtenerUsuarioLogueado ? (
        <main>
          <div className="container-profile">
            <div className="container">
              <div className="row">
                <div className="col-lg-3">
                  <ProfileImg />
                  {obtenerNombreUsuario ? (
                    <p className="text-light pt-3">{obtenerNombreUsuario}</p>
                  ) : null}
                  <p
                    className={`text-light ${
                      obtenerNombreUsuario ? "py-1" : "py-3"
                    }`}>
                    {obtenerNumeroUsuario}
                  </p>
                </div>
                <div className="offset-lg-2 col-lg-4">
                  <MsgBienvenida />
                </div>
              </div>
            </div>
          </div>
          <div className="container py-5">
            <ul className="d-flex align-items-center justify-content-between py-4">
              <li>
                <p className="fs-3 text-muted">Información de mi Linea</p>
              </li>
              <li>
                <p className="fs-3 text-personal opcion-seleccionada">
                  Historial de Compras<span></span>
                </p>
              </li>
              <li>
                <p className="fs-3 text-muted">Recargas</p>
              </li>
            </ul>
            {obtenerHistorialDeCompras ? (
              obtenerHistorialDeCompras.map((data) => {
                return (
                  <ProductPreview
                    key={data.nombreProducto}
                    img={data.imagenProducto}
                    titulo={data.nombreProducto}
                    precio={data.precioProducto}
                    cantidad={data.cantidadProducto}
                  />
                );
              })
            ) : (
              <p className="text-personal fs-2">Aún no ha realizado compras</p>
            )}
          </div>
        </main>
      ) : null}
      <Footer />
    </>
  );
};

export default Profile;
