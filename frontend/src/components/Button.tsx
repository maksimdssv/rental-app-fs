import React, { FC } from 'react';

import classes from './Button.module.css';

interface ButtonProps {
  type: 'submit' | 'delete';
  action?: (evt: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  disabled?: boolean;
}

const Button: FC<ButtonProps> = ({ type, action, disabled }) => {
  return (
    <button
      className={`${classes.button} ${classes[type]}`}
      type={type === 'submit' ? type : 'button'}
      onClick={action}
      disabled={disabled}
    >
      {type[0].toUpperCase() + type.slice(1, type.length)}
    </button>
  );
};

export default Button;
