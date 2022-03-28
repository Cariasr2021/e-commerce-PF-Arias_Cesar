import React, { useState } from "react";
import { Space, Row, Col, Card, Skeleton } from "antd";

import { StarFilled, StarOutlined } from "@ant-design/icons";
import ItemDetailContainer from "./ItemDetailContainer";
import { useNavigate } from "react-router-dom";

const { Meta } = Card;

const Item = ({ id, nombre, precio, imagen, stock,categoria }) => {
  const navigate = useNavigate()
  
  const verDetailItem = () => {
    navigate(`/categoria/${categoria}/${id}`)
    
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
              align="start"
              className="d-flex"
            >
              <del>S/ 5,000.00</del>
              <p>{precio}</p>
              <div>
                <StarFilled />
                <StarFilled />
                <StarFilled />
                <StarFilled />
                <StarOutlined />
              </div>
            </Space>
          }
        />
      </Card>
    </Col>
  );
};

export default Item;
