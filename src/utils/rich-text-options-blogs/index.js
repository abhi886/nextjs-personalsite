/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';
import RICHTEXT_OPTIONS from '../rich-text-general-options';
import getEntryMap from '../getEntryMap';
import Code from '../../components/code';

function renderOptions(links) {
  const entryMap = getEntryMap(links);
  const aboutRenderNode = {
    [BLOCKS.EMBEDDED_ENTRY]: (node) => {
      const entry = entryMap.get(node.data.target.sys.id);
      // eslint-disable-next-line no-underscore-dangle
      if (entry.__typename === 'CodeBlocks') {
        return (
          <div className="sm:col-span-10 space-y-3">
            <Code code={entry.codeBlockContent} language="javascript" />
          </div>
        );
      }
      return null;
    },
  };

  return {
    renderNode: {
      ...RICHTEXT_OPTIONS.renderNode,
      ...aboutRenderNode,
    },
  };
}

function richTextOptions({ data: { json, links } }) {
  return <>{documentToReactComponents(json, renderOptions(links))}</>;
}

export default richTextOptions;
