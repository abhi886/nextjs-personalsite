import React from "react";
import { useState, useEffect } from "react";
import AnimateText from "./AnimateText";

function HireMe() {
  const [isVisible, setIsVisible] = useState(false);
  const listenToScroll = () => {
    let heightToShowFrom = 1721;
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
    <section className='pb-16'>
      {isVisible && (
        <AnimateText headingCount={4} mainHeading={"How Can I Help You ??"} />
      )}
      <div className='pt-10 pl-6'>
        <p className='mt-4 text-sm font-bold text-personal_blue-textParagraph'>
          I Want To Hire You As A FrontEnd Developer | Backend Developer | Full
          Stack Developer{" "}
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
