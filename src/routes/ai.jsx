import { useState } from 'react';
import '../App.css';

import Header from '../components/Header';
import Footer from '../components/Footer';
import MainAiSection from '../components/main/MainAiSection';

export default function Consultation() {
  return (
    <>
      <Header />
      <MainAiSection />
      <Footer />
    </>
  );
}
