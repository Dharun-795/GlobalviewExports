import React from 'react';

export default function FeaturesBar() {
  return (
    <section className="features-bar">
      <div className="container">
        <div className="features-grid">
          <div className="feature-item">
            <i className="fas fa-leaf"></i>
            <div>
              <h4>100% Organic & Renewable</h4>
              <p>Sustainable coconut coir substrate, ideal alternative to peat moss.</p>
            </div>
          </div>
          <div className="feature-item">
            <i className="fas fa-water"></i>
            <div>
              <h4>Triple Washed & Screened</h4>
              <p>Freshwater desalinated for optimal EC and root nutrient absorption.</p>
            </div>
          </div>
          <div className="feature-item">
            <i className="fas fa-ship"></i>
            <div>
              <h4>Direct Sea Port Logistics</h4>
              <p>Direct routes to Tuticorin, Cochin, and Chennai container terminals.</p>
            </div>
          </div>
          <div className="feature-item">
            <i className="fas fa-file-contract"></i>
            <div>
              <h4>Export Certified</h4>
              <p>Complete Phytosanitary, Fumigation, and Certificate of Origin documentation.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
