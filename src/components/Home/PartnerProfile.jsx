import React from 'react'
import { FaSquareInstagram, FaSquareTwitter } from "react-icons/fa6";


export default function PartnerProfile({image,name,description}) {
  return (
    <div className='flex flex-col gap-4 justify-center items-center'>

        {/* Image */}    
        <img src={image}
             alt="avatar"
             className=' object-cover h-36 w-36 rounded-full'
        />
      

      {/* Name */}
      <h2 className='text-xl font-semibold'>{name}</h2>

      {/* Description */}
      <p className='text-center'>{description}</p>

      {/* Social Links */}
      <div className='flex gap-8 *:cursor-pointer'>
        <FaSquareInstagram  className='text-xl hover:text-pink-500'/>
        <FaSquareTwitter className='text-xl hover:text-[#00acee]'/>
      </div>

    </div>
  )
}
