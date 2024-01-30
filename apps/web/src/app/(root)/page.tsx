import Image from 'next/image';
import styles from './page.module.css';
import Hero from '@/components/hero';
import Listevent from '@/components/ui/listevent';

export default function Home() {
  return (
    <main className="bg-[#F8F8FA]">
      <Hero />
      <Listevent />
    </main>
  );
}
