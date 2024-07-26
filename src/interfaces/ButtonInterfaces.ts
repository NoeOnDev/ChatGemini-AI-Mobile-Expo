import React from "react";

export interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    type?: "button" | "submit" | "reset";
    disabled?: boolean;
    className?: string;
    styleClass?: string;
}
