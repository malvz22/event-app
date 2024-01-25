import Image from 'next/image';
import React from 'react';
import DropDown from './ui/dropdown';
import Button from './ui/button';

const Hero = () => {
  return (
    <div className="z-[-10] ">
      <div className=" justify-center text-center">
        <Image
          src={'/hero1.png'}
          alt="hero picture"
          width={1440}
          height={500}
          className=" lg:w-full px-[3rem] pt-[1rem] w-auto "
        />

        <div className="bg-[#10107B] lg:h-60 md:h-48 h-60 lg:-translate-y-32 md:-translate-y-24 -translate-y-16 mx-[7rem] rounded-[1.5rem] ">
          <DropDown />
        </div>
      </div>
    </div>
  );
};

export default Hero;
