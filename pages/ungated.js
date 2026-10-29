import React from 'react';
import Footer from '../components/Home/Footer';
import Ungated from '../components/Ungated/Ungated';

const UngatedPage = () => (
  <>
    <Ungated />
    <Footer />
  </>
);

export default React.memo(UngatedPage);
