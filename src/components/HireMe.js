import React from "react";

function HireMe() {
  return (
    <section className='flex flex-col pb-32'>
      <h2 className='text-2xl font-semibold pt-8 pb-10 text-personal_blue-textTitle'>
        {" "}
        <span className='text-sm text-personal_blue-text'> 04. </span> How Can I
        Help You ?? <br />
      </h2>
      <div className='border-2 p-4 border-personal_blue-text'>
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
