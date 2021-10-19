import React from "react";

function ContactMe() {
  return (
    <section className='flex flex-col pb-32'>
      <h2 className='text-2xl font-semibold pt-8 pb-10 text-personal_blue-textTitle text-center'>
        {" "}
        Get In Touch <br />
        <span className='text-sm'>
          Please fill out the form and describe your project needs and I'll
          contact you as soon as possible. Thank you.{" "}
        </span>
      </h2>
      <div className='border-2 p-4 border-personal_blue-text'>
        <p className='text-white'>Email Section</p>
      </div>
    </section>
  );
}

export default ContactMe;
