import React, { useContext } from "react";
import { LogoProps } from "../../interfaces/LogoInterfaces";
import { ThemeContext } from "../../contexts/ThemeContext";
import styles from "../../styles/Logo.module.css";

const Logo: React.FC<LogoProps> = ({ darkSrc, lightSrc, alt }) => {
  const { theme, systemTheme } = useContext(ThemeContext);
  const appliedTheme = theme === "system" ? systemTheme : theme;
  const src = appliedTheme === "dark" ? darkSrc : lightSrc;

  return <img src={src} alt={alt} className={styles.logo} />;
};

export default Logo;
