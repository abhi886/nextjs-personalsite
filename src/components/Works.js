import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import WorkCard from "./workCard";

import AnimateText from "./AnimateText";

function Works({ works, useOnScreen }) {
  const [ref, visible] = useOnScreen({ rootMargin: "-10px" });

  return (
    <section ref={ref} className='flex flex-col pb-20'>
      {visible ? <AnimateText headingCount={2} mainHeading={"My Works"} /> : ""}
      <div className='pt-16 self-center grid grid-cols-1 space-y-2 md:space-y-0  md:grid-cols-2 lg:grid-cols-3 '>
        {works.map((work) => (
          <WorkCard key={work.sys.id} work={work}></WorkCard>
        ))}
      </div>
    </section>
  );
}

export default Works;
