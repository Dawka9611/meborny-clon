import React from 'react';

interface ButtonProps {
  text?: string;
  onClick?: Function;
  className?: string; // Accept className as a prop
}

const Button: React.FC<ButtonProps> = ({ text, onClick, className }) => {
  // Define default classes for the button
  const defaultClasses = 'p-1 px-2 rounded-md text-white';

  // Combine the default classes with the provided className, if any
  const buttonClassName = className ? `${defaultClasses} ${className}` : defaultClasses;

  return (
    <div onClick={() => onClick && onClick()} className={buttonClassName}>
      {text}
    </div>
  );
};

export default Button;