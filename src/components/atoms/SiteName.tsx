import React from "react";
import { SiteNameProps } from "../../interfaces/SiteNameInterfaces";
import styles from "../../styles/SiteName.module.css";

const SiteName: React.FC<SiteNameProps> = ({ name }) => {
  return <h1 className={styles.siteName}>{name}</h1>;
};

export default SiteName;
