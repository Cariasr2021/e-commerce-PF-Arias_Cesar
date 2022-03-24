import React, { useEffect, useState } from "react";
import { Modal, Button, Image, Space, Row, Col } from "antd";
import ItemCount from "./ItemCount";

const Item = (props) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

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
        title={props.nombre}
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
            <Image src={props.imagen} />
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 12 }}>
            <Space direction="vertical" style={{ paddingTop: 20 }}>
              <p>{props.descripcion}</p>
              <h2 className="modal-precio">{props.precio}</h2>
              <ItemCount stock={props.stock} initial={props.initial} />
            </Space>
          </Col>
        </Row>
      </Modal>
    </div>
  );
};

export default Item;
