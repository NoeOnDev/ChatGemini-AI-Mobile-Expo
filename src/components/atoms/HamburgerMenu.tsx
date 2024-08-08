import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
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
              <Link to="/" onClick={toggleMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={toggleMenu}>
                About
              </Link>
            </li>
            <li>
              <Link to="/services" onClick={toggleMenu}>
                Services
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={toggleMenu}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default HamburgerMenu;
