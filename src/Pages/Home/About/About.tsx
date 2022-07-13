import PageTitle from 'Components/Text/PageTitle/PageTitle';
import React from 'react';
import './About.css';
import aboutImg from 'Assets/me/me-about.jpg';
import Button from 'Components/Button/Button';
import aboutBgHand from 'Assets/bgs/about-hand-bg.png';
import ScrollAnimation from 'react-animate-on-scroll';

function About() {
  const skills = [
    'React',
    'TypeScript',
    'JavaScript',
    'HTML',
    'SCSS',
    'CSS',
    'Git',
    'Testing',
    'Figma',
    'NPM',
    'UI/UX',
  ];

  const renderSkills = () => {
    return skills.map((skill) => <Button type="info" text={skill} />);
  };

  return (
    <section className="about-container-outer" id="About">
      <img src={aboutBgHand} alt="waving hand" />
      <PageTitle text="🧑🏻 About" />
      <ScrollAnimation className="about-container-inner" animateIn="fadeInLeft">
        <span>Nice to meet you,</span>
        <span id="about-name__span">I am Matt Berry.</span>
        <p>
          Working full time in React, Typescript and SCSS, building the front
          end of a communication platform and aiding with innovative technical
          solutions for various forms of remote communication.
        </p>
        <img src={aboutImg} alt="me" />

        <p>
          Frontend is my true passion and I really enjoy the whole process of
          recieving UIs, from the first brainstorming, wireframes, mockups,
          design, all the way until the final product.
        </p>
      </ScrollAnimation>

      <ScrollAnimation className="about-skills__div" animateIn="fadeInLeft">
        <span>My experience includes but not limited to</span>
        <div>{renderSkills()}</div>
      </ScrollAnimation>
    </section>
  );
}

export default About;
