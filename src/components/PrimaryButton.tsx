import React from 'react';

interface Props {
  children: React.ReactNode;
  onClick: () => void;
  variant?: string;
  size?: string;
  disabled?: boolean;
}

const PrimaryButton: React.FC<Props> = ({
  children,
  onClick,
  variant = 'default',
  size = 'md',
  disabled,
  ...rest
}) => (
  <button
    className={`btn ${variant} ${size} ${disabled ? 'disabled' : ''}`}
    onClick={onClick}
    disabled={disabled}
    type="button"
    {...rest}
  >
    {children}
  </button>
);

export default PrimaryButton;
