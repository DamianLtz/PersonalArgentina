// import React, { useEffect, useState } from "react";
import SamsungS21 from "../../img/Tienda/galaxyS21.png"
import MotoEdge from "../../img/Tienda/motoEdge.png"
import MotoG30 from "../../img/Tienda/motog30.png"
import TCL20 from "../../img/Tienda/tcl20.png"
//eslint-disable-next-line
import {
  collection,
  //eslint-disable-next-line
  doc,
  //eslint-disable-next-line
  getDoc,
  //eslint-disable-next-line
  getDocs,
  //eslint-disable-next-line
  limit,
  addDoc,
  getFirestore,
  //eslint-disable-next-line
  query,
  //eslint-disable-next-line
  where,
} from "firebase/firestore";

const celulares = [
    {
        image: SamsungS21,
        marca: "Samsung",
        tag: "20% OFF Conexión Total",
        precio: 124_999,
        nombre: "Samsung Galaxy S21 FE",
        nuevo: true,
        id: "SamsungGalaxyS21FE",
        info: "Te presentamos el Samsung Galaxy S21 FE con un procesador Octa-Core (2.9GHz,2.8GHz,2.2GHz) para que estés al día con todas las aplicaciones y juegos de última generación. Descubrí todas las posibilidades para tus foto, tanto de día como de noche, con la cámara de 12+12+8 Mp. Memoria interna de 128 GB.",
        color: "Gris",
        colorHex: "rgb(128, 139, 150)",
        almacenamiento: "128 GB",
        stock: 50,
        cpu: "Octa-Core (2.9GHz,2.8GHz,2.2GHz)",
        almacenamiento2: "128 GB | Disponible 102 GB",
        camara: "Frontal 32 Mp / Trasera 12+12+8 Mp",
        pantalla: "6.4 + FHD + - Dynamic AMOLED 2X",
        info2: "Disfrutá del lanzamiento del nuevo Galaxy S21 Fan Edition con estos beneficios exclusivos: Por tener Conexión Total, accedés a un 20% de descuento al momento de realizar tu compra. Pagando con Personal Pay, la nueva billetera virtual de Personal, te reintegramos un 20% extra de tu compra.",
        video: "https://www.youtube.com/embed/g9-2TqoZ09A",
        cantidad: 1,
    },
    {
        image: MotoEdge,
        marca: "Moto",
        precio: 99_999,
        nombre: "Motorola Moto Edge 20 Pro",
        nuevo: true,
        id: "MotoEdge20Lite",
        info: "No te pierdas de un solo momento con el nuevo Motorola Moto Edge 20 Pro. Con su cámara de 108+16+8 Mp; sacá fotos nítidas y claras tanto de día como de noche. El Motorola Moto Edge 20 Pro Cable HDMI posee un procesador Octa-Core 3.2GHz para que disfrutes de todas tus aplicaciones sin inconvenientes. Memoria interna de 256 GB. Incluye cable HDMI",
        color: "Negro",
        colorHex: "#161616",
        almacenamiento: "256 GB",
        stock: 70,
        cpu: "Octa-Core 3.2GHz",
        almacenamiento2: "256 GB | Disponible: 235 GB",
        camara: "Frontal 32 Mp / Trasera 108+16+8 Mp",
        pantalla: "'6.7' + FHD+ - pOLED",
        video: "https://www.youtube.com/embed/6z4x9oh0KGo",
        cantidad: 1,
    },
    {
        image: MotoG30,
        marca: "Moto",
        precio: 94_999,
        nombre: "Moto G30",
        id: "MotoG30",
        info: "Más brillo en tu vida. Lo tienes. Descubre el moto g30. Haz fotos de alta resolución con el sistema de cuatro cámaras de 64 MP. Y disfruta de todo tu entretenimiento con la pantalla de 90 Hz y una actualización más rápida para una visualización más fluida.",
        color: "Dark Pearl",
        colorHex: "#303030",
        almacenamiento: "256 GB",
        stock: 30,
        cpu: "Snapdragon 662",
        almacenamiento2: "128 GB incorporados | Ampliables a 1 TB con tarjeta microSD",
        camara: "Cámara de 64 MP.",
        pantalla: '"Pantalla de 6,5" y 90 Hz"',
        info2: "No te pierdas de un solo momento con el nuevo Motorola Moto G30. Con su cámara de 64MP; sacá fotos nítidas y claras tanto de día como de noche. Contiene Memoria interna de 128 GB expansible a 1TB (MicroSD).",
        video: "",
        cantidad: 1,
    },
    {
        image: TCL20,
        marca: "TCL",
        tag: "30% OFF Conexión Total",
        precio: 28_499,
        nombre: "TCL 20 Y Negro",
        id: "TCL20Y",
        info: "No te pierdas de un solo momento con el nuevo TCL 20 Y. Con su cámara de 48+2+2 MP; sacá fotos nítidas y claras tanto de día como de noche. El TCL 20 Y posee un procesador Octa-Core (1.8GHz, 1.4GHz) para que disfrutes de todas tus aplicaciones sin inconvenientes. Memoria interna de 128 GB y expandible con una MicroSd hasta 512 GB.",
        color: "Gris",
        colorHex: "rgb(128, 139, 150)",
        almacenamiento: "64 GB",
        stock: 0,
        cpu: "Octa-Core (1.8GHz, 1.4GHz)",
        almacenamiento2: "128 GB | Disponible: 108 GB",
        camara: "Frontal 8 MP / Trasera 48+2+2 MP",
        pantalla: '"6.5" + HD+ - IPS LCD"',
        info2: "Disfrutá del lanzamiento del nuevo Galaxy S21 Fan Edition con estos beneficios exclusivos: Por tener Conexión Total, accedés a un 20% de descuento al momento de realizar tu compra. Pagando con Personal Pay, la nueva billetera virtual de Personal, te reintegramos un 20% extra de tu compra.",
        video: "https://www.youtube.com/embed/3Zly0cFFUD0",
        cantidad: 1,
    },
]

const FirestoreProducts = () => {
  //   const [products, setProducts] = useState(null);
  //   useEffect(() => {
  //     const db = getFirestore();
  //     const productsCollectionRef = collection(db, "ListaProductos");
  //     const q = query;
  //     getDocs(q).then((snapshot) => {
  //       setProducts(snapshot.docs.map((doc) => ({ id: doc.id, ...doc })));
  //     });
  //   });

  // Agrego los productos a Firebase
  const addItemsToFirebase = () => {
    const db = getFirestore();
    const celularesCollection = collection(db, "listaCelulares");
    celulares.forEach((celular) => {
      addDoc(celularesCollection, celular);
    });
  };

  // const addCategoriesToFirebase = () => {
  //   const db = getFirestore();
  //   const categoriasCollection = collection(db, "ListaCategorias");
  //   Categorias.forEach((categoria) => {
  //     addDoc(categoriasCollection, categoria);
  //   });
  // };

  return (
    <div className="container">
      <div className="d-flex align-items-center justify-content-between">
        <button className="btn btn-primary" onClick={addItemsToFirebase}>
          Agregar Productos a Firebase
        </button>
        {/* <button
          className="btn btn-info text-light"
          onClick={addCategoriesToFirebase}
        >
          Agregar Categorias a Firebase
        </button> */}
      </div>
    </div>
  );
};

export default FirestoreProducts;
