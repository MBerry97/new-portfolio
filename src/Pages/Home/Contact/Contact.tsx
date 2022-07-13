import Button from 'Components/Button/Button';
import Send from 'Components/Icons/Send';
import PageTitle from 'Components/Text/PageTitle/PageTitle';
import React, { useRef, useState } from 'react';

import './Contact.css';
import footerBgBlob from 'Assets/bgs/footer-blob-bg.svg';
import handMobileImg from 'Assets/bgs/contact-hand-mobile.svg';
import ScrollAnimation from 'react-animate-on-scroll';
import sendEmail from 'Helpers/SendEmail';

function Contact() {
  const form = useRef<HTMLFormElement | null>(null);
  const errorStateDefault = {
    name: false,
    email: false,
    message: false,
  };
  const [formError, setFormError] = useState(errorStateDefault);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const { name, email, message } = event.target;

    const isNameError = name.value.length === 0;
    const isEmailError = email.value.length === 0;
    const isMessageError = message.value.length === 0;

    const errorStateDefaultCopy = { ...errorStateDefault };

    if (isNameError) {
      errorStateDefaultCopy.name = true;
    }
    if (isEmailError) {
      errorStateDefaultCopy.email = true;
    }
    if (isMessageError) {
      errorStateDefaultCopy.message = true;
    }

    if (isNameError || isEmailError || isMessageError) {
      setFormError(errorStateDefaultCopy);
      return;
    }

    sendEmail(event, form, setIsSent);
    setFormError(errorStateDefault);
  };

  const { name, email, message } = formError;

  return (
    <section className="contact-container-outer" id="Contact">
      <img id="contact-hand" src={handMobileImg} alt="pointing hand" />
      <PageTitle text="💬 Lets talk..." />
      <div className="contact-form-container">
        <form onSubmit={(e) => handleSubmit(e)} ref={form}>
          <ScrollAnimation animateIn="fadeIn" duration={1} delay={300}>
            <label htmlFor="name">
              Name
              <input
                type="text"
                id="name"
                name="name"
                className={
                  name ? 'contact_name-input--error' : 'contact_name-input'
                }
              />
            </label>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeIn" duration={1} delay={500}>
            <label htmlFor="email">
              Email
              <input
                type="text"
                id="email"
                name="email"
                className={
                  email ? 'contact_email-input--error' : 'contact_email-input'
                }
              />
            </label>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeIn" duration={1} delay={700}>
            <label htmlFor="message">
              Message
              <textarea
                id="message"
                name="message"
                className={
                  message
                    ? 'contact_message-input--error'
                    : 'contact_message-input'
                }
              />
            </label>
          </ScrollAnimation>

          <ScrollAnimation
            animateIn="fadeIn"
            duration={1}
            delay={900}
            offset={50}
          >
            <Button
              type={isSent ? 'submitted' : 'action'}
              text={isSent ? 'Sent' : 'Send'}
              img={<Send />}
              btnType="submit"
            />
          </ScrollAnimation>
        </form>
      </div>
      <img id="footer-blob" src={footerBgBlob} alt="footer blob background" />
    </section>
  );
}

export default Contact;
