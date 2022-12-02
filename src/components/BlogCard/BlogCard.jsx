import React from "react";
import Image from "next/image";
import Link from "next/link";
import myPhoto from "../../../public/images/me.jpg";
import convertDate from "../../utils/convertDate";

function BlogCard({
  title,
  blogDescription,
  blogImage,
  slug,
  readTime,
  updatedAt,
}) {
  return (
    <article className='group shadow-md hover:scale-105 transition duration-700 ease-in-out hover:shadow-md '>
      <div className=' relative overflow-hidden transition-all bg-white-100 rounded-md  aspect-video '>
        <a href={`/blogs/${slug}`}>
          <Image
            src={`https:${blogImage.fields.file.url}`}
            alt='Main picture of the blog'
            objectFit='contain'
            // width={blogImage.fields.file.details.image.width}
            // height={blogImage.fields.file.details.image.height}
            layout='fill'
          ></Image>
        </a>
      </div>
      <div className='px-2 group-hover:px-2 hover:transition duration-700 ease-in-out group-hover:mb-6'>
        <a href='#'>
          <span className=' text-blue-600 inline-block mt-5 text-xs font-medium tracking-wider uppercase'>
            Javascript
          </span>
        </a>
        <a href={`/blogs/${slug}`}>
          <h2 className='cursor-pointer mt-2 text-lg font-semibold tracking-normal text-brand-primary'>
            <span className='bg-gradient-to-r from-green-200 to-green-100   bg-[length:0px_10px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_10px]'>
              {title}
            </span>
          </h2>
        </a>
        <div className='flex items-center mt-4 space-x-4 text-gray-500 my-2'>
          <Image
            src={myPhoto}
            alt='Abhishekh Maharjan Photo'
            width={20}
            height={20}
            objectFit='contain'
            className='rounded-full'
          />
          <span className='text-sm flex-1'>Abhishekh Maharjan</span>
          <time className='text-sm '>{convertDate(updatedAt)}</time>
        </div>
      </div>
    </article>
  );
}

export default BlogCard;
