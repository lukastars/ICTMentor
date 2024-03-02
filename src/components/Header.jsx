import React from 'react';

import logo from '../assets/logo.svg';

export default function Header() {
  return (
    <header className="py-4 bg-[#1dbf73]">
      <div className="container flex justify-between items-center ">
        <button className="font-bold text-4xl text-white">ICTMentor</button>

        <div>
          <button className="px-2 mx-2 font-bold text-white">Explore</button>
          <button className="px-2 mx-2 font-bold text-white">Sign in</button>
          <button className="px-2 mx-2 font-bold text-white">Join</button>
          <button className="px-2 mx-2 font-bold text-white">
            Consultation
          </button>
        </div>
      </div>
    </header>
  );
}
