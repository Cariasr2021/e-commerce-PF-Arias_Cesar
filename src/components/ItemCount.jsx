import React, { useState } from "react";
import { Button, Alert } from "antd";
import { HeartOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const ItemCount = (props) => {
  const { stock, initial, onAdd } = props;
  const [cantidad, setCantidad] = useState(initial);
  const navigate = useNavigate();

  const sumarContador = () => {
    if (cantidad === props.stock) {
      return;
    }
    setCantidad(cantidad + 1);
  };

  const restarContador = () => {
    if (cantidad === initial) {
      return;
    }
    setCantidad(cantidad - 1);
  };
  // console.log(props.initial)
  return (
    <>
      {stock === 0 ? (
        <Alert
          className="alert__stock"
          description="Este producto ya no está disponible"
          type="warning"
          showIcon
        />
      ) : (
        <div className="flex-counter">
          <p className="titulo__cantidad--contador">Cantidad</p>
          <div className="container-counter">
            <Button
              className="btn-incrementador btn__lado--menos"
              onClick={restarContador}
              type="text"
            >
              -
            </Button>
            <span>{cantidad}</span>
            <Button
              className="btn-incrementador btn__lado--mas"
              onClick={sumarContador}
              type="text"
            >
              +
            </Button>
          </div>
        </div>
      )}
      {stock === 0 ? (
        <div className="flex__buttons--detail">
          <Button className="btn__agregarCart--detail btn__disabled" disabled>
            Añadir al Carrito
          </Button>
          <Button
            className="btn__comprar--detail btn__disabled"
            onClick={() => onAdd(cantidad)}
            disabled
          >
            Comprar
          </Button>
        </div>
      ) : (
        <div className="flex__buttons--detail">
          <Button className="btn__agregarCart--detail">
            Añadir al Carrito
          </Button>
          <Button
            className="btn__comprar--detail"
            onClick={() => onAdd(cantidad)}
          >
            Comprar
          </Button>
        </div>
      )}

      <Button className="btn__favoritos--detail" type="text">
        <HeartOutlined />
        Añadir a mis favoritos
      </Button>
    </>
  );
};

export default ItemCount;
