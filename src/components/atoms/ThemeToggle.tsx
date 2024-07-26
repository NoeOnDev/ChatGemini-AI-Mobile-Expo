import React, { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import { FaDesktop } from "react-icons/fa";
import { BsMoonStars, BsSun } from "react-icons/bs";

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button type="button" onClick={toggleTheme}>
      {theme === "light" ? (
        <BsSun />
      ) : theme === "dark" ? (
        <BsMoonStars />
      ) : (
        <FaDesktop />
      )}
    </button>
  );
};

export default ThemeToggle;
