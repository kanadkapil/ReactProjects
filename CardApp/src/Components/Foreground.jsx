import React, { useRef } from 'react';
import Card from './Card';

function Foreground() {
  const ref = useRef(null);
  const data = [
    {
      title: 'ABC',
      desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique, dolores!',
      emoji: '🤣',
    },
    {
      title: 'Achoda',
      desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique, dolores!',
      emoji: '💾',
    },
    {
      title: 'ABC',
      desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique, dolores!',
      emoji: '🤣',
    },
    {
      title: 'Achoda',
      desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique, dolores!',
      emoji: '💾',
    },
  ];

  return (
    <div
      ref={ref}
      className="fixed top-0 left-0 z-[3] w-full h-full flex gap-5 p-2 flex-wrap bg-gradient-to-br from-pink-500 via-purple-600 to-indigo-700"
    >
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-400 via-teal-500 to-lime-600 opacity-20 animate-pulse"></div>
      {data.map((item, index) => {
        return <Card key={index} data={item} reference={ref} />;
      })}
    </div>
  );
}

export default Foreground;
