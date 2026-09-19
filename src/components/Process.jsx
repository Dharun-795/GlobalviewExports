import React from 'react';

const processSteps = [
  {
    num: '01',
    title: 'Raw Material Selection',
    desc: 'Matured coconut husks sourced from verified plantations in Pollachi, Kangeyam, and Pattukottai.'
  },
  {
    num: '02',
    title: 'Washing & Desalination',
    desc: 'Substrates washed in freshwater lagoons to leach out sodium salts and reach Low EC standards.'
  },
  {
    num: '03',
    title: 'Natural Sun Drying',
    desc: 'Spread on clean concrete drying yards until moisture is reduced strictly below 15%.'
  },
  {
    num: '04',
    title: 'Rotary Sieving & Screening',
    desc: 'Rotary sieves remove fine micro-dust, heavy sand particles, and unwanted coarse fibers.'
  },
  {
    num: '05',
    title: '5:1 Compaction',
    desc: 'High-tonnage hydraulic presses compress pith into uniform 5kg blocks, grow slabs, or briquettes.'
  },
  {
    num: '06',
    title: 'Palletizing & Loading',
    desc: 'Heat-treated wooden pallets, stretch wrapped with corner guards, loaded into 40\' HC containers.'
  }
];

const galleryItems = [
  { img: 'IMG20240812164310.jpg', label: 'Raw Material Selection' },
  { img: '20260801_143112.jpg', label: 'Husk and Coir Collection' },
  { img: '20260801_143515.jpg', label: 'Brick Molding' },
  { img: 'IMG20240830101256.jpg', label: 'Packing' }
];

export default function Process() {
  return (
    <section className="section-padding process-section" id="process">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Manufacturing & Quality Control</h2>
          <p className="section-subtitle">
            Standardized 6-stage manufacturing workflow from raw coconut husk processing to container dispatch.
          </p>
        </div>

        <div className="process-grid">
          {processSteps.map((step, idx) => (
            <div className="process-card" key={idx}>
              <span className="process-num">{step.num}</span>
              <h4>{step.title}</h4>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>

        <div className="gallery-grid">
          {galleryItems.map((item, idx) => (
            <div className="gallery-card" key={idx}>
              <img src={`/assets/images/${item.img}`} alt={item.label} />
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
