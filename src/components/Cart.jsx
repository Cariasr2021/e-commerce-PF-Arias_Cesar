import React, { useContext, useState } from "react";
import { CartContext } from "./context/CartContext";
import { DeleteOutlined, PlusCircleOutlined } from "@ant-design/icons";
import { Table, Button, Alert, Space, Row, Layout } from "antd";
import { useNavigate, Link } from "react-router-dom";
import { collection, addDoc, Timestamp, doc, updateDoc, getDoc, writeBatch, query, where, documentId, getDocs } from 'firebase/firestore';
import { createUserWithEmailAndPassword, onAuthStateChanged, signOut} from 'firebase/auth';
import { db , auth} from '../firebase/config';
import { clear } from "@testing-library/user-event/dist/clear";

const { Content } = Layout;
const Cart = () => {
  const { cart, removeItem, clearCart, cartTotal, cartCantidad } = useContext(CartContext);
  const [pedidoId, setPedidoId] = useState(null)
  const [cliente, setCliente] = useState({})
  const [user, setUser] = useState({})
  // console.log(cart);
  const navigate = useNavigate();

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser)
})
  const volverNavegar = () => {
    navigate(-1);
  };
  const empezarNavegar = () => {
    navigate('/');
  };
  const navegarLogin = async() => {
    const pedidoRef = collection(db, 'pedidos')
    const datoRef = collection(db, 'datos')
    const batch = writeBatch(db)
    const productRef = collection(db, 'productos')

    getDocs(datoRef)
      .then(res => {
        const item = res.docs.map(doc => doc.data())
        const data = item.find(el => el.cliente.email === user.email )
         console.log(data.cliente)
        // const item = res.docs.map(doc => ({...doc.data()}))
        // const data = item.find((el) => el.cliente.email === user.email)
        // console.log(data.cliente)
        setCliente(data.cliente)
        // console.log(pedidoId)
        // console.log(cliente)
      })
      
      const pedido = {
        items: cart,
        total: cartTotal(),
        cliente: {...cliente},
        fyh: Timestamp.fromDate(new Date())
    }
    console.log(pedido)
    
    const q = query(productRef, where(documentId(), 'in', cart.map(item => item.id)))
        const productos =  await getDocs(q)

        const outOfStock = []

        productos.docs.forEach(doc => {
            const itemInCart = cart.find(item => item.id === doc.id)

            if(doc.data().stock >= itemInCart.cantidad) {
                batch.update(doc.ref, {
                    stock: doc.data.stock - itemInCart.cantidad
                })
            } else {
                outOfStock.push(itemInCart)
            }
        })
        
        if (outOfStock.length === 0) {
            batch.commit()
            addDoc(pedidoRef, pedido)
                .then(doc => {
                    
                    setPedidoId(doc.id)
                    
                    
                })
        } else {
            alert('Hay item sin stock')
        }


    // navigate('/login')
  }
  // if(pedidoId){
  //       return (
  //           <Content className='contenido__pedido'>
  //               <div className='container d__flex--contenido'>
  //                   <div className='contenedor__pedido--exitoso'>
  //                       <img src="https://i.ibb.co/sFSH0d6/pedido-exitoso.png" alt="img-pedido" />
  //                       <h1 className='titulo__pedido--exitoso'>Su pedido se realizó correctamente</h1>
  //                       <div className='contenedor__codigo'>
  //                           <p className='titulo__codigo--exitoso'>Código de seguimiento:</p>
  //                           <p className='codigo__exitoso'>{pedidoId}</p>
  //                       </div>
                        
  //                       <Link to='/'><Button size='large' className='btn__goHome'>Regresar al Home</Button></Link>
  //                   </div>
  //               </div>
  //           </Content>
            
  //       )
  //   }
  // console.log(data.columns[0].dataIndex)
  return (
    <Content className="contenido__cart">
      <div className="container">
        <div className="d-flex__titulo">
            <img src="https://i.ibb.co/rZSKT3g/shopping-cart.png" alt="icon-cart" />
            <h1 className="titulo__productos">Carrito de compras</h1> 
        </div>
        {
          cartCantidad() !== 0 ? 
            <>
            {
              cart.map(item => 
              <div className="cart-container container">
                <img className="img__cart" src={item.imagen} alt="imagen-cart" />
                <div className="cart__contenido">
                  <div className="cart__contenido--top">
                    <h4 className="titulo__product--cart">{item.nombre}</h4>
                    <Button
                    onClick={() => removeItem(item.id)}
                    type="link"
                    className="icon-delete"
                  >
                    <img src="https://i.ibb.co/fNGxwtj/trash-icon.png" alt="icon-trash" />
                  </Button>
                  </div>
                  <div className="flex__precios--cart">
                    <div className="precios__cart">
                      <p className="text__precio--cart">Precio: <span className="result__precio--cart">S/{item.precio}</span></p>
                      <del className="del__precio--cart">S/{item.precioOriginal}</del>
                    </div>
                    <p className="cantidad__total--cart">Cantidad: {item.cantidad}</p>
                  </div>
                </div>
              </div>
            )
            }
            <div className="container">
            <div className="flex__contenido--bot">
              <Button onClick={empezarNavegar} className="btn__addProduct--cart">
              <PlusCircleOutlined className="icon__addproduct" /> Añadir otro producto
              </Button >
              <p className="text__total--cart">Total: <span className="result__total--cart">S/{cartTotal()}</span></p>
            </div>
            <div className="flex__btn--confirm">
              <Button className="btn__confirm--cart" onClick={navegarLogin}>
                Confirmar compra
              </Button>
            </div>
            </div>
            
            </> : 
            <div className="container flex__cart-vacio"> 
              <h2 className="text__cart--vacio">¡Aún no has agregado ningún producto a tu carrito</h2>
              <img src="https://i.ibb.co/m6D8LbD/cart-vacio.png" alt="cart-vacio" />
              <button className="btn__goProduct" onClick={empezarNavegar}>Empezar a comprar</button>
            </div>
        }
      </div>
    </Content>
  );
};

export default Cart;

