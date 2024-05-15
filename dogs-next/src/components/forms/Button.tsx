import React, { ComponentProps } from 'react';
import styles from './Button.module.css';

interface ButtonProps extends ComponentProps<'button'> {
  children: string
}

const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <button {...props} className={styles.button}>
      {children}
    </button>
  );
};

export default Button;
