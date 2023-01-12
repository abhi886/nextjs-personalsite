import React from "react";
import Layout from "../../src/components/OtherPageLayout";

function index() {
  return (
    <div className='h-screen'>
      Contact page is currently under construction. Sorry For the Inconvinience.
    </div>
  );
}

index.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default index;
