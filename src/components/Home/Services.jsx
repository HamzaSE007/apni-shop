import React from 'react'
import { CiDeliveryTruck } from "react-icons/ci";
import { GiBackForth } from "react-icons/gi";
import { RxTimer } from "react-icons/rx";

export default function Services() {
  return (
    <div className='bg-white p-14 grid grid-cols-1 gap-8'>        
        <h2 className='text-center text-3xl font-semibold'>Our Services</h2>
        
        {/* Cards */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>

            {/* Fast Delivery */}
            <div className='bg-green-300 px-6 py-4 flex flex-col justify-center items-center gap-4 rounded-xl '>
                <CiDeliveryTruck className='text-6xl '/>
                <h3 className='text-2xl font-medium'>Fast Delivery</h3>
                <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe consectetur qui vitae animi facilis quo est atque dolorum ullam sed velit laborum similique, provident illo dolore aut possimus officia quae.</p>
            </div>

            {/* 24/7 Support */}
            <div className='bg-blue-300 px-6 py-4 flex flex-col justify-center items-center gap-4 rounded-xl '>
                <RxTimer className='text-6xl '/>
                <h3 className='text-2xl font-medium'>24/7 Support</h3>
                <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe consectetur qui vitae animi facilis quo est atque dolorum ullam sed velit laborum similique, provident illo dolore aut possimus officia quae.</p>
            </div>

            {/* Return Product Policy */}
            <div className='bg-yellow-200 px-6 py-4 flex flex-col justify-center items-center gap-4 rounded-xl '>
                <GiBackForth className='text-6xl '/>
                <h3 className='text-2xl font-medium'>Return Policy</h3>
                <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe consectetur qui vitae animi facilis quo est atque dolorum ullam sed velit laborum similique, provident illo dolore aut possimus officia quae.</p>
            </div>
        </div>
    </div>
  )
}