import React from 'react';
import classes from './Header.module.css';

const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.heroHeaderContainer}>
        <h1 className={classes.headerHero}>
         Ahmed Eid
        </h1>
        <h2>
          <span>Front End</span> & <span>React Developer</span>
        </h2>
        <div className={classes.headerIcons}>
          <i className="fab fa-html5"></i>
          <i className="fab fa-js-square"></i>
          <i className="fab fa-react"></i>
        </div>
      </div>
    </header>
  );
};

export default Header;
