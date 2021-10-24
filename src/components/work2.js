import React from "react";
import { useState, useEffect } from "react";
import AnimateText from "./AnimateText";
import rollingPlansLogo from "../../public/images/rollingplans.png";
import Image from "next/image";
import WorkSocial from "./WorkSocial";
import Work2Card from "./Work2Card";

function work2({ works }) {
  const [isVisible, setIsVisible] = useState(false);
  const listenToScroll = () => {
    let heightToShowFrom = 1419;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    if (winScroll > heightToShowFrom) {
      // isVisible && // to limit setting state only the first time
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);
  return (
    <section className='pb-20'>
      {isVisible && (
        <AnimateText
          headingCount={3}
          mainHeading={"Other noteworthy projects"}
          subHeading={"View the Archive"}
        />
      )}

      <div className='pt-16 p-3  grid grid-cols-1 md:grid-cols-2'>
        {works.map((work) => (
          <Work2Card key={work.sys.id} work={work} />
        ))}
      </div>
    </section>
  );
}

export default work2;
