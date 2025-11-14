import React, { useContext } from 'react'
import { FaCartPlus } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { AddContext } from '../context/addCartContext';


export default function ProductCard({title,price,category,image,id,quantity=1}) {
  const {cart,setCart} = useContext(AddContext);
  
  // Add Data into Cart
  function handleAddToCart(e){
    e.preventDefault();

    const productExist = cart.find(item => item.id === id);
    
    if(productExist){
      setCart(prev => (
        prev.map(item => (
          item.id === id ? {...item, price: item.price + price, quantity: item.quantity + 1} : item
        ))
      ))
      
      return;
    } 
    
    setCart(prev => [...prev, {title,price,image,id,quantity}]);
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
