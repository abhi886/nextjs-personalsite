import Image from "next/image";
import { useState, useEffect } from "react";
import WorkCard from "./workCard";

import AnimateText from "./AnimateText";
function Works({ works }) {
  const [isVisible, setIsVisible] = useState(false);
  const listenToScroll = () => {
    let heightToShowFrom = 783;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
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
      <div className='pt-16 self-center grid grid-cols-1 space-y-2 md:space-y-0  md:grid-cols-2 lg:grid-cols-3 '>
        {works.map((work) => (
          <WorkCard key={work.sys.id} work={work}></WorkCard>
        ))}
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
