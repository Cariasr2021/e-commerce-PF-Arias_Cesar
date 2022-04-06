import React, { useContext, useState } from 'react'
import { ShoppingCartOutlined } from '@ant-design/icons';
import { CartContext } from './context/CartContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {
    const [contador, setContador] = useState(0);
    const {cartCantidad} = useContext(CartContext)
    // const añadirCarrito = () => {
    //     setContador(contador+1);
    // }

  return (

    <Link to='/cart'>
      <div className='icon-cartwidget'>
          <ShoppingCartOutlined />
          <div className='contador-cartwidget'>
              <p>{cartCantidad()}</p>
          </div>
      </div>
    </Link>
  )
}

export default CartWidget