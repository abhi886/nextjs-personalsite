import React from "react";
import { useState, useEffect, useRef } from "react";
import AnimateText from "./AnimateText";
import rollingPlansLogo from "../../public/images/rollingplans.png";
import Image from "next/image";
import WorkSocial from "./WorkSocial";
import Work2Card from "./Work2Card";

function work2({ works, useOnScreen }) {
  const [ref, visible] = useOnScreen({ rootMargin: "-10px" });
  return (
    <section ref={ref} className='pb-20 lg:px-48'>
      {visible && (
        <AnimateText
          headingCount={3}
          mainHeading={"Other noteworthy projects"}
          subHeading={"View the Archive"}
        />
      )}

      <div className='pt-16  grid grid-cols-1 md:grid-cols-2'>
        {works.map((work) => (
          <Work2Card key={work.sys.id} work={work} />
        ))}
      </div>
    </section>
  );
}

export default work2;
