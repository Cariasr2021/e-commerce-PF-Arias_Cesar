import React from "react";
import { Layout } from "antd";
import {
  FacebookOutlined,
  WhatsAppOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import "./foot.css";

const { Footer } = Layout;

const Foot = () => {
  return (
    <Footer className="footer__main">
      <div className="flex__footer">
        <Link className="logo__footer" to="/">
          <img
            src="https://i.ibb.co/0qWy790/logo-ecomerce.jpg"
            alt="logo-foter"
            className="img-logo"
          />
        </Link>
        <div className="flex__icons--footer">
          <a
            href=" https://web.facebook.com/profile.php?id=100007406325752"
            target="_blank"
          >
            <FacebookOutlined className="icon__footer" />
          </a>
          <a
            href=" https://api.whatsapp.com/send?phone=51965792370"
            target="_blank"
          >
            <WhatsAppOutlined className="icon__footer" />
          </a>
          <a
            href=" https://www.linkedin.com/in/c%C3%A9sar-alejandro-junior-arias-rojas-3879981a0/"
            target="_blank"
          >
            <LinkedinOutlined className="icon__footer" />
          </a>
        </div>
      </div>
      <div className="footer__copyright">
        © Copyright 2022 - César Alejandor Junior Arias Rojas - Front End
        Development
      </div>
    </Footer>
  );
};

export default Foot;
