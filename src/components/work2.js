import React from "react";
import rollingPlansLogo from "../../public/images/rollingplans.png";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";

function work2() {
  return (
    <section className='pb-32'>
      <h2 className='text-2xl font-semibold pt-8 pb-10 text-personal_blue-textTitle'>
        {" "}
        <span className='text-sm text-personal_blue-text'> 03. </span> Other
        noteworthy projects <br />
        <span className='text-sm pl-8'>View the archive</span>
      </h2>

      <div className='p-3 space-y-2 md:space-x-2 grid grid-cols-1 md:grid-cols-2'>
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
