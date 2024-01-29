'use client';

import Image from 'next/image';
import styles from './page.module.css';
import { JwtPayload, jwtDecode } from 'jwt-decode';
import { useState } from 'react';

interface token {
  token: any;
}

export default function Home() {
  const token = localStorage.getItem('token') || '{}';

  const [userData, setUserData] = useState('');

  console.log(token);

  // if (token) {
  //   const data = jwtDecode<JwtPayload>(token);
  //   console.log(data);
  // }

  const handleText = () => {};

  const handleLogout = () => {
    localStorage.removeItem('token');
  };

  return (
    <>
      <div className="py-8">
        <p>{userData}</p>
        <h1 className="cursor-pointer" onClick={handleLogout}>
          Log out
        </h1>
      </div>
    </>
  );
}
