import { useState } from 'react';
import '../App.css';

import Header from '../components/Header';
import Footer from '../components/Footer';
import BlogMainSection from '../components/BlogMainSection';

export default function Blog() {
  return (
    <>
      <Header />
      <BlogMainSection />
      <Footer />
    </>
  );
}
