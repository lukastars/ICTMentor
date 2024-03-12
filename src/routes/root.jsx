import { useState } from 'react';
import '../App.css';

import Header from '../components/Header';
import MainSection from '../components/MainSection';
import Footer from '../components/Footer';

export default function Root() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <MainSection />
      <Footer />
    </>
  );
}
