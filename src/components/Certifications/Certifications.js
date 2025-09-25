import React from 'react';
import { certifications } from '../../utils/mockData';
import './Certifications.scss';

const Certifications = () => {
  return (
    <section className="certifications section bg-light">
      <div className="container">
        <div className="section-title">
          <h2>Our Certifications</h2>
          <p>Quality and sustainability backed by international certifications and standards.</p>
        </div>

        <div className="certifications-grid">
          {certifications.map((cert, index) => (
            <div 
              key={cert.id} 
              className="certification-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="cert-image">
                <img src={cert.image} alt={cert.name} />
              </div>
              <div className="cert-info">
                <h3 className="cert-name">{cert.name}</h3>
                <p className="cert-description">{cert.description}</p>
                <div className="cert-validity">Valid: {cert.valid}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="certifications-footer">
          <p>
            All our products meet or exceed industry standards for environmental sustainability, 
            quality, and safety. We're committed to transparency in our manufacturing processes.
          </p>
          <button className="btn btn-outline">
            View All Certifications
          </button>
        </div>
      </div>
    </section>
  );
};

export default Certifications;