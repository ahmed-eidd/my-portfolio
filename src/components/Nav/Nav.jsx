import React from 'react';
import classes from './Nav.module.css';

const Nav = () => {
  return (
    <ul className={classes.Nav}>
      <li className={classes.NavItem}>
        <a href="" className={classes.NavLink}>Home</a>
      </li>
      <li className={classes.NavItem}>
        <a href="" className={classes.NavLink}>Projects</a>
      </li>
      <li className={classes.NavItem}>
        <a href="" className={classes.NavLink}>About</a>
      </li>
    </ul>
  );
};

export default Nav;
