import React from "react";

function AnimateText({ headingCount, mainHeading, subHeading }) {
  return (
    <div className='relative'>
      <div className='absolute top-0'>
        <h1 className='font-bold text-2xl text-personal_blue-textTitle animate-appear-text after:empty-line'>
          <span className='text-sm text-personal_blue-text'>
            {" "}
            0{headingCount}.{" "}
          </span>{" "}
          {mainHeading}
        </h1>
        <div className='absolute top-0 h-8 w-0 bg-personal_blue-text animate-reveal-block after:empty-content'></div>
      </div>
    </div>
  );
}

export default AnimateText;
