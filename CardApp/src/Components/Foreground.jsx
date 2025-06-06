import React, { useRef } from 'react';
import Card from './Card';
import cardsData from './cardsData.json';  // Import the JSON file

function Foreground() {
  const ref = useRef(null);

  return (
    <>
      {/* <Nav /> */}
      <div
        ref={ref}
        className="fixed top-0 left-0 z-[3] w-full h-full flex gap-5 p-2 flex-wrap bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-950 via-gray-600 to-stone-900 rounded-2xl"
      >
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r  from-zinc-950 via-stone-800 to-stone-900 opacity-20 animate-pulse"></div>

        {cardsData.map((item, index) => (
          <Card key={index} data={item} reference={ref} />
        ))}
      </div>
    </>
  );
}

export default Foreground;
