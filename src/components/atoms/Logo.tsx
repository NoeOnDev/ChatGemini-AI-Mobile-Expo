import React from "react";
import { LogoProps } from "../../interfaces/LogoInterfaces";
import styles from "../../styles/Logo.module.css";

const Logo: React.FC<LogoProps> = ({ src, alt }) => {
  return <img src={src} alt={alt} className={styles.logo} />;
};

export default Logo;
