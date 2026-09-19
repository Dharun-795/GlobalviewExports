import React, { useState } from 'react';
import { productsData } from '../data/products';

const filterCategories = [
  { id: 'all', label: 'All Products' },
  { id: 'blocks', label: '5 Kg Blocks' },
  { id: 'growbags', label: 'Grow Bags & Planks' },
  { id: 'retail', label: 'Briquettes & Discs' },
  { id: 'chips', label: 'Husk Chips & Compost' },
  { id: 'allied', label: 'Coir Fiber & Allied' }
];

export default function Products({ onOpenSpecModal }) {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredProducts = activeFilter === 'all'
    ? productsData
    : productsData.filter(p => p.category === activeFilter);

  const scrollToQuote = (e) => {
    e.preventDefault();
    const quoteEl = document.getElementById('quote');
    if (quoteEl) quoteEl.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="section-padding products-section" id="products">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Product Portfolio</h2>
          <p className="section-subtitle">
            Engineered coconut coir substrates for commercial hydroponics, horticulture, animal bedding, and industrial applications.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="products-filter">
          {filterCategories.map(cat => (
            <button
              key={cat.id}
              className={`filter-btn ${activeFilter === cat.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Product Cards Grid */}
        <div className="products-grid">
          {filteredProducts.map(product => (
            <div className="product-card" key={product.id}>
              <div className="product-img">
                <img src={`/${product.image}`} alt={product.title} />
              </div>
              <div className="product-body">
                <h3>{product.title}</h3>
                <p>{product.description}</p>
                
                <table className="specs-table">
                  <tbody>
                    {product.highlights.map((spec, idx) => (
                      <tr key={idx}>
                        <td className="lbl">{spec.label}</td>
                        <td className="val">{spec.val}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                <div className="product-actions">
                  <button 
                    className="btn btn-outline-dark" 
                    onClick={() => onOpenSpecModal(product)}
                  >
                    Technical Sheet
                  </button>
                  <a href="#quote" className="btn btn-primary" onClick={scrollToQuote}>
                    Inquire
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
