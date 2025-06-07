import React from 'react';
import Card from './Card'; // ✅ Adjust the path based on your folder structure
import data from '../assets/cardData.json'; // ✅ Make sure path is correct

function CardList() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.map((item) => (
                <Card key={item.id} {...item} />
            ))}
        </div>
    );
}

export default CardList;
