import React from 'react';
import classes from './Button.module.css';

const Button = ({children, link}) => {
  return (
    <a className={classes.Btn} href={link}>
     <span>{children}</span> 
    </a>
  )
}

export default Button;