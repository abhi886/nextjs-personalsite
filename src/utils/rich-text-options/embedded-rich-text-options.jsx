/* eslint-disable no-underscore-dangle */
/* eslint-disable react/destructuring-assignment */
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';
import Image from 'next/image';
import React from 'react';
import getEntryMap from '../getEntryMap';
import RICHTEXT_OPTIONS from './general-rich-text-options';
import Code from '../../components/code';

const EMBEDDED_RICHTEXT_OPTIONS = (links) => {
  const entryMap = getEntryMap(links.entries.block);
  const assetMap = links.assets && getEntryMap(links.assets.block);
  return {
    [BLOCKS.EMBEDDED_ENTRY]: (node) => {
      const entry = entryMap.get(node.data.target.sys.id);
      if (entry.__typename === 'CodeBlocks') {
        return (
          <div className="sm:col-span-10 space-y-3">
            <Code code={entry.codeBlockContent} language="javascript" />
          </div>
        );
      }
      if (entry.__typename === 'BasicDiv') {
        return (
          <div className="sm:col-span-10 space-y-3">
            {documentToReactComponents(
              entry.description.json,
              // eslint-disable-next-line @typescript-eslint/comma-dangle
              RICHTEXT_OPTIONS
            )}
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
};
export default EMBEDDED_RICHTEXT_OPTIONS;
