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

function Intro() {
  return (
    <section className="intro-container-outer" id="Home">
      <img src={introBgImg} alt="me" />
      <div className="intro-container-inner">
        <div className="intro-info__div">
          <span>Hi 👋,</span>
          <span>I am Matthew</span>
          <p>Frontend Developer</p>
          <img src={underLine} alt="under line" />

          <div className="intro-icon__div">
            <img src={linkedInImg} alt="linkedIn" />
            <img src={githubImg} alt="github" />
          </div>
        </div>

        <img src={meIntro} alt="me" />
        <Button
          text="Contact"
          type="action"
          img={<img src={emailImg} alt="contact" />}
        />
      </div>
    </section>
  );
}

export default Intro;
