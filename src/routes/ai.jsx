import { useState } from 'react';
import '../App.css';

import Header from '../components/Header';
import Footer from '../components/Footer';
import AIMainSection from '../components/AIMainSection';

export default function Consultation() {
  return (
    <>
      <Header />
      <AIMainSection />
      <Footer />
    </>
  );
}
