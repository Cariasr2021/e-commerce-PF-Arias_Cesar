import React, { useContext, useState, useRef } from 'react'
import { CartContext} from './context/CartContext'
import {
    Form,
    Input,
    Select,
    Button,
    Checkbox,
    Space
  } from 'antd';
import { UserOutlined, LockOutlined, MailOutlined, PhoneOutlined } from '@ant-design/icons';
import { collection, addDoc, Timestamp, doc, updateDoc, getDoc, writeBatch, query, where, documentId, getDocs } from 'firebase/firestore';
import { db } from '../firebase/config';
import { signup, auth } from '../firebase/config';
import { createUserWithEmailAndPassword, onAuthStateChanged} from 'firebase/auth';
import { Navigate, Link, useNavigate} from 'react-router-dom';
import { Content } from 'antd/lib/layout/layout';


    // const validateMessages = {
    //     required: '${label} is required!',
    //     types: {
    //     email: '${label} is not a valid email!',
    //     number: '${label} is not a valid number!',
    //     },
    //     number: {
    //     range: '${label} must be between ${min} and ${max}',
    //     },
    // };

const Register = () => {

    const {cart, cartTotal, clearCart} = useContext(CartContext)
    const [pedidoId, setPedidoId] = useState(null)
    const navigate = useNavigate()
    const [user, setUser] = useState({})
    
    
    
    const navegarLogin = () => {
        navigate('/login')
    }

    const [values, setValues] = useState({
        nombre: '',
        email: '',
        password: '',
        celular: '',
    })
    

    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.id]: e.target.value
        })
        // console.log(e)
    }
    const handleSignup = async (e) => {
        try {
            const user = await createUserWithEmailAndPassword(auth, values.email, values.password)
            console.log(user)
        } catch (error) {
            console.log(error)
        }
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        
        const dato = {
            // items: cart,
            // total: cartTotal(),
            cliente: {...values},
            // fyh: Timestamp.fromDate(new Date())
        }
        
        
        
        const batch = writeBatch(db)
        const datoRef = collection(db, 'datos')
        const pedidoRef = collection(db, 'pedidos')
        const productRef = collection(db, 'productos')

        
        if(values.email === '' || values.nombre === '' || values.password === '' || values.celular === '' ){
            console.log('Falta completar campos!!')
        } else{
            try {
                const user = await createUserWithEmailAndPassword(auth, values.email, values.password)
                addDoc(datoRef, dato)
                .then(doc => {
                    // console.log(doc.id)
                    setPedidoId(doc.id)
                    clearCart()
                })
                
                console.log(dato)
                console.log(user)
            } catch (error) {
                console.log(error)
            }
            
        }
        // const q = query(productRef, where(documentId(), 'in', cart.map(item => item.id)))
        // const productos = await getDocs(q)

        // const outOfStock = []

        // productos.docs.forEach(doc => {
        //     const itemInCart = cart.find(item => item.id === doc.id)

        //     if(doc.data().stock >= itemInCart.cantidad) {
        //         batch.update(doc.ref, {
        //             stock: doc.data.stock - itemInCart.cantidad
        //         })
        //     } else {
        //         outOfStock.push(itemInCart)
        //     }
        // })
        
        // if (outOfStock.length === 0) {
        //     batch.commit()
        //     addDoc(pedidoRef, pedido)
        //         .then(doc => {
        //             // console.log(doc.id)
        //             setPedidoId(doc.id)
        //             clearCart()
        //         })
        // } else {
        //     alert('Hay item sin stock')
        // }
        
        

    }

  return (
    <Content className='contenido__login'>
        <div className='container-form--register'>
            <Form className='form__login' onSubmitCapture={handleSubmit}>
            <h3 className='logo__login'>logo</h3>
            <h2 className='titulo__login'>Registro</h2>
            {/* <h4 className='email__label'>Nombre: </h4> */}
            <Form.Item
                    label={<h4 className='email__label'>Nombre: </h4>}
                    name='nombre'
                    rules={[
                        {
                        required: true,
                        message: 'Por favor, ingrese un nombre',
                        },
                    ]}
                >
                    <Input 
                        className='email__input'
                        prefix={<UserOutlined />}
                        placeholder='Nombre'
                        onChange={handleInputChange} 
                        value={values.nombre}
                        
                        />
            </Form.Item>
            <Form.Item
                    label= {<h4 className='email__label'>Correo Electrónico:</h4>}
                    name='email'
                    rules={[
                        {
                        type: 'email',
                        message: 'El correo electrónico no es válido',
                        },
                        {
                        required: true,
                        message: 'Por favor, ingrese un correo electrónico',
                        },
                    ]}
                >
                    
                    <Input
                        className='email__input'
                        prefix={<MailOutlined />} 
                        onChange={handleInputChange} 
                        value={values.email} 
                        
                        placeholder='Correo electrónico'
                        />
                </Form.Item>
                <Form.Item
                    label={<h4 className='password__label'>Contraseña:</h4>}
                    name="password"
                    rules={[
                        { 
                            required: true, 
                            message: 'Por favor, ingrese una contraseña' 
                        }
                    ]}
                >
                    
                    <Input
                        className='password__input'
                        prefix={<LockOutlined />}
                        onChange={handleInputChange} 
                        value={values.password} 
                        type="password"
                        
                        placeholder="Contraseña"
                    />
                </Form.Item>
                
                <Form.Item
                    label= {<h4 className='email__label'>Celular: </h4>}
                    name='celular'
                    rules={[
                        {
                        required: true,
                        message: 'Por favor, ingrese un celular',
                        }
                    ]}
                >
                    <Input  
                        className='email__input'
                        prefix={<PhoneOutlined />}
                        placeholder='Celular'
                        onChange={handleInputChange} 
                        value={values.celular} 
                        
                        type='tel' 
                        maxLength={9}/>
                </Form.Item>
                
                    <Form.Item >
                        <div className='centrado__button--login'>
                            <Button className='btn__ingresar--login' htmlType="submit" >
                            Registrarme
                            </Button>
                        </div>
                    </Form.Item>
                    <p className='text__separador'>o</p>
                    <Form.Item >
                        <div className="centrado__button--login">
                            <Button className='btn__crearUser' onClick={navegarLogin} >
                            Iniciar Sesión
                            </Button>
                        </div>
                    </Form.Item>
            </Form>
        </div>
      </Content>
  )
}

export default Register