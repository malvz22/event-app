"use client"

import axios from "axios"
import DetailEvent from '@/app/(root)/detailEvent/page';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const Listevent = () => {

  const [dataBlog,setDataBlog]= useState([])
  useEffect(()=>{
    getProducts()},[])

    const getProducts = async ()=>{
      const response = await axios.get("http://localhost:8000/event")
      setDataBlog(response.data)
    }

 

  return (
    <>
      <div className="px-[6rem] ">
        <h1 className="text-black font-bold text-[30px] lg:text-[40px] mb-[2rem]">
          Upcoming<span className="text-[#7848F4] ">Event</span>
        </h1>
        <div className="grid-cols-4 grid gap-[3rem]  items-center justify-center">
        {dataBlog.map((product)=>(
          (<div className="bg-white shadow-2xl p-[3rem] w-[25rem] rounded-[1rem] mb-[3rem]" key={product.id}>
            <div className="flex relative ">
              <Image
                loading="lazy"
                src="/image.avif"
                alt="Preview Image"
                width={330}
                height={280}
              />
              <h3 className="absolute  bg-white text-black px-2 py-1 m-2 rounded-md">
              {product.isFree}
              </h3>
            </div>
            <div>
              <h2 className="text-black">
                {product.title}
              </h2>
            </div>
          
          </div>)
            ))}
        </div>
      </div>
    </>
  );
};

export default Listevent;
