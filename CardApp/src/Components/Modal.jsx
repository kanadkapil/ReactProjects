import React from 'react';

function Modal({ isOpen, onClose, title, description }) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full relative">
                <h2 className="text-xl font-bold mb-3">{title}</h2>
                <p className="text-gray-700">{description}</p> 
                <button 
                    onClick={onClose} 
                    className="mt-4 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
                >
                    Close
                </button>
            </div>
        </div>
    );
}

export default Modal;
