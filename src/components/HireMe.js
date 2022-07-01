import React from "react";
import { useState, useEffect, useRef } from "react";
import AnimateText from "./AnimateText";

function HireMe({ useOnScreen }) {
  const [ref, visible] = useOnScreen({ rootMargin: "-10px" });
  return (
    <section ref={ref} className='pb-20 lg:mx-28 xl:mx-48' id='hireMe'>
      {visible && (
        <AnimateText headingCount={4} mainHeading={"How Can I Help You ??"} />
      )}
      <div className='pt-10'>
        <p className='mt-4 text-sm font-bold text-personal_blue-textParagraph'>
          Hire Me As A FrontEnd Developer | Backend Developer | Full Stack
          Developer{" "}
        </p>
        <p className='mt-4 text-sm font-bold text-personal_blue-textParagraph'>
          Build A Website For You . Single Page Website | Multiple Page Website
          | Blog Site
        </p>
        <p className='mt-4 text-sm font-bold text-personal_blue-textParagraph'>
          Collaborate With You
        </p>
        <p className='mt-4 text-sm font-bold text-personal_blue-textParagraph'>
          Play Chess With You
        </p>
      </div>
    </section>
  );
}

export default HireMe;
