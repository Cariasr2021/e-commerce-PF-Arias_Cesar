import React, { useContext, useState } from 'react'
import { CartContext} from './context/CartContext'
import {
    Form,
    Input,
    Select,
    Button,
    Checkbox,
    Space
  } from 'antd';
import { UserOutlined, LockOutlined, MailOutlined } from '@ant-design/icons';
import { collection, addDoc, Timestamp, doc, updateDoc, getDoc, writeBatch, query, where, documentId, getDocs } from 'firebase/firestore';
import { db } from '../firebase/config';
import { signup, auth } from '../firebase/config';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword} from 'firebase/auth';
import { Navigate, Link, useNavigate} from 'react-router-dom';
import { Content } from 'antd/lib/layout/layout';


const { Option } = Select;

const Login = () => {
    const {cart, cartTotal, clearCart} = useContext(CartContext)
    const [pedidoId, setPedidoId] = useState(null)
    const navigate = useNavigate()
    
    const [values, setValues] = useState({
        email: '',
        password: ''
    })
    

    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.id]: e.target.value
        })
    }
    const handleLogin = async() =>{
        try {
            const user = await signInWithEmailAndPassword(auth, values.email, values.password)
            console.log(user)
        } catch (error) {
            console.log(error)
        }
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        
        const pedido = {
            items: cart,
            total: cartTotal(),
            cliente: {...values},
            fyh: Timestamp.fromDate(new Date())
        }

        try {
            const user = await signInWithEmailAndPassword(auth, values.email, values.password)
            console.log(user)
        } catch (error) {
            console.log(error)
        }

        const batch = writeBatch(db)
        const pedidoRef = collection(db, 'pedidos')
        const productRef = collection(db, 'productos')

        

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
                    
        //             setPedidoId(doc.id)
        //             clearCart()
        //         })
        // } else {
        //     alert('Hay item sin stock')
        // }
    
    }
    const navegarRegister = () => {
        navigate('/register')
    }
    // if(pedidoId){
    //     return (
    //         <Content className='contenido__pedido'>
    //             <div className='container d__flex--contenido'>
    //                 <div className='contenedor__pedido--exitoso'>
    //                     <img src="https://i.ibb.co/sFSH0d6/pedido-exitoso.png" alt="img-pedido" />
    //                     <h1 className='titulo__pedido--exitoso'>Su pedido se realizó correctamente</h1>
    //                     <div className='contenedor__codigo'>
    //                         <p className='titulo__codigo--exitoso'>Código de seguimiento:</p>
    //                         <p className='codigo__exitoso'>{pedidoId}</p>
    //                     </div>
                        
    //                     <Link to='/'><Button size='large' className='btn__goHome'>Regresar al Home</Button></Link>
    //                 </div>
    //             </div>
    //         </Content>
            
    //     )
    // }

    // if (cart.length === 0){
    //     return <Navigate to='/' />
    // }
    // const prefixSelector = (
    //     <Form.Item name="prefix" noStyle>
    //       <Select style={{ width: 70 }} defaultValue={51}>
    //         <Option value="51">+51</Option>
    //         <Option value="53">+53</Option>
    //         <Option value="54">+54</Option>
    //       </Select>
    //     </Form.Item>
    //   );
  return (
      <Content className='contenido__login'>
        <div className='container-form'>
            <Form className='form__login' onSubmitCapture={handleSubmit}>
            <h3 className='logo__login'>Logo</h3>
            <h2 className='titulo__login'>Inicio de Sesión</h2>
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
                <Form.Item >
                    <div className='flex__checkPass'>
                        <Form.Item  name="remember" valuePropName="checked" noStyle>
                            <Checkbox className='checket__label'>Recordar mi cuenta</Checkbox>
                        </Form.Item>

                        <a className="login-form-forgot" href="# hola">
                            <u>
                            Olvidé mi contraseña
                            </u>
                        </a>
                    </div>
                    
                </Form.Item>
                
                    <Form.Item >
                        <div className='centrado__button--login'>
                            <Button className='btn__ingresar--login' htmlType="submit" >
                            Ingresar
                            </Button>
                        </div>
                    </Form.Item>
                    <p className='text__separador'>o</p>
                    <Form.Item >
                        <div className="centrado__button--login">
                            <Button className='btn__crearUser' onClick={navegarRegister}>
                            Regístrarse
                            </Button>
                        </div>
                    </Form.Item>

                

                
                {/* <Form.Item
                    name='nombre'
                    label='Nombre: '
                    rules={[
                        {
                        required: true,
                        message: 'Por favor, ingrese un nombre',
                        },
                    ]}
                >
                    <Input onChange={handleInputChange} value={values.nombre} name='nombre'/>
                </Form.Item>
                <Form.Item
                    name='email'
                    label='Email: '
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
                    <Input onChange={handleInputChange} value={values.email} name='email'/>
                </Form.Item>
                <Form.Item
                    name='celular'
                    label='Celular: '
                    rules={[
                        {
                        required: true,
                        message: 'Por favor, ingrese un celular',
                        }
                    ]}
                >
                    <Input addonBefore={prefixSelector} style={{ width: '100%' }} onChange={handleInputChange} value={values.celular} name='celular' type='tel' maxLength={9}/>
                </Form.Item> */}
                {/* <Form.Item >
                    <Button type="primary" htmlType="submit">
                    Enviar
                    </Button>
                </Form.Item> */}
            </Form>
        </div>
      </Content>
  )
}

export default Login