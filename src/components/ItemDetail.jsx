import React, {useContext, useState} from 'react'
import ItemCount from './ItemCount'
import {Link} from 'react-router-dom'
import { Col, Image, Row, Space, message, Button, Rate } from 'antd'
import { CartContext } from './context/CartContext'

const ItemDetail = (props) => {
    const {id, nombre, precio, imagen, imgMarca, precioOriginal, stock, initial, marca, modelo, producto, procesador, tarjetaVideo, memoriaRAM, almacenamiento, pantalla, teclado, SO} = props.promiseDetail
  
    
    // const [irCarrito, setIrCarrito] = useState(true);
    const {addItem, cart, isInCart} = useContext(CartContext)

    const agregarCarrito = (cantidad) => {
      const itemAgregado = {
        id,
        nombre,
        precio,
        precioOriginal,
        imagen,
        cantidad
      }
      // console.log(itemAgregado)
      addItem(itemAgregado)
      
    }

    const onAdd = (cantidad) => {
      if (stock > 0) {
        message.success(`Producto agregado exitosamente: ${cantidad}`);
        agregarCarrito(cantidad)
        // setIrCarrito(false)
        
      } else {
        message.error(`No ha agregado ningún producto: ${cantidad}`);
      }
    };

    // console.log(cart)
  return (
    <>
    
    <Row gutter={[40, 90]} wrap={false} >
      <Col span={12}>
        <Image.PreviewGroup>
          <div className='img_groupMain'>
            <Image width={451} src={imagen}/>
            <div className='flex__imgDetalle'>
              <Image
                width={90}
                src={imagen}
              />
              <Image
                width={90}
                src={imagen}
              />
              <Image
                width={90}
                src={imagen}
              />
            </div>
          </div>
        </Image.PreviewGroup>
      </Col>
      <Col span={12}>
        <span className='span__stock'>({stock} disponibles)</span>
        <h2 className='titulo__producto--detalil'>{nombre}</h2>
        <Rate disabled defaultValue={4} />
        <div className='flex__precio--detail'>
          <div>
            <p className='text__precio'>Precio: S/{precio}</p>
            <del className='text__precioDel'>Precio regular: S/{precioOriginal}</del>
          </div>
          <div className="descuento__cart--detail">
            -10%
          </div>
        </div>
        {
            !isInCart(id) ? 
            <ItemCount stock={stock} initial={initial}  onAdd={onAdd}/>
            : 
            <Link to='/cart'>
              <Button className='btn__comprar--detail' >Terminar Compra</Button>
            </Link>
            }

      </Col>
      {/* <Col xs={{span:24}}  lg={{span:18}}>
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
            <del className='detail-precioOriginal'>S/. {precioOriginal}.00</del>
            <p>Precio actual:</p>
            <p className='detail-precioActual'>S/. {precio}.00</p>
            {
              !isInCart(id) ? 
              <ItemCount stock={stock} initial={initial}  onAdd={onAdd}/>
              : <Link to='/cart'><Button className='btn-onFinish' block>Terminar Compra</Button></Link>
            }
            
          </div>
      </Col> */}
    </Row>
    <Row className='row-characters'>
      <Col span={24}>
        <h3 className='titulo__caracteristicas'>Características</h3>
        <ul className='ul-reference'>
          <div>
            <li>Marca: {marca}</li>
            <li>Modelo: {modelo}</li>
            <li>Producto: {producto}</li>
            <li>Procesador: {procesador}</li>
            <li>Tarjeta de video: {tarjetaVideo}</li>
          </div>
          <div>
            <li>Memoria RAM: {memoriaRAM}</li>
            <li>Almacenamiento: {almacenamiento}</li>
            <li>Pantalla: {pantalla}</li>
            <li>Teclado: {teclado}</li>
            <li>Sistema operativo: {SO}</li>
          </div>
        </ul>
      
      </Col>
    </Row>
    </>
  )
}

export default ItemDetail