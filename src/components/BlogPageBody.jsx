import React from 'react';
import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';

export default function BlogPageBody({ article }) {
  return (
    <div className="container w-[70%] text-[#65676b] ">
      <ReactMarkdown children={article.body} rehypePlugins={[rehypeRaw]} />
    </div>
  );
}
