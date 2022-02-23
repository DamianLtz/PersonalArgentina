import { Routes, Route } from "react-router-dom";
import UserProvider from "./context/UserContext";
import ScrollToTop from "./components/common/ScrollToTop"

// ---------------- Componentes ---------------- //
import Home from "./components/Home";
import Tienda from "./components/Tienda";
import DescripcionProducto from "./components/DescripcionProducto";
import Login from "./components/Login";
import Register from "./components/Register";
import Checkout from "./components/Checkout";
import BuyMessage from "./components/BuyMessage";
import Profile from "./components/Profile";

function App() {
  return (
    <UserProvider>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tienda" element={<Tienda />} />
        <Route path="tienda/:id" element={<DescripcionProducto />} />
        <Route path="login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/buyMessage" element={<BuyMessage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </UserProvider>
  );
}

export default App;