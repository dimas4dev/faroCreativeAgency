import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = ({ text }) => {
  const { title, description, form } = text;
  const EMAILSERVICE = process.env.EMAILSERVICE;
  const EMAILTEMPLATE = process.env.EMAILTEMPLATE;
  const EMAILKEY = process.env.EMAILKEY;

  const [templateParams, setTemplateParams] = useState({ to_name: '', from_name: '', message: '' });

  const handleChange = (e) => {
    setTemplateParams({ ...templateParams, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(templateParams);
    emailjs.send(EMAILSERVICE, EMAILTEMPLATE, templateParams, EMAILKEY)
      .then((result) => {
        console.log(result.text);
      })
      .catch((error) => {
        console.log(error.text);
      });
  };

  return (
    <section className="contact">
      <div className="container">
        <div className="contact__content">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
        <div className="contact__form">
          <div className="contact__form-bg"></div>
          <form className='form' onSubmit={handleSubmit}>
            <div className="input">
              <input type="text" id="nombre" name="to_name" placeholder={form.name} onChange={handleChange} />
            </div>
            <div className="input">
              <input type="email" id="correo" name="from_name" placeholder={form.email} onChange={handleChange} />
            </div>
            <div className="input">
              <textarea id="mensaje" name="message" placeholder={form.message} onChange={handleChange}></textarea>
            </div>
            <button className='submitButton' type="submit">{form.button}</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
