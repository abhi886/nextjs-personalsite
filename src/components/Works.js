import Image from "next/image";

function Works() {
  return (
    <section className='flex flex-col pb-32'>
      <h1 className='text-2xl pb-10 font-bold text-personal_blue-textTitle'>
        <span className='text-sm text-personal_blue-text'> 02. </span>. Some of
        My Works
      </h1>
      {/* Right Facing Descriptiion */}
      <div className='relative grid grid-cols-1  md:grid-cols-2 space-x-4 my-6 '>
        {/* First Div */}
        {/* <div className='bg-gray-900 opacity-50 '></div> */}
        <div className='flex justify-center text-personal_blue-text opacity-30 md:justify-end md:h-96'>
          <img
            src='images/rollingplans.png'
            className=''
            alt='Companys image'
          />
        </div>

        {/* Second Div */}
        <div className='relative mt-4 '>
          <div className='flex flex-col bg-personal_blue-lightBlue  shadow-md rounded-md md:absolute border-gray-500 border-t-2 border-b-2 -left-14 top-1/4 w-full h-auto justify-end bg-workBackground backdrop-opacity-5'>
            {/* <div className='absolute inset-0 bg-gray-900 bg-opacity-1 '></div> */}
            <h1 className='font-bold text-right p-2 text-personal_blue-textParagraph'>
              @ website - Rolling Plans Pvt. Ltd. <br />
              <span className='text-xs text-personal_blue-text'>
                Full Stack Developer
              </span>
            </h1>
            <p className='text-sm text-justify p-3 text-personal_blue-textParagraph'>
              The website is a coorporate website for the company with an
              integrated Electronic Recruitment Application (ERA) System
            </p>
            <p className='text-right p-2 text-xs text-personal_blue-text'>
              {" "}
              HTML5 | jquery | Laravel (php){" "}
            </p>
            <p className='font-bold text-xs text-right p-2 text-personal_blue-textParagraph hover:text-personal_blue-text cursor-pointer'>
              View Site
            </p>
          </div>
        </div>
      </div>

      {/* Left Facing Descrition */}

      <div className='flex flex-col-reverse md:relative md:grid grid-cols-2 space-x-4 my-6'>
        {/* First Div */}
        <div className='relative mt-4'>
          <div className='flex flex-col bg-personal_blue-lightBlue  shadow-md rounded-md md:absolute border-gray-500 border-t-2 border-b-2 -right-14 top-1/4 w-full h-auto justify-end bg-transparent'>
            <h1 className='font-bold text-right p-2 text-personal_blue-textParagraph'>
              Website - Rolling Plans Pvt. Ltd. <br />
              <span className='text-xs text-personal_blue-text'>
                Full Stack Developer
              </span>
            </h1>
            <p className='text-sm text-justify p-3 text-personal_blue-textParagraph'>
              The website is a coorporate website for the company with an
              integrated Electronic Recruitment Application (ERA) System
            </p>
            <p className='text-left p-2 text-xs text-personal_blue-text'>
              {" "}
              HTML5 | jquery | Laravel (php){" "}
            </p>
            <p className='font-bold text-xs text-left p-2 text-personal_blue-textParagraph hover:text-personal_blue-text cursor-pointer'>
              View Site
            </p>{" "}
          </div>
        </div>

        {/* Second Div */}

        <div className='flex justify-center text-personal_blue-text opacity-30  md:justify-start md:h-96'>
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
