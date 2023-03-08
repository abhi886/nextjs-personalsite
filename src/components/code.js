/* eslint-disable import/extensions */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect } from 'react';
import Prism from 'prismjs';
import 'prismjs/themes/prism-okaidia.css';
import 'prismjs/components/prism-jsx.js';
import 'prismjs/plugins/line-numbers/prism-line-numbers.js';
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';

export default function Code({ code, language }) {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <div className="Code">
      <pre className="line-numbers language-css">
        <code className={`language-${language}`}>{code}</code>
      </pre>
    </div>
  );
}
