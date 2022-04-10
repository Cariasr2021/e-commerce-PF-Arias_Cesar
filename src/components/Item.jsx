import React, { useState } from "react";
import { Space, Row, Col, Card, Skeleton, Rate } from "antd";

import { StarFilled, StarOutlined } from "@ant-design/icons";
import ItemDetailContainer from "./ItemDetailContainer";
import { useNavigate } from "react-router-dom";

const { Meta } = Card;

const Item = ({ id, nombre, precio, imagen, stock,categoria, precioOriginal }) => {
  const navigate = useNavigate()
  
  const verDetailItem = () => {
    navigate(`/item/${id}`)
    
  }

  return (
    <Col xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 6 }} key={id}>
      <Card
        onClick={verDetailItem}
        hoverable
        cover={<img style={{ padding: "10px" }} alt="example" src={imagen} />}
      >
        <Meta
          title={nombre}
          description={
            <Space
              direction="vertical"
              size={[0, 0]}
              className="d-flex"
            >
              <del className="precioOriginal">S/. {precioOriginal}.00</del>
              <p className="precioDesc">S/. {precio}.00</p>
              <div>
                <Rate disabled defaultValue={4} />
              </div>
            </Space>
          }
        />
      </Card>
    </Col>
  );
};

export default Item;
