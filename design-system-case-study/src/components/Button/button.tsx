import { ark } from '@ark-ui/react';
import './button.css';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'accent' | 'secondary';
  disabled?: boolean;
  onClick?: () => void;
}

export const Button = ({
  children,
  variant = 'primary',
  disabled = false,
  onClick,
}: ButtonProps) => {
  return (
    <ark.button
      className={`ds-button variant-${variant}`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </ark.button>
  );
};