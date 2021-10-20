import React from "react";
import { useState, useEffect } from "react";
import AnimateText from "./AnimateText";

import rollingPlansLogo from "../../public/images/rollingplans.png";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";

function work2() {
  const [isVisible, setIsVisible] = useState(false);
  const listenToScroll = () => {
    let heightToShowFrom = 1419;
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
    <section className='pb-20'>
      {isVisible && (
        <AnimateText
          headingCount={3}
          mainHeading={"Other noteworthy projects"}
          subHeading={"View the Archive"}
        />
      )}

      <div className='pt-16 p-3 space-y-2 md:space-y-0 md:space-x-2 grid grid-cols-1 md:grid-cols-2'>
        <div className='cursor-pointer hover:scale-105 transform transition duration-300 ease-out'>
          <div className='h-70 w-70 relative p-2 bg-personal_blue-lightBlue hover:inline-flex'>
            <p className='mt-4 font-bold text-personal_blue-textParagraph'>
              Airbnb Clone Site in JAM Stack
            </p>
            <p className='text-sm text-personal_blue-textParagraph'>
              This clone site demonstrates the use of JAM Stack for an Ecommerce
              Websites
            </p>
            <p className='text-xs pt-7 text-personal_blue-text'>
              NEXT.js | firebase | stripe | webhooks | Tailwindcss | Redux |
              RestAPI
            </p>
            <div className='flex justify-end space-x-2 p-2'>
              <FontAwesomeIcon
                icon={("fas", faEye)}
                size='1x'
                // color='#4078c0'
                color='#8892b0'
              />{" "}
              <FontAwesomeIcon
                icon={("fab", faGithub)}
                size='1x'
                // color='#4078c0'
                color='#8892b0'
              />
            </div>
          </div>
        </div>
        <div className='cursor-pointer hover:scale-105 transform transition duration-300 ease-out'>
          <div className='h-70 w-70 relative p-2 bg-personal_blue-lightBlue hover:inline-flex'>
            <p className='mt-4 font-bold text-personal_blue-textParagraph'>
              Airbnb Clone Site in JAM Stack
            </p>
            <p className='text-sm text-personal_blue-textParagraph'>
              This clone site demonstrates the use of JAM Stack for an Ecommerce
              Websites
            </p>
            <p className='text-xs pt-7 text-personal_blue-text'>
              NEXT.js | firebase | stripe | webhooks | Tailwindcss | Redux |
              RestAPI
            </p>
            <div className='flex justify-end space-x-2 p-2'>
              <FontAwesomeIcon
                icon={("fas", faEye)}
                size='1x'
                // color='#4078c0'
                color='#8892b0'
              />{" "}
              <FontAwesomeIcon
                icon={("fab", faGithub)}
                size='1x'
                // color='#4078c0'
                color='#8892b0'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default work2;
