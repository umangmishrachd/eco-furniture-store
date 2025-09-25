import React from 'react';
import './MadeInIndia.scss';

const MadeInIndia = () => {
  const achievements = [
    {
      number: '1000+',
      label: 'Jobs Created',
      icon: '👥'
    },
    {
      number: '50+',
      label: 'Cities Served',
      icon: '🏙️'
    },
    {
      number: '95%',
      label: 'Customer Satisfaction',
      icon: '😊'
    },
    {
      number: '100%',
      label: 'Made in India',
      icon: '🇮🇳'
    }
  ];

  return (
    <section className="made-in-india section">
      <div className="container">
        <div className="made-in-india-content">
          <div className="content-text">
            <div className="section-title text-left">
              <h2>Proudly Made in India</h2>
              <p>
                Supporting local communities, creating employment opportunities for youth, 
                and contributing to India's growth while maintaining international quality standards.
              </p>
            </div>

            <div className="benefits">
              <div className="benefit">
                <div className="benefit-icon">🌟</div>
                <div className="benefit-text">
                  <h4>Quality Craftsmanship</h4>
                  <p>Skilled Indian artisans bringing traditional techniques to modern designs.</p>
                </div>
              </div>
              
              <div className="benefit">
                <div className="benefit-icon">💡</div>
                <div className="benefit-text">
                  <h4>Innovation Hub</h4>
                  <p>Combining imported inspirations with local manufacturing excellence.</p>
                </div>
              </div>
              
              <div className="benefit">
                <div className="benefit-icon">🤝</div>
                <div className="benefit-text">
                  <h4>Community Impact</h4>
                  <p>Creating sustainable livelihoods and supporting local economies.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="achievements-grid">
            {achievements.map((achievement, index) => (
              <div 
                key={index} 
                className="achievement-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="achievement-icon">{achievement.icon}</div>
                <div className="achievement-number">{achievement.number}</div>
                <div className="achievement-label">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MadeInIndia;