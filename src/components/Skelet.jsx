import React from "react";
import { Space, Skeleton, Col } from "antd";

const Skelet = () => {
  return (
    <Col xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 6 }}>
      <Space direction="vertical">
        <Skeleton.Input active />
        <Skeleton.Input active />
        <Skeleton.Input active />
        <Skeleton.Input active />
        <Skeleton.Input active />
      </Space>
    </Col>
  );
};

export default Skelet;
