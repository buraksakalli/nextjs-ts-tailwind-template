import React from "react";
import { ButtonProps } from "./Button.types";

export const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return <button {...props}>{children}</button>;
};

export default Button;
