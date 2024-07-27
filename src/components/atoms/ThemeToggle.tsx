import React, { useContext, useState } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import { FaDesktop } from "react-icons/fa";
import { BsSun } from "react-icons/bs";
import { LuMoonStar } from "react-icons/lu";
import styles from "../../styles/ThemeToggle.module.css";

const ThemeToggle: React.FC = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuClick = (newTheme: string) => {
    setTheme(newTheme);
    setShowMenu(false);
  };

  const handleButtonClick = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className={styles.container}>
      <button
        type="button"
        onClick={handleButtonClick}
        className={styles.toggleButton}
      >
        {theme === "light" ? (
          <BsSun />
        ) : theme === "dark" ? (
          <LuMoonStar />
        ) : (
          <FaDesktop />
        )}
      </button>
      {showMenu && (
        <div className={styles.menu}>
          <div
            onClick={() => handleMenuClick("light")}
            className={`${styles.menuItem} ${
              theme === "light" ? styles.selected : ""
            }`}
          >
            <BsSun className={styles.icon} /> Light
          </div>
          <div
            onClick={() => handleMenuClick("dark")}
            className={`${styles.menuItem} ${
              theme === "dark" ? styles.selected : ""
            }`}
          >
            <LuMoonStar className={styles.icon} /> Dark
          </div>
          <div
            onClick={() => handleMenuClick("system")}
            className={`${styles.menuItem} ${
              theme === "system" ? styles.selected : ""
            }`}
          >
            <FaDesktop className={styles.icon} /> System
          </div>
        </div>
      )}
    </div>
  );
};

export default ThemeToggle;
