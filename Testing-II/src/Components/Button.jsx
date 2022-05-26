import React from "react";
import "./btn.css";
const Button = ({ variant, colorScheme, onClick, children }) => {
  return (
    <button
    data-testid="cButton"
      onClick={onClick}
      className={`btn ${colorScheme || "red"} ${variant || "ghost"}`}
    >
      {children}
    </button>
  );
};

export default Button;
