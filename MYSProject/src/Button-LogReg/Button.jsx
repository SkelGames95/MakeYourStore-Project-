import React from 'react';
import classes from './ButtonLogReg.module.scss';

const Button = ({ onClick, label, className, height }) => {
  return (
    <button className={`${classes.button} ${className}`} onClick={onClick} style={{height: height}}>
      {label}
    </button>
  );
};

export default Button;
