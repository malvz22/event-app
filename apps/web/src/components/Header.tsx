'use client';

import Link from 'next/link';

import Hamburger from './ui/hamburger';
import Navbar from './ui/navbar';
import { useState } from 'react';
import Button from './ui/button';

export const Header = () => {
  const [isSideMenu, setSideMenu] = useState(true);
  const toggleNavbar = () => {
    setSideMenu(() => !isSideMenu);
  };

  return (
    <header className="w-full border-b items-center z-1000">
      <div className="wrapper flex items-center justify-between lg:px-[5rem]">
        <Link href="/" className="w-36">
          <h1 className="text-black font-bold text-[30px] lg:text-[40px]">
            Event<span className="text-[#7848F4]">Horizon</span>
          </h1>
        </Link>
        <div className="lg:visible invisible">
          <Navbar />
        </div>
        <div className="flex w-32 justify-end gap-3 items-center lg:mx-[2rem]">
          <Link href="/registration">
            <Button type="button" title="signup" />
          </Link>
          <Link href="/login">
            <Button type="button" title="login" />
          </Link>
          <button className="visible lg:invisible" onClick={toggleNavbar}>
            <Hamburger />
          </button>
          <div
            className={`fixed h-full w-screen lg:hidden bg-black/50 backdrop-blur-sm top-0 right-0 z-200 ${
              isSideMenu ? 'translate-x-full delay-500' : 'translate-x-0'
            }`}
          >
            <section
              className={`text-black bg-white flex-col right-0 top-0 h-screen flex p-8 gap-8 absolute z-100 transition-all duration-500  ${
                isSideMenu ? 'translate-x-full ' : 'translate-x-0 ease-in-out'
              }`}
            >
              <div className="px-[3rem] my-[6rem]">
                <Navbar />
              </div>
            </section>
          </div>
        </div>
      </div>
    </header>
  );
};
