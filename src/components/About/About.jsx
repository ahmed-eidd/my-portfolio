import React from 'react';
import classes from './About.module.css';

const About = () => {
  return (
    <section className={classes.About} id="about">
      <div className={classes.AboutMe}>
        <div className={classes.AboutMeText}>
          <h4>
            Hi! I'm <span>Ahmed</span>{' '}
          </h4>
          <p>
            My name is Ahmed Eid a Front End Developer based in Cairo,Egypt.
            Like many other people, I enjoy spending my free time increasing my
            knowledge of Web Development and building new and challenging
            projects using React,Redux,Gatsby and many Front end Technologies
          </p>
        </div>
        <div className={classes.AboutMeSkills}>
          <h3>Skills</h3>
          <ul>
            <li>
              <i class="fab fa-html5"></i> HTML
            </li>
            <li>
              <i class="fab fa-css3-alt"></i> CSS
            </li>
            <li>
              <i class="fab fa-sass"></i> Sass
            </li>
            <li>
              <i class="fab fa-js-square"></i> Javascript
            </li>
            <li>
              <i class="fab fa-react"></i> React
            </li>
            <li>
              <i class="fas fa-file-code"></i> Redux
            </li>
          </ul>
        </div>
      </div>
      <div className={classes.ContactMe}>
        <h3>Contact Me</h3>

        <ul className={classes.ContactMeList}>
          <li className={classes.ContactMeItem}>
            <i class="fas fa-envelope"></i>
            <p>Ahmedeid.webdev@gmail.com</p>
          </li>
          <li className={classes.ContactMeItem}>
            {' '}
            <i class="fab fa-github"></i>{' '}
            <a target="_blank" href="https://github.com/ahmed-eidd">
              Github
            </a>
          </li>
          <li className={classes.ContactMeItem}>
            <i class="fab fa-linkedin"></i>{' '}
            <a target="_blank" href="https://www.linkedin.com/in/ahmed-eidd/">
              Linkedin
            </a>
          </li>
          <li className={classes.ContactMeItem}>
            <i class="far fa-file-alt"></i>
            <a
              target="_blank"
              href="https://drive.google.com/file/d/1FgqB5RtutmHzYG1VYXbArig2YzY7q6WY/view?usp=sharing"
            >
              Resume
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
