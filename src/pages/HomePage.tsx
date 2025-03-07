import React from 'react';
import Hero from '../components/sections/Hero';
import Features from '../components/sections/Features';
import HowItWorks from '../components/sections/HowItWorks';
import Testimonials from '../components/sections/Testimonials';
import FeaturedResources from '../components/sections/FeaturedResources';
import FeaturedBlog from '../components/sections/FeaturedBlog';
import CallToAction from '../components/sections/CallToAction';
import Newsletter from '../components/sections/Newsletter';

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <Features />
      <HowItWorks />
      <FeaturedResources />
      <Testimonials />
      <FeaturedBlog />
      <CallToAction />
      <Newsletter />
    </>
  );
};

export default HomePage;
