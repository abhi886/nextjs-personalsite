/* eslint-disable react/prop-types */
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import myPhoto from '../../../public/images/me.jpg';
import convertDate from '../../utils/convertDate';

function BlogCard({
  // eslint-disable-next-line react/prop-types
  title,
  blogImage,
  slug,
  sys: { publishedAt },
}) {
  return (
    <article className="group dark:bg-personal_blue-lightBlue rounded-lg shadow-md hover:scale-100 transition duration-700 ease-in-out hover:shadow-md ">
      <div className="relative overflow-hidden transition-all bg-white-100  aspect-video rounded-lg">
        <Link href={`/blogs/${slug}`}>
          <Image
            src={blogImage.url}
            alt="Main picture of the blog"
            objectFit="fill"
            width={1200}
            height={620}
          />
        </Link>
      </div>
      <div className="px-6 pb-6  hover:transition duration-700 ease-in-out group-hover:px-4 group-hover:pb-4">
        <span className=" text-personal_blue-textParagraph inline-block mt-5 text-xs font-medium tracking-wider uppercase">
          Javascript
        </span>
        <Link href={`/blogs/${slug}`}>
          <h2 className="cursor-pointer mt-2 text-lg font-semibold tracking-normal text-brand-primary">
            <span className="bg-gradient-to-r from-green-500 to-green-500   bg-[length:0px_2px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_1px] group-hover:bg-[length:100%_1px]">
              {title}
            </span>
          </h2>
        </Link>
        <div className="flex items-center mt-4 space-x-4 text-gray-500 my-2 ">
          <Image
            src={myPhoto}
            alt="Abhishekh Maharjan Photo"
            width={20}
            height={20}
            objectFit="contain"
            className="rounded-full"
          />
          <span className="text-sm flex-1">Abhishekh Maharjan</span>
          <time className="text-sm ">{convertDate(publishedAt)}</time>
        </div>
      </div>
    </article>
  );
}

export default BlogCard;
