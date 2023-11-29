import Button from 'Components/Button/Button';
import React from 'react';
import './ProjectCard.css';
import Checkmark from 'Components/Icons/Checkmark';
import ScrollAnimation from 'react-animate-on-scroll';

type Props = {
  img: string;
  buttonText: string[];
  projectDesc: string;

  demoLink: string;
  title: string;
};

const ProjectCard = ({
  img,
  buttonText,
  projectDesc,

  demoLink,
  title,
}: Props) => {
  const renderInfoButtons = () => {
    return buttonText.map((text) => <Button type="info" text={text} />);
  };
  return (
    <ScrollAnimation
      className="projectCard"
      animateIn="fadeIn"
      duration={1.5}
      animateOnce
    >
      <img src={img} alt="project preview" />
      <div className="projectCard-inner__div">
        <h1>{title}</h1>
        {renderInfoButtons()}
        <p>{projectDesc}</p>
        <div>
          <a href={demoLink} target="_blank" rel="noreferrer">
            <Button type="action" text="Take me there" img={<Checkmark />} />
          </a>
        </div>
      </div>
    </ScrollAnimation>
  );
};

export default ProjectCard;
