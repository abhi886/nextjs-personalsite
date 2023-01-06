import React, { useRef } from "react";
import { FaPhoneVolume } from "react-icons/fa";

import ContactForm from "./ContactForm";

function ContactMe() {
  const contactSection = useRef(null);

  return (
    <section
      id='contact'
      className='flex flex-col pb-20 lg:px-48 bg-personal_blue px-4 h-full pt-28'
    >
      <div className='flex space-x-4 w-full justify-center'>
        <div className=''>
          {" "}
          <FaPhoneVolume className='text-personal_blue-textParagraph text-3xl' />
        </div>
        <div>
          <h1 className='font-bold text-3xl text-personal_blue-textParagraph text-center'>
            <span className='pt-4'> Get In Touch</span>
          </h1>
        </div>
      </div>
      <h1 className='font-bold  text-personal_blue-textParagraph text-center'>
        <p className='text-base leading-6 text-center'>
          Please fill out the form and describe your project needs and I'll
          contact you as soon as possible. Thank you.{" "}
        </p>
      </h1>
      <div className='grid-cols-1 md:grid-cols-2 pt-12'>
        <ContactForm />
      </div>
    </section>
  );
}

export default ContactMe;
