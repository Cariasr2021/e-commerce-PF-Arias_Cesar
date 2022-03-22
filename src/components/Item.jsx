import React, { useEffect, useState } from "react";
import { Modal, Button, Image, Space, Row, Col } from "antd";
import ItemCount from "./ItemCount";

const Item = (props) => {

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [promiseDatos, setPromiseDatos] = useState([]);

    const obtenerDatos = () => {
        return new Promise((resolve, reject) => {
            setTimeout(()=>{
                resolve(props)
            },2000)
    }
)};

    useEffect( () => {
        async function mostrarDatos() {
            try {
                const res = await obtenerDatos();
                setPromiseDatos(res)
                
            } catch (error) {
                console.log(error)
            }
        }
        mostrarDatos()
        }, [])
    

  const showModal = () => { 
        setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div>
      <Button type="danger" onClick={showModal}>
        Más información
      </Button>

      <Modal
        width={600}
        title={promiseDatos.nombre}
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="ok" onClick={handleOk}>
            ok
          </Button>,
        ]}
      >
        <Row gutter={[24]}>
          <Col xs={{ span: 24 }} sm={{ span: 12 }}>
            <Image src={promiseDatos.imagen} />
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 12 }}>
            <Space direction="vertical" style={{ paddingTop: 20 }}>
              <p>{promiseDatos.descripcion}</p>
              <h2 className="modal-precio">{promiseDatos.precio}</h2>
              <ItemCount stock={props.stock} initial={props.initial} />
            </Space>
          </Col>
        </Row>
      </Modal>
    </div>
  );
};

export default Item;
