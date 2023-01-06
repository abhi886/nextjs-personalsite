import React from "react";
import ContactForm from "./ContactForm";

export default function GetHired() {
  return (
    <section className='bg-personal_blue'>
      {/* <div className='container h-96 flex gap-10 px-4 py-16 mx-auto lg:flex lg:items-center lg:justify-between md:px-20'> */}
      {/* <div className='w-2/4'>
          <h2 className='text-3xl text-center font-semibold tracking-tight text-personal_blue-textTitle xl:text-4xl dark:text-white'>
            Need A Developer ?
          </h2>
          <div className='flex flex-col space-y-3 sm:space-y-0 sm:flex-row sm:-mx-2 justify-center mt-4'>
            <button className='px-6 py-2 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg focus:ring focus:ring-blue-300 focus:ring-opacity-80 fo sm:mx-2 hover:bg-blue-500 focus:outline-none focus:bg-blue-500'>
              Contact Me
            </button>
          </div>
        </div>
        <div className='lg:mt-0'>
          <p className=' text-lg text-personal_blue-textParagraph dark:text-gray-300'>
            I do full stack web application development using MERN stack and JAM
            Stack. You can view some of my projects and its case study.
          </p>
        </div> */}

      {/* </div> */}
      <div className='container flex flex-col items-center px-4 py-12 mx-auto text-center pb-24'>
        <h2 className='text-3xl font-bold tracking-tight text-personal_blue-textTitle xl:text-4xl'>
          Need A Developer for your next project ?
        </h2>

        <p className='block max-w-4xl mt-4 text-personal_blue-textParagraph'>
          I do full stack web application development using MERN stack and JAM
          Stack. Feel free to say a friendly hello to me via
          abhishekmhrzn.14@gmail.com or by clicking the "Contact Me" button
          available below.
        </p>

        <div className='mt-6 flex flex-col items-center space-x-2'>
          {/* <div className=' border-2 rounded-full py-2 md:shadow-sm'>
            <input
              type='text'
              className='flex-grow pl-5 bg-transparent outline-none text-gray-600 placeholder-gray-400'
              placeholder='Enter Your Email'
            />
          </div> */}
          <a
            href='/contact'
            className='inline-flex items-center justify-center mt-6   py-2  overflow-hidden text-white transition-colors duration-300 bg-blue-600 rounded-lg shadow hover:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-80'
          >
            <span className='mx-2 px-1 py-1'>Contact Me</span>
          </a>
        </div>
      </div>
    </section>
  );
}
