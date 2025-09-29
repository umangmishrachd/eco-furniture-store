import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.scss';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Sustainable Furniture for a
              <span className="text-secondary"> Greener Tomorrow</span>
            </h1>
            <p className="hero-description">
              Discover our collection of eco-friendly, modern furniture crafted 
              with recyclable materials and antifungal treatments. Made in India 
              with love for the environment and your home.
            </p>
            <div className="hero-actions">
              <Link to="/products" className="btn btn-primary btn-large">
                Explore Collection
              </Link>
              <Link to="/about" className="btn btn-outline btn-large">
                Learn More
              </Link>
            </div>
            <div className="hero-stats">
              <div className="stat">
                <div className="stat-number">100%</div>
                <div className="stat-label">Eco-Friendly</div>
              </div>
              <div className="stat">
                <div className="stat-number">500+</div>
                <div className="stat-label">Happy Customers</div>
              </div>
              <div className="stat">
                <div className="stat-number">50+</div>
                <div className="stat-label">Product Designs</div>
              </div>
            </div>
          </div>
          <div className="hero-image">
            <div className="hero-illustration">
              {/* SVG Illustration */}
              <svg viewBox="0 0 400 300" className="furniture-illustration">
                {/* Modern Sofa */}
                <rect x="50" y="180" width="120" height="60" rx="15" fill="#4a7c59" />
                <rect x="40" y="170" width="20" height="70" rx="10" fill="#2d5a27" />
                <rect x="150" y="170" width="20" height="70" rx="10" fill="#2d5a27" />
                <rect x="60" y="140" width="100" height="40" rx="20" fill="#8bc34a" />
                
                {/* Coffee Table */}
                <ellipse cx="250" cy="220" rx="60" ry="20" fill="#d4a574" />
                <rect x="240" y="220" width="20" height="30" fill="#8b4513" />
                <rect x="260" y="220" width="20" height="30" fill="#8b4513" />
                
                {/* Plant */}
                <ellipse cx="320" cy="240" rx="15" ry="10" fill="#8b4513" />
                <path d="M320 200 Q310 220 320 240 Q330 220 320 200" fill="#228b22" />
                <path d="M320 190 Q300 210 320 240 Q340 210 320 190" fill="#32cd32" />
                
                {/* Decorative elements */}
                <circle cx="100" cy="100" r="8" fill="#ffc107" opacity="0.7" />
                <circle cx="300" cy="80" r="12" fill="#8bc34a" opacity="0.5" />
                <circle cx="150" cy="60" r="6" fill="#ffc107" opacity="0.6" />
              </svg>
            </div>
            <div className="floating-badges">
              <div className="badge badge-1">
                <span className="badge-icon">🌱</span>
                <span>100% Eco-Friendly</span>
              </div>
              <div className="badge badge-2">
                <span className="badge-icon">🇮🇳</span>
                <span>Made in India</span>
              </div>
              <div className="badge badge-3">
                <span className="badge-icon">♻️</span>
                <span>Recyclable</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;