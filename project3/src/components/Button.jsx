// src/components/Button.js
import React from 'react';

const Button = ({ variant = 'primary', className = '', children, ...props }) => {
  const baseStyles = "px-4 py-2 rounded focus:outline-none focus:ring";
  const variantStyles = {
    primary: "bg-blue-500 hover:bg-blue-700 text-white",
    secondary: "bg-gray-500 hover:bg-gray-700 text-white",
    success: "bg-green-500 hover:bg-green-700 text-white",
    danger: "bg-red-500 hover:bg-red-700 text-white",
  };

  const classes = `${baseStyles} ${variantStyles[variant]} ${className}`;

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};

export default Button;
