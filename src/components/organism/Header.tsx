import React from "react";
import LogoSiteName from "../molecules/LogoSiteName";
import ThemeToggle from "../atoms/ThemeToggle";
import { HeaderProps } from "../../interfaces/HeaderInterfaces";
import styles from "../../styles/Header.module.css";

const Header: React.FC<HeaderProps> = ({ siteName, logoSrc, logoAlt }) => {
  return (
    <header className={styles.header}>
      <LogoSiteName logoSrc={logoSrc} logoAlt={logoAlt} siteName={siteName} />
      <ThemeToggle />
    </header>
  );
};

export default Header;
