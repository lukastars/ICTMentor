import { useState } from 'react';
import '../App.css';

import Header from '../components/Header';
import Footer from '../components/Footer';
import SessionBooking from '../components/SessionBooking';

export default function Consultation() {
  return (
    <>
      <Header />
      <SessionBooking />
      <Footer />
    </>
  );
}
