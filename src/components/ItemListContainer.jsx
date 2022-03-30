import React from "react";

import ItemList from "./ItemList";


const ItemListContainer = () => {
  
  return (
    <div className="itemListContainer">
      {/* <h1 style={{color: '#475be9', fontSize:'30px'}}>Nuestros Productos</h1> */}
      <div className="site-card-wrapper container">
        <ItemList />
      </div>
    </div>
  );
};

export default ItemListContainer;
