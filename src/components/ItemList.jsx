import React, { Fragment, useEffect, useState } from "react";
import { Row} from "antd";
import Item from "./Item";
import Skelet from "./Skelet";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase/config";


const ItemList = () => {
  const [promiseDatos, setPromiseDatos] = useState([]);
  const [loading, setLoading] = useState(false);
  const {categoriaId} = useParams();
  

  useEffect(() => {
    setLoading(true)
    //1- Armar la referencia
    const productRef = collection(db, 'productos')
    const q = categoriaId ? query(productRef, where('categoria','==',categoriaId)) : productRef
    getDocs(q)
      .then(res => {
        const item = res.docs.map(doc => ({id: doc.id, ...doc.data()}))
        
        setPromiseDatos(item)
      } )
      .finally(() => {
        setLoading(false)
      })
    
  }, [categoriaId]);
  
  return (
    <Row gutter={[40, 90]}>
      {loading ? (
        <Fragment>
          <Skelet />
          <Skelet />
          <Skelet />
          <Skelet />
        </Fragment>
      ) : (
        promiseDatos.map((item) => <Item {...item} />)
      )}
    </Row>
  );
};

export default ItemList;
