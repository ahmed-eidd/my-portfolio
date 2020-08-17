import React from 'react';
import classes from './Header.module.css';
import Btn from '../UI/Button/Button';
import { Link} from 'react-scroll'

const Header = () => {
  return (
    <header id='home' className={classes.header}>
      {' '}
      <div className={classes.heroHeaderContainer}>
        <h1 className={classes.headerHero}>Hi,</h1>
        <h1 className={classes.headerHero}>I'm <span> Ahmed Eid</span></h1>
        <h2>
          <span>Front End</span> & <span>React Developer</span>
        </h2>
        <div className={classes.headerIcons}>
          <Btn><Link to='about' smooth={true} duration={600}>Contact Me</Link></Btn>
          <i className="fab fa-html5"></i>
          <i className="fab fa-js-square"></i>
          <i className="fab fa-react"></i>
        </div>
      </div>
    </header>
  );
};

export default Header;
