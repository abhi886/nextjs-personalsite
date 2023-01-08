import React from "react";

function Newsletter() {
  return (
    <section className='bg-personal_blue'>
      <div className='container flex flex-col items-center px-4 py-28 mx-auto text-center'>
        <h2 className='text-3xl font-bold tracking-tight text-personal_blue-textTitle xl:text-4xl'>
          Sign up for my Newsletter
        </h2>

        <p className='block max-w-4xl mt-4 text-personal_blue-textParagraph'>
          I write about modern Full Stack Web Development. Subscribe to my
          newsletter to notify when I publish new components
        </p>

        <div className='mt-6 flex flex-col items-center space-x-2'>
          <div className=' border-2 rounded-full py-2 md:shadow-sm'>
            <input
              type='text'
              className='flex-grow pl-5 bg-transparent outline-none text-gray-600 placeholder-gray-400'
              placeholder='Enter Your Email'
            />
          </div>
          <a
            href='/'
            className='inline-flex items-center justify-center mt-6   py-2  overflow-hidden text-white transition-colors duration-300 bg-blue-600 rounded-lg shadow hover:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-80'
          >
            <span className='mx-2'>Subscribe</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Newsletter;
