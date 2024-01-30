'use client';

// import { values } from "cypress/types/lodash";
import { Formik, useFormik } from 'formik';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import axios from 'axios';
import { log } from 'console';

export default function RegisterPage() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [referalCode, setReferalCode] = useState('');
  const [points, setPoints] = useState(0);
  const [inputReferalCode, setInputReferalCode] = useState('');

  const handleSubmit = async () => {
    if (confirmPassword != password) {
      return alert('password does not match');
    }

    try {
      // const validReferalCode = await axios.post(
      //   'http://localhost:8000/auth/referalcodes',
      //   { inputReferalCode },
      // );
      // console.log(validReferalCode.data);

      // if (inputReferalCode === validReferalCode?.data) {
      //   console.log('10000 points added to User');
      //   setPoints(points + 10000);
      // }

      const response = await axios.post('http://localhost:8000/auth/register', {
        username,
        email,
        firstName,
        lastName,
        password,
        confirmPassword,
        referalCode,
        inputReferalCode,
      });

      console.log('Response from server:', response.data);
      router.push('/login');
    } catch (error: any) {
      console.error(
        'Error during registration:',
        error.response?.data || error.message,
      );
    }
  };

  return (
    <>
      <div className="flex flex-col">
        <div className="flex justify-center items-center font-bold text-[24px]">
          Event <span className="text-[#7848F4]">Horizon</span>
        </div>

        <h1 className="text-center font-bold text-[36px]">
          Sign Up to Event Horizon
        </h1>

        <form className="max-w-96 mx-auto">
          <div className="mb-5">
            <label
              htmlFor="username"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="firstName"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2"
              placeholder="Enter your first name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="lastName"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2"
              placeholder="Enter your last name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="confirmPassword"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="referalCode"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Referal Code (If Any)
            </label>
            <input
              type="text"
              id="referalCode"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2"
              placeholder="Enter referal code"
              value={inputReferalCode}
              onChange={(e) => setInputReferalCode(e.target.value)}
            />
          </div>
          <button
            type="button"
            onClick={handleSubmit}
            className="text-white bg-[#7848F4] font-medium rounded-lg text-sm w-64 h-10 text-center"
          >
            Sign Up
          </button>
        </form>
      </div>
    </>
  );
}
