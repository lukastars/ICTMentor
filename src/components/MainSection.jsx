import React from 'react';
import desk from '../assets/freelancer.png';

export default function MainSection() {
  return (
    <div className="flex justify-between items-center px-16 py-20 bg-[#1dbf73]">
      <div className="w-full max-w-[50%]">
        <h1 className="mb-4 text-white font-semibold text-3xl">
          Find the right <i>freelance</i> <br /> service, right away
        </h1>
        <input
          type="text"
          className="w-[65%] my-4 px-3 py-1.5 rounded-l"
          placeholder="Search for any service..."
        />
        <button className="py-1.5 px-3  bg-[#222325] rounded-r">
          <div className="">
            <i className="fa-solid fa-magnifying-glass text-white font-bold"></i>
          </div>
        </button>
        <div>
          <p className="text-white font-semibold text-xl">
            Need help finidng out what your business needs?
          </p>
          <div className="flex items-center my-2">
            <p className="text-white font-semibold text-xl">We can help you</p>
            <button className="mx-4 p-2 font-semibold text-white bg-[#222325] rounded">
              Consultation ✨
            </button>
          </div>
        </div>
      </div>
      <div className="max-w-[50%]">
        <img className="w-[70%] m-auto" src={desk} alt="" srcset="" />
      </div>
    </div>
  );
}
