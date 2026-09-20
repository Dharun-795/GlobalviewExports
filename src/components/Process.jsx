import React from 'react';
import LazyImage from './LazyImage';

const processWorkflow = [
  { step: '01', title: 'Source', desc: 'Matured coconut husks sourced across Tamil Nadu’s prime coir belt.' },
  { step: '02', title: 'Process', desc: 'Screening, triple-washing, de-fibering, and natural sun drying below 15% moisture.' },
  { step: '03', title: 'Inspect', desc: 'Material lab-checked for exact EC, pH, expansion yield, and fiber content.' },
  { step: '04', title: 'Pack', desc: 'Hydraulically compressed 5:1 into blocks or grow bags, UV wrapped & palletized.' },
  { step: '05', title: 'Export', desc: 'Containerized FCL shipments dispatched smoothly through southern Indian sea ports.' }
];

const galleryItems = [
  { img: '20260801_143517.jpg', label: 'Defibring and screening line' },
  { img: 'IMG20240830101256.jpg', label: 'Material labelled and checked to grade before packing' },
  { img: 'IMG20240812165105.jpg', label: 'Screened coir pith drying in the yard before compression' },
  { img: '20260801_143340.jpg', label: 'Packed and loaded for despatch' }
];

export default function Process() {
  return (
    <section className="section-padding process-section" id="process">
      <div className="container">
        <div className="section-header">
          <div className="badge-pill">
            <i className="fas fa-cogs"></i> QUALITY CONTROL
          </div>
          <h2 className="section-title">Quality from Source to Supply</h2>
          <p className="section-subtitle">
            Our approach is export-oriented from the first stage: consistent material, careful processing and handling, and packing suited to the buyer and the route.
          </p>
        </div>

        {/* 5-Stage Export Workflow Cards */}
        <div className="process-flow-track">
          {processWorkflow.map((item, idx) => (
            <div className="process-flow-node" key={idx}>
              <div className="node-badge">{item.step}</div>
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="gallery-grid" style={{ marginTop: '3rem' }}>
          {galleryItems.map((item, idx) => (
            <div className="gallery-card" key={idx}>
              <LazyImage 
                src={`/assets/images/${item.img}`} 
                alt={item.label} 
                objectFit="cover"
              />
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

