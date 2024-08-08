import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import styles from "../../styles/HamburgerMenu.module.css";

const HamburgerMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.hamburgerMenu}>
      <button
        onClick={toggleMenu}
        className={styles.hamburgerButton}
        aria-label="Open menu"
      >
        <FaBars />
      </button>
      <div className={`${styles.sidebar} ${isOpen ? styles.open : ""}`}>
        <button
          onClick={toggleMenu}
          className={styles.closeButton}
          aria-label="Close menu"
        >
          <FaTimes />
        </button>
        <nav className={styles.nav}>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default HamburgerMenu;
