import React from 'react';

const Hamburger = () => {
  return (
    <div className="flex flex-col gap-[6px]">
      {Array(3)
        .fill(1)
        .map((_, i) => (
          <span key={i} className="h-[3px] w-8 z-10  bg-black"></span>
        ))}
    </div>
  );
};

export default Hamburger;
