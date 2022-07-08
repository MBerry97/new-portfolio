import emailjs from '@emailjs/browser';

const sendEmail = (event: any, form: any) => {
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
  event.currentTarget.reset();
};

export default sendEmail;
