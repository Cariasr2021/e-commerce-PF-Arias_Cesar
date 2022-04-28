import React, { useContext, useState } from 'react'
import { CartContext} from './context/CartContext'
import {
    Form,
    Input,
    Select,
    Button
  } from 'antd';
import { collection, addDoc, Timestamp, doc, updateDoc, getDoc } from 'firebase/firestore';
import { db } from '../firebase/config';
import { Navigate, Link} from 'react-router-dom';

const { Option } = Select;

const Login = () => {
    const {cart, cartTotal, clearCart} = useContext(CartContext)
    const [pedidoId, setPedidoId] = useState(null)
    const [form] = Form.useForm()
    
    const [values, setValues] = useState({
        nombre: '',
        email: '',
        celular: ''
    })
    

    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        
        const pedido = {
            items: cart,
            total: cartTotal(),
            cliente: {...values},
            fyh: Timestamp.fromDate(new Date())
        }
        const pedidoRef = collection(db, 'pedidos')

        cart.forEach((item) => {
            const docRef = doc(db, 'productos', item.id)

            getDoc(docRef)
                .then((doc) => {
                    if(doc.data().stock >= item.cantidad){
                        updateDoc(docRef, {
                            stock: doc.data().stock - item.cantidad
                        })
                    } else{
                        alert('no hay suficiente stock')
                    }
                    
                })
        })
        addDoc(pedidoRef, pedido)
            .then(doc => {
                // console.log(doc.id)
                setPedidoId(doc.id)
                clearCart()
             })
        console.log(pedido)
        // console.log(cart)
    }
    if(pedidoId){
        return (
            <div className='container'>
                <h1>Se registró exitosamente!</h1>
                <h3>Guarda el código de tu pedido: {pedidoId}</h3>
                <Link to='/'><Button size='large' className='btn__volver'>Volver</Button></Link>
            </div>
        )
    }
    if (cart.length === 0){
        return <Navigate to='/' />
    }
    const prefixSelector = (
        <Form.Item name="prefix" noStyle>
          <Select style={{ width: 70 }} defaultValue={51}>
            <Option value="51">+51</Option>
            <Option value="53">+53</Option>
            <Option value="54">+54</Option>
          </Select>
        </Form.Item>
      );
  return (
    <div className='container-form'>
        <Form onSubmitCapture={handleSubmit}>
            <Form.Item
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
            </Form.Item>
            <Form.Item >
                <Button type="primary" htmlType="submit">
                Enviar
                </Button>
            </Form.Item>
        </Form>
    </div>
  )
}

export default Login