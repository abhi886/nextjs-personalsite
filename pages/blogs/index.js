import React from "react";
import HeaderSection from "../../src/components/HeaderSection";
import FooterSection from "../../src/components/FooterSection";

function index() {
  return (
    <>
      <div className='px-4 py-2 bg-personal_blue'>
        <HeaderSection></HeaderSection>
      </div>
      <div>
          
      </div>
      <div className='bg-personal_blue'>
        <FooterSection />
      </div>
    </>
  );
}

export default index;
