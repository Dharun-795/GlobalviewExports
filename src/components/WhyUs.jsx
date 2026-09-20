import React from 'react';
import LazyImage from './LazyImage';

const whyFeatures = [
  {
    icon: 'fas fa-map-marked-alt',
    title: 'Indian Sourcing',
    desc: 'Pure coconut-based products directly sourced from Tamil Nadu’s renowned coconut and coir belt.'
  },
  {
    icon: 'fas fa-th-large',
    title: 'Comprehensive Product Range',
    desc: 'From low EC 5kg blocks and custom grow bags to raw fiber bales and specialized husk chips.'
  },
  {
    icon: 'fas fa-globe-americas',
    title: 'Export Oriented',
    desc: 'Strictly built for professional international B2B buyers with strict quality controls and ISPM-15 packaging.'
  },
  {
    icon: 'fas fa-seedling',
    title: '100% Nature Based',
    desc: 'Sustainable, organic growing media processed naturally from renewable coconut husk resources.'
  },
  {
    icon: 'fas fa-handshake',
    title: 'Buyer Focused',
    desc: 'Attentive customization to exact buyer requirements, crop specifications, and packaging branding.'
  },
  {
    icon: 'fas fa-comments',
    title: 'Professional Communication',
    desc: 'Clear, transparent, and prompt business correspondence through every stage of inquiry and shipment.'
  }
];

export default function WhyUs() {
  return (
    <section className="section-padding why-us-section" id="why-us">
      <div className="container">
        <div className="section-header">
          <div className="badge-pill">
            <i className="fas fa-check-circle"></i> WHY CHOOSE US
          </div>
          <h2 className="section-title">Why Global View Exports</h2>
          <p className="section-subtitle">
            Supplying international growers, nurseries, and distributors with dependable quality and transparent trade operations.
          </p>
        </div>

        <div className="why-us-grid">
          {whyFeatures.map((item, idx) => (
            <div className="why-card" key={idx}>
              <div className="why-icon-box">
                <i className={item.icon}></i>
              </div>
              <div className="why-card-content">
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="why-quote-banner">
          <div className="why-quote-image">
            <LazyImage 
              src="/assets/images/20250118_114701.jpg" 
              alt="Finished stock held under cover ahead of container loading" 
              objectFit="cover"
            />
            <span className="image-caption">Finished stock held under cover ahead of container loading</span>
          </div>
          <div className="why-quote-text">
            <i className="fas fa-quote-left quote-mark"></i>
            <blockquote>
              “Consistent material, clear communication, and an order packed the way it was agreed.”
            </blockquote>
            <p className="quote-author">— Global View Exports Commitment</p>
          </div>
        </div>
      </div>
    </section>
  );
}
