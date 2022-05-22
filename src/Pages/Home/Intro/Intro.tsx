/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import './Intro.css';
import introBgImg from 'Assets/bgs/intro-blob-bg.svg';
import meIntro from 'Assets/me/hello_undraw.svg';
import underLine from 'Assets/bgs/Line 1.svg';
import Button from 'Components/Button/Button';
import ScrollAnimation from 'react-animate-on-scroll';
import Send from 'Components/Icons/Send';
import { Link } from 'react-scroll';
import LinkedIn from 'Components/Icons/LinkedIn';
import Github from 'Components/Icons/Github';
import { motion } from 'framer-motion';

function Intro() {
  const iconVariant = {
    animate: {
      scale: [1, 1.1, 1],
      rotate: [0, 15, -15, 0],
      transition: { repeat: Infinity, duration: 0.8 },
    },
  };

  return (
    <section className="intro-container-outer" id="Home">
      <img src={introBgImg} alt="blob bg" />
      <div className="intro-container-inner">
        <div className="intro-info__div">
          <span>
            <ScrollAnimation animateIn="fadeInLeft">Hi 👋,</ScrollAnimation>
          </span>
          <span>
            <ScrollAnimation animateIn="fadeInLeft" delay={500}>
              I am{' '}
              <span className="intro-info__span-outline-black">Matthew</span>
            </ScrollAnimation>
          </span>

          <p>
            <ScrollAnimation animateIn="fadeInLeft" delay={1000}>
              Frontend{' '}
              <span className="intro-info__span-outline-blue">Developer</span>
              <img
                src={underLine}
                alt="under line"
                className="underLine__img"
              />
            </ScrollAnimation>
          </p>
          <ScrollAnimation
            animateIn="fadeInLeft"
            delay={1000}
            className="intro-icon__div"
          >
            <motion.a
              variants={iconVariant}
              animate="animate"
              href="https://www.linkedin.com/in/matthew-berry-a30629174/"
              target="_blank"
            >
              <LinkedIn />
            </motion.a>

            <motion.a
              variants={iconVariant}
              animate="animate"
              href="https://github.com/MBerry97"
              target="_blank"
            >
              <Github />
            </motion.a>
          </ScrollAnimation>
        </div>

        <div className="intro-contact__div">
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
          <ScrollAnimation
            animateIn="fadeInDown"
            delay={2000}
            className="intro__img"
            offset={0}
          >
            <img src={meIntro} alt="me" />
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}

export default Intro;
