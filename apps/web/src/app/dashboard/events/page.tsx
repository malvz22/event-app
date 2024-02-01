/* eslint-disable react/jsx-key */
'use client';

import DashboardSidebar from '@/components/DashboardSidebar';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';

export default function DashboardEvent() {
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

  return (
    <>
      <div className="flex flex-row">
        <DashboardSidebar />
        <div className=" max-w-[1200px] mx-auto p-4">
          <div className="flex flex-col">
            <h1 className="font-bold text-[30px] py-3 text-center">
              Your events list
            </h1>

            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
              <table className="w-full text-sm text-left text-black">
                <thead className="text-xs text-black uppercase bg-gray-300">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      Event Name
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Category
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Location
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Start Date
                    </th>
                    <th scope="col" className="px-6 py-3">
                      End Date
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {currentPosts.map((product) => (
                    <Link href={`Landing/detailsEvent/${product.id}`}>
                      <tr
                        key={product.id}
                        className="odd: bg-white even:bg-gray-200 border-b "
                      >
                        <td
                          scope="row"
                          className="px-6 py-4 font-medium text-black whitespace-nowrap"
                        >
                          {product.title}
                        </td>
                        <td className="px-6 py-4">{product.categoryName}</td>
                        <td className="px-6 py-4">{product.location}</td>
                        <td className="px-6 py-4">{product.startDate}</td>
                        <td className="px-6 py-4">{product.endDate}</td>
                      </tr>
                    </Link>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
