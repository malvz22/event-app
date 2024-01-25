'use client';

import { City, Country, State } from 'country-state-city';
import { useEffect, useState } from 'react';
import Selector from './selector';
import { cityData } from '../constant/cityArray';
import { TimeArray } from '../constant/timeArray';
import { CategoryArray } from '../constant/category';
import Button from './button';

const eventArray = [
  {
    label: 'Location',
    dataEvent: cityData,
    dataPlaceholder: 'Choose Location',
  },
  {
    label: 'When',
    dataEvent: TimeArray,
    dataPlaceholder: 'Choose Month',
  },
  {
    label: 'Looking for',
    dataEvent: CategoryArray,
    dataPlaceholder: 'Choose event type',
  },
];
const DropDown = () => {
  return (
    <div className="lg:flex lg:flex-1 lg:flex-row flex-col lg:gap-[5rem] gap-[1rem] justify-center items-center ">
      {eventArray.map(
        (
          dropdown: {
            label: string;
            dataEvent: any;
            dataPlaceholder: string;
          },
          index: React.Key | null | undefined,
        ) => (
          <section key={index} className="">
            <div className="px-[3rem] ">
              <h2 className="text-2xl font-bold text-white">
                {dropdown.label}
              </h2>
              <Selector
                data={dropdown.dataEvent}
                labelBox={dropdown.dataPlaceholder}
              />
            </div>
          </section>
        ),
      )}
      <Button type="submit" title="search" />
    </div>
  );
};

export default DropDown;
