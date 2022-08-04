import React from "react";
import Image from "next/image";
import Link from "next/link";
import myPhoto from "../../../public/images/me.jpg";

function BlogCard({ title, blogDescription, blogImage, slug, readTime }) {
  return (
    <div className='cursor-pointer group'>
      <div className=' relative overflow-hidden transition-all bg-white-100 rounded-md  hover:scale-105 aspect-video '>
        <Link target='_blank' href={`/blogs/${slug}`}>
          <Image
            src={`https:${blogImage.fields.file.url}`}
            alt='Main picture of the blog'
            objectFit='fill'
            width={blogImage.fields.file.details.image.width}
            height={blogImage.fields.file.details.image.height}
          ></Image>
        </Link>
      </div>
      <div>
        <a href='#'>
          <span className=' text-blue-600 inline-block mt-5 text-xs font-medium tracking-wider uppercase'>
            Javascript
          </span>
        </a>
      </div>
      <h2 class='mt-2 text-lg font-semibold tracking-normal text-brand-primary '>
        <span class=' bg-gradient-to-r from-green-200 to-green-100   bg-[length:0px_10px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_10px]'>
          {title}
        </span>
      </h2>

      <div className='flex items-center mt-4 space-x-4 text-gray-500 dark:text-gray-400'>
        <Image
          src={myPhoto}
          alt='Abhishekh Maharjan Photo'
          width={20}
          height={20}
          objectFit='contain'
          className='rounded-full'
        />
        <span className='text-sm'>Abhishekh Maharjan</span>
        <span className='text-xs text-gray-300 dark:text-gray-600'>•</span>
        <time className='text-sm' datetime='2022-05-20T10:09:06Z'>
          May 20, 2022
        </time>
      </div>
    </div>
  );
}

export default BlogCard;
