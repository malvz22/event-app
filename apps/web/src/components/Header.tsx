'use client';

import Link from 'next/link';

import Hamburger from './ui/hamburger';
import Navbar from './ui/navbar';
import { useEffect, useState } from 'react';
import Button from './ui/button';
import { useRouter } from 'next/navigation';
import { MdKeyboardArrowDown } from 'react-icons/md';

export const Header = () => {
  const [isSideMenu, setSideMenu] = useState(true);
  const [showButtons, setShowButtons] = useState(true);
  const [displayUser, setDisplayUser] = useState(false);
  const [hoverMenu, setHoverMenu] = useState(false);
  const toggleNavbar = () => {
    setSideMenu(() => !isSideMenu);
  };
  const token = localStorage.getItem('token');

  const router = useRouter();

  const refreshPage = () => {
    window.location.reload();
  };

  const handleHover = () => {
    console.log('mouse enter');
    setHoverMenu(!hoverMenu);
  };

  const handleExitHover = () => {
    setHoverMenu(hoverMenu);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userEmail');
  };

  useEffect(() => {
    if (token) {
      setDisplayUser(!displayUser);
      setShowButtons(!showButtons);
    } else if (!token) {
      setDisplayUser(displayUser);
      setShowButtons(showButtons);
    }
  }, [token]);

  return (
    <header className="sticky top-0 w-full border-b items-center z-2000 px-6 bg-white">
      <div className="wrapper flex items-center justify-between lg:px-[5rem]">
        <Link href="/Landing" className="w-36">
          <h1 className="text-black font-bold text-[30px] lg:text-[40px]">
            Event<span className="text-[#7848F4]">Horizon</span>
          </h1>
        </Link>
        {/* <div className="lg:visible invisible">
          <Navbar />
        </div> */}
        <div className="flex w-32 justify-end gap-3 items-center lg:mx-[2rem]">
          <div className={showButtons ? 'hidden lg:flex gap-3' : 'hidden'}>
            <Link href="/registration">
              <Button type="button" title="signup" />
            </Link>
            <Link href="/login">
              <Button type="button" title="login" />
            </Link>
          </div>

          <div
            className={
              displayUser
                ? 'flex flex-col gap-3 justify-center items-center align-middle'
                : 'hidden'
            }
          >
            <div
              onClick={handleHover}
              className="hidden lg:flex cursor-pointer font-bold flex flex-row justify-center items-center"
            >
              <p>{localStorage.getItem('userEmail')}</p>
              <MdKeyboardArrowDown />
            </div>
            <div
              className={
                hoverMenu
                  ? ' bg-white shadow-md rounded-md absolute top-12'
                  : 'hidden'
              }
            >
              <div className="flex flex-col w-[200px]">
                <Link href={'/dashboard'}>
                  <p className="px-3 py-2 cursor-pointer">Dashboard</p>
                </Link>
                <Link href={'/addEvent'}>
                  <p className="px-3 py-2 cursor-pointer">Add Event</p>
                </Link>
                <p className="px-3 py-2 cursor-pointer">Event List</p>
                <p className="px-3 py-2 cursor-pointer">Order History</p>

                <Link href={'/login'}>
                  <p
                    onClick={handleLogout}
                    className="px-3 py-2 cursor-pointer"
                  >
                    Logout
                  </p>
                </Link>
              </div>
            </div>
            {/* <Link href="/login">
              <button
                onClick={handleLogout}
                className={
                  hoverMenu
                    ? 'bg-[#7848F4] text-white p-3 '
                    : 'hidden'
                }
              >
                logout
              </button>
            </Link> */}
          </div>
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
                <div
                  className={
                    showButtons ? 'flex flex-col gap-[2rem]' : 'hidden'
                  }
                >
                  <Link href={'/registration'}>
                    <p className="font-bold">Sign Up</p>
                  </Link>
                  <Link href={'/login'}>
                    <p className="font-bold">Sign In</p>
                  </Link>
                </div>
                <div className={displayUser ? 'flex' : 'hidden'}>
                  <Navbar />
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </header>
  );
};
