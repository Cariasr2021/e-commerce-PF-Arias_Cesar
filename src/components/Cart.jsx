import React, { useContext } from "react";
import { CartContext } from "./context/CartContext";
import { DeleteFilled } from "@ant-design/icons";
import { Table, Button } from "antd";

const Cart = () => {
  const { cart, removeItem, clearCart } = useContext(CartContext);
  console.log(cart);
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Producto",
      dataIndex: "producto",
      key: "producto",
      width: 250,
    },
    {
      title: "Cantidad",
      dataIndex: "cantidad",
      key: "cantidad",
    },
    {
      title: "Precio",
      dataIndex: "precio",
      key: "precio",
    },
    {
      title: "Total",
      dataIndex: "total",
      key: "total",
    },
    {
      title: "Acciones",
      key: "operation",
      dataIndex: "operation",
    },
  ];

  const data = [];
  cart.map((item) =>
    data.push({
      id: item.id,
      producto: item.nombre,
      cantidad: item.cantidad,
      precio: item.precio,
      total: 'Por definirse',
      operation: (
        <Button
          onClick={() => removeItem(item.id)}
          type="link"
          className="icon-delete"
          danger
        >
          <DeleteFilled />
        </Button>
      ),
    })
  );
  // console.log(data.columns[0].dataIndex)

  return (
  <div className="container">
      <Table columns={columns} dataSource={data} />
      <Button size="large" type="primary" danger onClick={clearCart}>Limpiar el Carrito</Button>
  </div>
  );
};

export default Cart;
