import React from 'react';
import { Link } from 'react-router-dom';

import calendar from '../assets/calendar.png';
import artical from '../assets/artical.png';
import ai from '../assets/ai.png';

export default function Services() {
  return (
    <div className="container flex flex-col justify-center items-center px-16 py-20 ">
      <p className="text-lg font-semibold bg-gradient-to-r  from-[#6549D5] via-[#E33FA1] to-[#FB5343] inline-block text-transparent bg-clip-text">
        What We Can Do For You
      </p>
      <h1 className="my-3 font-semibold text-4xl">Services provided for you</h1>

      <div className="mt-4 flex justify-between">
        <div className="w-1/3 p-7 mx-3 flex flex-col bg-[#f5f8fa] rounded-xl shadow-lg">
          <p className="text-lg font-semibold mb-2">AI Consultation</p>
          <p className="mb-4 text-gray-600">
            Chat with a real-time AI Specially trained to help you find out how
            to use ICT in your business.
          </p>
          <img className="mx-auto max-w-[350px]" src={ai} alt="" srcset="" />
        </div>

        <Link
          to={`/blog`}
          className="w-1/3 p-7 mx-3 flex flex-col bg-[#f5f8fa]  rounded-xl shadow-lg"
        >
          <p className="text-lg font-semibold mb-2">Articles</p>
          <p className="mb-4 text-gray-600">
            Read our articals written by ict experts to increase your knowledge
            about ICT utilization.
          </p>
          <div className="flex justify-center">
            <img className="max-w-[350px]" src={artical} alt="" srcset="" />
          </div>
        </Link>
        <div className="w-1/3 p-7 mx-3 flex flex-col bg-[#f5f8fa]  rounded-xl shadow-lg">
          <p className="text-lg font-semibold mb-2">Virtual Consultation</p>
          <p className="mb-4 text-gray-600 ">
            Book a session with one of ICT experts to get the advice you need.
          </p>
          <img
            className="mx-auto max-w-[350px]"
            src={calendar}
            alt=""
            srcset=""
          />
        </div>
      </div>
    </div>
  );
}
