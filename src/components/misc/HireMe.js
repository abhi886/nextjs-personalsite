import React, { useState, useEffect, useRef } from 'react';
import AnimateText from './AnimateText';
import useOnScreen from '../../customHooks/useOnScreen';

function HireMe() {
  const [ref, visible] = useOnScreen({ rootMargin: '-10px' });
  return (
    <section
      ref={ref}
      className="pb-16 lg:px-48 bg-personal_blue px-4"
      id="hireMe"
    >
      {visible && (
        <AnimateText headingCount={4} mainHeading="Need a developer?" />
      )}
      <div className="pt-10 ">
        <p className="mt-4 text-sm  text-personal_blue-textParagraph bg-personal_blue-lightBlue py-2 pl-2">
          Need a developer for your next project&nbsp;? I do full stack web
          application development using MERN stack and JAM Stack. You can view
          some of my
          {' '}
          <a href="/#works" className="underline hover:text-personal_blue-text">
            projects and its case study.
          </a>
          {' '}
        </p>
      </div>
    </section>
  );
}

export default HireMe;
