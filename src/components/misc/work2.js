import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import AnimateText from './AnimateText';
import rollingPlansLogo from '../../public/images/rollingplans.png';
import WorkSocial from '../WorkSocial';
import Work2Card from './Work2Card';
import useOnScreen from '../../customHooks/useOnScreen';

function work2({ works }) {
  const [ref, visible] = useOnScreen({ rootMargin: '-10px' });
  return (
    <section ref={ref} className="pb-20 lg:px-48 bg-personal_blue px-4">
      {visible && (
        <AnimateText
          headingCount={3}
          mainHeading="Other noteworthy projects"
          subHeading="View the Archive"
        />
      )}

      <div className="pt-16 grid grid-cols-1 md:grid-cols-2 gap-1">
        {works.map((work) => (
          <Work2Card key={work.sys.id} work={work} />
        ))}
      </div>
    </section>
  );
}

export default work2;
