import React, {useContext, useState} from 'react';
import { Menu, Layout, Space, Button, Input } from 'antd';
import './navbar1.css'
import { Link, useNavigate } from 'react-router-dom';
import { SearchOutlined, HeartOutlined } from '@ant-design/icons';
import CartWidget from '../CartWidget';
import { CartContext } from '../context/CartContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signOut} from 'firebase/auth';
import { signup, auth } from '../../firebase/config';
import { async } from '@firebase/util';

const {Header} = Layout;
const { Search } = Input;


const items = [
  {
    label: (
        <Link className='categoria__navbar' to='/categoria/laptops'>
            Laptops
        </Link>
    ),
    key: 'laptop',
    // icon: <MailOutlined />
  },
  {
    label: (
        <Link className='categoria__navbar' to='/categoria/accesorios'>
            Accesorios
        </Link>
    ),
    key: 'accesorio',
    // icon: <AppstoreOutlined />
  },
  {
    label: (
        <Link className='categoria__navbar' to='/categoria/impresoras'>
            Impresoras
        </Link>
    ),
    key: 'impresora',
    // icon: <MailOutlined />
  }
];

const Navbar1 = () => {
  const [current, setCurrent] = React.useState('laptop');
  const [user, setUser] = useState({})
  
  const navigate = useNavigate();
    
  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser)
})
  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };
  const navegarLogin = () => {
    navigate('/login')
  }
  
  const cerrarSesión = async () => {
      await signOut(auth)
  }
  console.log(user)
  return (
  <>
    <Header className='header__navbar'>
        <div className='navbar__direction'>
            <Link to='/' className='navbar__logo'>
            {/* <img
                    className="img-logo"
                    src="https://i.ibb.co/r0vbQ7F/logo-main.png"
                    alt="logo"
                /> */}
                <p>
                    Gʌming<span>SHOP</span>
                </p>
            </Link>
            <div className='navbar__center'>
                <div className='navbar__buscador'>
                    <Input placeholder='Buscar producto' className='border_none'  bordered={false} enterButton/>
                    <Button className='icon__search' >
                        <SearchOutlined />
                    </Button>
                    
                </div>
                <Menu onClick={onClick} className='menu__navbar'  mode="horizontal" items={items} />
            </div>
            <div className='navbar__right'>
            {
                    user === null ?  
                    <Button className='btn__login' onClick={navegarLogin}>
                        Iniciar Sesión
                    </Button>
                    : <div className='flex__usuario'>
                    <p className='usuario__text'>Hola, {user?.email}</p> 
                    <Button className='btn__login' onClick={cerrarSesión}>Cerrar Sesión</Button>
                    </div>
                }
                
                {/*  */}
                <div className='icon__right'>
                    <HeartOutlined className='icon_heart'/>
                    <CartWidget />
                </div>
            </div>
        </div>
    </Header>
  </>
  );
};

export default Navbar1;