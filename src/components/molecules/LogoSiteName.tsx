import React from "react";
import Logo from "../atoms/Logo";
import SiteName from "../atoms/SiteName";
import { LogoSiteNameProps } from "../../interfaces/LogoSiteNameInterfaces";
import styles from "../../styles/LogoSiteName.module.css";

const LogoSiteName: React.FC<LogoSiteNameProps> = ({
  logoSrc,
  logoAlt,
  siteName,
}) => {
  return (
    <div className={styles.container}>
      <Logo src={logoSrc} alt={logoAlt} />
      <SiteName name={siteName} />
    </div>
  );
};

export default LogoSiteName;
