'use client';

import { City, Country, State } from 'country-state-city';
import { useEffect, useState } from 'react';
import Selector from './selector';

import Button from './button';

type filterProps = {
  label: string;
  dataEvent: any;
  dataPlaceholder: string;
};

export default function DropDown({
  label,
  dataEvent,
  dataPlaceholder,
}: filterProps) {
  return (
    <div className="lg:flex lg:flex-1 lg:flex-row flex-col lg:gap-[5rem] gap-[1rem] justify-center items-center ">
      {/* {filterName.map(
        (
          dropdown: {
            label: string;
            dataEvent: any;
            dataPlaceholder: string;
          },
          index: React.Key | null | undefined,
        ) => ( */}
      <section className="">
        <div className="px-[3rem] ">
          <h2 className="text-2xl font-bold text-white">{label}</h2>
          <Selector data={dataEvent} labelBox={dataPlaceholder} />
        </div>
      </section>
      <Button type="submit" title="search" />
    </div>
  );
}
