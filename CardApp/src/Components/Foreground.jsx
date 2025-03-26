import React, { useRef } from 'react';
import Card from './Card';

function Foreground() {
    const ref = useRef(null);
    const data = [
        {
            title: 'ABC',
            desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique, dolores!',
            emoji: '🤣'
        },
        {
            title: 'Achoda',
            desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique, dolores!',
            emoji: '💾'
        }
    ];

    return (
        <div ref={ref} className="fixed top-0 left-0 z-[3] w-full h-full flex gap-5 p-2 flex-wrap">
            {data.map((item, index) => {
                return <Card key={index} data={item} reference={ref} />;
            })}
        </div>
    );
}

export default Foreground;
