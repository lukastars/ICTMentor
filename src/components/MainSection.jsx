import React from 'react';
import Typewriter from 'typewriter-effect';
import { Link } from 'react-router-dom';

export default function MainSection() {
  return (
    <div className="container flex flex-col justify-center items-center px-16 py-20 ">
      <h1 class="py-4 text-center text-8xl font-bold bg-gradient-to-r  from-[#6549D5] via-[#E33FA1] to-[#FB5343] inline-block text-transparent bg-clip-text">
        Unique Digital <br />{' '}
        <Typewriter
          options={{
            cursorClassName: 'text-[#FB5343] font-thin',
            wrapperClassName:
              'py-4 text-center text-8xl font-bold bg-gradient-to-r  from-[#6549D5] via-[#E33FA1] to-[#FB5343] inline-block text-transparent bg-clip-text',
          }}
          onInit={(typewriter) => {
            typewriter.typeString(`Consultation`).start();
          }}
        />
      </h1>

      <p className="mb-4 text-2xl text-gray-600">
        Improve your business by utilizing ICT
      </p>
      <Link
        to={`services`}
        className="p-4 rounded-full text-xl font-semibold text-white bg-gradient-to-r from-[#FB5343] via-[#E33FA1] to-[#059DFF] hover:shadow-lg "
      >
        Start Your Journey ✨
      </Link>
    </div>
  );
}
