import React from "react";
// import { Card, Col, Row, Image } from "antd";
// import ItemCount from "./ItemCount";
import ItemList from "./ItemList";

// const datos = [
//   {
//     id: 1,
//     nombre: "Laptop Gamer Asus",
//     precio: "S/ 4,549.00",
//     imagen: "https://i.ibb.co/kc0QXn6/lap-Asus.webp",
//     stock: 10,
//   },
//   {
//     id: 2,
//     nombre: "Laptop Gamer Hp",
//     precio: "S/ 3,799.00", 
//     imagen: "https://i.ibb.co/xX4PRmJ/lap-Hp.webp",
//     stock: 8,
//   },
//   {
//     id: 3,
//     nombre: "Celular Samsung Glaxy S22+",
//     precio: "S/ 4,599.00",
//     imagen: "https://i.ibb.co/pjdyRJQ/cel-Samsumg.webp",
//     stock: 12,
//   },
//   {
//     id: 4,
//     nombre: "Tablet Lenovo Tab M8",
//     precio: "S/ 399.00",
//     imagen: "https://i.ibb.co/z254rw2/tab-Lenovo.webp",
//     stock: 15,
//   }
// ];

// console.log(datos)
const ItemListContainer = () => {
  
  return (
    <div className="itemListContainer">
      <h1>Nuestros Productos</h1>
      <div className="site-card-wrapper container">
        <ItemList />
      </div>
    </div>
  );
};

export default ItemListContainer;
