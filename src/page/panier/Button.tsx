import React, { FC, MouseEvent } from "react";

interface ButtonProps {
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
  children: React.ReactNode;
}


const Button: FC<ButtonProps> = ({ onClick, children }) => {
    return (
      <button onClick={onClick} className="button">
        {children}
      </button>
    );
  };
  
  export default Button;
  