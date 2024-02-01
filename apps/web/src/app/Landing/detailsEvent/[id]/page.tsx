'use client';

import axios from 'axios';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { SlCalender } from 'react-icons/sl';
import { useParams, useSearchParams } from 'react-router-dom';

const DetailEvent = ({ params }: { params: { id: string } }) => {
  const [refferal, setRefferal] = useState(true);
  const [checkRefferal, setCheckRefferal] = useState(true);
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

  const formatter = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
  });

  return (
    <>
      <div className="py-[1rem] px-[3rem] z-[-10]">
        <div className="flex">
          <Image
            loading="lazy"
            src={'/BG2.avif'}
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
              <h2 className="text-[2rem] pt-[2rem] pb-[1rem]">
                {dataBlog.organizer}
              </h2>
              <h3>{dataBlog.description}</h3>
            </div>
          </div>
        </div>
        <div className="grid-cols-2 grid mt-[2rem] gap-[2rem]">
          <div className="text-black mt-[3rem] ">
            <h3 className="font-bold pb-[2rem]">Description</h3>
            <p className="text-wrap">{dataBlog.description}</p>
          </div>

          <form className="bg-[#7848F4] w-full px-[2rem] py-[1rem] h-[15rem] rounded-lg  right-0 t-0 grid grid-cols-2 gap-[2rem]">
            <div className="inline gap-[3rem]">
              <div>
                <div className="  p-[1.5rem] flex gap-[1rem] text-center">
                  <Image
                    src={'/calendar.png'}
                    alt="calender image"
                    width={30}
                    height={30}
                    className="z-100"
                  />
                  <div className="block">
                    <h3 className="text-white font-bold">
                      {dataBlog.startDate} -
                    </h3>

                    <h3 className="text-white font-bold">{dataBlog.endDate}</h3>
                  </div>
                </div>
              </div>
              <div className="w-full  p-[1.5rem] flex gap-[1rem] text-center">
                <Image
                  src={'/map.png'}
                  alt="calender image"
                  width={30}
                  height={30}
                  className="z-100"
                />
                <div className="block">
                  <h3 className="text-white font-bold">
                    {dataBlog.location} - {dataBlog.cityName}
                  </h3>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-white font-bold text-[1rem] mb-[1rem] border border-gray text-center bg-black">
                Price: {formatter.format(dataBlog.price)}
              </h2>

              <div className="flex h-[3rem] text-white font-bold gap-[2rem]">
                <div>
                  <h3 className="mb-[0.5rem]">Check Refferal</h3>
                  <button
                    type="button"
                    className="border-none bg-white p-2 px-[2rem] text-black text-[1.2rem] rounded-md cursor-pointer hover:shadow-md hover:bg-[#6039c3]"
                    onClick={(e) => setRefferal(!refferal)}
                  >
                    Check
                  </button>
                </div>
                <div>
                  <h3 className="mb-[0.5rem]">Use Refferal Code</h3>
                  <input
                    type="text"
                    // value={refferalCode}
                    onChange={(e) => setCheckRefferal(!refferal)}
                    className=" w-full border border-gray-500 rounded-lg h-[3rem] text-black px-[1rem]"
                    placeholder="Refferal Code"
                  />
                </div>
              </div>
              <div>
                {!refferal && !checkRefferal ? (
                  <h3 className="mt-[4rem] font-bold text-[1rem]">
                    You get discount {dataBlog.discount}
                  </h3>
                ) : (
                  <h3 className="mt-[4rem] font-bold text-[1rem]">
                    Refferal code tidak ditemukan
                  </h3>
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default DetailEvent;
