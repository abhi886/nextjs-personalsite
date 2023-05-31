/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';
import Image from 'next/image';
import RICHTEXT_OPTIONS from '../rich-text-general-options';
import getEntryMap from '../getEntryMap';
import Code from '../../components/code';
import getAssetMap from '../getAssetMap';

function renderOptions(links) {
  const entryMap = getEntryMap(links);
  const assetMap = getAssetMap(links);
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
    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      const asset = assetMap.get(node.data.target.sys.id);
      return (
        <Image
          src={asset.url}
          alt={asset.description}
          width={asset.width}
          height={asset.height}
        />
      );
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
