'use client'

import { useEffect } from "react";
import Image from "next/image";
import styles from "./styles/index.module.scss";
import menuData from "./data/menus.json";
import { motion } from "framer-motion";
import LazyImage from "./ui/LazyImage";

export default function Home() {

  useEffect(() => {
    if ('serviceWorker' in navigator && window.matchMedia('(display-mode: standalone)').matches) {
      window.addEventListener('beforeinstallprompt', (event) => {
        // Prevent Chrome 67 and earlier from automatically showing the prompt
        event.preventDefault();
        // Stash the event so it can be triggered later.
        deferredPrompt = event;
        // Update UI to notify the user they can add to home screen
        showInstallPromotion();
      });
    }
  }, []);
  
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
