import React from "react";
import rollingPlansLogo from "../../public/images/rollingplans.png";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";

function work2() {
  return (
    <section>
      <h2 className='text-2xl font-semibold pt-8'>
        {" "}
        3. Other noteworthy projects
      </h2>
      <p>View the archive</p>
      <div className='flex space-x-6 overflow-scroll scrollbar-hide p-3 -ml-3'>
        <div className=' cursor-pointer hover:scale-105 transform transition duration-300 ease-out'>
          <div className='h-60 w-60'>
            {" "}
            <Image
              src={rollingPlansLogo}
              layout='fill'
              className='rounded-xl'
            />
            <div className='h-60 w-60 relative p-2 bg-gray-100 opacity-70 hover:inline-flex'>
              <p className='mt-4 font-bold '>Amazone Clone Site in JAM Stack</p>
              <p className='text-sm'>
                This clone site demonstrates the use of JAM Stack for an
                Ecommerce Websites
              </p>
              <p className='text-xs pt-7'>
                NEXT.js | firebase | stripe | webhooks | Tailwindcss | Redux |
                RestAPI
              </p>
              <div className='flex '>
                <p>Visit Live Site</p>
                <p>Visit GitHub</p>
              </div>
            </div>
          </div>
        </div>
        <div className='cursor-pointer hover:scale-105 transform transition duration-300 ease-out'>
          <div className='h-60 w-60'>
            {" "}
            <Image
              src={rollingPlansLogo}
              layout='fill'
              className='rounded-xl'
            />
            <div className='h-60 w-60 relative p-2 bg-gray-100 opacity-70 hover:inline-flex'>
              <p className='mt-4 font-bold '>Airbnb Clone Site in JAM Stack</p>
              <p className='text-sm'>
                This clone site demonstrates the use of JAM Stack for an
                Ecommerce Websites
              </p>
              <p className='text-xs pt-7'>
                NEXT.js | firebase | stripe | webhooks | Tailwindcss | Redux |
                RestAPI
              </p>
              <div className='flex space-x-2 p-2 '>
                <FontAwesomeIcon
                  icon={("fas", faEye)}
                  size='1x'
                  // color='#4078c0'
                  color='#000000'
                />{" "}
                <FontAwesomeIcon
                  icon={("fab", faGithub)}
                  size='1x'
                  // color='#4078c0'
                  color='#000000'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default work2;
