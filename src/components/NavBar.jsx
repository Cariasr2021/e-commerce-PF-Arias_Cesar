import React from 'react';
import { Menu, Image, Link } from 'antd';
import { MobileOutlined, RobotOutlined, LaptopOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import CartWidget from './CartWidget';

const { SubMenu, Item } = Menu;

const NavBar = () => {
  return (
    <header className='header'>
        <div className='nav-main'>
            <div className='left'>
                    <a href="# " className='logo-main'>
                        <img width={45} height={45} src="https://i.ibb.co/n3XV1GV/logoG.png" alt="logo" />
                        <p>Gʌming<span>SHOP</span></p>
                    </a>
                </div>
            <Menu mode='horizontal' className='center'>
                <Item className='hover-item-nav' icon={<MobileOutlined className='icon-size'/>}>
                        Celulares/Tables
                </Item>
                <Item className='hover-item-nav' icon={<RobotOutlined className='icon-size'/>} >
                        Videojuegos
                </Item>
                <Item className='hover-item-nav' icon={<LaptopOutlined className='icon-size'/>} >
                        Laptops/Pcs
                </Item> 
            </Menu>
            <div className='right'>
                <button className='btn-login'>Login</button>
                <CartWidget />
            </div>
        </div>
    </header>
  )
}

export default NavBar