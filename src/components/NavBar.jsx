import React, { useState } from "react";
import { Menu, Button, Drawer } from "antd";
import {
  MobileOutlined,
  RobotOutlined,
  LaptopOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import "antd/dist/antd.css";
import CartWidget from "./CartWidget";
import {Link} from 'react-router-dom'

const { SubMenu, Item } = Menu;

const NavBar = () => {
  const [visible, setVisible] = useState(false);
  const verDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
  return (
    <header className="header">
      <div className="container">
        <div className="nav-main">
          <div className="left">
            <Link to='/' className="logo-main">
              <img
                className="img-logo"
                src="https://i.ibb.co/r0vbQ7F/logo-main.png"
                alt="logo"
              />
              <p>
                Gʌming<span>SHOP</span>
              </p>
            </Link>
          </div>

          <Menu mode="horizontal" className="center">
            <Link to='/categoria/celulares-tables'>
              <Item
                key="cel"
                className="hover-item-nav"
                icon={<MobileOutlined className="icon-size" />}
              >
                Celulares/Tables
              </Item>
            </Link>
            <Link to='/categoria/videosjuegos'>
              <Item
                key="games"
                className="hover-item-nav"
                icon={<RobotOutlined className="icon-size" />}
              >
                Videojuegos
              </Item>
            
            </Link>
            <Link to='/categoria/laptops-pcs'>
              <Item
                key="pcs"
                className="hover-item-nav"
                icon={<LaptopOutlined className="icon-size" />}
              >
                Laptops/Pcs
              </Item>
            </Link>
          </Menu>

          <div className="button-center">
            <Button onClick={verDrawer} className="btn-menu">
              <MenuOutlined className="icon-size" />
            </Button>
            <Drawer
              title="Nuestras Categorías"
              placement="right"
              onClose={onClose}
              visible={visible}
            >
              <div className="drawer-contenido">
                <Link className="drawer-link" to='/celulares-tables'>
                  {" "}
                  <MobileOutlined /> Celulares/Tables
                </Link>
                <Link className="drawer-link" to='/videosjuegos'>
                  {" "}
                  <RobotOutlined /> Videojuegos
                </Link>
                <Link className="drawer-link" to='/laptops-pcs'>
                  {" "}
                  <LaptopOutlined /> Laptops/Pcs
                </Link>
                <button className="drawer-login">Iniciar Sesión</button>
              </div>
            </Drawer>
          </div>

          <div className="right">
            <button className="btn-login">Iniciar Sesión</button>
            <CartWidget />
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
