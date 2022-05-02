import React, { useState } from "react";
import { Menu, Layout, Button, Input, Drawer } from "antd";
import "./navbar1.css";
import { Link, useNavigate } from "react-router-dom";
import { SearchOutlined, HeartOutlined, MenuOutlined } from "@ant-design/icons";
import CartWidget from "../CartWidget";
import {
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "../../firebase/config";


const { Header } = Layout;
const { Search } = Input;

const items = [
  {
    label: (
      <Link className="categoria__navbar" to="/categoria/laptops">
        Laptops
      </Link>
    ),
    key: "laptop",
    // icon: <MailOutlined />
  },
  {
    label: (
      <Link className="categoria__navbar" to="/categoria/accesorios">
        Accesorios
      </Link>
    ),
    key: "accesorio",
    // icon: <AppstoreOutlined />
  },
  {
    label: (
      <Link className="categoria__navbar" to="/categoria/impresoras">
        Impresoras
      </Link>
    ),
    key: "impresora",
    // icon: <MailOutlined />
  },
];

const Navbar1 = () => {
  const [current, setCurrent] = React.useState("laptop");
  const [user, setUser] = useState({});
  const [visible, setVisible] = useState(false);

  const navigate = useNavigate();

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });
  const verMenu = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };
  const navegarLogin = () => {
    navigate("/login");
    onClose()
  };

  const cerrarSesión = async () => {
    await signOut(auth);
    onClose()
  };
  console.log(user);
  return (
    <>
      <Header className="header__navbar">
        <div className="navbar__direction">
          <div className="display__hamburger">
            <Button className="btn__hamburger" type="text" onClick={verMenu}>
              <MenuOutlined />
            </Button>
            <Drawer
              title={
                <div className="d__flex__logo--menu">
                  <img
                    className="logo__img--menu"
                    src="https://i.ibb.co/0qWy790/logo-ecomerce.jpg"
                    alt="logo-img"
                  />
                </div>
              }
              placement="right"
              closable={false}
              onClose={onClose}
              visible={visible}
              getContainer={false}
            >
              <div className='d-flex__submenu'>
                <Link className="categoria__navbar" onClick={onClose} to="/categoria/laptops">
                  Laptops
                </Link>
                <Link className="categoria__navbar" onClick={onClose} to="/categoria/accesorios">
                  Accesorios
                </Link>
                <Link className="categoria__navbar" onClick={onClose} to="/categoria/impresoras">
                  Impresoras
                </Link>
                {user === null ? (
                    <Button className="btn__login--hamburger" onClick={navegarLogin}>
                        Iniciar Sesión
                    </Button>
                    ) : (
                    <div className="flex__usuario--hamburger">
                        <p className="usuario__text">Hola, {user?.email}</p>
                        <Button className="btn__login--hamburger" onClick={cerrarSesión}>
                        Cerrar Sesión
                        </Button>
                    </div>
                    )}
              </div>
            </Drawer>
          </div>
          <Link to="/" className="navbar__logo">
            <img
              className="img-logo"
              src="https://i.ibb.co/0qWy790/logo-ecomerce.jpg"
              alt="logo"
            />
          </Link>
          <div className="navbar__center">
            <div className="navbar__buscador">
              <Input
                placeholder="Buscar producto"
                className="border_none"
                bordered={false}
                enterButton
              />
              <Button className="icon__search">
                <SearchOutlined />
              </Button>
            </div>
            <Menu
              onClick={onClick}
              className="menu__navbar"
              mode="horizontal"
              items={items}
            />
          </div>
          <div className="navbar__right">
            {user === null ? (
              <Button className="btn__login" onClick={navegarLogin}>
                Iniciar Sesión
              </Button>
            ) : (
              <div className="flex__usuario">
                <p className="usuario__text">Hola, {user?.email}</p>
                <Button className="btn__login" onClick={cerrarSesión}>
                  Cerrar Sesión
                </Button>
              </div>
            )}

            {/*  */}
            <div className="icon__right">
              <HeartOutlined className="icon_heart" />
              <CartWidget />
            </div>
          </div>
        </div>
      </Header>
    </>
  );
};

export default Navbar1;
