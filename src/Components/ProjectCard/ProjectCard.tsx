import Button from 'Components/Button/Button';
import React from 'react';
import './ProjectCard.css';
import Code from 'Components/Icons/Code';
import Checkmark from 'Components/Icons/Checkmark';

type Props = {
  img: string;
  buttonText: string[];
  projectDesc: string;
};

const ProjectCard = ({ img, buttonText, projectDesc }: Props) => {
  const renderInfoButtons = () => {
    return buttonText.map((text) => <Button type="info" text={text} />);
  };
  return (
    <section className="projectCard">
      <img src={img} alt="project preview" />
      <div className="projectCard-inner__div">
        <h1>Shortly URL landing page</h1>
        {renderInfoButtons()}
        <p>{projectDesc}</p>
        <div>
          <Button type="action" text="Code" img={<Code />} />
          <Button type="action" text="Demo" img={<Checkmark />} />
        </div>
      </div>
    </section>
  );
};

export default ProjectCard;
