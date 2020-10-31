import cn from 'classnames';
import { InputHTMLAttributes } from 'react';
import s from './Input.module.css';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  onChange?: (...args: any[]) => any;
  height?: 'large' | 'slim';
  variant?: 'regular' | 'outline';
}

const Input = ({
  className,
  onChange,
  variant = 'regular',
  height = 'slim',
  ...rest
}: InputProps) => {
  const rootClassName = cn(
    s.root,
    {
      // tailwind height classes
      'h-16': height === 'large', // 4rem
      'h-12': height === 'slim', // 3rem
      [s.regular]: variant === 'regular',
      [s.outline]: variant === 'outline',
    },
    className
  );

  const handleOnChange = (e: any) => {
    if (onChange) {
      onChange(e.target.value);
    }
    return null;
  };

  return (
    <input
      className={rootClassName}
      onChange={handleOnChange}
      autoComplete="off"
      autoCorrect="off"
      autoCapitalize="off"
      spellCheck="false"
      {...rest}
    />
  );
};

export default Input;
