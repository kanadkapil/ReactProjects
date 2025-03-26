import React from 'react';
import { IoFingerPrint } from 'react-icons/io5';
import { FiDownload } from 'react-icons/fi';
import { motion } from 'framer-motion';

function Card({ data, reference }) {
    return (
        <motion.div
            drag
            dragConstraints={reference}
            whileDrag={{ scale: 1.2 }}
            dragTransition={{ bounceDamping: 10, bounceStiffness: 600 }}
            dragElastic={0.5}
            whileHover={{ scale: 1.05 }} // Added this line for hover effect
            className="p-4 relative w-64 h-64 text-white bg-zinc-900/60 rounded-[20px] overflow-hidden"
        >
            <IoFingerPrint size={25} color="white" />
            <h3 className="text-lg font-bold my-5">{data.title}</h3>
            <p className="text-sm my-5 px-4">{data.desc}</p>
            <div className="footer absolute bottom-0 left-0 w-full h-10 py-3 bg-lime-200">
                <span className="flex justify-between px-4 text-black">
                    <p>{data.emoji}</p>
                    <FiDownload size={25} color="black" />
                </span>
            </div>
        </motion.div>
    );
}

export default Card;