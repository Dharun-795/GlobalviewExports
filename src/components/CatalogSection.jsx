import React, { useState } from 'react';

const catalogueHighlights = [
  {
    page: '01 - 03',
    title: 'Company Profile & Range',
    desc: 'Coir Board registered export operations based in Namakkal, Tamil Nadu. Complete product range overview.'
  },
  {
    page: '04 - 05',
    title: 'Coco Peat 5 Kg Blocks',
    desc: 'Low EC (<0.5 mS/cm) & High EC compressed blocks, 75L expansion yield, 5.5–6.8 pH, <2% fiber.'
  },
  {
    page: '06',
    title: 'Hydroponic Grow Bags',
    desc: 'UV-stabilized dual-layer poly planks (12, 15, 18, 20 cm) engineered for commercial greenhouse drip irrigation.'
  },
  {
    page: '07',
    title: 'Natural Coir Fiber',
    desc: 'Mechanically extracted long staple fibers compressed into 120–150 kg bales, spun yarn, and ropes.'
  },
  {
    page: '08',
    title: 'Graded Husk Chips',
    desc: 'Free-draining coconut husk chips, propagation discs, and custom blended substrates.'
  },
  {
    page: '09 - 12',
    title: 'Applications & Export Quality',
    desc: 'Commercial greenhouse use cases, 5-stage export quality process, ISPM-15 palletization, and direct contact.'
  }
];

export default function CatalogSection() {
  const [showViewer, setShowViewer] = useState(false);
  const pdfUrl = '/assets/Global_View_Exports_Product_Catalogue_2026.pdf';

  return (
    <section className="section-padding catalog-section" id="catalog">
      <div className="container">
        <div className="section-header">
          <div className="badge-pill">
            <i className="fas fa-book-open"></i> OFFICIAL 2026 EDITION
          </div>
          <h2 className="section-title">Official Product Catalogue 2026</h2>
          <p className="section-subtitle">
            Sustainable growing solutions from nature — Download or browse our complete technical specifications, packaging standards, and product portfolio.
          </p>
        </div>

        <div className="catalog-showcase-card">
          <div className="catalog-preview-col">
            <div className="catalog-cover-wrapper">
              <img 
                src="/assets/images/logo-flower.png" 
                alt="Global View Exports Flower Logo" 
                className="catalog-badge-floating"
              />
              <div className="catalog-cover-card">
                <div className="cover-header">
                  <span>COIR BOARD REGISTERED • TAMIL NADU, INDIA</span>
                  <h4>GLOBAL VIEW EXPORTS</h4>
                  <p className="cover-tagline">Sustainable growing solutions from nature</p>
                </div>
                <div className="cover-body">
                  <div className="cover-range-tag">
                    <span>Coco Peat</span> • <span>Grow Bags</span> • <span>Coir Fiber</span> • <span>Husk Chips</span>
                  </div>
                  <div className="cover-year-badge">PRODUCT CATALOGUE 2026</div>
                </div>
                <div className="cover-footer">
                  <span>globalviewexports.com</span>
                  <span>globalviewexports.in</span>
                </div>
              </div>
            </div>

            <div className="catalog-quick-actions">
              <a 
                href={pdfUrl} 
                download="Global_View_Exports_Product_Catalogue_2026.pdf" 
                className="btn btn-primary btn-catalog-dl"
                target="_blank" 
                rel="noopener noreferrer"
              >
                <i className="fas fa-file-download"></i> Download Full PDF (4.2 MB)
              </a>
              <button 
                type="button" 
                className="btn btn-outline-dark btn-catalog-view"
                onClick={() => setShowViewer(true)}
              >
                <i className="fas fa-eye"></i> Quick View Catalogue
              </button>
            </div>
          </div>

          <div className="catalog-info-col">
            <div className="catalog-info-header">
              <h3>Inside the 2026 Catalogue</h3>
              <p>
                Comprehensive 13-page technical guide designed for international agricultural importers, commercial greenhouse growers, and substrate distributors.
              </p>
            </div>

            <div className="catalog-toc-grid">
              {catalogueHighlights.map((item, index) => (
                <div className="catalog-toc-card" key={index}>
                  <div className="toc-page-badge">Page {item.page}</div>
                  <div className="toc-content">
                    <h5>{item.title}</h5>
                    <p>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="catalog-guarantee-banner">
              <div className="guarantee-icon">
                <i className="fas fa-shield-alt"></i>
              </div>
              <div className="guarantee-text">
                <strong>Export-Ready Specifications</strong>
                <p>All items produced strictly adhering to Coir Board of India and international phytosanitary standards.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Modal PDF Viewer */}
      {showViewer && (
        <div className="modal-overlay active" onClick={() => setShowViewer(false)}>
          <div className="modal-card catalog-modal-viewer" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div>
                <h3>Global View Exports — Product Catalogue 2026</h3>
                <p style={{ fontSize: '0.82rem', color: '#e5b358' }}>13-Page Official Export Publication</p>
              </div>
              <button 
                className="modal-close-btn" 
                onClick={() => setShowViewer(false)}
                aria-label="Close viewer"
              >
                &times;
              </button>
            </div>
            <div className="modal-body" style={{ padding: '0', height: '70vh', background: '#2d3748' }}>
              <iframe 
                src={`${pdfUrl}#toolbar=1&navpanes=0&scrollbar=1`} 
                title="Global View Exports Product Catalogue 2026" 
                width="100%" 
                height="100%" 
                style={{ border: 'none' }}
              />
            </div>
            <div className="modal-footer" style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ fontSize: '0.85rem', color: '#6b7280' }}>
                Having trouble viewing? Use the download button.
              </span>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <button className="btn btn-outline-dark" onClick={() => setShowViewer(false)}>
                  Close
                </button>
                <a 
                  href={pdfUrl} 
                  download="Global_View_Exports_Product_Catalogue_2026.pdf" 
                  className="btn btn-primary"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <i className="fas fa-download"></i> Download PDF
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
