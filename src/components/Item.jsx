import React from "react";
import { Col, Card, Button } from "antd";

import { HeartOutlined } from "@ant-design/icons";

import { useNavigate } from "react-router-dom";

const { Meta } = Card;

const Item = ({
  id,
  nombre,
  nombreAbrev,
  precio,
  imagen,
  stock,
  categoria,
  precioOriginal,
}) => {
  const navigate = useNavigate();

  const verDetailItem = () => {
    navigate(`/item/${id}`);
  };
  console.log(nombreAbrev);
  return (
    <Col
      xs={{ span: 24 }}
      sm={{ span: 12 }}
      lg={{ span: 8 }}
      xl={{ span: 6 }}
      key={id}
    >
      <div className="descuento__cart">-10%</div>
      <Card
        className="card__item"
        title={<h3 className="subtitulo__item">{nombreAbrev}</h3>}
        cover={
          <img className="img__productos" alt={nombreAbrev} src={imagen} />
        }
      >
        <div className="text__precios">
          <p className="text__precio">Precio: S/{precio}</p>
          <del className="text__precioDel">
            Precio regular: S/{precioOriginal}
          </del>
        </div>
        <div className="acciones__cart">
          <Button className="btn__addFav">
            <HeartOutlined />
          </Button>
          <Button className="btn__verDetail" onClick={verDetailItem}>
            Ver Detalle
          </Button>
        </div>
      </Card>
    </Col>
  );
};

export default Item;
