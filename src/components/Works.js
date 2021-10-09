import Image from "next/image";

function Works() {
  return (
    <section className='flex flex-col border-b-2 '>
      <h1 className='text-2xl font-bold '>02. Some of My Works</h1>
      {/* Right Facing Descriptiion */}
      <div className='relative grid grid-cols-1  md:grid-cols-2 space-x-4 my-6'>
        {/* First Div */}
        <div className='flex justify-center md:justify-end md:h-96'>
          <img
            src='images/rollingplans.png'
            className=''
            alt='Companys image'
          />
        </div>

        {/* Second Div */}
        <div className='relative mt-4'>
          <div className='flex flex-col shadow-md rounded-md md:absolute border-gray-500 border-t-2 border-b-2 -left-14 top-1/4 w-full h-auto justify-end bg-white'>
            <h1 className='font-bold text-right p-2'>
              Website - Rolling Plans Pvt. Ltd.
            </h1>
            <p className='text-justify p-3'>
              The website is a coorporate website for the company with an
              integrated Electronic Recruitment Application (ERA) System
            </p>
            <p className='text-right p-2'> HTML5 | jquery | Laravel (php) </p>
            <p className='font-bold text-right p-2'>View Site</p>
          </div>
        </div>
      </div>

      {/* Left Facing Descrition */}

      <div className='flex flex-col-reverse md:relative md:grid grid-cols-2 space-x-4 my-6'>
        {/* First Div */}
        <div className='relative mt-4'>
          <div className='flex flex-col shadow-md rounded-md md:absolute border-gray-500 border-t-2 border-b-2 -right-14 top-1/4 w-full h-auto justify-end bg-white'>
            <h1 className='font-bold text-left p-2'>
              Website - Rolling Plans Pvt. Ltd.
            </h1>
            <p className='text-justify p-3'>
              The website is a coorporate website for the company with an
              integrated Electronic Recruitment Application (ERA) System
            </p>
            <p className='text-left p-2'> HTML5 | jquery | Laravel (php) </p>
            <p className='font-bold text-left p-2'>View Site</p>
          </div>
        </div>

        {/* Second Div */}

        <div className='flex justify-center md:justify-start md:h-96'>
          <img
            src='images/rollingNexus.png'
            className=''
            alt='Companys image'
          />
        </div>
      </div>
    </section>
  );
}

export default Works;
