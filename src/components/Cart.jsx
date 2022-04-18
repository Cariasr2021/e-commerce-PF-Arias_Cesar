import React, { useContext } from "react";
import { CartContext } from "./context/CartContext";
import { DeleteFilled } from "@ant-design/icons";
import { Table, Button, Alert, Space, Row } from "antd";
import { useNavigate } from "react-router-dom";
import { clear } from "@testing-library/user-event/dist/clear";

const Cart = () => {
  const { cart, removeItem, clearCart, cartTotal, cartCantidad } = useContext(CartContext);
  console.log(cart);
  const navigate = useNavigate();

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
      precio: `S/. ${item.precio}`,
      total: `S/. ${item.precio * item.cantidad}`,
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
  const volverNavegar = () => {
    navigate(-1);
  };
  const navegarLogin = () => {
    navigate('/login')
  }
  // console.log(data.columns[0].dataIndex)
  return (
    <div className="container">
      {cartCantidad() !== 0 ? (
        <>
          <Table
            className="table__carrito"
            columns={columns}
            dataSource={data}
            pagination={false}
          />
          <div className="total__cart">
            <h2>Total a Pagar:</h2>
            <p>S/. {cartTotal()}</p>
          </div>
          <Row justify="space-between">
            <Space>
              <Button
                size="large"
                type="primary"
                onClick={volverNavegar}
                className="btn__volver"
              >
                Volver
              </Button>
              <Button size="large" type="primary" className="btn_limpiar-cart" onClick={clearCart}>
                Limpiar el Carrito
              </Button>
            </Space>
            <Button type="primary" size="large" className="btn_pedido" onClick={navegarLogin}>Realizar Pedido</Button>
          </Row>
        </>
      ) : (
        <>
          <Alert className="alert__cart" message={<h2 className="text__alert--cart">El carro está vacío</h2>} type="error" action={
            <Button
            size="large"
            type="inline"
            danger
            onClick={volverNavegar}
            className="btn__volver-vacio"
          >
            Volver
          </Button>
          }/>
          
          
        </>
      )}
    </div>
  );
};

export default Cart;
