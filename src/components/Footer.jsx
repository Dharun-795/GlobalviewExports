import React from 'react';

export default function Footer() {
  const scrollTo = (id, path) => {
    if (path && window.location.pathname !== path) {
      window.history.pushState(null, '', path);
    }
    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const el = document.getElementById(id);
    if (el) {
      const navbar = document.querySelector('.navbar');
      const offset = navbar ? navbar.offsetHeight + 10 : 80;
      const top = el.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-logo">
            <div className="footer-brand-logo">
              <img className="logo-symbol" src="/assets/images/logo-flower.png" alt="Global View Exports Flower Icon" />
              <img className="logo-text-img" src="/assets/images/logo-text.png" alt="Global View Exports" />
            </div>
            <p>
              Registered member of the Coir Board, Government of India. Supplying washed Low EC and High EC Coco Peat blocks, hydroponic grow bags, briquettes, and coir fiber to agricultural distributors worldwide.
            </p>
          </div>

          <div className="footer-col">
            <h4>Navigation</h4>
            <ul className="footer-links">
              <li><a href="/" onClick={(e) => { e.preventDefault(); scrollTo('home', '/'); }}>Home</a></li>
              <li><a href="/about" onClick={(e) => { e.preventDefault(); scrollTo('about', '/about'); }}>About Company</a></li>
              <li><a href="/products" onClick={(e) => { e.preventDefault(); scrollTo('products', '/products'); }}>Product Portfolio</a></li>
              <li><a href="/specs" onClick={(e) => { e.preventDefault(); scrollTo('specs', '/specs'); }}>Low vs High EC Guide</a></li>
              <li><a href="/process" onClick={(e) => { e.preventDefault(); scrollTo('process', '/process'); }}>Quality & Process</a></li>
              <li><a href="/quote" onClick={(e) => { e.preventDefault(); scrollTo('quote', '/quote'); }}>Request Quote</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Export Products</h4>
            <ul className="footer-links">
              <li><a href="/products" onClick={(e) => { e.preventDefault(); scrollTo('products', '/products'); }}>5 Kg Low EC Blocks</a></li>
              <li><a href="/products" onClick={(e) => { e.preventDefault(); scrollTo('products', '/products'); }}>5 Kg High EC Animal Bedding</a></li>
              <li><a href="/products" onClick={(e) => { e.preventDefault(); scrollTo('products', '/products'); }}>Hydroponic Grow Bags</a></li>
              <li><a href="/products" onClick={(e) => { e.preventDefault(); scrollTo('products', '/products'); }}>650g Retail Briquettes</a></li>
              <li><a href="/products" onClick={(e) => { e.preventDefault(); scrollTo('products', '/products'); }}>Propagation Coins & Discs</a></li>
              <li><a href="/products" onClick={(e) => { e.preventDefault(); scrollTo('products', '/products'); }}>Graded Coir Husk Chips</a></li>
              <li><a href="/products" onClick={(e) => { e.preventDefault(); scrollTo('products', '/products'); }}>Natural Coir Fiber Bales</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Export Office</h4>
            <p style={{ fontSize: '0.88rem', lineHeight: 1.6, color: '#cfdcd2', marginBottom: '0.75rem' }}>
              <strong>GLOBAL VIEW EXPORTS</strong><br />
              72D/11A, Kudi St, Sanarpalayamnadar, Manakkadu, Koottapalli Colony, Tiruchengode, Tamil Nadu 637214
            </p>
            <p style={{ fontSize: '0.88rem', color: '#cfdcd2' }}>
              <strong>Direct:</strong> <a href="tel:+919842783222" style={{ color: '#cfdcd2' }}>+91 98427 83222</a> / <a href="tel:+919942533825" style={{ color: '#cfdcd2' }}>+91 99425 33825</a><br />
              <strong>Email:</strong> info@globalviewexports.com
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="container" style={{ padding: 0 }}>
            <div>
              &copy; {new Date().getFullYear()} Global View Exports. Registered Member of Coir Board of India.
            </div>
            <div>
              Coco Peat & Coir Allied Products Exporter
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
