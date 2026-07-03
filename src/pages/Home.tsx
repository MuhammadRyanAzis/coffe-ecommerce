import React from 'react';
import './Home.css';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Comparison from '../components/Comparison';
import Variants from '../components/Variants';
import BusinessOpportunity from '../components/BusinessOpportunity';
import Accreditation from '../components/Accreditation';
import HealthBenefits from '../components/HealthBenefits';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

const Home: React.FC = () => {
  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.05, rootMargin: '0px 0px -50px 0px' }
    );

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach((el) => observer.observe(el));

    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="landing-page">
      <Navbar />
      <Hero />
      <div className="reveal">
        <Features />
      </div>
      <div className="reveal">
        <Comparison />
      </div>
      <div className="reveal">
        <Variants />
      </div>
      <div className="reveal">
        <Accreditation />
      </div>
      <div className="reveal">
        <HealthBenefits />
      </div>
      <div className="reveal">
        <BusinessOpportunity />
      </div>
      <div className="reveal">
        <CTA />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
