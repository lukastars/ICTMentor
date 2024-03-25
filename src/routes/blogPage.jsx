import { useState } from 'react';
import '../App.css';
import { useParams } from 'react-router-dom';

import Header from '../components/Header';
import Footer from '../components/Footer';
import BlogPageHeader from '../components/BlogPageHeader';
import BlogPageBody from '../components/BlogPageBody';

export default function BlogPage() {
  let { articleId } = useParams();
  return (
    <>
      <Header />
      <BlogPageHeader />
      <BlogPageBody />
      <Footer />
    </>
  );
}
