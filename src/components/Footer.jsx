import React from 'react';
import { useState, useEffect } from 'react';

export default function Footer() {
  const [year, setYear] = useState('');

  useEffect(() => {
    const d = new Date();
    let year = d.getFullYear();
    setYear(year);
  });

  return (
    <footer className="py-3  bg-white">
      <hr className="bg-black my-3 mx-auto w-[95%]" />
      <div className="container flex justify-center items-center ">
        <div className="flex justify-center items-end">
          <button className="mr-4 font-bold text-4xl text-gray-400 ">
            ICTMentor
          </button>
          <p>
            <span className="text-[#b5b6ba]">© ICT Mentor {year}</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
