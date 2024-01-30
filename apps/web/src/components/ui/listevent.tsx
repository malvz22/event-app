import Image from 'next/image';
import React from 'react';

const Listevent = () => {
  return (
    <>
      <div className="px-[6rem] ">
        <h1 className="text-black font-bold text-[30px] lg:text-[40px] mb-[2rem]">
          Upcoming<span className="text-[#7848F4] ">Event</span>
        </h1>
        <div className="grid-cols-4 grid gap-[3rem]  items-center justify-center">
          <div className="bg-white shadow-2xl p-[3rem] w-[25rem] rounded-[1rem]">
            <div className="flex relative ">
              <Image
                className=""
                src="/image.avif"
                alt="Preview Image"
                width={330}
                height={280}
              />
              <h3 className="absolute  bg-white text-black px-2 py-1 m-2 rounded-md">
                Paid
              </h3>
            </div>
            <div>
              <h2 className="text-black">
                BestSeller Book Fair, Market & Publish{' '}
              </h2>
            </div>
          </div>
          <div className="bg-white shadow-2xl p-[3rem] w-[25rem] rounded-[1rem]">
            <div className="flex relative ">
              <Image
                className=""
                src="/image.avif"
                alt="Preview Image"
                width={330}
                height={280}
              />
              <h3 className="absolute  bg-white text-black px-2 py-1 m-2 rounded-md">
                Paid
              </h3>
            </div>
            <div>
              <h2 className="text-black">
                BestSeller Book Fair, Market & Publish{' '}
              </h2>
            </div>
          </div>
          <div className="bg-white shadow-2xl p-[3rem] w-[25rem] rounded-[1rem]">
            <div className="flex relative ">
              <Image
                className=""
                src="/image.avif"
                alt="Preview Image"
                width={330}
                height={280}
              />
              <h3 className="absolute  bg-white text-black px-2 py-1 m-2 rounded-md">
                Paid
              </h3>
            </div>
            <div>
              <h2 className="text-black">
                BestSeller Book Fair, Market & Publish{' '}
              </h2>
            </div>
          </div>
          <div className="bg-white shadow-2xl p-[3rem] w-[25rem] rounded-[1rem]">
            <div className="flex relative ">
              <Image
                className=""
                src="/image.avif"
                alt="Preview Image"
                width={330}
                height={280}
              />
              <h3 className="absolute  bg-white text-black px-2 py-1 m-2 rounded-md">
                Paid
              </h3>
            </div>
            <div>
              <h2 className="text-black">
                BestSeller Book Fair, Market & Publish{' '}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Listevent;
