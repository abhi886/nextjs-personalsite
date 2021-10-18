import React from "react";

function ContactMe() {
  return (
    <section className='flex flex-col pb-32'>
      <h2 className='text-2xl font-semibold pt-8 pb-10 text-personal_blue-textTitle'>
        {" "}
        <span className='text-sm text-personal_blue-text'> 05. </span> Get In
        Touch <br />
        <span className='text-sm'>
          I am actively looking for a FrontEnd Developer Position at the moment.
        </span>
      </h2>
      <div className='border-2 p-4 border-personal_blue-text'>
        <p className='text-white'>Email Section</p>
      </div>
    </section>
  );
}

export default ContactMe;
