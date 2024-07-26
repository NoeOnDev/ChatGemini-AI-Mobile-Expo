import React, { createContext, useState, useEffect, ReactNode } from "react";
import { ThemeContextProps } from "../interfaces/ThemeContextInterfaces";

export const ThemeContext = createContext<ThemeContextProps>({
  theme: "system",
  toggleTheme: () => {},
});

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [theme, setTheme] = useState<string>(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme || "system";
  });

  const [systemTheme, setSystemTheme] = useState<string>(() => {
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = () => {
      setSystemTheme(mediaQuery.matches ? "dark" : "light");
    };
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    const appliedTheme = theme === "system" ? systemTheme : theme;
    document.documentElement.setAttribute("data-theme", appliedTheme);
    localStorage.setItem("theme", theme);
  }, [theme, systemTheme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      if (prevTheme === "light") return "dark";
      if (prevTheme === "dark") return "system";
      return "light";
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
