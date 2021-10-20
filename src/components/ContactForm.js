import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Formik, Form, useField } from "formik";
import * as Yup from "yup";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//variables for sending email

const serviceID = "service_x4bdpt8";
const templateID = "template_ID";
const userID = "user_5EWcC0NChoVOGMUlk0edf";

const MyTextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <div className='grid gird-cols-1'>
        <div className='pb-3'>
          <label className='text-white' htmlFor={props.id || props.name}>
            {label}
          </label>
        </div>
        <div className='tems-center border-2 py-2 md:shadow-sm'>
          <input
            className='text-input w-full flex-grow pl-5 bg-transparent outline-none text-gray-600 placeholder-gray-400'
            {...field}
            {...props}
          />
        </div>
        <div>
          {meta.touched && meta.error ? (
            <div className='error text-personal_blue-text'>{meta.error}</div>
          ) : null}
          <br />{" "}
        </div>
      </div>
    </>
  );
};

const MyTextAreaInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <div className='grid grid-cols-1'>
        <div className='pb-4'>
          <label className='text-white ' htmlFor={props.id || props.name}>
            {label}
          </label>
        </div>{" "}
        <div className='items-center border-2 py-2 md:shadow-sm'>
          <textarea
            className='text-input flex-grow pl-5 bg-transparent outline-none text-gray-600 placeholder-gray-400 w-full h-20'
            {...field}
            {...props}
          />
        </div>
        <div>
          {" "}
          {meta.touched && meta.error ? (
            <div className='error text-personal_blue-text'>{meta.error}</div>
          ) : null}{" "}
          <br />
        </div>
      </div>
    </>
  );
};

// And now we can use these
const ContactForm = () => {
  function sendToastMessage() {
    toast("Thank You for the Email. I will get back to you as soon as I can!", {
      position: toast.POSITION.BOTTOM_RIGHT,
      className: "foo-bar",
    });
  }

  const [successMessage, setSuccessMessage] = useState("");

  const sendEmail = (serviceID, templateID, variables, userID) => {
    emailjs
      .send(serviceID, templateID, variables, userID)
      .then(() => {
        setSuccessMessage(
          "Form sent successfully! I'll contact you as soon as possible."
        );
      })
      .catch((err) => console.error(`Something went wrong ${err}`));
  };
  return (
    <>
      <ToastContainer
        position='top-right'
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
          fullName: "",
          contact: "",
          email: "",
          subject: "",
          description: "",
        }}
        validationSchema={Yup.object({
          fullName: Yup.string()
            .max(20, "Must be 20 characters or less")
            .required("Required"),
          contact: Yup.string().max(12, "Must be 12 characters or less"),
          email: Yup.string()
            .email("Invalid email address")
            .required("Required"),
          subject: Yup.string()
            .max(20, "Must be 20 characters or less")
            .required("Required"),
          description: Yup.string()
            .max(20, "Must be 20 characters or less")
            .required("Required"),
        })}
        onSubmit={(values, { setSubmitting, resetForm }) => {
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
          <MyTextInput
            label='Full Name'
            name='fullName'
            type='text'
            placeholder=' Enter your name'
          />

          <MyTextInput
            label='Contact Number'
            name='contact'
            type='number'
            placeholder=' Contact Number'
          />

          <MyTextInput
            label='Email Address'
            name='email'
            type='email'
            placeholder=' jane@formik.com'
          />

          <MyTextAreaInput
            label='Subject'
            name='subject'
            type='text'
            placeholder=' Enter the subject'
          />
          <MyTextAreaInput
            label='Description'
            name='description'
            type='text'
            placeholder=' Enter the description'
          />

          <button
            className='w-32 text-personal_blue-text bg-transparent px-3 py-3 shadow-md border-2 rounded-full border-personal_blue-text font-bold my-3 hover:text-white hover:bg-personal_blue-text active:scale-90 transition duration-150'
            type='submit'
          >
            Submit
          </button>
        </Form>
      </Formik>
    </>
  );
};
export default ContactForm;
