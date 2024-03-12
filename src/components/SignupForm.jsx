import React from 'react';
import { useState } from 'react';

import { Link } from 'react-router-dom';

export default function SignupForm() {
  return (
    <section className="h-full bg-neutral-200 dark:bg-neutral-700">
      <div className="container h-full p-10">
        <div className="g-6 flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
          <div className="w-full">
            <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-800">
              <div className="g-0 lg:flex lg:flex-wrap">
                {/* <!-- Left column container--> */}
                <div className="px-4 md:px-0 lg:w-6/12">
                  <div className="md:mx-6 md:p-12">
                    {/* <!--Logo--> */}
                    <div className="text-center">
                      <h4 className="mb-12 mt-1 pb-1 text-xl font-semibold"></h4>
                    </div>

                    <form>
                      <p className="mb-4">Please login to your account</p>
                      {/* <!--Username input--> */}
                      <input type="text" label="Username" className="mb-4" />

                      {/* <!--Password input--> */}
                      <input
                        type="password"
                        label="Password"
                        className="mb-4"
                      />

                      {/* <!--Submit button--> */}
                      <div className="mb-12 pb-1 pt-1 text-center">
                        <input className="w-full"></input>

                        {/* <!--Forgot password link--> */}
                        <a href="#!">Forgot password?</a>
                      </div>

                      {/* <!--Register button--> */}
                    </form>
                  </div>
                </div>

                {/* <!-- Right column container with background and description--> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
