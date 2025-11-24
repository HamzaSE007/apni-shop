import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';

export default function Portal({ isOpen, onClose, children }) {
  
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return createPortal(
    <div
      className="fixed inset-0 backdrop-blur-sm bg-black/30 flex justify-center items-center z-50"
      onClick={onClose}            // Close when clicking outside
    >
      <div
        className="bg-slate-300 p-6 rounded-xl drop-shadow-2xl w-11/12 sm:w-3/4 md:w-1/2 lg:w-2/6"
        onClick={(e) => e.stopPropagation()}  // Prevent inside click from closing
      >
        {children}

        <div className="flex justify-end mt-4">
          <button
            onClick={onClose}
            className="cursor-pointer bg-rose-600 text-white px-4 py-2 rounded hover:bg-transparent hover:text-black border border-rose-600 font-semibold"
          >
            Close
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
}
