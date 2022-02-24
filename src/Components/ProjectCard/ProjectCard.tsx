import Button from 'Components/Button/Button';
import React from 'react';
import './ProjectCard.css';
import codeSnippetImg from 'Assets/icons/code-snippet.svg';
import checkImg from 'Assets/icons/check.svg';

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
          <Button type="action" text="Code" img={codeSnippetImg} />
          <Button type="action" text="Demo" img={checkImg} />
        </div>
      </div>
    </section>
  );
};

export default ProjectCard;
