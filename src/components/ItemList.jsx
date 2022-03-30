import React, { Fragment, useEffect, useState } from "react";
import { Row, Skeleton, Col, Space } from "antd";
import Item from "./Item";
import Skelet from "./Skelet";
import { obtenerDatos } from "./data/datos";
import { useParams } from "react-router-dom";


const ItemList = () => {
  const [promiseDatos, setPromiseDatos] = useState([]);
  const [loading, setLoading] = useState(false);
  const {categoriaId} = useParams();
  console.log(categoriaId)

  useEffect(() => {
    setLoading(true)
    async function mostrarDatos() {
      try {
        const res = await obtenerDatos();
        if (categoriaId){
          setPromiseDatos(res.filter((item) => item.categoria === categoriaId))
        } else {
          setPromiseDatos(res)
        }
        // console.log(promiseDatos)
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    mostrarDatos();
  }, [categoriaId]);

  return (
    <Row gutter={[16, 24]}>
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
