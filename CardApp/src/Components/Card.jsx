import React, { useState } from 'react';
import { IoFingerPrint } from 'react-icons/io5';
import { FiDownload } from 'react-icons/fi';
import { motion } from 'framer-motion';
import Modal from './Modal';

function Card({ data, reference }) {
    const { title, desc, emoji, footerColor } = data;  // Destructure footerColor
    const shortDesc = desc.length > 100 ? desc.slice(0, 100) + '...' : desc;
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <motion.div
                drag
                dragConstraints={reference}
                whileDrag={{ scale: 1.2 }}
                dragTransition={{ bounceDamping: 10, bounceStiffness: 600 }}
                dragElastic={0.5}
                whileHover={{ scale: 1.05 }}
                className="p-4 relative w-70 h-70 text-white bg-zinc-900/60 rounded-[20px] overflow-hidden"
            >
                <IoFingerPrint size={25} color="white" />
                <h3 className="text-lg font-bold my-3">{title}</h3>
                
                <p className="text-sm my-3 px-4">{shortDesc}</p>

                {desc.length > 100 && (
                    <button 
                        onClick={() => setIsModalOpen(true)} 
                        className="px-3 py-1 mt-2 text-sm font-semibold bg-zinc-700 text-white rounded-lg opacity-50 hover:opacity-100 transition "
                    >
                        Read More
                    </button>
                )}

                {/* Footer background color is now dynamic from JSON */}
                <div
                    className="footer absolute bottom-0 left-0 w-full h-10 py-3"
                    style={{ backgroundColor: footerColor || '#bbf7d0' }} // fallback if no color provided
                >
                    <span className="flex justify-between px-4 text-black">
                        <p>{emoji}</p>
                        <FiDownload size={25} color="black" />
                    </span>
                </div>
            </motion.div>

            {/* Modal for full description */}
            <Modal 
                isOpen={isModalOpen} 
                onClose={() => setIsModalOpen(false)} 
                title={title} 
                description={desc} 
            />
        </>
    );
}

export default Card;
