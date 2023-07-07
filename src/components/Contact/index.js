import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';



const Contact = ({ text }) => {

  const { title, description, form } = text;

  const handleSubmit = (values) => {
    // Aquí puedes agregar la lógica para enviar el formulario
    console.log(form);
  };

  return (
    <section className="contact">
      <div className="container">
        <div className="contact__content">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
        <div className="contact__form">
          <div class="contact__form-bg"></div>
          <Formik
            initialValues={{ nombre: '', correo: '', mensaje: '' }}
            onSubmit={handleSubmit}

          >
            <Form
              className="form">
              {/* Agrega tus campos de formulario utilizando el componente Field */}
              <div className="input">
                <Field type="text" id="nombre" name="nombre" placeholder={form.name} />
                <ErrorMessage name="nombre" component="div" />
              </div>

              <div className="input">
                <Field type="email" id="correo" name="correo" placeholder={form.email} />
                <ErrorMessage name="correo" component="div" />
              </div>

              <div className="input">
                <Field as="textarea" id="mensaje" name="mensaje" placeholder={form.message} />
                <ErrorMessage name="mensaje" component="div" />
              </div>

              <button className='submitButton' type="submit">{form.button}</button>
            </Form>
          </Formik>
        </div>



      </div>
    </section>
  );
};

export default Contact;
