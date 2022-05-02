import React, { useContext } from "react";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { CartContext } from "./context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
  
  const { cartCantidad } = useContext(CartContext);

  return (
    <Link to="/cart">
      <div className="icon-cartwidget">
        <ShoppingCartOutlined />
        {cartCantidad() > 0 && (
          <div className="contador-cartwidget">
            <p>{cartCantidad()}</p>
          </div>
        )}
      </div>
    </Link>
  );
};

export default CartWidget;
