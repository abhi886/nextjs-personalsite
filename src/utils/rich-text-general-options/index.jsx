import React from 'react';
import { BLOCKS, INLINES } from '@contentful/rich-text-types';

const RICHTEXT_OPTIONS = {
  renderNode: {
    [BLOCKS.QUOTE]: (node, children) => (
      <blockquote className="text-base italic font-semibold ">
        <svg
          aria-hidden="true"
          className="w-6 h-6 dark:text-personal_blue-text"
          viewBox="0 0 24 27"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
            fill="currentColor"
          />
        </svg>
        <p className="pl-4 pt-4">{children}</p>
      </blockquote>
    ),
    [BLOCKS.HR]: () => <br />,

    [BLOCKS.UL_LIST]: (node, children) => (
      <ul className="list-disc pl-8 "> {children}</ul>
    ),
    [BLOCKS.LIST_ITEM]: (node, children) => (
      <li className="pl-2"> {children}</li>
    ),
    [BLOCKS.TABLE]: (node, children) => (
      <table className="table-auto m-0 w-full">
        {' '}
        <tbody>{children} </tbody>
      </table>
    ),

    [BLOCKS.TABLE_HEADER_CELL]: (node, children) => (
      <th scope="col" className="bg-personal_blue-lightBlue w-full ">
        {children}
      </th>
    ),
    [BLOCKS.TABLE_ROW]: (node, children) => (
      <tr className="border-1 w-1/2">{children}</tr>
    ),
    [BLOCKS.TABLE_CELL]: (node, children) => (
      <td className="p-0">{children}</td>
    ),
    [BLOCKS.HEADING_6]: (node, children) => (
      <h6 className="text-gray-100 py-2">{children}</h6>
    ),
    [BLOCKS.HEADING_5]: (node, children) => (
      <h5 className="text-personal_blue-text py-2">{children}</h5>
    ),
    [BLOCKS.HEADING_4]: (node, children) => (
      <h4 className=" tracking-wider lg:text-2xl  lg:leading-10 lg:tracking-wider">
        {children}
      </h4>
    ),
    [BLOCKS.HEADING_3]: (node, children) => (
      <h3 className="pt-10 sm:pt-0 text-lg font-semibold">{children}</h3>
    ),
    [BLOCKS.HEADING_2]: (node, children) => (
      <h2 className="tracking-wider lg:text-xl">{children}</h2>
    ),
    [BLOCKS.HEADING_1]: (node, children) => (
      <h1 className="text-personal_blue-blue  text-3xl font-semibold pb-10 text-center mx-auto dark:text-gray-300">
        {children}
      </h1>
    ),
    [BLOCKS.PARAGRAPH]: (node, children) => (
      <p className="text-gray-200 prose max-w-none prose-gray  "> {children}</p>
    ),
    [INLINES.HYPERLINK]: (node, children) => (
      <a
        href={node.data.uri}
        className="text-personal_blue-textParagraph  border-personal_blue-text"
      >
        {children}
      </a>
    ),
  },
};
export default RICHTEXT_OPTIONS;
