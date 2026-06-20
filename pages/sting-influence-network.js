import React from 'react';
import StingInfluenceNetwork from '../components/StingInfluenceNetwork';
import Footer from '../components/Home/Footer';

const InfluenceNetworkPage = () => (
  <>
    <StingInfluenceNetwork />
    <Footer />
  </>
);

export default React.memo(InfluenceNetworkPage);
