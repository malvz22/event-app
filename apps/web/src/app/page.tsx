'use client';

import Image from 'next/image';
import styles from './page.module.css';

export default function Home() {
  const handleLogout = () => {
    localStorage.removeItem('token');
  };

  return (
    <>
      <div className="py-8">
        <h1 className="cursor-pointer" onClick={handleLogout}>
          Log out
        </h1>
      </div>
    </>
  );
}
