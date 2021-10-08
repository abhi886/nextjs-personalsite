<div class='grid grid-cols-1  md:grid-cols-2 lg:grid-cols-2 text-center'>
  <div>
    {/* <h2 className='font-bold'>Live Sites</h2> */}

    {/* Live Sites Section */}
    <div className='flex space-x-3 overflow-scroll scrollbar-hide p-3'>
      <div className='cursor-pointer hover:scale-105 transform transition duration-300 ease-out'>
        <div className='relative'>
          {" "}
          <Image
            className='rounded-xl'
            src={rollingplansLogo}
            height={200}
            width={200}
            alt='Rollingplans Logo'
            objectFit='contain'
          />{" "}
          {/* overlay div */}
          <div className='absolute bottom-0'>
            <p>Rolling Plans Website</p>
            <p>Full Stack Developer</p>
            <p>Visit Live Site</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div>
    <h2 className='font-bold'>Clone Sites</h2>
    {/* Clone Sites Section */}
    <div>
      <div>
        <h3>Amazon Clone</h3>
      </div>
      <div>
        <h3>Facebook Clone</h3>
      </div>
      <div>
        <h3>Airbnb Clone</h3>
      </div>
    </div>
  </div>
</div>;
