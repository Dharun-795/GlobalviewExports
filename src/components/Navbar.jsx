import React, { useState, useEffect } from 'react';

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About Us' },
  { id: 'products', label: 'Products' },
  { id: 'specs', label: 'Low vs High EC' },
  { id: 'process', label: 'Process' },
  { id: 'logistics', label: 'Logistics' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.pageYOffset || document.documentElement.scrollTop;

      // Bottom of the page: highlight Contact
      if ((window.innerHeight + scrollPos) >= document.documentElement.scrollHeight - 80) {
        setActiveSection('contact');
        return;
      }

      // Top of the page: highlight Home
      if (scrollPos < 120) {
        setActiveSection('home');
        return;
      }

      const navbar = document.querySelector('.navbar');
      const navHeight = navbar ? navbar.offsetHeight : 85;
      const triggerOffset = navHeight + 80;

      const sections = navItems
        .map(item => document.getElementById(item.id))
        .filter(Boolean);

      let currentId = '';
      sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= triggerOffset && rect.bottom > triggerOffset) {
          currentId = section.getAttribute('id');
        }
      });

      if (currentId) {
        setActiveSection(currentId);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  const handleNavClick = (id) => {
    setMobileOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="navbar">
      <div className="container">
        <a 
          href="#home" 
          className="brand-logo" 
          aria-label="Global View Exports"
          onClick={(e) => { e.preventDefault(); handleNavClick('home'); }}
        >
          <img className="logo-symbol" src="/assets/images/logo-flower.png" alt="Global View Exports Flower Icon" />
          <img className="logo-text-img" src="/assets/images/logo-text.png" alt="Global View Exports" />
        </a>

        <nav>
          <ul className={`nav-menu ${mobileOpen ? 'open' : ''}`}>
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.id);
                  }}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="mobile-menu-cta">
              <a 
                href="#quote" 
                className="btn btn-primary"
                onClick={(e) => { e.preventDefault(); handleNavClick('quote'); }}
              >
                Request Quote
              </a>
            </li>
          </ul>
        </nav>

        <div className="nav-cta-desktop">
          <a 
            href="#quote" 
            className="btn btn-primary"
            onClick={(e) => { e.preventDefault(); handleNavClick('quote'); }}
          >
            Request Quote
          </a>
        </div>

        <button 
          className="mobile-toggle" 
          aria-label="Toggle navigation"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <i className={mobileOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
        </button>
      </div>
    </header>
  );
}
