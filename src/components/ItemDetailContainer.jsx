import React,{useState, useEffect} from 'react'
import ItemDetail from './ItemDetail'
import { obtenerDatos } from './data/datos'
import Skelet from './Skelet';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
  const [promiseDetail, setPromiseDetail] = useState([]);
  const [loading, setLoading] = useState(true);
  const {Id} = useParams();
  console.log(Id)

  useEffect(() => {
    async function mostrarDatos() {
      try {
        const res = await obtenerDatos();
        setPromiseDetail(res.find((item) => item.id === Number(Id)));
        
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    mostrarDatos();
  }, [promiseDetail, Id]);
  
  return (
    <div className="itemListContainer">
      <h1>Detalle del Producto</h1>
      <div className="container">
        {
         loading ? <Skelet /> : (
          <ItemDetail {...promiseDetail}/>
         )
        }
        
      </div>
    </div>
  )
}

export default ItemDetailContainer