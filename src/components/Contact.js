import React, { useState } from "react";
import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";

const Contacts = () => {
  // hook for message

  const [successMessage, setSuccessMessage] = useState("");

  // variables for validation

  // const { register, handleSubmit, errors} = useForm();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //variables for sending email

  const serviceID = "service_ID";
  const templateID = "template_ID";
  const userID = "user_5EWcC0NChoVOGMUlk0edf";

  //methods

  const onSubmit = (data, r) => {
    sendEmail(
      serviceID,
      templateID,
      {
        name: data.name,
        phone: data.phone,
        email: data.email,
        subject: data.subject,
        description: data.description,
      },
      userID
    );
    r.target.reset();
  };

  // emailjs for sending email from the contact form

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
    <div id='contacts' className='contacts'>
      <div className='text-center'>
        <h1>Contact Me</h1>
        <p>
          Please fill out the form and describe your project needs and I'll
          contact you as soon as possible. Thank you.
        </p>
        {/* hook  */}
        <span className='success-message'>{successMessage}</span>
      </div>
      <div className='container'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='row'>
            <div className='col-md-6 cold-xs-12'>
              {/* Name input */}
              <div className='text-center'>
                <input
                  id='name'
                  type='text'
                  className='form-control'
                  placeholder='Name'
                  name='name'
                  //validation
                  aria-invalid={errors.name ? "true" : "false"}
                  {...register("name", {
                    required: "Please enter your name",
                    maxLength: {
                      value: 20,
                      message:
                        "Please enter a name with fewer than 20 character",
                    },
                  })}
                />
                <div className='line'></div>
              </div>
              <span className='error-message'>
                {errors.name && errors.name.message}
              </span>
              {/* Phone input */}
              <div className='text-center'>
                <input
                  id='phone'
                  type='number'
                  className='form-control'
                  placeholder='Phone'
                  name='phone'
                  //validation
                  aria-invalid={errors.phone ? "true" : "false"}
                  {...register("phone", {
                    required: "Please enter your phone number",
                  })}
                />
                <div className='line'></div>
              </div>
              <span className='error-message'>
                {errors.phone && errors.phone.message}
              </span>
              {/* Email input */}
              <div className='text-center'>
                <input
                  id='email'
                  type='email'
                  className='form-control'
                  placeholder='Email'
                  name='email'
                  //validation
                  aria-invalid={errors.email ? "true" : "false"}
                  {...register("email", {
                    required: "Please enter your email",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9]+\.[A-Z]{2,}$/i,
                      message: "Invalid email",
                    },
                  })}
                />
                <div className='line'></div>
              </div>
              <span className='error-message'>
                {errors.email && errors.email.message}
              </span>
              {/* Subject input */}
              <div className='text-center'>
                <input
                  id='subject'
                  type='text'
                  className='form-control'
                  placeholder='Subject'
                  name='subject'
                  aria-invalid={errors.subject ? "true" : "false"}
                  {...register("subject", {
                    required: "OOPs, you forgot to add the subject",
                  })}
                />
                <div className='line'></div>
              </div>
              <span className='error-message'>
                {errors.subject && errors.subject.message}
              </span>
            </div>
            <div className='col-md-6 col-xs-12'>
              {/* Description input */}
              <div className='text-center'>
                <textarea
                  id='description'
                  type='text'
                  className='form-control'
                  placeholder='Description'
                  name='description'
                  // rows="6"
                  aria-invalid={errors.description ? "true" : "false"}
                  {...register("description", {
                    required: "Please describe shortly your project needs",
                  })}
                />
                <div className='line'></div>
              </div>
              <span className='error-message'>
                {errors.description && errors.description.message}
              </span>
              <button className='btn-main-offer contact-btn' type='submit'>
                Contact Me
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contacts;
