import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Catalog from './components/Catalog';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Scroll Reveal Animation Observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-up-active');
            observer.unobserve(entry.target); // Only animate once
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('h2, .animate-on-scroll');
    elements.forEach((el) => {
      el.classList.add('fade-up-enter');
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-brand-black min-h-screen text-white selection:bg-brand-gold selection:text-brand-black">
      <Navbar />
      <Hero />
      <div className="animate-on-scroll"><Catalog /></div>
      <div className="animate-on-scroll"><About /></div>
      <div className="animate-on-scroll"><Testimonials /></div>
      <div className="animate-on-scroll"><Contact /></div>
      <Footer />
    </div>
  );
}

export default App;
