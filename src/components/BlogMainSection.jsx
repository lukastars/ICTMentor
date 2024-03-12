import React from 'react';
import { Link } from 'react-router-dom';

import ecommerce from '../assets/ecommerce.jpg';

export default function BlogMainSection() {
  return (
    <div className="container flex flex-col justify-center items-center px-16 py-20 ">
      <p className="p-4 mb-4 text-5xl font-semibold bg-gradient-to-r  from-[#6549D5] via-[#E33FA1] to-[#FB5343] inline-block text-transparent bg-clip-text">
        Blog
      </p>

      <div className="grid gap-4 grid-cols-3">
        <div className="mx-3 flex flex-col bg-[#f5f8fa] rounded-xl">
          <img
            className="rounded-t-xl mx-auto "
            src={ecommerce}
            alt=""
            srcset=""
          />
          <div className="p-4">
            <p className="text-lg font-semibold my-2">
              How can E-Commerce help your businesss?
            </p>
          </div>
        </div>

        {[...Array(5)].map((i, index) => (
          <div
            key={index}
            className="mx-3 flex flex-col bg-[#f5f8fa] rounded-xl"
          >
            <img
              className="rounded-t-xl mx-auto "
              src={ecommerce}
              alt=""
              srcset=""
            />
            <div className="p-4">
              <p className="text-lg font-semibold my-2">
                How can E-Commerce help your businesss?
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
