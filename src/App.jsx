import React, { useState } from 'react';
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

export default function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);

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
