import ProjectCard from 'Components/ProjectCard/ProjectCard';
import React from 'react';
import './Projects.css';
import shortlyUrlImg from 'Assets/projects/url-desktop-preview.png';
import sneakerImg from 'Assets/projects/product-desktop-preview.jpg';

const Projects = () => {
  return (
    <section className="projects-container-outer" id="Projects">
      <div className="projects-container-inner">
        Projects
        <ProjectCard
          img={shortlyUrlImg}
          buttonText={['React', 'HTML', 'CSS', 'Git']}
          projectDesc="This project required me to build a fully responsive landing page to the figma designs provided. Intergrating with an API it allows you to shorten any link. Built in React, HTML, CSS and tested with React testing library."
        />
        <ProjectCard
          img={sneakerImg}
          buttonText={['React', 'TypeScript', 'HTML', 'SCSS', 'Git']}
          projectDesc="This project required me to build a fully responsive landing page to the figma designs provided. A user can inspect the product in multiple views and add their specified quantity to the cart. Built in React, TypeScript, HTML, Sass and tested with React testing library."
        />
      </div>
    </section>
  );
};

export default Projects;
