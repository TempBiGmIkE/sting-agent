import React from 'react';
import StingCollective from '../components/StingCollective/StingCollective';
import Footer from '../components/Home/Footer';

const CollectivePage = () => (
  <>
    <StingCollective />
    <Footer />
  </>
);

export default React.memo(CollectivePage);
