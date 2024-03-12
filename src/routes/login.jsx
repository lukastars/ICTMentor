import { useState } from 'react';
import '../App.css';

import Header from '../components/Header';
import MainSection from '../components/MainSection';
import Footer from '../components/Footer';

export default function Login() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <h1>log in</h1>
      <Footer />
    </>
  );
}
