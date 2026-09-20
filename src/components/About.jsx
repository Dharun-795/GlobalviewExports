import React from 'react';
import LazyImage from './LazyImage';

export default function About() {
  return (
    <section className="section-padding about-section" id="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-img-box">
            <LazyImage 
              src="/assets/images/IMG20240614113701.jpg" 
              alt="Global View Exports Facility" 
              objectFit="cover"
            />
            <div className="about-experience-badge">
              <span className="badge-title">Registered Member</span>
              <span className="badge-subtitle">Coir Board of India</span>
            </div>
          </div>

          <div className="about-content">
            <div className="badge-pill">
              <i className="fas fa-seedling"></i> COMPANY PROFILE
            </div>
            <h2>Growing a Greener Future</h2>
            <p className="about-lead">
              Global View Exports is an Indian exporter specialising in coconut and coir-based horticultural and agricultural products, operating out of Namakkal district in Tamil Nadu.
            </p>
            <p>
              Our work draws on Tamil Nadu's long-established coir belt — coco peat, grow bag substrate and coir fibre prepared from a natural, renewable resource and supplied to written specifications for growers, nurseries and greenhouse operators buying internationally.
            </p>

            {/* Resource to Market Flow */}
            <div className="resource-flow-card">
              <div className="resource-flow-title">FROM RESOURCE TO MARKET</div>
              <div className="resource-flow-steps">
                <div className="flow-step">
                  <span className="flow-num">1</span>
                  <span className="flow-text">Coconut</span>
                </div>
                <div className="flow-arrow"><i className="fas fa-arrow-right"></i></div>
                <div className="flow-step">
                  <span className="flow-num">2</span>
                  <span className="flow-text">Processing</span>
                </div>
                <div className="flow-arrow"><i className="fas fa-arrow-right"></i></div>
                <div className="flow-step">
                  <span className="flow-num">3</span>
                  <span className="flow-text">Coir & Coco Products</span>
                </div>
                <div className="flow-arrow"><i className="fas fa-arrow-right"></i></div>
                <div className="flow-step">
                  <span className="flow-num">4</span>
                  <span className="flow-text">Horticulture</span>
                </div>
                <div className="flow-arrow"><i className="fas fa-arrow-right"></i></div>
                <div className="flow-step">
                  <span className="flow-num">5</span>
                  <span className="flow-text">Global Markets</span>
                </div>
              </div>
            </div>

            <p className="resource-note">
              <strong>Coconut is the resource we build on.</strong> Coir fibre and coco peat are both co-products of coconut husk processing — prepared into material for horticulture and agriculture rather than left as a by-product with no further use.
            </p>

            <div className="about-points">
              <div className="about-point">
                <i className="fas fa-check"></i>
                <span>Triple Washed &amp; Desalinated</span>
              </div>
              <div className="about-point">
                <i className="fas fa-check"></i>
                <span>Optimal pH (5.5 to 6.8)</span>
              </div>
              <div className="about-point">
                <i className="fas fa-check"></i>
                <span>High Water Retention</span>
              </div>
              <div className="about-point">
                <i className="fas fa-check"></i>
                <span>Palletized &amp; Bulk Loading</span>
              </div>
            </div>

            <div className="sourcing-box">
              <h5>Raw Material Sourcing Belts</h5>
              <p>Pollachi • Kangeyam • Pattukottai • Peravurani • Thanjavur • Tenkasi • Nagercoil</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

