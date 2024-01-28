/* eslint-disable @next/next/no-img-element */
'use client';

import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Button from './button';
import { headers } from 'next/headers';
import { FileImage } from 'lucide-react';
import { FileUpload } from './fileUploader';
import { CategoryArray } from '../constant/category';
import Image from 'next/image';
import Selector from './selector';
import { cityData } from '../constant/cityArray';

const Createform = () => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [location, setLocation] = useState('');
  const [cities, setCity] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [payment, setPayment] = useState(true);
  const [price, setPrice] = useState('');
  const [totalSeat, setTotalSeat] = useState('');

  const [file, setFile] = useState('');
  const [preview, setPreview] = useState('');
  const [disabled, setDisabled] = useState(false);

  const isFree = 'Free';

  const changePayment = () => {
    setPayment(!payment);
    setDisabled(!disabled);
    const isFree = payment === true ? 'Free' : 'Paid';
    return console.log(isFree);
  };

  const LoadImage = (e: any) => {
    const image = e.target.files[0];
    setFile(image);
    setPreview(URL.createObjectURL(image));
  };

  const saveEvent = async (e: any) => {
    e.preventDefault();
    const formdata = new FormData();

    try {
      await axios.post('http://localhost:8000/event', {
        title: title,
        category: category,
        description: description,
        imageUrl: imageUrl,
        location: location,
        cities: cities,
        isFree: isFree,
        startDate: startDate,
        endDate: endDate,
        price: price,
        totalSeat: totalSeat,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className=" w-full flex flex-col mt-[5rem] ">
      <h3 className="wrapper font-bold lg:text-center text-left mb-[3rem] text-5xl">
        Create Event
      </h3>
      <form className=" w-1/2 mx-auto text-lg" onSubmit={saveEvent}>
        <div className="grid grid-cols-2 gap-[1rem]">
          <div>
            <label className="">Title:</label>
            <input
              required
              type="text"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              className="bg-gray-50 border border-gray-500 text-gray-900 text-sm rounded-lg block w-full p-2 mb-[1rem]"
            />
          </div>
          <div className="block">
            <label className=" block ">Category:</label>

            <select className="border-gray-500 border rounded-md w-full p-2">
              {CategoryArray.map((category, i) => (
                <option key={i} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="mb-[2rem]">Description:</label>
            <textarea
              onChange={(e) => setDescription(e.target.value)}
              value={description}
              className="bg-gray-50 border border-gray-500 text-gray-900 rounded-lg block w-full p-2 mb-[1rem] h-72 overflow-y-scroll text-md"
            />

            {/* </textarea> */}
          </div>
          <div className="block w-full ">
            <div className="mb-[1rem]">
              <label>Image Url: </label>
              <input type="file" onChange={LoadImage} />
              {/* <span>Choose a file...</span> */}
            </div>

            <figure className="">
              {preview ? (
                <Image
                  src={preview}
                  alt="Preview Image"
                  width={330}
                  height={280}
                />
              ) : (
                <Image
                  src="/image.png"
                  alt="Preview Image"
                  width={330}
                  height={280}
                />
              )}
            </figure>
          </div>
          <div className="flex col-span-2 gap-[1rem]">
            <div className="w-4/5">
              <label>Complete Address:</label>
              <input
                onChange={(e) => setLocation(e.target.value)}
                value={location}
                className="bg-gray-50 border border-gray-500 text-gray-900 text-sm rounded-lg block p-2 mb-[1rem] w-full"
              />
            </div>
            <div className="wrap ">
              <label>City:</label>

              <select
                onChange={(e) => setCity(e.target.value)}
                value={cities}
                className="text-black mb-[1rem] border p-2 rounded-lg border-gray-500"
                placeholder="please input"
              >
                {cityData.map((item, index) => (
                  <option value={item} key={index}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label>Start Date:</label>
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="block w-full border border-gray-500 rounded-lg p-2 mb-[1rem]"
            />
          </div>

          <div>
            <label>End Date</label>
            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="block w-full border border-gray-500 rounded-lg p-2 mb-[1rem]"
            />
          </div>

          <div>
            <label>Total Seat:</label>
            <input
              type="number"
              onChange={(e) => setTotalSeat(e.target.value)}
              value={totalSeat}
              className="block w-full border border-gray-500 rounded-lg p-2 mb-[1rem]"
            />
          </div>

          <div className="flex items-center">
            <div>
              <label>Price: </label>
              <input
                type="number"
                step="any"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className={`block w-full border border-gray-500 rounded-lg p-2 mb-[1rem] ${
                  disabled ? 'bg-gray-400 opacity-30' : 'bg-transparent'
                }`}
                disabled={disabled}
              />
            </div>

            <div className="mx-[1rem]">
              <label>Free Ticket </label>
              <input
                type="checkbox"
                onChange={changePayment}
                value={isFree}
                className="inline border border-gray-500 rounded-lg p-2 mb-[1rem]"
              />
            </div>
          </div>
        </div>
        <button
          className="text-white bg-[#7848F4] font-medium rounded-lg text-sm w-64 h-10 text-center block"
          type="submit"
          onClick={() => console.log(title, category)}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Createform;
