import { useState } from 'react';
import './App.css';

import Header from './components/Header';
import MainSection from './components/MainSection';
import Footer from './components/Footer';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <MainSection />
      <Footer />
    </>
  );
}

export default App;
