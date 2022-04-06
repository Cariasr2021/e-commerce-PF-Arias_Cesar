import React,{useState, useEffect} from 'react'
import ItemDetail from './ItemDetail'
import { obtenerDatos } from './data/datos'
import Skelet from './Skelet';
import { useParams } from 'react-router-dom';
import { Skeleton } from 'antd';

const ItemDetailContainer = () => {
  const [promiseDetail, setPromiseDetail] = useState([]);
  const [loading, setLoading] = useState(false);
  const {Id} = useParams();
  // console.log(Id)

  useEffect(() => {
    setLoading(true)
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
      {/* <h1 style={{color: '#475be9', fontSize:'30px'}}>Detalle de Productos</h1> */}
      <div className="container">
        {
         loading ? <Skeleton active paragraph={{rows:4}}/>: (
          <ItemDetail promiseDetail={promiseDetail}/>
         )
        }
        
      </div>
    </div>
  )
}

export default ItemDetailContainer