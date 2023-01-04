import { FaBlog } from "react-icons/fa";
import Image from "next/dist/client/image";

function FeaturedBlog({ blogData }) {
  return (
    <section className='px-4 h-screen bg-personal_blue md:px-20  lg:px-44'>
      <div className='flex pt-28 space-x-4'>
        <div>
          {" "}
          <FaBlog className='text-personal_blue-textParagraph text-3xl' />
        </div>
        <div>
          <h1 className='font-bold text-2xl text-personal_blue-textParagraph '>
            <span className='pt-4'>From my Blogs</span>
          </h1>
        </div>
      </div>

      <p className='font-regular text-personal_blue-textParagraph pt-2 lg:pl-12 lg:pt-4'>
        View my recent articles
      </p>

      <div className='pt-6 lg:py-16'>
        <div className='grid grid-cols-1 gap-6'>
          {blogData.map((d, i) => (
            <article
              key={i}
              className='bg-personal_blue-lightBlue h-full lg:h-40 border-r-2 border-personal_blue-text'
            >
              <div className='flex md:space-x-4 lg:space-x-5'>
                <div className='relative w-16 h-16 mt-2 ml-2 md:w-32 md:h-24 lg:w-40 lg:h-32 lg:ml-6 lg:mt-2'>
                  <Image
                    className='rounded-full object-cover'
                    src={`${d.blogImage.url}`}
                    alt='Abhishekh Maharjans Photo'
                    layout='fill'
                  />
                </div>
                <div className='w-64 pl-4 md:w-full lg:w-full'>
                  <p className='mt-2 font-bold text-personal_blue-textParagraph text-base lg:text-xl lg:mt-4'>
                    {d.title}
                  </p>
                  <div className='text-sm mt-2 text-personal_blue-textParagraph'>
                    <p>
                      {d.sys.firstPublishedAt} / {d.readTime} mins read
                    </p>
                  </div>
                  <div className='lg:pt-7'>
                    {d.languages &&
                      d.languages.map((l, i) => (
                        <span className='text-xs py-3 pr-2 text-personal_blue-text'>
                          {i < d.languages.length - 1 ? `${l} |` : `${l}`}
                        </span>
                      ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
          <div className='flex justify-end'>
            <a href='#contact'>
              <button className='text-personal_blue-text bg-transparent px-2 py-2 text-xs lg:text-base lg:px-3 lg:py-3 rounded-lg border border-personal_blue-text my-3 hover:shadow-lg active:scale-90 transition duration-150 mt-8 lg:mt-12'>
                View More Articles
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturedBlog;
