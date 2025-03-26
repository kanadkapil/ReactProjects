import React, { useEffect } from 'react';
import { FaHandMiddleFinger } from "react-icons/fa6";

function Modal({ isOpen, onClose, title, description }) {
    // Close the modal if the user presses the Escape key
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

    // If modal isn't open, return null (nothing will render)
    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
            aria-labelledby="modal-title"
            role="dialog"
            aria-hidden={!isOpen}
        >
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-4xl h-auto max-h-[80vh] relative overflow-hidden">
                {/* Close button with aria-label for accessibility */}
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 mx-8 my-7 text-6xl text-gray-500 hover:text-red-400 transform hover:scale-[1.2] transition-transform duration-200"
                    aria-label="Close modal"
                >
                    <FaHandMiddleFinger size={30} />
                </button>

                <div className="mt-10 px-10 h-[500px]">
                    <h2 id="modal-title" className="text-4xl font-bold mb-4 text-blue-700">{title}</h2>
                    <div className="mb-20 pb-20 px-10 h-[500px] overflow-y-auto">
                        <p className="text-gray-700 text-2xl mb-10">{description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Modal;
