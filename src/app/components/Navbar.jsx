import Link from "next/link";
import styles from "../styles/index.module.scss";

const Navbar = () => {
    return(
        <nav className={styles.navBar}>
            <ul>
                <li><Link href="/">Entradas</Link></li>
                <li><Link href="/especialidades">Especialidades</Link></li>
                <li><Link href="/roll">Roll Cortante</Link></li>
                <li><Link href="/tradicionales">Tradicionales</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar;