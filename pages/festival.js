import React from 'react';
import Festival from '../components/Festival/Festival';
import Footer from '../components/Home/Footer';

const FestivalPage = () => (
  <>
    <Festival />
    <Footer />
  </>
);

export default React.memo(FestivalPage);
