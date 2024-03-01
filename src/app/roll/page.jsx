'use client'

import Image from "next/image";
import styles from "../styles/index.module.scss";
import menuData from "../data/roll.json";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const DynamicImage = dynamic(() => (import('../ui/LazyImage')));

const Roll = () => {
  return (
    <main className={styles.menuContainer}>
      <h1>Roll Corcante</h1>
      <section>
        {menuData.menu.map((item, index) => (
          <motion.div  key={item.nombre}
            className={styles.menuItems}
            initial={{ opacity: 0, y: 50 }} // Establece la posición inicial y la opacidad
            animate={{ opacity: 1, y: 0 }} // Establece la animación de entrada
            transition={{ duration: 0.5, delay: index * 0.1 }}>
            <picture>
            <DynamicImage
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

export default Roll;