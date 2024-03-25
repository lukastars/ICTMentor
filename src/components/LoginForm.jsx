import React from 'react';
import { useState } from 'react';

import { Link } from 'react-router-dom';

export default function LoginForm() {
  const PasswordErrorMessage = () => {
    return (
      <p className="absolute bottom-[-6px] pb-2 text-red-500 text-xs ">
        Password should have at least 8 characters
      </p>
    );
  };

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState({
    value: '',
    isTouched: false,
  });

  const getIsFormValid = () => {
    return validateEmail(email) && password.value.length >= 8;
  };

  const clearForm = () => {
    setEmail('');
    setPassword({
      value: '',
      isTouched: false,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Logedin!');
    clearForm();
  };
  return (
    <div className="flex h-[100vh] justify-center items-center">
      <form onSubmit={handleSubmit}>
        <fieldset className="flex w-[480px] p-4 border border-[#ccc] rounded flex-col">
          <h2>Log In</h2>

          <div className="flex flex-col relative pb-6">
            <label className="mb-2 text-sm">
              Email address{' '}
              <sup className="text-red-500 top-[-2px] text-[95%] line-[0]  relative align-baseline	">
                *
              </sup>
            </label>
            <input
              className="px-2 h-8 border border-[#ccc]  rounded"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              placeholder="Email address"
            />
          </div>
          <div className="flex flex-col relative pb-6">
            <label className="mb-2 text-sm">
              Password{' '}
              <sup className="text-red-500 top-[-2px] text-[95%] line-[0]  relative align-baseline	">
                *
              </sup>
            </label>
            <input
              className="px-2 h-8 border border-[#ccc]  rounded"
              value={password.value}
              type="password"
              onChange={(e) => {
                setPassword({ ...password, value: e.target.value });
              }}
              onBlur={() => {
                setPassword({ ...password, isTouched: true });
              }}
              placeholder="Password"
            />
            {password.isTouched && password.value.length < 8 ? (
              <PasswordErrorMessage />
            ) : null}
          </div>

          <button
            className="mx-auto p-3 w-56 bg-[#059DFF] rounded-lg  text-white uppercase text-sm font-bold cursor-pointer border border-[#ccc] disabled:bg-gray-400 disabled:text-gray-700 disabled:cursor-not-allowed"
            type="submit"
            disabled={!getIsFormValid()}
          >
            Log In
          </button>
        </fieldset>
      </form>
    </div>
  );
}
