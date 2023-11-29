import ProjectCard from 'Components/ProjectCard/ProjectCard';
import React from 'react';
import './Projects.css';
import shortlyUrlImg from 'Assets/projects/url-desktop-preview.png';
import sneakerImg from 'Assets/projects/product-desktop-preview.jpg';
import lixuImg from 'Assets/projects/lixu-preview.png';
import atkinsonImg from 'Assets/projects/atkinson-preview.png';
import PageTitle from 'Components/Text/PageTitle/PageTitle';
import bgImg from 'Assets/bgs/yellow-bg.svg';

const Projects = () => {
  return (
    <section className="projects-container-outer" id="Projects">
      <PageTitle text="💻 " />
      <img src={bgImg} alt="background blob" />
      <div className="projects-container-inner">
        <ProjectCard
          img={lixuImg}
          buttonText={['Next', 'React', 'TypeScript', 'SCSS']}
          projectDesc="A modern, sleek website for a digital agency, featuring a responsive design and a intuitive UI to drive client engagement and branding. All rigorously tested for a smooth performance across various devices and browsers."
          demoLink="https://lixu.digital"
          title="Lixu Digital"
        />
        <ProjectCard
          img={atkinsonImg}
          buttonText={['Next', 'React', 'TypeScript', 'SCSS']}
          projectDesc="A webstie build for a civil engineering company, featuring a robust, user-friendly interface. Highlights include company information, detailed service descriptions, and real work examples. A seamless experience for showcasing their expertise and facilitating client connections."
          demoLink="https://atkinsoncivils.co.uk"
          title="Atkinson Civil Engineering"
        />
        <ProjectCard
          img={shortlyUrlImg}
          buttonText={['React', 'HTML', 'CSS', 'Git']}
          projectDesc="A personal project built towards a professional design. Intergrating with an API it allows you to shorten any link. Built in React, HTML, CSS and tested with React testing library."
          demoLink="https://url-shortner.netlify.app"
          title="Shortly URL landing page"
        />
        <ProjectCard
          img={sneakerImg}
          buttonText={['React', 'TypeScript', 'HTML', 'SCSS', 'Git']}
          projectDesc="A personal project where you can inspect the product in multiple views and add your specified quantity to the cart. Built in React, TypeScript, HTML, Sass and tested with React testing library."
          demoLink="https://sneaker-product-page.netlify.app"
          title="Sneakers checkout"
        />
      </div>
    </section>
  );
};

export default Projects;
