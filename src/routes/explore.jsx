import { useState } from 'react';
import '../App.css';

import Header from '../components/Header';
import MainSection from '../components/MainSection';
import Footer from '../components/Footer';

export default function Explore() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <h1>test me</h1>
      <Footer />
    </>
  );
}
