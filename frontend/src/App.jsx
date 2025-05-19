import Home from "./pages/Home";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import ProductDetails from "./pages/ProductDetails";
import CartPage from "./pages/CartPage";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  const [cartItems,setCartItems] = useState([]);
  
  return (
    <>
    <ToastContainer theme='dark'/>
      <Header cartItems={cartItems}/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetails cartItems={cartItems} setCartItems={setCartItems} />} />
          <Route path="/cart" element={<CartPage cartItems={cartItems} setCartItems={setCartItems}/>}/>
        </Routes>
      <Footer />
    </>
  );
}

export default App;
