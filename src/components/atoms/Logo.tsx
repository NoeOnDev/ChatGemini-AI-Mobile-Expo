import React, { useContext } from "react";
import { LogoProps } from "../../interfaces/LogoInterfaces";
import { ThemeContext } from "../../contexts/ThemeContext";
import styles from "../../styles/Logo.module.css";

const Logo: React.FC<LogoProps> = ({ darkSrc, lightSrc, alt }) => {
  const { theme } = useContext(ThemeContext);
  const src = theme === "dark" ? darkSrc : lightSrc;

  return <img src={src} alt={alt} className={styles.logo} />;
};

export default Logo;
