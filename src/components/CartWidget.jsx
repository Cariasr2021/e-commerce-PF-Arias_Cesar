import React, { useState } from 'react'
import { ShoppingCartOutlined } from '@ant-design/icons';

const CartWidget = () => {
    const [contador, setContador] = useState(0);

    const añadirCarrito = () => {
        setContador(contador+1);
    }

  return (
    <div onClick={añadirCarrito} className='icon-cartwidget'>
        <ShoppingCartOutlined />
        <div className='contador-cartwidget'>
            <p>{contador}</p>
        </div>
    </div>
  )
}

export default CartWidget