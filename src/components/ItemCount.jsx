import React,{useState} from "react";
import { message, Button, Space} from "antd";
import { useNavigate } from "react-router-dom";

const ItemCount = (props) => {

  const { stock, initial, onAdd} = props
  const [cantidad, setCantidad] = useState(initial);
  const navigate = useNavigate()
 
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
    <Space direction="vertical" className="space-count" >
      <div className="card-contador" >
        <Button className="btn-incrementador" onClick={restarContador} type='default'>-</Button>
        <span>{cantidad}</span>
        <Button className="btn-incrementador" onClick={sumarContador}>+</Button>
      </div>
      <Button className="btn-onAdd" onClick={() => onAdd(cantidad)} block>COMPRAR AHORA</Button>
    </Space>
  );
};

export default ItemCount;
