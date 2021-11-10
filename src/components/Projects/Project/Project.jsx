import React from 'react';
import Button from '../../UI/Button/Button';
import classes from './Project.module.css';

const Project = ({ title, description, github, liveDemo, img }) => {
  return (
    <section className={classes.Project}>
      <div className={classes.ProjectImg}>
        <img src={img} alt='Project Screenshot' />
      </div>
      <div>
        <h4 className={classes.ProjectTitle}>{title}</h4>
        <p className={classes.ProjectDes}>{description}</p>
        <div className={classes.ProjectBtns}>
          <Button link={github} icon='fab fa-github'>
            Github
          </Button>
          <Button link={liveDemo} icon='fas fa-play'>
            Live Demo
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Project;
