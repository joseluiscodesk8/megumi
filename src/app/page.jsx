import Image from "next/image";
import styles from "./styles/index.module.scss";
import menuData from "./data/menus.json"

export default function Home() {
  return (
    <div className={styles.menuContainer}>
    <h1>Menú</h1>
    <div className={styles.menuItems}>
      {menuData.menu.map(item => (
        <div key={item.nombre} className={styles.menuItem}>
          <Image src={item.imagen} alt={item.nombre} width={280} height={250} loading="lazy" />
          <h2>{item.nombre}</h2>
          <p>Precio: ${item.precio}</p>
          <p>{item.descripcion}</p>
        </div>
      ))}
    </div>
  </div>
  );
}
