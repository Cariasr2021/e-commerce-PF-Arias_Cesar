import React,{useState} from "react";
import { message, Button, Space} from "antd";
import { HeartOutlined } from "@ant-design/icons";
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
    <>
      <div className="flex-counter">
        <p className="titulo__cantidad--contador">Cantidad</p>
        <div className="container-counter"> 
          <Button className="btn-incrementador btn__lado--menos" onClick={restarContador} type='text' >-</Button>
          <span>{cantidad}</span>
          <Button className="btn-incrementador btn__lado--mas" onClick={sumarContador} type='text' >+</Button>
        </div>
      </div>
      <div className="flex__buttons--detail">
        <Button className="btn__agregarCart--detail">
          Añadir al Carrito
        </Button>
        <Button className="btn__comprar--detail" onClick={() => onAdd(cantidad)}>
          Comprar
        </Button>
      </div>
      
      <Button className="btn__favoritos--detail" type="text"
        ><HeartOutlined />Añadir a mis favoritos
      </Button>
      
    </>
    // <Space direction="vertical" className="space-count" >
    //   <div className="card-contador" >
    //     <Button className="btn-incrementador" onClick={restarContador} type='default'>-</Button>
    //     <span>{cantidad}</span>
    //     <Button className="btn-incrementador" onClick={sumarContador}>+</Button>
    //   </div>
    //   <Button className="btn-onAdd" onClick={() => onAdd(cantidad)} block>COMPRAR AHORA</Button>
    // </Space>
  );
};

export default ItemCount;
