import React, { useState, useEffect } from 'react';

const heroSlides = [
  {
    image: '/assets/images/hero/hero-slide-1.jpg',
    tag: '5kg Coco Peat Blocks (Low & High EC)',
    alt: 'Stacked coco peat blocks ready for export'
  },
  {
    image: '/assets/images/hero/hero-slide-2.jpg',
    tag: 'Hydroponic Greenhouse Grow Bags',
    alt: 'Greenhouse horticulture with coco coir grow bags'
  },
  {
    image: '/assets/images/hero/hero-slide-3.jpg',
    tag: 'Direct Sourced Coconut Farms • Tamil Nadu',
    alt: 'Lush tropical coconut plantations'
  },
  {
    image: '/assets/images/hero/hero-slide-4.jpg',
    tag: 'Triple-Washed & Sun-Dried Facility',
    alt: 'Coco peat sun drying yard and processing facility'
  },
  {
    image: '/assets/images/hero/hero-slide-5.jpg',
    tag: 'Premium Coir Pith & Husk Chips',
    alt: 'Rich fibrous coco peat substrate and healthy seedlings'
  }
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loadedSlides, setLoadedSlides] = useState({});

  useEffect(() => {
    // Preload hero images for seamless smooth switching
    heroSlides.forEach((slide, idx) => {
      const img = new Image();
      img.src = slide.image;
      img.onload = () => {
        setLoadedSlides(prev => ({ ...prev, [idx]: true }));
      };
    });

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5500);

    return () => clearInterval(timer);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero-modern" id="home">
      {/* Background Slideshow */}
      <div className="hero-slider-track" aria-hidden="true">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`hero-bg-slide ${index === currentSlide ? 'active' : ''} ${loadedSlides[index] ? 'is-ready' : 'is-buffering'}`}
            style={{ backgroundImage: `url("${slide.image}")` }}
            role="img"
            aria-label={slide.alt}
          />
        ))}
        {/* Dark Gradient Overlay for Maximum Legibility */}
        <div className="hero-overlay" />
      </div>

      <div className="container hero-container-rel">
        <div className="hero-modern-content">
          {/* Main Title */}
          <h1 className="hero-headline">
            Natural Growing Media.<br />
            Global Supply.
          </h1>

          {/* Subheading */}
          <h2 className="hero-subheadline">
            Premium Coco Peat &amp; Coir Substrates Direct from India
          </h2>

          {/* Description */}
          <p className="hero-paragraph">
            Global View Exports manufactures and exports certified low EC washed coco peat blocks, tailored grow bags, raw coir fibre, and high-aeration husk chips engineered specifically for international commercial horticulture, greenhouse hydroponics, and industrial applications.
          </p>

          {/* Action Buttons Row */}
          <div className="hero-actions-modern">
            <a 
              href="#quote" 
              className="btn btn-hero-quote"
              onClick={(e) => { e.preventDefault(); scrollTo('quote'); }}
            >
              <i className="fas fa-file-invoice"></i> REQUEST EXPORT QUOTE
            </a>

            <a 
              href="#products" 
              className="btn btn-hero-explore"
              onClick={(e) => { e.preventDefault(); scrollTo('products'); }}
            >
              <i className="fas fa-th-large"></i> EXPLORE PRODUCTS
            </a>

            <a 
              href="/assets/Global_View_Exports_Product_Catalogue_2026.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              download="Global_View_Exports_Product_Catalogue_2026.pdf" 
              className="hero-download-link"
              title="Download Global View Exports 2026 Product Catalogue"
            >
              <i className="fas fa-file-pdf"></i> Download Catalog (PDF)
            </a>
          </div>

          {/* Slide Navigation Indicators */}
          <div className="hero-slider-indicators">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                type="button"
                className={`slider-dot ${index === currentSlide ? 'active' : ''}`}
                onClick={() => setCurrentSlide(index)}
                aria-label={`Switch to wallpaper slide ${index + 1}`}
              >
                <span className="dot-fill"></span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
