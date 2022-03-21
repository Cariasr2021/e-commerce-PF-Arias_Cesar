import React, { Fragment, useState } from "react";
import { message, Button, Space} from "antd";

const ItemCount = (stock) => {
  const [count, setCount] = useState(0);

  const onAdd = () => {
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

  return (
    <Space direction="vertical" className="space-count" >
      <div className="card-contador" >
        <Button className="btn-incrementador" onClick={restarContador}>-</Button>
        <span>{count}</span>
        <Button className="btn-incrementador" onClick={sumarContador}>+</Button>
      </div>
      <Button className="btn-onAdd" onClick={onAdd} block>Agregar Producto</Button>
    </Space>
  );
};

export default ItemCount;
