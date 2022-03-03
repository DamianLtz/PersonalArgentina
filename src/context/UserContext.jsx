import { useState } from "react";
import { db } from "../components/firestore-config";
import { createContext, useContext } from "react";
import { addDoc, updateDoc, collection, doc } from "firebase/firestore";

export const CartContext = createContext();

export const useUserContext = () => useContext(CartContext);

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // -------------- Trae de Firebase los users. -------------- //

  const usersCollectionRef = collection(db, "usuariosRegistrados");
  const productsCollectionRef = collection(db, "listaCelulares");

  // ----------------------------- Funciones CRUD Firebase ----------------------------- //

  // ---------- Crear User en Firebase ---------- //

  const createUser = async (user) => {
    await addDoc(usersCollectionRef, user);
  };

  // ---------- Obtener Users de Firebase ---------- //

  // const getUsers = async () => {
  //   const data = await getDocs(usersCollectionRef);
  //   setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  // };

  // ---------- Actualizar User cart de Firebase ---------- //

  const updateUserInfo = async (id, newUserInfo) => {
    const userDoc = doc(db, "usuariosRegistrados", id);
    const newInfo = { datosPersonales: newUserInfo };
    await updateDoc(userDoc, newInfo);
  };

  const updateCartUser = async (id, producto) => {
    const userDoc = doc(db, "usuariosRegistrados", id);
    const newCart = { carrito: producto };
    await updateDoc(userDoc, newCart);
  };

  const updateShoppingHistory = async (id, producto) => {
    const userDoc = doc(db, "usuariosRegistrados", id);
    const newCart = { historialCompras: producto };
    await updateDoc(userDoc, newCart);
  };

  // ---------- Eliminar User del localStorage y de Context ---------- //

  const clearUser = () => {
    localStorage.removeItem("usuario logueado");
    setUser(null);
  };

  // ---------- Cancelar promise's ("Fix") ---------- //

  // const generateCancellablePromise = (promise) => {
  //   let isCancelled = false;

  //   const cancellablePromise = new Promise(async (resolve, reject) => {
  //     try {
  //       const result = await promise;
  //       return isCancelled
  //         ? reject(new Error("The promise was cancelled."))
  //         : resolve(result);
  //     } catch (error) {
  //       reject(isCancelled ? isCancelled : error);
  //     }
  //   });

  //   return {
  //     promise: cancellablePromise,
  //     cancel: () => (isCancelled = true),
  //   };
  // };

  return (
    <CartContext.Provider
      value={{
        user,
        setUser,
        usersCollectionRef,
        productsCollectionRef,
        createUser,
        updateCartUser,
        updateShoppingHistory,
        updateUserInfo,
        clearUser,
      }}
      displayName="User">
      {children}
    </CartContext.Provider>
  );
};

export default UserProvider;
