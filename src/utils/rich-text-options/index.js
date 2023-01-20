import { BLOCKS, INLINES } from "@contentful/rich-text-types";
const RICHTEXT_OPTIONS = {
  renderNode: {
    [BLOCKS.HEADING_5]: (node, children) => {
      return (
        <h5 className='text-lg lg:text-xl text-personal_blue-text py-4'>
          {children}
        </h5>
      );
    },
    [BLOCKS.TABLE]: (node, children) => {
      return (
        <>
          <table className='w-full lg:w-2/3 my-6'>
            {" "}
            <tbody>{children} </tbody>
          </table>
        </>
      );
    },

    [BLOCKS.TABLE_HEADER_CELL]: (node, children) => {
      return (
        <th scope='col' className='bg-personal_blue-lightBlue w-20 '>
          {children}
        </th>
      );
    },
    [BLOCKS.TABLE_ROW]: (node, children) => {
      return <tr>{children}</tr>;
    },
    [BLOCKS.TABLE_CELL]: (node, children) => {
      return <td className='w-1/2'>{children}</td>;
    },
    [BLOCKS.HEADING_3]: (node, children) => {
      return (
        <h3 className='text-personal_blue-textParagraph leading-7 tracking-wider lg:text-2xl  lg:leading-10 lg:tracking-wider'>
          {children}
        </h3>
      );
    },
    [BLOCKS.HEADING_2]: (node, children) => {
      return (
        <h2 className='text-xl font-bold text-personal_blue-blue '>
          {children}
        </h2>
      );
    },
    [BLOCKS.HEADING_1]: (node, children) => {
      return (
        <h1 className='text-2xl font-extrabold  text-personal_blue-blue mb-4'>
          {children}
        </h1>
      );
    },
    [BLOCKS.PARAGRAPH]: (node, children) => {
      return (
        <p className='text-base lg:text-lg font-normal text-personal_blue-textParagraph'>
          {" "}
          {children}
        </p>
      );
    },
    [INLINES.HYPERLINK]: (node, children) => {
      return (
        <a
          href={node.data.uri}
          className='border-dotted border-b-2 border-personal_blue-text'
        >
          {children}
        </a>
      );
    },
  },
};

export default RICHTEXT_OPTIONS;
