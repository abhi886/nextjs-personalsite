/* eslint-disable no-underscore-dangle */
/* eslint-disable react/destructuring-assignment */

import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import React from 'react';
import renderEmbeddedNodeOptions from './embedded-rich-text-options';
import richtextGeneralNodeOptions from './general-rich-text-options';

function renderOptions(links = '') {
  if (links.entries || links.assets) {
    return {
      renderNode: {
        ...richtextGeneralNodeOptions.renderNode,
        ...renderEmbeddedNodeOptions(links),
      },
    };
  }
  return {
    ...richtextGeneralNodeOptions.renderNode,
  };
}

function richTextOptions({ data: { json, links } }) {
  return <>{documentToReactComponents(json, renderOptions(links))}</>;
}

export default richTextOptions;
