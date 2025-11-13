import React from 'react'
import { FaCartPlus } from "react-icons/fa6";
import { Link } from 'react-router-dom';


export default function ProductCard({title,price,category,image,id}) {
  
  function handleAddToCart(e){
    e.preventDefault();
    console.log(id);
    
  }
    
  return (
    <div className='flex flex-col gap-6 bg-white p-4 rounded-lg cursor-pointer relative'>

        {/* Image */}
      <div className='h-52 overflow-hidden rounded-md'>
        <img
          src={image}
          alt={title}
          className='w-full h-full object-contain'
        />
      </div>

      {/* Title */}
      <h2 className='text-lg font-medium'>{title.slice(0,12)}</h2>

      {/* Price */}
      <p>
        <span className='font-bold'>Price: </span>
        ${price}
      </p>

      {/* category */}
      <p>
        <span className='font-bold'>Category: </span>
        {category}
      </p>

      {/* Button */}
      <button onClick={handleAddToCart} className='w-full bg-rose-600 text-white text-lg font-medium border hover:bg-transparent hover:text-black duration-400 cursor-pointer py-2 rounded shadow-2xl flex justify-center items-center gap-2 '>
        Add to Cart
       <FaCartPlus/>
      </button>
    </div>
  )
}
