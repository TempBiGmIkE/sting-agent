import React from 'react';
import AboutPage from '../components/AboutPage';
import Footer from '../components/Home/Footer';

const About = () => {
  return (
    <>
      <AboutPage />
      <Footer />
    </>
  );
};

export default React.memo(About);
