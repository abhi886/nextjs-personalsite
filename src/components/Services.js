function Services() {
  return (
    <div className='flex flex-col max-w-screen-xl mx-auto px-6 '>
      <div className='flex justify-around'>
        <span className='relative inline-flex rounded-md shadow-sm'>
          <button
            type='button'
            className='inline-flex items-center px-4 py-2 border border-purple-400 text-base leading-6 font-medium rounded-md text-purple-800 bg-white hover:text-purple-700 focus:border-purple-300 transition ease-in-out duration-150'
          >
            How Can I Help You ?
          </button>
          <span className='flex absolute h-3 w-3 top-0 right-0 -mt-1 -mr-1'>
            <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75'></span>
            <span className='relative inline-flex rounded-full h-3 w-3 bg-purple-500'></span>
          </span>
        </span>
      </div>
      <p className='text-3xl my-4'>
        I Want To Hire You As A FrontEnd Developer | Backend Developer | Full
        Stack Developer{" "}
      </p>
      <p className='text-3xl my-4'>
        Build A Website For You . Single Page Website | Multiple Page Website |
        Blog Site
      </p>
      <p className='text-3xl my-4'>Collaborate With You</p>
      <p className='text-3xl my-4'>Play Chess With You</p>
    </div>
  );
}

export default Services;
