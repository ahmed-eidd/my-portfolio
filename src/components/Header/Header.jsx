import React, { useEffect, useRef } from 'react';
import { TimelineLite, Power1 } from 'gsap';
import classes from './Header.module.css';
import Btn from '../UI/Button/Button';
import { Link } from 'react-scroll';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Waves from '../Waves/Waves';
import MoonSvg from './MoonSvg';

// eslint-disable-line

const Header = () => {
  let slid1 = useRef(null);
  let slid2 = useRef(null);
  let header = useRef(null);
  let tl = new TimelineLite();
  useEffect(() => {
    Aos.init({
      duration: 1800,
    });

    tl.to(slid1, { duration: 1, css: { y: '-100%', ease: Power1.easeOUt } });
    tl.to(
      slid2,

      { duration: 1, css: { y: '-100%', ease: Power1.easeOut } },
      0.3
    );
    tl.to(
      header,

      { duration: 0.5, css: { opacity: '1', ease: Power1.easeIn } },
      1
    );
  }, [tl]);
  return (
    <React.Fragment>
      <header id='home' className={classes.header}>
        <Waves />
        <MoonSvg />
        <div
          className={classes.heroHeaderContainer}
          ref={(el) => (header = el)}
        >
          <h1
            data-aos='fade-up'
            className={classes.headerHero}
            data-aos-duration='2000'
          >
            Hi,
          </h1>
          <h1
            data-aos='fade-up'
            data-aos-duration='2400'
            className={classes.headerHero}
          >
            I'm <span className={classes.purple}> Ahmed</span> <span className={classes.green}>Eid</span>
          </h1>
          <h2 data-aos='fade-up' data-aos-duration='2800'>
            <span>Front End</span> & <span>React Developer</span>
          </h2>
          <div className={classes.headerIcons}>
            <Btn>
              <Link to='about' smooth={true} duration={600} offset={400}>
                Contact Me
              </Link>
            </Btn>
            <i className='fab fa-html5'></i>
            <i className='fab fa-js-square'></i>
            <i className='fab fa-react'></i>
          </div>
        </div>
      </header>{' '}
      <div className={classes.slider1} ref={(el) => (slid1 = el)}>
        <h1>Welcome</h1>
      </div>
      <div className={classes.slider2} ref={(el) => (slid2 = el)}></div>
    </React.Fragment>
  );
};

export default Header;
