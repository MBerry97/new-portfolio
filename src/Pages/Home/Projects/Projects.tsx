import ProjectCard from 'Components/ProjectCard/ProjectCard';
import React from 'react';
import './Projects.css';
import shortlyUrlImg from 'Assets/projects/url-desktop-preview.png';
import sneakerImg from 'Assets/projects/product-desktop-preview.jpg';
import PageTitle from 'Components/Text/PageTitle/PageTitle';
import bgImg from 'Assets/bgs/yellow-bg.svg';

const Projects = () => {
  return (
    <section className="projects-container-outer" id="Projects">
      <PageTitle text="💻 Projects" />
      <img src={bgImg} alt="background blob" />
      <div className="projects-container-inner">
        <ProjectCard
          img={shortlyUrlImg}
          buttonText={['React', 'HTML', 'CSS', 'Git']}
          projectDesc="A fully responsive landing page built towards a professional design. Intergrating with an API it allows you to shorten any link. Built in React, HTML, CSS and tested with React testing library."
          codeLink="https://github.com/MBerry97/url-shortener"
          demoLink="https://url-shortner.netlify.app"
          title="Shortly URL landing page"
        />
        <ProjectCard
          img={sneakerImg}
          buttonText={['React', 'TypeScript', 'HTML', 'SCSS', 'Git']}
          projectDesc="A fully responsive fluid checkout page. You can inspect the product in multiple views and add your specified quantity to the cart. Built in React, TypeScript, HTML, Sass and tested with React testing library."
          codeLink="https://github.com/MBerry97/product-page"
          demoLink="https://sneaker-product-page.netlify.app"
          title="Sneakers checkout"
        />
      </div>
    </section>
  );
};

export default Projects;
