import React, { useRef } from 'react';
import Card from './Card';
import cardsData from './cardsData.json'; // Import your external JSON file

function Foreground() {
  const ref = useRef(null); // This is used to constrain the drag area for cards

  return (
    <>
      {/* Optional Nav component */}
      {/* <Nav /> */}

      <div
        ref={ref}
        className="fixed top-0 left-0 z-[3] w-full h-full flex gap-5 p-2 flex-wrap bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-950 via-gray-600 to-stone-900 rounded-2xl"
      >
        {/* Decorative animated background layer */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-zinc-950 via-stone-800 to-stone-900 opacity-20 animate-pulse"></div>

        {/* Loop through cardsData and render a Card for each item */}
        {cardsData.map((item) => (
          <Card key={item.id} data={item} reference={ref} />
        ))}
      </div>
    </>
  );
}

export default Foreground;
