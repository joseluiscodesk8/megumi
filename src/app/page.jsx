import Image from "next/image";
import styles from "./styles/index.module.scss";
import menuData from "./data/menus.json";


export default function Home() {
  return (
    <main className={styles.menuContainer}>
      <h1>Entradas</h1>
      <section>
        {menuData.menu.map((item) => (
          <div key={item.nombre} className={styles.menuItems}>
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
          </div>
        ))}
      </section>
    </main>
  );
}
