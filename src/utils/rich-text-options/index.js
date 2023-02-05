/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { BLOCKS, INLINES } from '@contentful/rich-text-types';

const RICHTEXT_OPTIONS = {
  renderNode: {
    [BLOCKS.UL_LIST]: (node, children) => (
      <ul className="list-disc pl-4 text-personal_blue-text"> {children}</ul>
    ),
    [BLOCKS.LIST_ITEM]: (node, children) => <li> {children}</li>,
    [BLOCKS.TABLE]: (node, children) => (
      <table className="table-auto m-0 w-full">
        {' '}
        <tbody>{children} </tbody>
      </table>
    ),

    [BLOCKS.TABLE_HEADER_CELL]: (node, children) => (
      <th scope="col" className="bg-personal_blue-lightBlue w-20 ">
        {children}
      </th>
    ),
    [BLOCKS.TABLE_ROW]: (node, children) => (
      <tr className="border-0 w-1/2">{children}</tr>
    ),
    [BLOCKS.TABLE_CELL]: (node, children) => (
      <td className="p-0">{children}</td>
    ),
    [BLOCKS.HEADING_5]: (node, children) => (
      <h5 className="text-personal_blue-text py-2">{children}</h5>
    ),
    [BLOCKS.HEADING_4]: (node, children) => (
      <h5 className="text-personal_blue-text">{children}</h5>
    ),
    [BLOCKS.HEADING_3]: (node, children) => (
      <h3 className="text-personal_blue-textParagraph">{children}</h3>
    ),
    [BLOCKS.HEADING_2]: (node, children) => (
      <h2 className="text-personal_blue-blue ">{children}</h2>
    ),
    [BLOCKS.HEADING_1]: (node, children) => (
      <h1 className="text-personal_blue-blue mb-4">{children}</h1>
    ),
    [BLOCKS.PARAGRAPH]: (node, children) => (
      <p className="text-personal_blue-textParagraph prose max-w-none prose-gray dark:prose-invert">
        {' '}
        {children}
      </p>
    ),
    [INLINES.HYPERLINK]: (node, children) => (
      <a
        href={node.data.uri}
        className="border-dotted border-b-2 border-personal_blue-text"
      >
        {children}
      </a>
    ),
  },
};

export default RICHTEXT_OPTIONS;
