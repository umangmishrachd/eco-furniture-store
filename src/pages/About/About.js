import React from 'react';
import './About.scss';

const About = () => {
  const teamMembers = [
    {
      name: 'Rajesh Kumar',
      role: 'Founder & CEO',
      image: '/api/placeholder/200/200',
      description: 'Passionate about sustainable living and eco-friendly furniture.'
    },
    {
      name: 'Priya Sharma',
      role: 'Design Director',
      image: '/api/placeholder/200/200',
      description: 'Expert in modern furniture design with 10+ years experience.'
    },
    {
      name: 'Amit Patel',
      role: 'Sustainability Officer',
      image: '/api/placeholder/200/200',
      description: 'Ensuring our practices meet the highest environmental standards.'
    }
  ];

  const values = [
    {
      icon: '🌱',
      title: 'Sustainability First',
      description: 'Every decision we make prioritizes environmental impact and sustainability.'
    },
    {
      icon: '💡',
      title: 'Innovation',
      description: 'Combining traditional craftsmanship with modern design and technology.'
    },
    {
      icon: '🤝',
      title: 'Community',
      description: 'Supporting local communities and creating meaningful employment opportunities.'
    },
    {
      icon: '✨',
      title: 'Quality',
      description: 'Delivering exceptional quality that stands the test of time.'
    }
  ];

  return (
    <div className="about-page">
      <div className="container">
        {/* Hero Section */}
        <section className="about-hero">
          <div className="hero-content">
            <h1>About EcoHome</h1>
            <p className="hero-description">
              We're on a mission to revolutionize the furniture industry by creating 
              beautiful, sustainable pieces that don't compromise on style or environmental responsibility.
            </p>
          </div>
          <div className="hero-image">
            <div className="image-placeholder">
              {/* SVG illustration of sustainable furniture making */}
              <svg viewBox="0 0 400 300" className="about-illustration">
                <rect x="50" y="100" width="300" height="150" rx="20" fill="#f8f9fa" />
                <rect x="70" y="120" width="80" height="60" rx="10" fill="#4a7c59" />
                <rect x="170" y="120" width="80" height="60" rx="10" fill="#8bc34a" />
                <rect x="270" y="120" width="60" height="60" rx="10" fill="#2d5a27" />
                <circle cx="200" cy="50" r="30" fill="#ffc107" />
                <path d="M200 20 L180 80 L220 80 Z" fill="#32cd32" />
                <text x="200" y="220" textAnchor="middle" fill="#2d5a27" fontSize="16" fontWeight="bold">Made in India</text>
              </svg>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="our-story section">
          <div className="story-content">
            <div className="story-text">
              <h2>Our Story</h2>
              <p>
                Founded in 2020, EcoHome began with a simple belief: beautiful furniture 
                shouldn't come at the cost of our planet's health. Our founder, inspired by 
                traditional Indian craftsmanship and modern sustainability practices, set out 
                to create a furniture company that would make a positive impact.
              </p>
              <p>
                Today, we're proud to be at the forefront of sustainable furniture manufacturing 
                in India, combining age-old techniques with innovative eco-friendly materials 
                and processes.
              </p>
              <div className="story-stats">
                <div className="stat">
                  <div className="stat-number">1000+</div>
                  <div className="stat-label">Happy Customers</div>
                </div>
                <div className="stat">
                  <div className="stat-number">500+</div>
                  <div className="stat-label">Products Sold</div>
                </div>
                <div className="stat">
                  <div className="stat-number">100%</div>
                  <div className="stat-label">Eco-Friendly</div>
                </div>
              </div>
            </div>
            <div className="story-image">
              <img src="/api/placeholder/500/400" alt="Our workshop" />
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="our-values section bg-light">
          <div className="section-title">
            <h2>Our Values</h2>
            <p>The principles that guide everything we do</p>
          </div>
          <div className="values-grid">
            {values.map((value, index) => (
              <div 
                key={index} 
                className="value-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="value-icon">{value.icon}</div>
                <h3 className="value-title">{value.title}</h3>
                <p className="value-description">{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Our Team */}
        <section className="our-team section">
          <div className="section-title">
            <h2>Meet Our Team</h2>
            <p>The passionate people behind EcoHome</p>
          </div>
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <div 
                key={index} 
                className="team-member"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="member-image">
                  <img src={member.image} alt={member.name} />
                </div>
                <div className="member-info">
                  <h3 className="member-name">{member.name}</h3>
                  <p className="member-role">{member.role}</p>
                  <p className="member-description">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Sustainability Commitment */}
        <section className="sustainability section bg-light">
          <div className="sustainability-content">
            <div className="sustainability-text">
              <h2>Our Sustainability Commitment</h2>
              <div className="commitments">
                <div className="commitment">
                  <h4>🌳 Responsible Sourcing</h4>
                  <p>All our wood comes from FSC-certified sustainable forests.</p>
                </div>
                <div className="commitment">
                  <h4>♻️ Circular Design</h4>
                  <p>Every piece is designed for longevity and end-of-life recyclability.</p>
                </div>
                <div className="commitment">
                  <h4>🏭 Clean Manufacturing</h4>
                  <p>Zero-waste production processes and renewable energy usage.</p>
                </div>
                <div className="commitment">
                  <h4>📦 Eco Packaging</h4>
                  <p>Biodegradable and recycled packaging materials only.</p>
                </div>
              </div>
            </div>
            <div className="sustainability-impact">
              <h3>Our Impact So Far</h3>
              <div className="impact-stats">
                <div className="impact-stat">
                  <span className="impact-number">50 tons</span>
                  <span className="impact-label">CO₂ Saved</span>
                </div>
                <div className="impact-stat">
                  <span className="impact-number">10,000</span>
                  <span className="impact-label">Trees Planted</span>
                </div>
                <div className="impact-stat">
                  <span className="impact-number">1000+</span>
                  <span className="impact-label">Jobs Created</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;