import React, { useEffect } from 'react';
import { FaHandMiddleFinger } from "react-icons/fa6";

function Modal({ isOpen, onClose, title, description }) {
    useEffect(() => {
        const handleEscapeKey = (e) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };

        if (isOpen) {
            window.addEventListener('keydown', handleEscapeKey);
        }

        return () => {
            window.removeEventListener('keydown', handleEscapeKey);
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 flex items-center justify-center bg-zinc-900/80 z-50"
            aria-labelledby="modal-title"
            role="dialog"
            aria-hidden={!isOpen}
        >
            <div className="bg-zinc-950/40 backdrop-blur-lg p-6 rounded-lg shadow-lg w-full max-w-4xl h-auto max-h-[80vh] relative overflow-hidden">
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 mx-8 my-7 text-6xl text-gray-700 hover:text-red-400 transform hover:scale-[1.5] transition-transform duration-200"
                    aria-label="Close modal"
                >
                    <FaHandMiddleFinger size={30} />
                </button>

                <div className="mt-10 px-10 h-[500px]">
                    <h2 id="modal-title" className="text-6xl font-bold mb-7 text-lime-800 drop-shadow-md">{title}</h2>
                    <div className="mb-20 pb-20 px-10 h-[500px] overflow-y-auto">
                        <p className="text-white text-2xl mb-10 font-medium drop-shadow-md">{description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Modal;
