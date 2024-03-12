import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../assets/logo.svg';

export default function Header() {
  return (
    <header className="py-4 ">
      <div className="container flex justify-between items-center ">
        <Link to={`/`} className="font-bold text-4xl text-black">
          ICTMentor
        </Link>
        <div className="text-gray-400">
          <Link
            to={`/explore`}
            className="px-2 mx-2 font-bold hover:text-[#059DFF] "
          >
            Explore
          </Link>
          <Link
            to={`/sign-up`}
            className="px-2 mx-2 font-bold hover:text-[#059DFF]"
          >
            Sign Up
          </Link>
          <Link
            to={`/log-in`}
            className="px-2 mx-2 font-bold hover:text-[#059DFF]"
          >
            Log In
          </Link>
          <Link
            to={`/sign-up`}
            className="px-2 mx-2 font-bold hover:text-[#059DFF]"
          >
            Find a Freelancer 🔎
          </Link>
        </div>
      </div>
    </header>
  );
}
