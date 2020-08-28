import React, { useState, useEffect } from 'react';
import classes from './Projects.module.css';
import Project from './Project/Project';
import MovieProject from '../../assests/Projects/movieBoxProd.png';
import HSProject from '../../assests/Projects/background.jpg';
import IMProject from '../../assests/Projects/ibrahim-porfolio.jpg';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Projects = () => {
  useEffect(() => {
    Aos.init({
      duration: 1800,
    });
  }, []);
  const [projects, setProjects] = useState([
    {
      title: 'Movie Box',
      des: 'React, React Router, Redux',
      img: MovieProject,
      github: 'https://github.com/ahmed-eidd/movie-app',
      livedemo: 'https://movieboxx.netlify.app/',
    },
    {
      title: 'Hearthstone App',
      des: 'React, React Router',
      img: HSProject,
      github: 'https://github.com/ahmed-eidd/Hearthstone-app',
      livedemo: 'https://5f39e899fded430b73946cdb--hearthstoneapp.netlify.app/',
    },
    {
      title: 'Photographer Portfolio',
      des: 'Html, Sass, Js',
      img: IMProject,
      github: 'https://github.com/ahmed-eidd/Ibrahim-Portfoliop',
      livedemo: 'https://heuristic-mayer-87f112.netlify.app//',
    },
  ]);

  return (
    <div
      data-aos="fade-up"
      data-aos-once="true"
      data-aos-easing="ease-in-out"
      className={classes.ProjectsContainer}
      id="projects"
    >
      <h2 className={classes.title}>My Projects</h2>
      <div className={classes.Projects}>
        {projects.map((pro) => (
          <Project
            title={pro.title}
            description={pro.des}
            img={pro.img}
            github={pro.github}
            liveDemo={pro.livedemo}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
