import React from 'react'
import ItemCount from './ItemCount'
import { Col, Image, Row, Space } from 'antd'

const ItemDetail = ({id, nombre, precio, descripcion, imagen, precioOriginal, stock, initial}) => {
  return (
    <Row align='center'>
      <Col span={14}>
        <Image src={imagen}/>
      </Col>
      <Col span={10}>
          <h2>{nombre}</h2>
          <p>{descripcion}</p>
          <del>{precioOriginal}</del>
          <p>{precio}</p>
          <ItemCount stock={stock} initial={initial} />
      </Col>
        
      
      
    </Row>
  )
}

export default ItemDetail