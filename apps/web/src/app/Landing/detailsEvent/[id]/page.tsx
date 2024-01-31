'use client';

import axios from 'axios';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { SlCalender } from 'react-icons/sl';
import { useParams, useSearchParams } from 'react-router-dom';

const DetailEvent = ({ params }: { params: { id: string } }) => {
  const [dataBlog, setDataBlog] = useState([]);
  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    console.log(params.id);
    const response = await axios.get(
      `http://localhost:8000/events/${params.id}`,
    );
    setDataBlog(response.data);
  };

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
              {dataBlog.title}
            </h1>
            <h2 className="text-[2rem] pt-[2rem] pb-[1rem]">Organizer</h2>
            <h3>{dataBlog.description}</h3>
          </div>
          <div className="w-full p-[3rem] inline">
            <Image
              src={'/calendar.png'}
              alt="calender image"
              width={50}
              height={50}
              className="z-100"
            />
            <h3 className="text-white font-bold">Time, Day</h3>
          </div>
        </div>
      </div>
      <div className="grid-cols-2 grid px-[2rem]">
        <div className="text-black mt-[3rem]">
          <h3 className="font-bold pb-[2rem]">Description</h3>
          <p className="text-wrap">{dataBlog.description}</p>
        </div>
      </div>
    </div>
  );
};

export default DetailEvent;
