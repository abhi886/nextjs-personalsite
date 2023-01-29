import React from 'react';
import Layout from '../../src/components/LandingPageLayout';
import ContactMe from '../../src/components/ContactMe';

function index() {
  return <ContactMe />;
}

index.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default index;
