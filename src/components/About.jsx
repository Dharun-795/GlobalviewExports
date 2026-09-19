import React from 'react';

export default function About() {
  return (
    <section className="section-padding about-section" id="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-img-box">
            <img src="/assets/images/IMG20240614113701.jpg" alt="Global View Exports Facility" />
          </div>

          <div className="about-content">
            <h2>About Global View Exports</h2>
            <p className="about-lead">
              Registered member of the Coir Board, Government of India, based in Tiruchengode, Tamil Nadu.
            </p>
            <p>
              Global View Exports is an established manufacturer and exporter of Coir Fibre, Coco Peat Blocks, Hydroponic Grow Bags, and allied coir products. We cater to global agricultural importers, hydroponic greenhouse growers, and substrate distributors with strict quality assurance and on-time shipment schedules.
            </p>

            <div className="about-points">
              <div className="about-point">
                <i className="fas fa-check"></i>
                <span>Triple Washed & Desalinated</span>
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
                <span>Palletized & Bulk Loading</span>
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
