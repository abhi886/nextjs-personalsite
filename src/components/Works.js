import Image from "next/image";
import { useState, useEffect } from "react";

import AnimateText from "./AnimateText";
function Works() {
  const [isVisible, setIsVisible] = useState(false);
  const listenToScroll = () => {
    let heightToShowFrom = 783;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    console.log(winScroll);
    if (winScroll > heightToShowFrom) {
      // isVisible && // to limit setting state only the first time
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);
  return (
    <section className='flex flex-col pb-20'>
      {isVisible && <AnimateText headingCount={2} mainHeading={"My Works"} />}
      <div className='pt-16 self-center grid grid-cols-1 space-x-0 space-y-2 md:space-y-0 md:grid-cols-2 lg:grid-cols-3 md:space-x-2'>
        {/* Right Facing Descriptiion */}
        <div className='relative space-x-4  bg-personal_blue-text-900'>
          {/* First Div */}
          {/* <div className='bg-gray-900 opacity-50 '></div> */}
          <div className='flex h-80 w-80 justify-center text-personal_blue-text opacity-20 '>
            <img src='images/rollingplans.png' alt='Companys image' />
          </div>

          {/* Second Div */}

          <div className='flex flex-col absolute top-0 -left-4 bg-personal_blue-lightBlue bg-opacity-75  h-80 w-80'>
            {/* <div className='absolute inset-0 bg-gray-900 bg-opacity-1 '></div> */}
            <h1 className='font-bold p-2 text-personal_blue-textParagraph '>
              @ website - Rolling Plans Pvt. Ltd. <br />
              <span className='text-sm text-personal_blue-text'>
                Full Stack Developer
              </span>
            </h1>
            <p className='text-sm text-justify p-3 text-personal_blue-textParagraph'>
              The website is a coorporate website for the company with an
              integrated Electronic Recruitment Application (ERA) System
            </p>
            <div className='absolute bottom-0 right-0'>
              <p className='p-2 text-xs text-personal_blue-text font-mono text-right'>
                {" "}
                HTML5 | jquery | Laravel (php){" "}
              </p>
              <p className='font-bold text-xs p-2 text-personal_blue-textParagraph text-right hover:text-personal_blue-text cursor-pointer'>
                Visit Site | View Case Study
              </p>
            </div>
          </div>
        </div>
        <div className='relative space-x-4  bg-personal_blue-text-900'>
          {/* First Div */}
          {/* <div className='bg-gray-900 opacity-50 '></div> */}
          <div className='flex h-80 w-80 justify-center text-personal_blue-text opacity-20 '>
            <img src='images/rollingplans.png' alt='Companys image' />
          </div>

          {/* Second Div */}

          <div className='flex flex-col absolute top-0 -left-4 bg-personal_blue-lightBlue bg-opacity-75  h-80 w-80'>
            {/* <div className='absolute inset-0 bg-gray-900 bg-opacity-1 '></div> */}
            <h1 className='font-bold p-2 text-personal_blue-textParagraph '>
              @ website - Rolling Plans Pvt. Ltd. <br />
              <span className='text-sm text-personal_blue-text'>
                Full Stack Developer
              </span>
            </h1>
            <p className='text-sm text-justify p-3 text-personal_blue-textParagraph'>
              The website is a coorporate website for the company with an
              integrated Electronic Recruitment Application (ERA) System
            </p>
            <div className='absolute bottom-0 right-0'>
              <p className='p-2 text-xs text-personal_blue-text font-mono text-right'>
                {" "}
                HTML5 | jquery | Laravel (php){" "}
              </p>
              <p className='font-bold text-xs p-2 text-personal_blue-textParagraph text-right hover:text-personal_blue-text cursor-pointer'>
                Visit Site | View Case Study
              </p>
            </div>
          </div>
        </div>

        {/* Left Facing Descrition */}

        {/* <div className='relative self-center grid grid-cols-1 h-80 w-80 md:grid-cols-2 space-x-4  bg-personal_blue-text-900'> */}
        {/* First Div */}
        {/* <div className='flex h-80 w-80 justify-center text-personal_blue-text opacity-20 '>
          <img src='images/rollingplans.png' alt='Companys image' />
        </div> */}
        {/* Second Div */}
        {/* <div className='flex flex-col absolute top-0 -left-4 bg-personal_blue-lightBlue bg-opacity-75  h-80 w-80'>
            <h1 className='font-bold p-2 text-personal_blue-textParagraph'>
              @ website - Rolling Plans Pvt. Ltd. <br />
              <span className='text-xs text-personal_blue-text'>
                Full Stack Developer
              </span>
            </h1>
            <p className='text-sm text-justify p-3 text-personal_blue-textParagraph'>
              The website is a coorporate website for the company with an
              integrated Electronic Recruitment Application (ERA) System
            </p>
            <p className='p-2 text-xs text-personal_blue-text'>
              {" "}
              HTML5 | jquery | Laravel (php){" "}
            </p>
            <p className='font-bold text-xs p-2 text-personal_blue-textParagraph hover:text-personal_blue-text cursor-pointer'>
              Visit Site | Case Study
            </p>
          </div>
        </div> */}
      </div>
    </section>
  );
}

export default Works;
