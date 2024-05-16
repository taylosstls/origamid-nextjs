import React, { ComponentProps } from 'react';

interface ButtonProps extends ComponentProps<'button'> {
  children: string
}

const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <button {...props} className='button'>
      {children}
    </button>
  );
};

export default Button;
