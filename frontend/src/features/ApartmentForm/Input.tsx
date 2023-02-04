import React, { FC, InputHTMLAttributes } from 'react';

import classes from './Input.module.css';

interface InputProps extends Partial<InputHTMLAttributes<HTMLInputElement>> {
  title: string;
  textArea?: boolean;
}

const Input: FC<InputProps> = (props) => {
  return (
    <div className={classes.container}>
      <label htmlFor={props.id} className={classes.label}>
        {props.title}
      </label>
      {props.textArea ? (
        <textarea
          className={classes.input}
          id={props.id}
          name={props.name}
          placeholder={props.placeholder}
          disabled={props.disabled}
        />
      ) : (
        <input {...props} className={classes.input} />
      )}
    </div>
  );
};

export default Input;
