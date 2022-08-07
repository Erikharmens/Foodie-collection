import React from 'react';

interface Props
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: React.ReactNode;
  variant: string;
  size: string;
}

const Button: React.FC<Props> = ({ variant, size, children, ...props }) => (
  <button
    className={`btn ${variant} ${size} shadow-md `}
    type="button"
    {...props}
  >
    {children}
  </button>
);

export default Button;
