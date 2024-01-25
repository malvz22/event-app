import React from 'react';
import { NavLinks } from '../constant/navLinks';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-[2rem]">
      {NavLinks.map((a, i) => (
        <Link key={i} className="font-bold " href={a.link}>
          {a.menu}
        </Link>
      ))}
    </div>
  );
};

export default Navbar;
