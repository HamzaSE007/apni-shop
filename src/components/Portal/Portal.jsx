import React, { useEffect } from 'react'
import { createPortal } from 'react-dom'

export default function Portal({isOpen, onClose, children}) {

  useEffect(() => {
    if (isOpen) {
      // Disable scroll
      document.body.style.overflow = "hidden";
    } else {
      // Restore scroll
      document.body.style.overflow = "auto";
    }
    
    // Cleanup when component unmounts
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if(!isOpen) return null;
  
  return (
    createPortal(
      <div className='h-screen backdrop-blur-xs fixed top-0 bottom-0 right-0 left-0 flex flex-col justify-center items-center z-50'>

        <div className=' w-2/6 mx-auto'>
            <div className='bg-slate-300 p-6 rounded flex flex-col gap-3 drop-shadow-2xl'>
                {children}
                <div className='flex justify-end w-full'>
                <button onClick={onClose} className='cursor-pointer bg-rose-600 text-gray-200 border hover:bg-transparent hover:text-black p-2 rounded font-bold w-fit'>Close</button>
                </div>
            </div>
        </div>
      </div>,
        document.body
    )
  );
}
