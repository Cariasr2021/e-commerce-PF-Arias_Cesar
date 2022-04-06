import React, {useContext, useState} from 'react'
import ItemCount from './ItemCount'
import {Link} from 'react-router-dom'
import { Col, Image, Row, Space, message, Button } from 'antd'
import { CartContext } from './context/CartContext'

const ItemDetail = (props) => {
    const {id, nombre, precio, imagen, imgMarca, precioOriginal, stock, initial, marca, modelo, producto, procesador, tarjetaVideo, memoriaRAM, almacenamiento, pantalla, teclado, SO} = props.promiseDetail
  
    const [cantidad, setCantidad] = useState(initial);
    // const [irCarrito, setIrCarrito] = useState(true);
    const {addItem, cart, isInCart} = useContext(CartContext)

    const agregarCarrito = () => {
      const itemAgregado = {
        id,
        nombre,
        precio,
        imagen,
        cantidad
      }
      // console.log(itemAgregado)
      addItem(itemAgregado)
      
    }

    const onAdd = () => {
      if (stock > 0) {
        message.success(`Producto agregado exitosamente: ${cantidad}`);
        agregarCarrito()
        // setIrCarrito(false)
        
      } else {
        message.error(`No ha agregado ningún producto: ${cantidad}`);
      }
    };

    // console.log(cart)
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
            {
              !isInCart(id) ? 
              <ItemCount stock={stock} initial={initial} cantidad={cantidad} setCantidad={setCantidad} onAdd={onAdd}/>
              : <Link to='/cart'><Button className='btn-onFinish' block>Terminar Compra</Button></Link>
            }
            
          </div>
      </Col>
        
      
      
    </Row>
  )
}

export default ItemDetail