import React from 'react';
import { Link } from 'react-router-dom';

import ecommerce from '../assets/ecommerce.jpg';

export default function BlogPageHeader({ article }) {
  return (
    <div className="container flex flex-col justify-center items-center px-16 py-20 bg-contain bg-opacity-50">
      <p className="p-4 mb-4 text-center text-5xl font-semibold bg-gradient-to-r  from-[#6549D5] via-[#E33FA1] to-[#FB5343] inline-block text-transparent bg-clip-text">
        {article.header}
      </p>
      <ul class="flex justify-center items-center text-gray-400">
        <li className="mx-3 flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-clock"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <polyline points="12 6 12 12 16 14"></polyline>
          </svg>
          <span className="ml-2">{article.meta.date} </span>
        </li>
        <li className="mx-3 flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-user"
          >
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
          <span className="ml-2">{article.meta.author} </span>
        </li>
        <li className="mx-3 flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-watch"
          >
            <circle cx="12" cy="12" r="7"></circle>
            <polyline points="12 9 12 12 13.5 13.5"></polyline>
            <path d="M16.51 17.35l-.35 3.83a2 2 0 0 1-2 1.82H9.83a2 2 0 0 1-2-1.82l-.35-3.83m.01-10.7l.35-3.83A2 2 0 0 1 9.83 1h4.35a2 2 0 0 1 2 1.82l.35 3.83"></path>
          </svg>
          <span className="ml-2">{article.meta.minutes} min read</span>
        </li>
      </ul>
      <hr className=" bg-black my-8 mx-auto w-full" />
    </div>
  );
}
