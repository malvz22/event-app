'use client';

import Image from 'next/image';
import styles from './page.module.css';
import Hero from '@/components/hero';
import Listevent from '@/components/ui/listevent';
import { useState } from 'react';

export default function Home() {
  const token = localStorage.getItem('token') || '{}';

  const [userData, setUserData] = useState('');

  console.log(token);

  const handleText = () => {};

  const handleLogout = () => {
    localStorage.removeItem('token');
  };

  return (
    <main className="bg-[#F8F8FA]">
      <Hero />
      <Listevent />
    </main>
  );
}
