'use client'

import Image from "next/image";
import styles from "../styles/index.module.scss";
import menuData from "../data/tradicionales.json";
import { motion } from "framer-motion";
import LazyImage from "../ui/LazyImage";

const Tradicionales = () => {
  return (
    <main className={styles.menuContainer}>
      <h1>Tradicionales</h1>
      {/* <h2>Todos nuestros arroces vienen en peso de un kilo para compartir</h2> */}
      <section>
        {menuData.menu.map((item, index) => (
          <motion.div  key={item.nombre}
            className={styles.menuItems}
            initial={{ opacity: 0, y: 50 }} // Establece la posición inicial y la opacidad
            animate={{ opacity: 1, y: 0 }} // Establece la animación de entrada
            transition={{ duration: 0.5, delay: index * 0.1 }}>
            <picture>
            <LazyImage
              src={item.imagen}
              alt={item.nombre}
              width={280}
              height={250}
              loading="lazy"
            />
            </picture>
            <div>
              <h2>{item.nombre}</h2>
              <p>${item.precio}</p>
            </div>
            <p className={styles.description}>{item.descripcion}</p>
          </motion.div>
        ))}
      </section>
    </main>
  );
}

export default Tradicionales;