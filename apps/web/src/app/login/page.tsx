'use client';

import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:8000/auth/login', {
        email,
        password,
      });
      console.log('Response from server:', response.data);
      localStorage.setItem('token', response.data.token);
      alert('Successfully Login');
      router.push('/');
    } catch (error: any) {
      console.error(
        'Error during Login:',
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

        <h1 className="text-center font-bold text-[36px]">Sign In</h1>

        <form className="max-w-72 mx-auto">
          <div className="mb-5">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Email
            </label>
            <input
              type="text"
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
              htmlFor="email"
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
          <button
            type="button"
            onClick={handleLogin}
            className="text-white bg-[#7848F4] font-medium rounded-lg text-sm w-64 h-10 text-center"
          >
            Sign in
          </button>
        </form>
      </div>
    </>
  );
}
