import React from 'react';
import classes from './ButtonLogReg.module.scss';

const Button = ({ onClick, label, className }) => {
  return (
    <button className={`${classes.button} ${className}`} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
