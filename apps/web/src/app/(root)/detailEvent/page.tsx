import Image from 'next/image';
import React from 'react';
import { SlCalender } from 'react-icons/sl';

const DetailEvent = () => {
  return (
    <div className="py-[1rem] px-[3rem] z-[-10]">
      <div className="  flex relative">
        <Image
          loading="lazy"
          src={'/image.avif'}
          alt="image event"
          width={400}
          height={200}
          className="object-cover w-full h-[32rem] rounded-lg"
        />
        <div className="absolute grid-cols-2 grid text-white gap-[10rem]">
          <div className="pl-[2rem] text-wrap">
            <h1 className=" font-bold whitespace-normal text-[4rem] pt-[4rem] ">
              Dream Worldwide in Jakarta
            </h1>
            <h2 className="text-[2rem] pt-[2rem] pb-[1rem]">Organizer</h2>
            <h3>
              DESCRIPTION Lorem, ipsum dolor sit amet consectetur adipisicing
              elit. Facere harum dolore perspiciatis, accusamus itaque ipsa
              voluptatem illum accusantium ullam, deserunt similique earum
              maiores repellat mollitia libero sequi veniam dolorem recusandae.
            </h3>
          </div>
          <div className="w-full p-[3rem] inline">
            <Image src={"/calendar.png"} alt="calender image" width={50} height={50} className="z-100"/>
            <h3 className="text-white font-bold">Time, Day</h3>
          </div>
        </div>
      </div>
      <div className="grid-cols-2 grid px-[2rem]">
        <div className="text-black mt-[3rem]">
          <h3 className="font-bold pb-[2rem]">Description</h3>
          <p className="text-wrap">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
            incidunt ea quos aut dicta? Voluptates minus error similique porro
            fugit qui aut velit consequatur, hic quidem nemo, facere esse
            voluptas! Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Veritatis incidunt ea quos aut dicta? Voluptates minus error
            similique porro fugit qui aut velit consequatur, hic quidem nemo,
            facere esse voluptas!
          </p>
        </div>
      </div>
    </div>
  );
};

export default DetailEvent;
