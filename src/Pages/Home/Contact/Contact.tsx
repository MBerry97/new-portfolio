/* eslint-disable react/destructuring-assignment */
import Button from 'Components/Button/Button';
import Send from 'Components/Icons/Send';
import PageTitle from 'Components/Text/PageTitle/PageTitle';
import React, { useRef } from 'react';

import './Contact.css';
import footerBgBlob from 'Assets/bgs/footer-blob-bg.svg';
import handMobileImg from 'Assets/bgs/contact-hand-mobile.svg';
import ScrollAnimation from 'react-animate-on-scroll';
import emailjs from '@emailjs/browser';

function Contact() {
  const form: any = useRef(null);
  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_c1gnhxf',
        'template_nkhih5k',
        form.current,
        'jhlRlHVwGoCV-0Vpb',
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        },
      );
    e.target.reset();
  };
  return (
    <section className="contact-container-outer" id="Contact">
      <img id="contact-hand" src={handMobileImg} alt="pointing hand" />
      <PageTitle text="💬 Lets talk..." />
      <div className="contact-form-container">
        <form onSubmit={sendEmail} ref={form}>
          <ScrollAnimation animateIn="fadeIn" duration={1} delay={300}>
            <label htmlFor="name">
              Name
              <input type="text" id="name" name="name" />
            </label>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeIn" duration={1} delay={500}>
            <label htmlFor="email">
              Email
              <input type="text" id="email" name="email" />
            </label>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeIn" duration={1} delay={700}>
            <label htmlFor="message">
              Message
              <textarea id="message" name="message" />
            </label>
          </ScrollAnimation>

          <ScrollAnimation
            animateIn="fadeIn"
            duration={1}
            delay={900}
            offset={50}
          >
            <Button type="action" text="Send" img={<Send />} btnType="submit" />
          </ScrollAnimation>
        </form>
      </div>
      <img id="footer-blob" src={footerBgBlob} alt="footer blob background" />
    </section>
  );
}

export default Contact;
