import React from 'react';
import Hero from '../../components/Hero/Hero';
import FeaturedProducts from '../../components/FeaturedProducts/FeaturedProducts';
import EcoFeatures from '../../components/EcoFeatures/EcoFeatures';
import Certifications from '../../components/Certifications/Certifications';
import MadeInIndia from '../../components/MadeInIndia/MadeInIndia';
import './Home.scss';

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <EcoFeatures />
      <FeaturedProducts />
      <MadeInIndia />
      <Certifications />
    </div>
  );
};

export default Home;