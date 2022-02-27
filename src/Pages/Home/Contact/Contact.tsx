import Button from 'Components/Button/Button';
import Send from 'Components/Icons/Send';
import PageTitle from 'Components/Text/PageTitle/PageTitle';
import React from 'react';

import './Contact.css';
import footerBgBlob from 'Assets/bgs/footer-blob-bg.svg';
import handMobileImg from 'Assets/bgs/contact-hand-mobile.svg';

function Contact() {
  return (
    <section className="contact-container-outer" id="Contact">
      <img id="contact-hand" src={handMobileImg} alt="pointing hand" />
      <PageTitle text="💬 Lets talk..." />
      <div className="contact-form-container">
        <form>
          <label htmlFor="name">
            Name
            <input type="text" id="name" />
          </label>
          <label htmlFor="email">
            Email
            <input type="text" id="email" />
          </label>
          <label htmlFor="message">
            Message
            <textarea id="message" />
          </label>

          <Button type="action" text="Send" img={<Send />} />
        </form>
      </div>
      <img id="footer-blob" src={footerBgBlob} alt="footer blob background" />
    </section>
  );
}

export default Contact;
