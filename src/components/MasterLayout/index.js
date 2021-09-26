import React from "react";
import Header from "../HeaderSection";
import Footer from "../FooterSection";

const MasterLayout = ({ children }) => {
  return (
    <React.Fragment>
      <Header />
      {children}
      {/* <Footer /> */}
    </React.Fragment>
  );
};

export default MasterLayout;
