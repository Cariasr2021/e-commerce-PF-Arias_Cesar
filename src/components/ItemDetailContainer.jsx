import React,{useState, useEffect} from 'react'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom';
import { Skeleton } from 'antd';
import { doc, getDoc } from 'firebase/firestore';
  import { db } from '../firebase/config';

const ItemDetailContainer = () => {
  const [promiseDetail, setPromiseDetail] = useState([]);
  const [loading, setLoading] = useState(false);
  const {Id} = useParams();

  useEffect(() => {
    setLoading(true)
    const itemDetailRef = doc(db, 'productos', Id)
    getDoc(itemDetailRef)
      .then((res) => {
        const item = {id: res.id, ...res.data()}
        
        setPromiseDetail(item)
      }).finally(() => {
        setLoading(false)
      })
  }, [ Id]);
  
  return (
    <div className="itemListContainer">
  
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