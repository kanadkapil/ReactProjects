import React from 'react';

// ✅ Define the props interface
interface Props {
    id: number;
    name: string;
    img: string;
    details: string;
    tag: string;
    isNew: boolean;
    active: boolean;
}

// ✅ Card component with hover zoom and conditional rendering based on active
function Card({ id, name, details, img, active, tag, isNew }: Props) {
    if (!active) return null; // Don't render if not active

    return (
        <div className="card bg-base-100 w-96 shadow-lg hover:shadow-2xl transform transition-transform duration-300 hover:scale-105">
            <figure>
                <img src={img} alt={name} />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    {name}
                    <div className="badge badge-secondary">
                        {isNew ? 'NEW' : 'USED'}
                    </div>
                </h2>
                <p>{details}</p>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline">{tag}</div>
                </div>
            </div>
        </div>
    );
}

export default Card;
