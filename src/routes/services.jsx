import { useState } from 'react';
import '../App.css';

import Header from '../components/Header';
import Footer from '../components/Footer';
import ServicesMainSection from '../components/servicesMainSection';

export default function Services() {
  return (
    <>
      <Header />
      <ServicesMainSection />
      <Footer />
    </>
  );
}
