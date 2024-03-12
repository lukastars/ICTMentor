import { useState } from 'react';
import '../App.css';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Services from '../components/Services';

export default function Consultation() {
  return (
    <>
      <Header />
      <Services />
      <Footer />
    </>
  );
}
