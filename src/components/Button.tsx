import React from 'react';

interface Props {
  border: string;
  color: string;
  children: React.ReactNode;
  height: string;
  onClick: () => void;
  radius: string;
  width: string;
  backgroundColor: string;
}

const Button: React.FC<Props> = ({
  border,
  color,
  children,
  height,
  onClick,
  radius,
  width,
  backgroundColor,
}) => {
  return (
    <button
      onClick={onClick}
      style={{
        color,
        border,
        borderRadius: radius,
        height,
        width,
        backgroundColor,
      }}
    >
      {children}
    </button>
  );
};

export default Button;
