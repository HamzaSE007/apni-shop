import React, { useEffect, useState, useTransition } from 'react'
import { useParams } from 'react-router-dom'
import { getProductById } from '../../services/Products';
import { FaCartPlus } from "react-icons/fa6";


export default function ProductDetail() {
    const {productId} = useParams();
    const [isPending, startTransition] = useTransition();
    const [product, setproduct] = useState({});    

    // Get Product
    async function getProduct(){
        startTransition(async () => {
            const data = await getProductById(productId);
            console.log(data);          
            setproduct(data);
        });
    }

    useEffect(()=>{
        getProduct();
    },[productId]);
    
    
  return (
    <div className='p-14 bg-white flex flex-col justify-center items-center gap-8'>
        {/* Loader */}
      <div className={isPending ? 'h-screen flex justify-center items-center' : 'hiiden'}>
        <span className='h-10 w-10 bg-transparent rounded-full border-t-4 animate-spin border-indigo-600'></span>
      </div>
      <h1 className='text-2xl font-semibold '>Product Detail</h1>

      {/* product Detail card */}
      <div className='bg-gray-100 p-10 rounded-xl grid grid-cols-1 md:grid-cols-2 gap-4 shadow'>

        {/* Image */}
        <div className=' aspect-square p-6 rounded  m-auto'>
          <img src={product.image} 
               alt={product.title}
               className='w-full h-full drop-shadow-2xl' />
        </div>

        {/* Deatil */}
        <div className='flex flex-col gap-8 flex-wrap'>
          <h2 className='text-xl font-semibold text-red-600'>{product.title}</h2>
          <p> 
            <span className='font-semibold'>Category: </span> 
            {product.category}
          </p>
          <p>
            <span className='font-semibold'>Price: </span>
            <span className='font-bold text-red-600'> ${product.price}</span>
          </p>
          <p className='font-semibold'>Description:</p>
          <p>{product.description}</p>
          <button className='w-full bg-rose-600 text-white text-lg font-medium border hover:bg-transparent hover:text-black duration-400 cursor-pointer py-2 rounded shadow-2xl flex justify-center items-center gap-2 '>
            Add to Cart
            <FaCartPlus/>
          </button>
        </div>
        
      </div>
    </div>
  )
}
