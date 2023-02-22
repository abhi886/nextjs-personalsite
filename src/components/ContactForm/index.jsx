/* eslint-disable no-shadow */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Formik, Form, useField } from 'formik';
import * as Yup from 'yup';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// variables for sending email

const serviceID = 'service_x4bdpt8';
const templateID = 'template_ID';
const userID = 'user_5EWcC0NChoVOGMUlk0edf';

// eslint-disable-next-line react/prop-types
function MyTextInput({ label, ...props }) {
  const [field, meta] = useField(props);
  return (
    <div className="grid gird-cols-1">
      <div className="pb-3">
        <label
          className="dark:text-personal_blue-textParagraph font-semibold"
          // eslint-disable-next-line react/prop-types
          htmlFor={props.id || props.name}
        >
          {label}
        </label>
      </div>
      <div className="tems-center border border-black py-2 dark:border-personal_blue-textParagraph rounded-md md:shadow-sm">
        <input
          className="text-input w-full flex-grow pl-5 bg-transparent outline-none dark:text-white dark:placeholder-gray-400"
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...field}
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...props}
        />
      </div>
      <div>
        {meta.touched && meta.error ? (
          <div className="error dark:text-personal_blue-text pt-2">
            {meta.error}
          </div>
        ) : null}
        <br />{' '}
      </div>
    </div>
  );
}

// eslint-disable-next-line react/prop-types
function MyTextAreaInput({ label, ...props }) {
  const [field, meta] = useField(props);
  return (
    <div className="grid grid-cols-1">
      <div className="pb-3">
        <label
          className="dark:text-personal_blue-textParagraph font-semibold "
          htmlFor={props.id || props.name}
        >
          {label}
        </label>
      </div>{' '}
      <div className="items-center border border-black  dark:border-personal_blue-textParagraph rounded-md py-2 md:shadow-sm">
        <textarea
          className="text-input flex-grow pl-5 bg-transparent outline-none dark:text-white dark:placeholder-gray-400 w-full h-20"
          {...field}
          {...props}
        />
      </div>
      <div>
        {' '}
        {meta.touched && meta.error ? (
          <div className="error dark:text-personal_blue-text pt-2">{meta.error}</div>
        ) : null}{' '}
        <br />
      </div>
    </div>
  );
}

// And now we can use these
function ContactForm() {
  function sendToastMessage() {
    toast('Thank You for the Email. I will get back to you as soon as I can!', {
      position: toast.POSITION.BOTTOM_RIGHT,
      className: 'foo-bar',
    });
  }

  const [setSuccessMessage] = useState('');

  const sendEmail = (serviceID, templateID, variables, userID) => {
    emailjs
      .send(serviceID, templateID, variables, userID)
      .then(() => {
        setSuccessMessage(
          "Form sent successfully! I'll contact you as soon as possible."
        );
      })
      // eslint-disable-next-line no-console
      .catch((err) => console.error(`Something went wrong ${err}`));
  };
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      <Formik
        initialValues={{
          fullName: '',
          contact: '',
          email: '',
          subject: '',
          description: '',
        }}
        validationSchema={Yup.object({
          fullName: Yup.string()
            .max(20, 'Must be 20 characters or less')
            .required('Required'),
          contact: Yup.string().max(12, 'Must be 12 characters or less'),
          email: Yup.string()
            .email('Invalid email address')
            .required('Required'),
          subject: Yup.string()
            .max(100, 'Must be 20 characters or less')
            .required('Required'),
          description: Yup.string().required('Required'),
        })}
        onSubmit={(values, { resetForm }) => {
          setTimeout(() => {
            sendEmail(
              serviceID,
              templateID,
              {
                name: values.fullName,
                phone: values.contact,
                email: values.email,
                subject: values.subject,
                description: values.description,
              },
              userID
            );
          }, 200);
          sendToastMessage();
          resetForm();
        }}
      >
        <Form>
          <div className="grid grid-cols-1 md:grid-cols-2 md:space-x-6 ">
            <div>
              <MyTextInput
                label="Full Name"
                name="fullName"
                type="text"
                placeholder=" Enter your name"
              />

              <MyTextInput
                label="Contact Number"
                name="contact"
                type="number"
                placeholder=" Contact Number"
              />

              <MyTextInput
                label="Email Address"
                name="email"
                type="email"
                placeholder=" email@email.com"
              />
            </div>

            <div>
              <MyTextAreaInput
                label="Subject"
                name="subject"
                type="text"
                placeholder=" Enter the subject"
              />
              <MyTextAreaInput
                label="Description"
                name="description"
                type="text"
                placeholder=" Enter the description"
              />
            </div>
          </div>

          <button
            className="w-24 dark:text-personal_blue-text bg-transparent px-2 py-2 shadow-md border rounded-md dark:border-personal_blue-text font-bold my-3 hover:text-white hover:bg-personal_blue-text active:scale-90 transition duration-150"
            type="submit"
          >
            Submit
          </button>
        </Form>
      </Formik>
    </>
  );
}
export default ContactForm;
