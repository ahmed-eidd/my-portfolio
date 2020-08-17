import React from 'react';
import classes from './Project.module.css';
import Btn from '../../UI/Button/Button';

const Project = ({ title, description, github, liveDemo,img }) => {
  return (
    <section className={classes.Project}>
      <div className={classes.ProjectImg}>
        <img src={img} alt="Project Screenshot" />
      </div>
      <div>
        <h4 className={classes.ProjectTitle}>{title}</h4>
        <p className={classes.ProjectDes}>{description}</p>
        <div className={classes.ProjectBtns}>
          <a className={[classes.ProjectBtn, classes.github].join(' ')} href={github} target="_blank"><i className="fab fa-github"></i> <span>Github</span> </a>
          <a className={[classes.ProjectBtn, classes.livedemo].join(' ')} href={liveDemo} target="_blank"><i className="fas fa-play"></i><span>Live Demo</span></a>
        </div>
      </div>
    </section>
  );
};

export default Project;
