'use client'

import Image from "next/image";
import styles from "../styles/index.module.scss";
import LazyImage from "../ui/LazyImage";


const Logo = () => {
    return(
        <picture className={styles.logo}>
            <LazyImage src="https://i.ibb.co/bdgFRqV/megumi.png" alt="logo" width={200} height={120} loading="lazy"/>
        </picture>
    )
} 

export default Logo;