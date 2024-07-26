import React from "react";
import { ButtonProps } from "../../interfaces/ButtonInterfaces";
import styles from "../../styles/Button.module.css";

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  type = "button",
  disabled = false,
  className,
  styleClass,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${styles.BtnDefault} ${className} ${styleClass}`}
    >
      {children}
    </button>
  );
};

export default Button;
