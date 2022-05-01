import React from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";



const ItemListContainer = () => {
  const {categoriaId} = useParams();
  console.log(categoriaId)
  
  return (
    <div className="itemListContainer">
      {
        categoriaId === 'laptops' ? 
        <div className="d-flex__titulo container">
          <img src="https://i.ibb.co/JxHDCgZ/icon-lap.png" alt="icon-lap" />
          <h1 className="titulo__productos">Laptops</h1> 
        </div>
        :
        (categoriaId === 'accesorios' ? 
        <div className="d-flex__titulo container">
          <img src="https://i.ibb.co/LC6SNt1/icon-acces.png" alt="icon-acces" />
          <h1 className="titulo__productos">Accesorios</h1> 
        </div>
        : (categoriaId === 'impresoras' ? 
        <div className="d-flex__titulo container">
          <img src="https://i.ibb.co/sQ5Df61/icon-pinter.png" alt="icon-lap" />
          <h1 className="titulo__productos">Impresoras</h1> 
        </div>
        : <h1 className="titulo__productos margin__productosDest container">Productos destacados</h1>))
      }
      {/* <h1 style={{color: '#475be9', fontSize:'30px'}}>Nuestros Productos</h1> */}
      <div className="listContainer__main">
        <ItemList />
      </div>
    </div>
  );
};

export default ItemListContainer;
