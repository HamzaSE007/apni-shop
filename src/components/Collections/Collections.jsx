import React, { useEffect, useState, useTransition } from 'react'
import { getAllProducts } from '../../services/Products'
import ProductCard from '../ProductCard';
import { Link } from 'react-router-dom';

export default function Collections() {
  const [products, setProducts] = useState([]);
  const [isPending, startTransition] = useTransition();

  async function getData(){
    startTransition(async () =>{
      const data = await getAllProducts();
      setProducts(data);
    })
      
  }

  useEffect(()=>{
    getData();
  },[]);
  
  
  return (
    <div className='bg-gray-100 p-14 flex flex-col gap-8 '>
      <h2 className='text-center text-2xl font-semibold'>Our Collections</h2>

      {/* Loader */}
      <div className={isPending ? 'h-screen flex justify-center items-center' : 'hiiden'}>
        <span className='h-10 w-10 bg-transparent rounded-full border-t-4 animate-spin border-indigo-600'></span>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
              {products.map(product => (
                <Link to={`/product-detail/${product.id}`}>
                  <ProductCard
                  key={product.id}
                  id = {product.id}
                  title={product.title}
                  price={product.price}
                  category={product.category}
                  image={product.image}
                  />
                </Link>
              ))}
      </div>
    </div>
  )
}
