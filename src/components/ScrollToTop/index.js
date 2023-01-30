import React, { useState, useEffect } from 'react';
import { useWindowScroll } from 'react-use';

import { ChevronUpIcon } from '@heroicons/react/outline';

function ScrollToTop() {
  const { y: pageYOffset } = useWindowScroll();
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (pageYOffset > 700) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [pageYOffset]);

  const ScrollTop = () => window.scrollTo({ top: 0, behaviour: 'smooth' });
  if (!visible) {
    return false;
  }

  return (
    <div
      onKeyPress={() => {}}
      onClick={ScrollTop}
      role="button"
      tabIndex="0"
      className="fixed bottom-10 right-4 h-10 bg-transparent text-white z-20"
    >
      {' '}
      <ChevronUpIcon className="h-10 animate-bounce cursor-pointer" />
    </div>
  );
}

export default ScrollToTop;
