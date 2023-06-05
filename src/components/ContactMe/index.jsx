/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { FaPhoneVolume } from 'react-icons/fa';

import ContactForm from '../ContactForm';

function ContactMe() {
  return (
    <section
      id="contact"
      className="flex flex-col pb-20 lg:px-48 dark:bg-personal_blue px-4 h-full pt-28"
    >
      <div className="flex space-x-4 w-full justify-center">
        <div className="">
          {' '}
          <FaPhoneVolume className="dark:text-personal_blue-textTitle text-3xl" />
        </div>
        <div>
          <h2 className="text-3xl font-bold tracking-tight dark:text-personal_blue-textTitle xl:text-4xl">
            <span className="pt-4"> Get In Touch</span>
          </h2>
        </div>
      </div>

      <p className="font-regular text-center dark:text-personal_blue-textParagraph pt-2 lg:pl-12 lg:pt-4">
        Please fill out the form and describe your project needs and I'll
        contact you as soon as possible. Thank you.
      </p>

      <div className="grid-cols-1 md:grid-cols-2 pt-12">
        <ContactForm />
      </div>
    </section>
  );
}

export default ContactMe;
