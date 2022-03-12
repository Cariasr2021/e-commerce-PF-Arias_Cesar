import React from 'react'

const ItemListContainer = (props) => {
    
  return (
    <div className='itemListContainer'>
        <h1>Nuestros Productos</h1>
        <h2>{props.datos[0].nombre} / {props.datos[0].imagen}</h2>
        <h2>{props.datos[1].nombre} / {props.datos[1].imagen}</h2>
    </div>
  )
}

export default ItemListContainer