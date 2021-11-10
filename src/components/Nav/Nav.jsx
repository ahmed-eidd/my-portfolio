import React, { useEffect, useState, useRef } from 'react';
import { TimelineLite } from 'gsap';
import classes from './Nav.module.css';
import { Link } from 'react-scroll';

const Nav = () => {
  const [NavClass, setNavClass] = useState(classes.Nav);

  let navRef = useRef(null);
  let tl = new TimelineLite();

  useEffect(() => {
    document.addEventListener('scroll', () => {
      if (window.scrollY > 0) {
        setNavClass([classes.Nav, classes.Navsticky].join(' '));
      } else {
        setNavClass(classes.Nav);
      }
    });

    tl.to(navRef, { duration: 1, css: { opacity: 1 } });
  }, [tl]);

  const scroll = () => {
    console.log(0);
  };

  return (
    <ul className={NavClass} onScroll={scroll} ref={(el) => (navRef = el)}>
      <li className={classes.NavItem}>
        <Link
          className={classes.NavLink}
          to='home'
          smooth={true}
          duration={500}
          activeClass={classes.active}
        >
          Home
        </Link>
      </li>
      <li className={classes.NavItem}>
        <Link
          className={classes.NavLink}
          to='projects'
          smooth={true}
          duration={600}
          offset={-50}
          activeClass={classes.active}
        >
          Projects
        </Link>
      </li>
      <li className={classes.NavItem}>
        <Link
          offset={-50}
          className={classes.NavLink}
          to='about'
          smooth={true}
          duration={600}
          activeClass={classes.active}
        >
          About
        </Link>
      </li>
    </ul>
  );
};

export default Nav;
