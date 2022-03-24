import React, { useEffect, useState } from "react";
import { Card, Col, Row, Image } from "antd";
import Item from "./Item";

const datos = [
  {
    id: 1,
    nombre: "Laptop Gamer Tuf 15 Ci7 10H 16Gb 512Ssd V4G - ASUS",
    descripcion:
      "ASUS TUF Gaming FX505 es un potente portátil para juegos con Windows 10 que combina rendimiento de juego con un panel tipo IPS de bisel estrecho y una vida útil prolongada gracias a su sistema patentado Anti-Dust Cooling (ADC).",
    precio: "S/ 4,549.00",
    imagen: "https://i.ibb.co/kc0QXn6/lap-Asus.webp",
    stock: 10,
    initial: 1,
  },
  {
    id: 2,
    nombre:
      "Laptop Gamer Hp Pavilion 15-Dk1043La Intel Core I5-10300H 8Gb 512Gb Ssd",
    descripcion:
      "El diseño agresivo de la HP Pavilion Gaming Laptop trae la nueva tecnología de enfriamiento, poderosos gráficos NVIDIA® GeForce® GTX™ y la última generación de procesadores Intel® Core™ para que seas el número uno.",
    precio: "S/ 3,799.00",
    imagen: "https://i.ibb.co/xX4PRmJ/lap-Hp.webp",
    stock: 8,
    initial: 1,
  },
  {
    id: 3,
    nombre: "Celular Samsung Glaxy S22+ 128GB Green",
    descripcion:
      "El nuevo Samsung Galaxy S22+ te da la bienvenida al estándar más épico. Con una pantalla espaciosa y equilibrada gracias a su fluidez de sus finos bíseles hacia un marco pulido y simétrico.",
    precio: "S/ 4,599.00",
    imagen: "https://i.ibb.co/pjdyRJQ/cel-Samsumg.webp",
    stock: 12,
    initial: 1,
  },
  {
    id: 4,
    nombre: "Tablet Lenovo Tab M8 2da Gen.TB-8505X RAM 2GB 32GB 8″ HD 4G LTE",
    descripcion:
      "La Tab M8 de 2da generación, equipada con Android™ Pie™, un procesador de cuatro núcleos y una batería que proporciona hasta 18 horas de navegación web*, es la clave para un entretenimiento sin interrupciones.",
    precio: "S/ 399.00",
    imagen: "https://i.ibb.co/z254rw2/tab-Lenovo.webp",
    stock: 15,
    initial: 1,
  },
];

const obtenerDatos = () => {
  return new Promise((resolve, reject) => {
    let i = true;
    if (i) {
      setTimeout(() => {
        resolve(datos);
      }, 4000);
    } else {
      reject("Datos no encontrados...");
    }
  });
};

const ItemList = () => {
  const [promiseDatos, setPromiseDatos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function mostrarDatos() {
      try {
        const res = await obtenerDatos();
        setPromiseDatos(res);
        // console.log(promiseDatos)
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    mostrarDatos();
  }, []);

  return (
    <Row gutter={[16, 24]}>
      {loading ? (
        <h1>Cargando...</h1>
      ) : (
        promiseDatos.map((item) => (
          <Col
            xs={{ span: 24 }}
            md={{ span: 12 }}
            lg={{ span: 6 }}
            key={item.id}
          >
            <Card title={item.nombre} bordered={false}>
              <div className="card-producto">
                <Image src={item.imagen}></Image>
                {/* <ItemCount stock={item.stock} /> */}
                <Item
                  nombre={item.nombre}
                  precio={item.precio}
                  imagen={item.imagen}
                  descripcion={item.descripcion}
                  stock={item.stock}
                  initial={item.initial}
                />
              </div>
            </Card>
          </Col>
        ))
      )}
    </Row>
  );
};

export default ItemList;
