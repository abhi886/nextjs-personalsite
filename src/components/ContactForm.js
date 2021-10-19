import React from "react";
import ReactDOM from "react-dom";
import { Formik, Form, useField } from "formik";
import * as Yup from "yup";

const MyTextInput = ({ label, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input>. We can use field meta to show an error
  // message if the field is invalid and it has been touched (i.e. visited)
  const [field, meta] = useField(props);
  return (
    <>
      <div className='grid gird-cols-1'>
        <div>
          <label className='text-white  ' htmlFor={props.id || props.name}>
            {label}
          </label>
        </div>
        <div>
          <input className='text-input' {...field} {...props} />
        </div>
        <div>
          {meta.touched && meta.error ? (
            <div className='error text-white'>{meta.error}</div>
          ) : null}
          <br />{" "}
        </div>
      </div>
    </>
  );
};

const MyTextAreaInput = ({ label, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input>. We can use field meta to show an error
  // message if the field is invalid and it has been touched (i.e. visited)
  const [field, meta] = useField(props);
  return (
    <>
      <div className='grid grid-cols-1'>
        <div>
          <label className='text-white ' htmlFor={props.id || props.name}>
            {label}
          </label>
        </div>{" "}
        <div>
          <textarea className='text-input w-72 h-36' {...field} {...props} />
        </div>
        <div>
          {" "}
          <br />
          {meta.touched && meta.error ? (
            <div className='error text-white'>{meta.error}</div>
          ) : null}
        </div>
      </div>
    </>
  );
};

// And now we can use these
const ContactForm = () => {
  return (
    <>
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
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        <Form>
          <MyTextInput
            label='Full Name'
            name='fullName'
            type='text'
            placeholder='Enter your name'
          />

          <MyTextInput
            label='Contact Number'
            name='contact'
            type='number'
            placeholder='Doe'
          />

          <MyTextInput
            label='Email Address'
            name='email'
            type='email'
            placeholder='jane@formik.com'
          />

          <MyTextAreaInput
            label='Subject'
            name='subject'
            type='text'
            placeholder='Enter the subject'
          />
          <MyTextAreaInput
            label='Description'
            name='description'
            type='text'
            placeholder='Enter the description'
          />
          <button type='submit'>Submit</button>
        </Form>
      </Formik>
    </>
  );
};
export default ContactForm;
