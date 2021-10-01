import React from "react";
import Header from "../HeaderSection";
import Footer from "../FooterSection";
import Head from "next/head";

const MasterLayout = ({ children }) => {
  return (
    <React.Fragment>
      <Head>
        <title>Abhishekh Maharjan</title>
      </Head>
      <Header />
      {children}
      {/* <Footer /> */}
    </React.Fragment>
  );
};

export default MasterLayout;
