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
    <div className='cursor-pointer group'>
      <div className=' relative overflow-hidden transition-all bg-white-100 rounded-md  hover:scale-105 aspect-video '>
        <a href={`/blogs/${slug}`}>
          <Image
            src={`https:${blogImage.fields.file.url}`}
            alt='Main picture of the blog'
            objectFit='fill'
            width={blogImage.fields.file.details.image.width}
            height={blogImage.fields.file.details.image.height}
          ></Image>
        </a>
      </div>
      <div>
        <a href='#'>
          <span className=' text-blue-600 inline-block mt-5 text-xs font-medium tracking-wider uppercase'>
            Javascript
          </span>
        </a>
      </div>
      <h2 className='mt-2 text-lg font-semibold tracking-normal text-brand-primary '>
        <span className=' bg-gradient-to-r from-green-200 to-green-100   bg-[length:0px_10px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_10px]'>
          {title}
        </span>
      </h2>

      <div className='flex items-center mt-4 space-x-4 text-gray-500 '>
        <Image
          src={myPhoto}
          alt='Abhishekh Maharjan Photo'
          width={20}
          height={20}
          objectFit='contain'
          className='rounded-full'
        />
        <span className='text-sm'>Abhishekh Maharjan</span>
        <span className='text-xs text-gray-300'>•</span>
        <time className='text-sm'>{convertDate(updatedAt)}</time>
      </div>
    </div>
  );
}

export default BlogCard;