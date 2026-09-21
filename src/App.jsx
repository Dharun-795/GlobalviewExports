import React, { useState, useEffect } from 'react';
import TopBar from './components/TopBar';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturesBar from './components/FeaturesBar';
import About from './components/About';
import Products from './components/Products';
import TechSpecModal from './components/TechSpecModal';
import ComparisonTable from './components/ComparisonTable';
import Process from './components/Process';
import Logistics from './components/Logistics';
import QuoteSection from './components/QuoteSection';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

const ROUTE_MAP = {
  '/products': { id: 'products', title: 'Export Products Portfolio | Global View Exports' },
  '/specs': { id: 'specs', title: 'Low vs High EC Technical Specifications | Global View Exports' },
  '/about': { id: 'about', title: 'About Global View Exports | Coir Board India' },
  '/process': { id: 'process', title: 'Quality Assurance & Triple Washing Process | Global View Exports' },
  '/logistics': { id: 'logistics', title: 'Shipping & Sea Port Logistics | Global View Exports' },
  '/quote': { id: 'quote', title: 'Request Container FOB/CIF Quote | Global View Exports' },
  '/contact': { id: 'contact', title: 'Contact Export Office & Namakkal Facility | Global View Exports' },
};

export default function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    const handleInitialPath = () => {
      const pathname = window.location.pathname.replace(/\/$/, '') || '/';
      if (ROUTE_MAP[pathname]) {
        const targetId = ROUTE_MAP[pathname].id;
        document.title = ROUTE_MAP[pathname].title;
        setTimeout(() => {
          const el = document.getElementById(targetId);
          if (el) {
            const navbar = document.querySelector('.navbar');
            const offset = navbar ? navbar.offsetHeight + 10 : 80;
            const top = el.getBoundingClientRect().top + window.pageYOffset - offset;
            window.scrollTo({ top, behavior: 'smooth' });
          }
        }, 150);
      }
    };

    handleInitialPath();

    const handlePopState = () => {
      handleInitialPath();
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  return (
    <div className="app-root">
      <TopBar />
      <Navbar />
      <main>
        <Hero />
        <FeaturesBar />
        <About />
        <Products onOpenSpecModal={(product) => setSelectedProduct(product)} />
        <ComparisonTable />
        <Process />
        <Logistics />
        <QuoteSection />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <TechSpecModal 
        product={selectedProduct} 
        onClose={() => setSelectedProduct(null)} 
      />
    </div>
  );
}

