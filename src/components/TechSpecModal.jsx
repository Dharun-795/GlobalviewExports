import React from 'react';
import LazyImage from './LazyImage';

export default function TechSpecModal({ product, onClose }) {
  if (!product) return null;

  const handleInquire = () => {
    onClose();
    const quoteEl = document.getElementById('quote');
    if (quoteEl) {
      quoteEl.scrollIntoView({ behavior: 'smooth' });
      // Pre-select product in dropdown if possible
      const selectEl = document.getElementById('inquiryProduct');
      if (selectEl) {
        for (let i = 0; i < selectEl.options.length; i++) {
          if (selectEl.options[i].text.toLowerCase().includes(product.title.toLowerCase().slice(0, 8))) {
            selectEl.selectedIndex = i;
            break;
          }
        }
      }
    }
  };

  return (
    <div className="modal-overlay active" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div>
            <h3>{product.title}</h3>
            <p style={{ fontSize: '0.82rem', color: '#e5b358', marginTop: '0.2rem' }}>
              {product.subtitle}
            </p>
          </div>
          <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
            &times;
          </button>
        </div>

        <div className="modal-body">
          <div style={{ textAlign: 'center', marginBottom: '1.25rem', display: 'flex', justifyContent: 'center' }}>
            <LazyImage 
              src={`/${product.image}`} 
              alt={product.title} 
              style={{ maxHeight: '180px', width: '100%', maxWidth: '280px', margin: '0 auto' }}
              objectFit="contain"
            />
          </div>

          <div id="modalProductSpecs">
            <table className="specs-table" style={{ width: '100%' }}>
              <tbody>
                {product.specs?.map((spec, idx) => (
                  <tr key={idx}>
                    <td className="lbl" style={{ width: '40%', padding: '0.55rem 0', fontWeight: '500' }}>
                      {spec.label}
                    </td>
                    <td className="val" style={{ width: '60%', padding: '0.55rem 0', fontWeight: '600' }}>
                      {spec.val}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="modal-footer" style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem' }}>
          <a 
            href="/assets/Global_View_Exports_Product_Catalogue_2026.pdf" 
            target="_blank" 
            rel="noopener noreferrer" 
            download="Global_View_Exports_Product_Catalogue_2026.pdf"
            className="btn btn-outline-dark"
            style={{ fontSize: '0.82rem' }}
          >
            <i className="fas fa-file-pdf"></i> Download Full Catalogue (PDF)
          </a>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <button className="btn btn-outline-dark" onClick={onClose}>
              Close
            </button>
            <button className="btn btn-primary" onClick={handleInquire}>
              Inquire About This Product
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
