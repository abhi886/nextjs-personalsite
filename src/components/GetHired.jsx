import React from "react";

export default function GetHired() {
  return (
    <section className='bg-personal_blue'>
      <div className='container h-96 pt-32 flex gap-10 px-4 py-16 mx-auto lg:flex lg:items-center lg:justify-between md:px-20'>
        <div className='w-2/4'>
          <h2 className='text-3xl text-center font-semibold tracking-tight text-personal_blue-textParagraph xl:text-4xl dark:text-white'>
            Need A Developer ?
          </h2>
          <div className='flex flex-col space-y-3 sm:space-y-0 sm:flex-row sm:-mx-2 justify-center mt-4'>
            <button className='px-6 py-2 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg focus:ring focus:ring-blue-300 focus:ring-opacity-80 fo sm:mx-2 hover:bg-blue-500 focus:outline-none focus:bg-blue-500'>
              Contact Me
            </button>
          </div>
        </div>
        <div className='lg:mt-0'>
          <p className=' text-lg text-gray-500 dark:text-gray-300'>
            I do full stack web application development using MERN stack and JAM
            Stack. You can view some of my projects and its case study.
          </p>
        </div>
      </div>
    </section>
  );
}
