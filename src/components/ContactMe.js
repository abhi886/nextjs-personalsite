import React, { useRef } from "react";

import ContactForm from "./ContactForm";

function ContactMe() {
  const contactSection = useRef(null);

  return (
    <section id='contact' className='flex flex-col pb-32'>
      <h1 className='font-bold text-2xl text-personal_blue-textTitle animate-appear-text after:empty-line text-center'>
        {" "}
        Get In Touch <br />
        <p className='text-sm'>
          Please fill out the form and describe your project needs and I'll
          contact you as soon as possible. Thank you.{" "}
        </p>
      </h1>
      {/* <div className='border-2 p-4 border-personal_blue-text'>
        <p className='text-white'>Email Section</p>
      </div> */}
      <div className='grid-cols-1 md:grid-cols-2 pt-8'>
        <ContactForm />
      </div>
    </section>
  );
}

export default ContactMe;
