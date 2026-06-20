import React from 'react';
import Awards from '../components/Awards/Awards';
import Footer from '../components/Home/Footer';

const AwardsPage = () => (
  <>
    <Awards />
    <Footer />
  </>
);

export default React.memo(AwardsPage);
