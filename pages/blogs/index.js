import React from "react";
import HeaderSection from "../../src/components/HeaderSection";
import FooterSection from "../../src/components/FooterSection";

function index() {
  return (
    <>
      <div className='px-4 py-2 bg-personal_blue'>
        <HeaderSection></HeaderSection>
      </div>
      <div>
        <div className='container px-8 py-5 lg:py-8 mx-auto xl:px-5 max-w-screen-lg'>
          <div className='grid gap-10 lg:gap-10 md:grid-cols-2 '>
            <div className='cursor-pointer group'>
              <div className='relative overflow-hidden transition-all bg-gray-100 rounded-md dark:bg-gray-800   hover:scale-105 aspect-video'>
                <a href='#'>
                  <span className='box-sizing:border-box;display:block;overflow:hidden;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;position:absolute;top:0;left:0;bottom:0;right:0'>
                    <img
                      src='https://images.pexels.com/lib/api/pexels.png'
                      alt='This is test'
                    />
                  </span>
                </a>
              </div>
              <div>
                <a href='/category/technology'>
                  <span className='inline-block mt-5 text-xs font-medium tracking-wider uppercase  text-blue-600'>
                    Technology
                  </span>
                </a>
              </div>
              <h2 className='mt-2 text-lg font-semibold tracking-normal text-brand-primary dark:text-white'>
                <span className=' bg-gradient-to-r from-green-200 to-green-100 dark:from-purple-800 dark:to-purple-900 bg-[length:0px_10px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_10px]'>
                  Architectural Engineering Wonders of the modern era for your
                  Inspiration
                </span>
              </h2>
              <div className='hidden'>
                <p className='mt-2 text-sm text-gray-500 dark:text-gray-400 line-clamp-3'>
                  <a href='/post/architectural-engineering-wonders-of-the-modern-era-for-your-inspiration'>
                    Reinvention often comes in spurts, after a long period of
                    silence. Just as modern architecture recently enjoyed a
                    comeback, brand architecture, a field with well-established
                    principles for decades
                  </a>
                </p>
              </div>
              <div className='flex items-center mt-3 space-x-3 text-gray-500 dark:text-gray-400'>
                <div className='relative flex-shrink-0 w-5 h-5'>
                  <span className='box-sizing:border-box;display:block;overflow:hidden;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;position:absolute;top:0;left:0;bottom:0;right:0'>
                    <img
                      src='https://images.pexels.com/lib/api/pexels.png'
                      alt='This is test'
                    />
                  </span>
                </div>
                <span className='text-sm'>Mario Sanchez</span>
                <span className='text-xs text-gray-300 dark:text-gray-600'>
                  •
                </span>
                <time className='text-sm' datetime='2022-05-20T10:09:06Z'>
                  May 20, 2022
                </time>
              </div>
            </div>
            {/* Second Blog Section */}
            <div className='cursor-pointer group'>
              <div className='relative overflow-hidden transition-all bg-gray-100 rounded-md dark:bg-gray-800   hover:scale-105 aspect-video'>
                <a href='#'>
                  <span className='box-sizing:border-box;display:block;overflow:hidden;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;position:absolute;top:0;left:0;bottom:0;right:0'>
                    <img
                      src='https://images.pexels.com/lib/api/pexels.png'
                      alt='This is test'
                    />
                  </span>
                </a>
              </div>
              <div>
                <a href='/category/technology'>
                  <span className='inline-block mt-5 text-xs font-medium tracking-wider uppercase  text-blue-600'>
                    Technology
                  </span>
                </a>
              </div>
              <h2 className='mt-2 text-lg font-semibold tracking-normal text-brand-primary dark:text-white'>
                <span className=' bg-gradient-to-r from-green-200 to-green-100 dark:from-purple-800 dark:to-purple-900 bg-[length:0px_10px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_10px]'>
                  Architectural Engineering Wonders of the modern era for your
                  Inspiration
                </span>
              </h2>
              <div className='hidden'>
                <p className='mt-2 text-sm text-gray-500 dark:text-gray-400 line-clamp-3'>
                  <a href='/post/architectural-engineering-wonders-of-the-modern-era-for-your-inspiration'>
                    Reinvention often comes in spurts, after a long period of
                    silence. Just as modern architecture recently enjoyed a
                    comeback, brand architecture, a field with well-established
                    principles for decades
                  </a>
                </p>
              </div>
              <div className='flex items-center mt-3 space-x-3 text-gray-500 dark:text-gray-400'>
                <div className='relative flex-shrink-0 w-5 h-5'>
                  <span className='box-sizing:border-box;display:block;overflow:hidden;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;position:absolute;top:0;left:0;bottom:0;right:0'>
                    <img
                      src='https://images.pexels.com/lib/api/pexels.png'
                      alt='This is test'
                    />
                  </span>
                </div>
                <span className='text-sm'>Mario Sanchez</span>
                <span className='text-xs text-gray-300 dark:text-gray-600'>
                  •
                </span>
                <time className='text-sm' datetime='2022-05-20T10:09:06Z'>
                  May 20, 2022
                </time>
              </div>
            </div>

            {/* Third Blog Section */}
            <div className='cursor-pointer group'>
              <div className='relative overflow-hidden transition-all bg-gray-100 rounded-md dark:bg-gray-800   hover:scale-105 aspect-video'>
                <a href='#'>
                  <span className='box-sizing:border-box;display:block;overflow:hidden;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;position:absolute;top:0;left:0;bottom:0;right:0'>
                    <img
                      src='https://images.pexels.com/lib/api/pexels.png'
                      alt='This is test'
                    />
                  </span>
                </a>
              </div>
              <div>
                <a href='/category/technology'>
                  <span className='inline-block mt-5 text-xs font-medium tracking-wider uppercase  text-blue-600'>
                    Technology
                  </span>
                </a>
              </div>
              <h2 className='mt-2 text-lg font-semibold tracking-normal text-brand-primary dark:text-white'>
                <span className=' bg-gradient-to-r from-green-200 to-green-100 dark:from-purple-800 dark:to-purple-900 bg-[length:0px_10px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_10px]'>
                  Architectural Engineering Wonders of the modern era for your
                  Inspiration
                </span>
              </h2>
              <div className='hidden'>
                <p className='mt-2 text-sm text-gray-500 dark:text-gray-400 line-clamp-3'>
                  <a href='/post/architectural-engineering-wonders-of-the-modern-era-for-your-inspiration'>
                    Reinvention often comes in spurts, after a long period of
                    silence. Just as modern architecture recently enjoyed a
                    comeback, brand architecture, a field with well-established
                    principles for decades
                  </a>
                </p>
              </div>
              <div className='flex items-center mt-3 space-x-3 text-gray-500 dark:text-gray-400'>
                <div className='relative flex-shrink-0 w-5 h-5'>
                  <span className='box-sizing:border-box;display:block;overflow:hidden;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;position:absolute;top:0;left:0;bottom:0;right:0'>
                    <img
                      src='https://images.pexels.com/lib/api/pexels.png'
                      alt='This is test'
                    />
                  </span>
                </div>
                <span className='text-sm'>Mario Sanchez</span>
                <span className='text-xs text-gray-300 dark:text-gray-600'>
                  •
                </span>
                <time className='text-sm' datetime='2022-05-20T10:09:06Z'>
                  May 20, 2022
                </time>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-personal_blue'>
        <FooterSection />
      </div>
    </>
  );
}

export default index;
