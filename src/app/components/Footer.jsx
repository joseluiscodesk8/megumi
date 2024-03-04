'use client'

import { motion } from "framer-motion";
import styles from "../styles/index.module.scss";
import { FaInstagram, FaFacebook, FaTiktok, FaPhoneAlt } from 'react-icons/fa';
import { RiWhatsappLine } from 'react-icons/ri'; 

const Footer = () => {
  return (
    <footer className={styles.Footer}>
      <motion.span whileHover={{ scale: 1.1 }} animate={{ textShadow: "0 0 8px rgba(255, 255, 255, 1)" }} transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}>
        <FaInstagram /> megumisushi
      </motion.span>
      <motion.span whileHover={{ scale: 1.1 }} animate={{ textShadow: "0 0 8px rgba(255, 255, 255, 1)" }} transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}>
        <FaFacebook /> megumi.sushi0213
      </motion.span>
      <motion.span whileHover={{ scale: 1.1 }} animate={{ textShadow: "0 0 8px rgba(255, 255, 255, 1)" }} transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}>
        <FaTiktok /> megumisushi.cucuta
      </motion.span>
      <motion.span whileHover={{ scale: 1.1 }} animate={{ textShadow: "0 0 8px rgba(255, 255, 255, 1)" }} transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}>
        <RiWhatsappLine /> 315 4358290
      </motion.span>
      <motion.span whileHover={{ scale: 1.1 }} animate={{ textShadow: "0 0 8px rgba(255, 255, 255, 1)" }} transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}>
        <FaPhoneAlt /> 75492302
      </motion.span>
    </footer>
  );
};

export default Footer;



