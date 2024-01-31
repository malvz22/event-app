'use client';

import axios from 'axios';
// import DetailEvent from '@/app/(root)/detailEvent/page';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Pagination from './pagination';

const Listevent = () => {
  const [dataBlog, setDataBlog] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(4);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const response = await axios.get('http://localhost:8000/event');
    setDataBlog(response.data);
    console.log(dataBlog.title);
  };

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = dataBlog.slice(firstPostIndex, lastPostIndex);

  let pages = [];
  for (let i = 1; i <= Math.ceil(dataBlog.length / postsPerPage); i++) {
    pages.push(i);
  }

  return (
    <>
      <div className="px-[6rem] ">
        <h1 className="text-black font-bold text-[30px] lg:text-[40px] mb-[2rem]">
          Upcoming<span className="text-[#7848F4] ">Event </span>
        </h1>
        <div className="grid-cols-4 grid gap-[3rem]  items-center justify-center">
          {currentPosts.map((product) => (
            // eslint-disable-next-line react/jsx-key
            <Link href={`Landing/detailsEvent/${product.id}`}>
              <div
                className="bg-white shadow-2xl p-[3rem] w-[25rem] rounded-[1rem] mb-[3rem]"
                key={product.id}
              >
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
                  <h2 className="text-black">{product.title}</h2>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="flex gap-4 justify-center mb-[5rem]">
          {pages.map((page: any, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(page)}
              className="border-none bg-[#7848F4] p-2 px-[1rem] text-white text-[1.2rem] rounded-md cursor-pointer hover:shadow-md hover:bg-[#6039c3]"
            >
              {page}
            </button>
          ))}
        </div>
        {/* <Pagination
          totalPosts={dataBlog.length}
          postsPerPage={postsPerPage}
          setCurrentPage={setCurrentPage}
        /> */}
      </div>
    </>
  );
};

export default Listevent;
