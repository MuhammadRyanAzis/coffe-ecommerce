import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Comparison from '../components/Comparison';
import Variants from '../components/Variants';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

const Home: React.FC = () => {
  return (
    <div className="landing-page">
      <Navbar />
      <Hero />
      <Features />
      <Comparison />
      <Variants />
      <CTA />
      <Footer />
    </div>
  );
};

export default Home;
