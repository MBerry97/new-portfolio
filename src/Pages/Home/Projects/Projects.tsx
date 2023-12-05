import ProjectCard from 'Components/ProjectCard/ProjectCard';
import React from 'react';
import './Projects.css';
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
          buttonText={['Next', 'TypeScript', 'SCSS']}
          projectDesc="A modern, sleek website for a digital agency, featuring a responsive design and a intuitive UI to drive client engagement and branding. All rigorously tested for a smooth performance across various devices and browsers."
          demoLink="https://lixu.digital"
          title="Lixu Digital"
        />
        <ProjectCard
          img={atkinsonImg}
          buttonText={['Next', 'TypeScript', 'Tailwind']}
          projectDesc="A webstie build for a civil engineering company, featuring a robust, user-friendly interface. Highlights include company information, detailed service descriptions, and real work examples. A seamless experience for showcasing their expertise and facilitating client connections."
          demoLink="https://atkinsoncivils.co.uk"
          title="Atkinson Civil Engineering"
        />
      </div>
    </section>
  );
};

export default Projects;
