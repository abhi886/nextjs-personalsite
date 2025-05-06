import React from 'react';
import Button from '../Button';
import Section from '../hoc/withComponentSection';
import ClickToScroll from '../ClickToScroll/index';

export default function GetHired() {
  return (
    <Section id="getHiredSection">
      <div className="flex flex-col px-4 h-full lg:px-56 md:px-24 justify-center items-center">
        <div className="container grid grid-cols-1 h-full content-center">
          <div className="flex justify-center text-center">
            <h2 className="text-3xl font-bold tracking-tight dark:text-personal_blue-textTitle xl:text-4xl">
              Have a project to discuss ?
            </h2>
          </div>
          <p className="block mt-4 dark:text-personal_blue-textParagraph">
            I do full stack web application development using php and javascript
            ecosystem. Feel free to say a friendly hello to me via
            abhishekmhrzn.14@gmail.com or by clicking the &quot;Lets Talk
            &quot;button available below.
          </p>

          <div className="flex flex-col items-center">
            <Button hrefTo="/contact" value="Lets Talk" />
          </div>
        </div>
        <div className="flex content-end">
          <ClickToScroll
            linkUpward="#heroSection"
            linkDownward="#footerSection"
            tooltipDownMessage="Tech Stack"
            tooltipUpMessage="My Works"
          />
        </div>
      </div>
    </Section>
  );
}
