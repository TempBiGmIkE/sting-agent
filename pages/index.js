import React from 'react';
import BannerSection from '../components/Home/Banner';
import ContentSection from '../components/Home/Content';
import FeaturedSection from '../components/Home/FeaturedProject';
import AboutSection from '../components/Home/About';
import ContactSection from '../components/Home/Contact';
import Footer from '../components/Home/Footer';
import NewsletterWaitlist from '../components/NewsletterWaitlist/NewsletterWaitlist';

const Home = () => {
  return (
    <>
      <BannerSection />
      <ContentSection />
      <FeaturedSection />
      <AboutSection />
      <ContactSection />
      <Footer />
      <NewsletterWaitlist />
    </>
  );
};

export default React.memo(Home);
