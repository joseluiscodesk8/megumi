'use client'

import { motion } from "framer-motion";
import Link from "next/link";
import styles from "../styles/index.module.scss";

const Navbar = () => {
    return(
        <nav className={styles.navBar}>
            <ul>
                <motion.li whileTap={{ scale: 0.95 }} animate={{ scale: [1, 0.8, 1] }} transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}>
                    <Link href="/">Entradas</Link>
                </motion.li>
                <motion.li whileTap={{ scale: 0.95 }} animate={{ scale: [1, 0.8, 1] }} transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}>
                    <Link href="/especialidades">Especialidades</Link>
                </motion.li>
                <motion.li whileTap={{ scale: 0.95 }} animate={{ scale: [1, 0.8, 1] }} transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}>
                    <Link href="/roll">Roll Cortante</Link>
                </motion.li>
                <motion.li whileTap={{ scale: 0.95 }} animate={{ scale: [1, 0.8, 1] }} transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}>
                    <Link href="/tradicionales">Tradicionales</Link>
                </motion.li>
            </ul>
        </nav>
    )
}

export default Navbar;
