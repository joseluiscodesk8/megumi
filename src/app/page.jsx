'use client'

import Image from "next/image";
import styles from "./styles/index.module.scss";
import menuData from "./data/menus.json";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className={styles.menuContainer}>
      <h1>Entradas</h1>
      <section>
        {menuData.menu.map((item, index) => (
          <motion.div  key={item.nombre}
            className={styles.menuItems}
            initial={{ opacity: 0, y: 50 }} // Establece la posición inicial y la opacidad
            animate={{ opacity: 1, y: 0 }} // Establece la animación de entrada
            transition={{ duration: 0.5, delay: index * 0.1 }}>
            <Image
              src={item.imagen}
              alt={item.nombre}
              width={280}
              height={250}
              loading="lazy"
            />
            <div>
              <h2>{item.nombre}</h2>
              <p>Precio: ${item.precio}</p>
            </div>
            <p>{item.descripcion}</p>
          </motion.div>
        ))}
      </section>
    </main>
  );
}
