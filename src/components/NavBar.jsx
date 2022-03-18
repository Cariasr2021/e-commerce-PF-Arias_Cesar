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
      <nav className="container">
        <div className="nav-main">
          <div className="left">
            <a href="# " className="logo-main">
              <img
                className="img-logo"
                src="https://i.ibb.co/r0vbQ7F/logo-main.png"
                alt="logo"
              />
              <p>
                Gʌming<span>SHOP</span>
              </p>
            </a>
          </div>

          <Menu mode="horizontal" className="center">
            <Item
              key="cel"
              className="hover-item-nav"
              icon={<MobileOutlined className="icon-size" />}
            >
              Celulares/Tables
            </Item>
            <Item
              key="games"
              className="hover-item-nav"
              icon={<RobotOutlined className="icon-size" />}
            >
              Videojuegos
            </Item>
            <Item
              key="pcs"
              className="hover-item-nav"
              icon={<LaptopOutlined className="icon-size" />}
            >
              Laptops/Pcs
            </Item>
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
                <a className="drawer-link" href="# ">
                  {" "}
                  <MobileOutlined /> Celulares/Tables
                </a>
                <a className="drawer-link" href="# ">
                  {" "}
                  <RobotOutlined /> Videojuegos
                </a>
                <a className="drawer-link" href="# ">
                  {" "}
                  <LaptopOutlined /> Laptops/Pcs
                </a>
                <button className="drawer-login">Iniciar Sesión</button>
              </div>
            </Drawer>
          </div>

          <div className="right">
            <button className="btn-login">Iniciar Sesión</button>
            <CartWidget />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
