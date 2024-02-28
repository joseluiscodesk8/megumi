import styles from "../styles/index.module.scss"
import { FaInstagram, FaFacebook, FaTiktok, FaPhoneAlt } from 'react-icons/fa';
import { RiWhatsappLine } from 'react-icons/ri'; 



const Footer = () => {
  return (
    <footer className={styles.Footer}>
      <span><FaInstagram /> megumisushi</span>
      <span><FaFacebook /> megumi.sushi0213</span>
      <span><FaTiktok /> megumisushi.cucuta</span>
      <span><RiWhatsappLine /> 315 4358290</span>
      <span><FaPhoneAlt /> 75492302</span>
    </footer>
  );
};

export default Footer;

