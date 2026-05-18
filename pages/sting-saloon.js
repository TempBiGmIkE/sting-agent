import React from 'react';
import StingSaloon from '../components/StingSaloon/StingSaloon';
import Footer from '../components/Home/Footer';

const SaloonPage = () => (
  <>
    <StingSaloon />
    <Footer />
  </>
);

export default React.memo(SaloonPage);
