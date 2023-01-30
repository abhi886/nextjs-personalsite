/* eslint-disable react/destructuring-assignment */
/* eslint-disable consistent-return */
import React from 'react';
import { BLOCKS, INLINES } from '@contentful/rich-text-types';

const renderOptions = {
  renderNode: {
    [INLINES.EMBEDDED_ENTRY]: (node) => {
      // target the contentType of the EMBEDDED_ENTRY to display as you need
      if (node.data.target.sys.contentType.sys.id === 'blogPost') {
        return (
          <a href={`/blog/${node.data.target.fields.slug}`}>
            {' '}
            {node.data.target.fields.title}
          </a>
        );
      }
    },
    [BLOCKS.EMBEDDED_ENTRY]: (node) => {
      // target the contentType of the EMBEDDED_ENTRY to display as you need
      if (node.data.target.sys.contentType.sys.id === 'codeBlock') {
        return (
          <pre>
            <code>{node.data.target.fields.code}</code>
          </pre>
        );
      }

      if (node.data.target.sys.contentType.sys.id === 'videoEmbed') {
        return (
          <iframe
            src={node.data.target.fields.embedUrl}
            height="100%"
            width="100%"
            frameBorder="0"
            scrolling="no"
            title={node.data.target.fields.title}
            allowFullScreen
          />
        );
      }
    },

    [BLOCKS.EMBEDDED_ASSET]: (node) => (
      // render the EMBEDDED_ASSET as you need
      <img
        src={`https://${node.data.target.fields.file.url}`}
        height={node.data.target.fields.file.details.image.height}
        width={node.data.target.fields.file.details.image.width}
        alt={node.data.target.fields.description}
      />
    ),
  },
};
export default renderOptions;
