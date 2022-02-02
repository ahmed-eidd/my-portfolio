import React from 'react';
import classes from './Button.module.css';

const Button = ({ children, link, icon }) => {

  

  return (
    <>
      {link ? (
        <a
          target='_blank'
          rel='noopener noreferrer'
          className={classes.Btn}
          href={link}
        >
          {icon && <i className={icon}></i>}
          <span>{children}</span>
        </a>
      ) : (
        <button className={classes.Btn}>
          {icon && <i className={icon}></i>}
          <span>{children}</span>
        </button>
      )}
    </>
  );
};

export default Button;
