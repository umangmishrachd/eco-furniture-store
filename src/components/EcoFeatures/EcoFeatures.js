import React from 'react';
import './EcoFeatures.scss';

const EcoFeatures = () => {
  const features = [
    {
      id: 1,
      icon: '🌱',
      title: 'Eco-Friendly Materials',
      description: 'Made from sustainable, recyclable materials that don\'t harm the environment.'
    },
    {
      id: 2,
      icon: '🦠',
      title: 'Antifungal Treatment',
      description: 'All our fabrics and woods are treated with eco-friendly antifungal solutions.'
    },
    {
      id: 3,
      icon: '♻️',
      title: 'Recyclable & Reusable',
      description: 'Every piece is designed for longevity and can be fully recycled at end of life.'
    },
    {
      id: 4,
      icon: '🏠',
      title: 'Modern Design',
      description: 'Contemporary western modular designs with imported inspirations.'
    },
    {
      id: 5,
      icon: '🇮🇳',
      title: 'Made in India',
      description: 'Proudly manufactured in India, supporting local communities and employment.'
    },
    {
      id: 6,
      icon: '👥',
      title: 'Youth Employment',
      description: 'Creating opportunities for young talent and skilled craftspeople.'
    }
  ];

  return (
    <section className="eco-features section">
      <div className="container">
        <div className="section-title">
          <h2>Why Choose EcoHome?</h2>
          <p>Our commitment to sustainability goes beyond just materials. We're building a better future, one piece of furniture at a time.</p>
        </div>
        
        <div className="features-grid">
          {features.map((feature, index) => (
            <div 
              key={feature.id} 
              className="feature-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="feature-icon">
                {feature.icon}
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EcoFeatures;