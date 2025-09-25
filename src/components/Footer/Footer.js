import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.scss';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <Link to="/" className="footer-logo">
              <div className="logo-icon">🌱</div>
              <span className="logo-text">
                Eco<strong>Home</strong>
              </span>
            </Link>
            <p className="footer-description">
              Creating beautiful, sustainable furniture that doesn't compromise 
              on style or environmental responsibility. Made in India with love.
            </p>
            <div className="social-links">
              <a href="#" className="social-link" aria-label="Facebook">📘</a>
              <a href="#" className="social-link" aria-label="Instagram">📷</a>
              <a href="#" className="social-link" aria-label="Twitter">🐦</a>
              <a href="#" className="social-link" aria-label="LinkedIn">💼</a>
            </div>
          </div>

          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/products">Products</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Categories</h3>
            <ul className="footer-links">
              <li><a href="/products?category=Seating">Seating</a></li>
              <li><a href="/products?category=Dining">Dining</a></li>
              <li><a href="/products?category=Storage">Storage</a></li>
              <li><a href="/products?category=Bedroom">Bedroom</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Support</h3>
            <ul className="footer-links">
              <li><a href="#faq">FAQ</a></li>
              <li><a href="#shipping">Shipping Info</a></li>
              <li><a href="#returns">Returns</a></li>
              <li><a href="#warranty">Warranty</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Contact Info</h3>
            <div className="contact-info">
              <p>📞 +91 98765 43210</p>
              <p>✉️ hello@ecohome.in</p>
              <p>📍 Mumbai, Maharashtra, India</p>
            </div>
            <div className="certifications-mini">
              <span className="cert-badge">🌱 ISO 14001</span>
              <span className="cert-badge">🌳 FSC Certified</span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; {currentYear} EcoHome. All rights reserved.</p>
            <div className="footer-bottom-links">
              <a href="#privacy">Privacy Policy</a>
              <a href="#terms">Terms of Service</a>
              <a href="#cookies">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;