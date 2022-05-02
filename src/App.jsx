import React, { useState } from "react";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Navbar1 from './components/NavBar/Navbar1'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Cart from "./components/Cart";
import { CartContext, CartProvider } from "./components/context/CartContext";
import Login from "./components/Login";
import Register from "./components/Register";
import { Slider } from "antd";
import Carrousel from "./components/Slider/Carrousel";
import Footer from './components/Footer/Foot'

function App() {
  
  
  return (
    <CartProvider>
      <Router>
        
        <Navbar1 />
        
        <Routes>
          <Route path="/" element={<>
            <Carrousel />
            <ItemListContainer />
          </>} />
          <Route
            path="/categoria/:categoriaId"
            element={<ItemListContainer />}
          />
          <Route path="/item/:Id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>

        <Footer />
      </Router>
    </CartProvider>
  );
}

export default App;
