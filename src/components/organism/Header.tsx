import React from "react";
import LogoSiteName from "../molecules/LogoSiteName";
import ThemeToggle from "../atoms/ThemeToggle";
import HamburgerMenu from "../atoms/HamburgerMenu";
import { HeaderProps } from "../../interfaces/HeaderInterfaces";
import styles from "../../styles/Header.module.css";

const Header: React.FC<HeaderProps> = ({
  siteName,
  logoDarkSrc,
  logoLightSrc,
  logoAlt,
}) => {
  return (
    <header className={styles.header}>
      <HamburgerMenu />
      <div className={styles.logoSiteName}>
        <LogoSiteName
          darkSrc={logoDarkSrc}
          lightSrc={logoLightSrc}
          logoAlt={logoAlt}
          siteName={siteName}
        />
      </div>
      <ThemeToggle />
    </header>
  );
};

export default Header;
