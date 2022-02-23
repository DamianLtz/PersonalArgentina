import { useState } from "react";
import { createContext, useContext } from "react";

export const CartContext = createContext();

export const useUserContext = () => useContext(CartContext);

const UserProvider = ({ children }) => {

  const [user, setUser] = useState([]);

  const clearUser = () => {
    localStorage.removeItem("usuario logueado");
    setUser(null);
  };

  return (
    <CartContext.Provider
      value={{
        user,
        setUser,
        clearUser
      }}
      displayName="User">
      {children}
    </CartContext.Provider>
  );
};

export default UserProvider;
