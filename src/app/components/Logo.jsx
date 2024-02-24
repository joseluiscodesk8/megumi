import Image from "next/image";
import styles from "../styles/index.module.scss";

const Logo = () => {
    return(
        <picture className={styles.logo}>
            <Image src="https://i.ibb.co/FYFjT6t/megumi.jpg" alt="logo" width={200} height={120} loading="lazy"/>
        </picture>
    )
} 

export default Logo;