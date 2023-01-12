import React from "react";
import Layout from "../../src/components/OtherPageLayout";

function about() {
  return (
    <div className='h-screen'>
      Sorry For the Inconvinience. about page is currently under construction.
    </div>
  );
}

about.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default about;
