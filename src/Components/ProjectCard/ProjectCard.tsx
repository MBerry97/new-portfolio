import Button from 'Components/Button/Button';
import React from 'react';
import './ProjectCard.css';
import Code from 'Components/Icons/Code';
import Checkmark from 'Components/Icons/Checkmark';
import ScrollAnimation from 'react-animate-on-scroll';

type Props = {
  img: string;
  buttonText: string[];
  projectDesc: string;
  codeLink: string;
  demoLink: string;
};

const ProjectCard = ({
  img,
  buttonText,
  projectDesc,
  codeLink,
  demoLink,
}: Props) => {
  const renderInfoButtons = () => {
    return buttonText.map((text) => <Button type="info" text={text} />);
  };
  return (
    <ScrollAnimation className="projectCard" animateIn="fadeIn" duration={1.5}>
      <img src={img} alt="project preview" />
      <div className="projectCard-inner__div">
        <h1>Shortly URL landing page</h1>
        {renderInfoButtons()}
        <p>{projectDesc}</p>
        <div>
          <a href={codeLink} target="_blank" rel="noreferrer">
            <Button type="action" text="Code" img={<Code />} />
          </a>
          <a href={demoLink} target="_blank" rel="noreferrer">
            <Button type="action" text="Demo" img={<Checkmark />} />
          </a>
        </div>
      </div>
    </ScrollAnimation>
  );
};

export default ProjectCard;
