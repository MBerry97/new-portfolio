/* eslint-disable @typescript-eslint/no-unused-vars */
import NavBar from 'Components/NavBar/NavBar';
import React from 'react';
import './Intro.css';
import introBgImg from 'Assets/bgs/intro-blob-bg.svg';
import meIntro from 'Assets/me/hello_undraw.svg';
import underLine from 'Assets/bgs/Line 1.svg';
import linkedInImg from 'Assets/icons/linkedin.svg';
import githubImg from 'Assets/icons/github.svg';
import Button from 'Components/Button/Button';
import emailImg from 'Assets/icons/email.png';
import ScrollAnimation from 'react-animate-on-scroll';
import Send from 'Components/Icons/Send';
import { Link } from 'react-scroll';

function Intro() {
  return (
    <section className="intro-container-outer" id="Home">
      <img src={introBgImg} alt="me" />
      <div className="intro-container-inner">
        <div className="intro-info__div">
          <span>
            <ScrollAnimation animateIn="fadeInLeft">Hi 👋,</ScrollAnimation>
          </span>
          <span>
            <ScrollAnimation animateIn="fadeInLeft" delay={500}>
              I am Matthew
            </ScrollAnimation>
          </span>

          <p>
            <ScrollAnimation animateIn="fadeInLeft" delay={1000}>
              Frontend Developer
              <img
                src={underLine}
                alt="under line"
                className="underLine__img"
              />
            </ScrollAnimation>
          </p>
          <ScrollAnimation
            animateIn="fadeInLeft"
            delay={1500}
            className="intro-icon__div"
          >
            <img src={linkedInImg} alt="linkedIn" />
            <img src={githubImg} alt="github" />
          </ScrollAnimation>
        </div>

        <ScrollAnimation
          animateIn="fadeInDown"
          delay={2000}
          className="intro__img"
          offset={0}
        >
          <img src={meIntro} alt="me" />
        </ScrollAnimation>

        <ScrollAnimation
          animateIn="fadeInDown"
          delay={2000}
          className="intro-contact__btn"
          offset={0}
        >
          <Link to="Contact" smooth offset={-82}>
            <Button text="Contact" type="action" img={<Send />} />
          </Link>
        </ScrollAnimation>
      </div>
    </section>
  );
}

export default Intro;
