import React from 'react'
import ItemCount from './ItemCount'
import { Col, Image, Row, Space } from 'antd'

const ItemDetail = (props) => {
    const {id, nombre, precio, imagen, imgMarca, precioOriginal, stock, initial, marca, modelo, producto, procesador, tarjetaVideo, memoriaRAM, almacenamiento, pantalla, teclado, SO} = props.promiseDetail
  // marca: 'Asus',
  //     modelo: 'G513IC-HN004T',
  //     producto: 'Laptop Gaming',
  //     procesador: 'AMD Ryzen 7',
  //     tarjetaVideo: 'Nvidia RTX 3050',
  //     memoriaRAM: '16GB DDR4',
  //     pantalla: '15.6p FHD',
  //     teclado: 'Español',
  //     SO: 'Windo
  return (
    <Row align='center'>
      <Col xs={{span:24}}  lg={{span:18}}>
        <h2>{nombre}</h2>
        <Row>
          <Col xs={{span:24}} lg={{span:12}}>
          <Image src={imagen}/>
          </Col>
          
          <Col xs={{span:12}} lg={{span:12}} className='col-reference'>
            <h2>Referencias:</h2>
            <ul className='ul-reference'>
              <li>Marca: {marca}</li>
              <li>Modelo: {modelo}</li>
              <li>Producto: {producto}</li>
              <li>Procesador: {procesador}</li>
              <li>Tarjeta de video: {tarjetaVideo}</li>
              <li>Memoria RAM: {memoriaRAM}</li>
              <li>Almacenamiento: {almacenamiento}</li>
              <li>Pantalla: {pantalla}</li>
              <li>Teclado: {teclado}</li>
              <li>Sistema operativo: {SO}</li>
            </ul>
          </Col>
        </Row>
        
      </Col>
      <Col xs={{span:24}}  lg={{span:6}} className='col-datos'>
          <img className='logo-producto' src={imgMarca} alt={marca} />
          <div className='contenedor-datos'>
            <del className='detail-precioOriginal'>{precioOriginal}</del>
            <p>Precio actual:</p>
            <p className='detail-precioActual'>{precio}</p>
            <ItemCount stock={stock} initial={initial} />
          </div>
      </Col>
        
      
      
    </Row>
  )
}

export default ItemDetail