import React, { useContext } from "react";
import { CartContext } from "./context/CartContext";
import { DeleteOutlined, PlusCircleOutlined } from "@ant-design/icons";
import { Table, Button, Alert, Space, Row, Layout } from "antd";
import { useNavigate } from "react-router-dom";
import { clear } from "@testing-library/user-event/dist/clear";

const { Content } = Layout;
const Cart = () => {
  const { cart, removeItem, clearCart, cartTotal, cartCantidad } = useContext(CartContext);
  console.log(cart);
  const navigate = useNavigate();

  // const columns = [
  //   {
  //     title: "ID",
  //     dataIndex: "id",
  //     key: "id",
  //   },
  //   {
  //     title: "Producto",
  //     dataIndex: "producto",
  //     key: "producto",
  //     width: 250,
  //   },
  //   {
  //     title: "Cantidad",
  //     dataIndex: "cantidad",
  //     key: "cantidad",
  //   },
  //   {
  //     title: "Precio",
  //     dataIndex: "precio",
  //     key: "precio",
  //   },
  //   {
  //     title: "Total",
  //     dataIndex: "total",
  //     key: "total",
  //   },
  //   {
  //     title: "Acciones",
  //     key: "operation",
  //     dataIndex: "operation",
  //   },
  // ];

  // const data = [];
  // cart.map((item) =>
  //   data.push({
  //     id: item.id,
  //     producto: item.nombre,
  //     cantidad: item.cantidad,
  //     precio: `S/. ${item.precio}`,
  //     total: `S/. ${item.precio * item.cantidad}`,
  //     operation: (
  //       <Button
  //         onClick={() => removeItem(item.id)}
  //         type="link"
  //         className="icon-delete"
  //         danger
  //       >
  //         <DeleteFilled />
  //       </Button>
  //     ),
  //   })
  // );
  const volverNavegar = () => {
    navigate('/');
  };
  const navegarLogin = () => {
    navigate('/login')
  }
  // console.log(data.columns[0].dataIndex)
  return (
    <Content className="contenido__cart">
    <div className="container">
      <div className="d-flex__titulo">
          <img src="https://i.ibb.co/rZSKT3g/shopping-cart.png" alt="icon-cart" />
          <h1 className="titulo__productos">Carrito de compras</h1> 
      </div>
      {
        cart.map(item => 
        <div className="cart-container container">
          <img className="img__cart" src={item.imagen} alt="imagen-cart" />
          <div className="cart__contenido">
            <div className="cart__contenido--top">
              <h4 className="titulo__product--cart">{item.nombre}</h4>
              <Button
              onClick={() => removeItem(item.id)}
              type="link"
              className="icon-delete"
            >
              <img src="https://i.ibb.co/fNGxwtj/trash-icon.png" alt="icon-trash" />
            </Button>
            </div>
            <div className="flex__precios--cart">
              <div className="precios__cart">
                <p className="text__precio--cart">Precio: <span className="result__precio--cart">S/{item.precio}</span></p>
                <del className="del__precio--cart">S/{item.precioOriginal}</del>
              </div>
              <p className="cantidad__total--cart">Cantidad: {item.cantidad}</p>
            </div>
          </div>
        </div>
      )
      }
      <div className="container">
      <div className="flex__contenido--bot">
        <Button onClick={volverNavegar} className="btn__addProduct--cart">
        <PlusCircleOutlined className="icon__addproduct" /> Añadir otro producto
        </Button >
        <p className="text__total--cart">Total: <span className="result__total--cart">S/{cartTotal()}</span></p>
      </div>
      <div className="flex__btn--confirm">
        <Button className="btn__confirm--cart">
          Confirmar compra
        </Button>
      </div>
      </div>
      
      {/* {cartCantidad() !== 0 ? (
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
      )} */}
    </div>
    </Content>
  );
};

export default Cart;
