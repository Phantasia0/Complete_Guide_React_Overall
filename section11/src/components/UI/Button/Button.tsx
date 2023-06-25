import React, { ReactNode } from "react";
import classes from "./Button.module.css";

type ButtonProps = {
  type?: "button" | "submit" | "reset" | undefined;
  className?: string;
  onClick?: (param: unknown) => void;
  disabled?: boolean;
  children?: ReactNode;
};

const Button: React.FC<ButtonProps> = ({
  type,
  className,
  onClick,
  disabled,
  children,
}) => {
  return (
    <button
      type={type || "button"}
      className={`${classes.button} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
