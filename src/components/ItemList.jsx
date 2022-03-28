import React, { Fragment, useEffect, useState } from "react";
import { Row, Skeleton, Col, Space } from "antd";
import Item from "./Item";
import Skelet from "./Skelet";
import { obtenerDatos } from "./data/datos";
import { useParams } from "react-router-dom";


const ItemList = () => {
  const [promiseDatos, setPromiseDatos] = useState([]);
  const [loading, setLoading] = useState(true);
  const {categoriaId} = useParams();
  console.log(categoriaId)

  useEffect(() => {
    async function mostrarDatos() {
      try {
        const res = await obtenerDatos();
        setPromiseDatos(res);
        // console.log(promiseDatos)
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    mostrarDatos();
  }, []);

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
