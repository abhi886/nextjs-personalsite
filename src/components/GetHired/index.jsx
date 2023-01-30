import React from 'react';

export default function GetHired() {
  return (
    <section className="bg-personal_blue">
      <div className="container flex flex-col items-center px-4 py-36 mx-auto text-center pb-24">
        <h2 className="text-3xl font-bold tracking-tight text-personal_blue-textTitle xl:text-4xl">
          Need A Developer for your next project ?
        </h2>

        <p className="block max-w-4xl mt-4 text-personal_blue-textParagraph">
          I do full stack web application development using MERN stack and JAM
          Stack. Feel free to say a friendly hello to me via
          abhishekmhrzn.14@gmail.com or by clicking the &quot;Contact Me
          &quot;button available below.
        </p>

        <div className="mt-6 flex flex-col items-center space-x-2">
          <a
            href="/contact"
            className="inline-flex items-center justify-center mt-6   py-2  overflow-hidden text-white transition-colors duration-300 bg-blue-600 rounded-lg shadow hover:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-80"
          >
            <span className="mx-2 px-1 py-1">Contact Me</span>
          </a>
        </div>
      </div>
    </section>
  );
}
