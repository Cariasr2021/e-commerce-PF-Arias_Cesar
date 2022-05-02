import React, { useContext, useState } from "react";
import { CartContext } from "./context/CartContext";
import { Form, Input, Select, Button, Checkbox } from "antd";
import { LockOutlined, MailOutlined } from "@ant-design/icons";
import { collection, Timestamp, writeBatch } from "firebase/firestore";
import { db } from "../firebase/config";
import { auth } from "../firebase/config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { Content } from "antd/lib/layout/layout";

const Login = () => {
  const { cart, cartTotal, clearCart } = useContext(CartContext);
  const [pedidoId, setPedidoId] = useState(null);
  const navigate = useNavigate();

  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    setValues({
      ...values,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const pedido = {
      items: cart,
      total: cartTotal(),
      cliente: { ...values },
      fyh: Timestamp.fromDate(new Date()),
    };

    try {
      const user = await signInWithEmailAndPassword(
        auth,
        values.email,
        values.password
      );
      console.log(user);
    } catch (error) {
      console.log(error);
    }

    // const batch = writeBatch(db)
    // const pedidoRef = collection(db, 'pedidos')
    // const productRef = collection(db, 'productos')
    navigate(-1);
  };
  const navegarRegister = () => {
    navigate("/register");
  };

  return (
    <Content className="contenido__login">
      <div className="container-form">
        <Form className="form__login" onSubmitCapture={handleSubmit}>
          <h2 className="titulo__login">Inicio de Sesión</h2>
          <Form.Item
            label={<h4 className="email__label">Correo Electrónico:</h4>}
            name="email"
            rules={[
              {
                type: "email",
                message: "El correo electrónico no es válido",
              },
              {
                required: true,
                message: "Por favor, ingrese un correo electrónico",
              },
            ]}
          >
            <Input
              className="email__input"
              prefix={<MailOutlined />}
              onChange={handleInputChange}
              value={values.email}
              placeholder="Correo electrónico"
            />
          </Form.Item>
          <Form.Item
            label={<h4 className="password__label">Contraseña:</h4>}
            name="password"
            rules={[
              {
                required: true,
                message: "Por favor, ingrese una contraseña",
              },
            ]}
          >
            <Input
              className="password__input"
              prefix={<LockOutlined />}
              onChange={handleInputChange}
              value={values.password}
              type="password"
              placeholder="Contraseña"
            />
          </Form.Item>
          <Form.Item>
            <div className="flex__checkPass">
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox className="checket__label">
                  Recordar mi cuenta
                </Checkbox>
              </Form.Item>

              <a className="login-form-forgot" href="# hola">
                <u>Olvidé mi contraseña</u>
              </a>
            </div>
          </Form.Item>

          <Form.Item>
            <div className="centrado__button--login">
              <Button className="btn__ingresar--login" htmlType="submit">
                Ingresar
              </Button>
            </div>
          </Form.Item>
          <p className="text__separador">o</p>
          <Form.Item>
            <div className="centrado__button--login">
              <Button className="btn__crearUser" onClick={navegarRegister}>
                Regístrarse
              </Button>
            </div>
          </Form.Item>
        </Form>
      </div>
    </Content>
  );
};

export default Login;
