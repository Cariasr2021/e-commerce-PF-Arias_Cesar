import React from 'react'

const ItemListContainer = (props) => {
    
  return (
    <div className='itemListContainer'>
        <h1>Nuestros Productos</h1>
        {
          props.datos.map((item) => 
          <h2 key={item.id}>{item.nombre} - {item.imagen}</h2>
          )
        }
    </div>
  )
}

export default ItemListContainer