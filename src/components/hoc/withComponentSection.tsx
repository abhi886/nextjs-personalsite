import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode | ReactNode[];
  id: string | null;
}

const withComponentSection = ({ children, id }: Props) => {
  return (
    <section id={id} className="h-screen w-full dark:bg-personal_blue">
      {children}
    </section>
  );
};

export default withComponentSection;
