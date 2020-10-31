import { forwardRef, ButtonHTMLAttributes, useRef } from 'react';
import cn from 'classnames';
import s from './Button.module.css';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  className?: string;
  variant?: 'regular' | 'outline';
  type?: 'submit' | 'reset' | 'button';
  loading?: boolean;
  disabled?: boolean;
  onClick?: () => void;
}

const Button = ({
  href,
  className,
  variant = 'regular',
  type = 'button',
  loading = false,
  disabled = false,
  onClick,
  children,
}: ButtonProps) => {
  const rootClassname = cn(
    s.root,
    {
      [s.regular]: variant === 'regular',
      [s.outline]: variant === 'outline',
      [s.loading]: loading,
      [s.disabled]: disabled,
    },
    className
  );

  return (
    <button
      className={rootClassname}
      disabled={disabled}
      onClick={onClick}
      //   @tslint-ignore
      type="button"
    >
      {loading && (
        <svg
          className="animate-spin -ml-1 mr-3 h-5 w-5 text-dark"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      )}
      {children}
    </button>
  );
};

export default Button;
