import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const index = (props) => {
  const { strings } = props;
  const typedTextRef = useRef(strings);
  useEffect(() => {
    const options = {
      strings,
      typeSpeed: 100,
      backSpeed: 50,
      loop: true,
    };

    const typed = new Typed(typedTextRef.current, options);

    // Cleanup on component unmount
    return () => {
      typed.destroy();
    };
  }, []);

  return <span ref={typedTextRef} />;
};

export default index;
