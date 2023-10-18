/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';
import { ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/outline';
import RichTextOptions from '../../utils/rich-text-options';
import convertDate from '../../utils/convertDate';

const index = ({ data }) => {
  const { heading, date, shortDescription, description } = data;
  const [openModal, SetOpenModal] = useState(false);
  const handleModalClick = () => {
    SetOpenModal(!openModal);
  };
  if (openModal === true) {
    return (
      <div
        className={`${
          openModal ? 'animate-fade-in-down' : 'animate-fade-out-up'
        } flex flex-col cursor-pointer`}
        key={heading}
        onClick={handleModalClick}
      >
        <div
          className={`${
            openModal ? 'animate-fade-in-down' : 'animate-fade-out-up'
          } flex items-top justify-center my-4`}
        >
          <time className="inline-flex items-center justify-center text-xs font-semibold uppercase w-32 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">
            {convertDate(date)}
          </time>
        </div>
        <div>
          {' '}
          <div className="text-lg text-center font-medium text-slate-900 dark:text-personal_blue-text">
            {heading}
          </div>
          <div>
            {' '}
            <RichTextOptions data={description} />
          </div>
          <div className="flex justify-center ">
            {' '}
            <ChevronUpIcon className="h-4 mt-6 cursor-pointer animate-bounce" />
          </div>
        </div>
      </div>
    );
  }
  return (
    <div
      className="flex flex-row cursor-pointer "
      key={heading}
      onClick={handleModalClick}
    >
      <div className="flex">
        <time className="inline-flex items-center justify-center text-xs font-semibold uppercase w-32 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">
          {convertDate(date)}
        </time>
      </div>
      <div className="flex flex-col w-full pl-6">
        {' '}
        <div className="flex text-md font-small text-slate-900 dark:text-personal_blue-text">
          {heading}
        </div>
        <div className="flex text-sm font-small dark:text-personal_blue-textTitle text-gray-800t">
          {shortDescription}
        </div>
        <div className="flex justify-end ">
          {' '}
          <ChevronDownIcon className="h-2 mt-6 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};
export default index;
