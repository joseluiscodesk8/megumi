'use client'

import { motion } from "framer-motion";
import Link from "next/link";
import styles from "../styles/index.module.scss";

const Navbar = () => {
    return(
        <nav className={styles.navBar}>
            <ul>
                <motion.li whileTap={{ scale: 0.8 }}>
                    <Link href="/">Entradas</Link>
                </motion.li>
                <motion.li whileTap={{ scale: 0.8 }}>
                    <Link href="/especialidades">Especialidades</Link>
                </motion.li>
                <motion.li whileTap={{ scale: 0.8 }}>
                    <Link href="/roll">Roll Cortante</Link>
                </motion.li>
                <motion.li whileTap={{ scale: 0.8 }}>
                    <Link href="/tradicionales">Tradicionales</Link>
                </motion.li>
            </ul>
        </nav>
    )
}

export default Navbar;
