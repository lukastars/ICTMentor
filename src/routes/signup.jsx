import { useState } from 'react';
import '../App.css';

import Header from '../components/Header';
import Footer from '../components/Footer';
import SignupForm from '../components/SignupForm';

export default function Signup() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <SignupForm />
      <Footer />
    </>
  );
}
