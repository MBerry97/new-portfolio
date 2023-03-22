import React from 'react';
import './PageTitle.css';
import ScrollAnimation from 'react-animate-on-scroll';

type Props = {
  text: string;
};

const PageTitle = ({ text }: Props) => {
  return (
    <ScrollAnimation animateIn="fadeIn" duration={1} animateOnce>
      <h1 className="pageTitle">{text}</h1>
    </ScrollAnimation>
  );
};

export default PageTitle;
