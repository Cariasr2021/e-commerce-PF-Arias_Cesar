import React, { Fragment, useState } from "react";
import { message, Button } from "antd";

const ItemCount = (stock) => {
  const [count, setCount] = useState(0);

  const mensaje = () => {
    if (count > 0) {
      message.success(`Producto agregado exitosamente: ${count}`);
    } else {
      message.error(`No ha agregado ningún producto: ${count}`);
    }
  };
  const sumarContador = () => {
    if (count === stock.stock) {
      return;
    }
    setCount(count + 1);
  };

  const restarContador = () => {
    if (count === 0) {
      return;
    }
    setCount(count - 1);
  };

  const agregarProducto = () => {
    stock.onAdd(count);
  };
  return (
    <Fragment>
      <div className="card-contador">
        <Button onClick={restarContador}>-</Button>
        <span>{count}</span>
        <Button onClick={sumarContador}>+</Button>
      </div>
      <Button onClick={mensaje}>Agregar Producto</Button>
    </Fragment>
  );
};

export default ItemCount;
