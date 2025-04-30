import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutUs from './components/AboutUs';
import Product from './components/Product';
import Services from './components/Services';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

const App = () => (
  <>
    <Navbar />
    <HeroSection />
    <AboutUs />
    <Product />
    <Services />
    <ContactForm />
    <Footer />
  </>
);

export default App