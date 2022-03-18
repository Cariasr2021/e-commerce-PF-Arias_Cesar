import React from "react";
import { Card, Col, Row, Button } from "antd";
import ItemCount from "./ItemCount";

const datos = [
  {
    id: 1,
    nombre: "producto-1",
    imagen: "imagen-1",
    stock: 10,
  },
  {
    id: 2,
    nombre: "producto-2",
    imagen: "imagen-2",
    stock: 8,
  },
  {
    id: 3,
    nombre: "producto-3",
    imagen: "imagen-3",
    stock: 12,
  },
  {
    id: 4,
    nombre: "producto-4",
    imagen: "imagen-4",
    stock: 15,
  }
];

// console.log(datos)
const ItemListContainer = () => {
  
  const onAdd = (count) =>{
    console.log(`producto agregado`,count)
  }
  return (
    <div className="itemListContainer">
      <h1>Nuestros Productos</h1>
      <div className="site-card-wrapper container">
        <Row gutter={[16, 24]}>
          {datos.map((item) => (
            <Col xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 6 }} key={item.id} >
              <Card title={item.nombre} bordered={false} >
                <div className="card-producto" >
                  {item.imagen}
                  <ItemCount stock={item.stock} onAdd={onAdd}/>
                  
                </div>
              </Card>
            </Col>
          ))}
        </Row>
        
      </div>
    </div>
  );
};

export default ItemListContainer;
