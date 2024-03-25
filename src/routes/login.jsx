import { useState } from 'react';
import '../App.css';

import Header from '../components/Header';
import Footer from '../components/Footer';
import LoginForm from '../components/LoginForm';

export default function Login() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <LoginForm />
      <Footer />
    </>
  );
}
