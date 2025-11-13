import React, { useEffect, useState, useTransition } from 'react'
import ProductCard from '../ProductCard';
import { getTrendingProducts } from '../../services/Products';
import { Link } from 'react-router-dom';

export default function TrendingProduct({productsRef}) {
    const [products, setProducts] = useState([]);
    const [isPending, startTransition] = useTransition();

    async function getProducts() {
      startTransition(async ()=>{
        const data = await getTrendingProducts();
        setProducts(data)
      })
      
    }
    
    useEffect( () => {       
      getProducts()  
    }, []);
    
  return (
    <div className='bg-gray-100 p-14 flex flex-col gap-14 ' ref={productsRef}>
      <h2 className='text-center text-3xl font-semibold'>Our Trending Products</h2>
      <div className={isPending ? 'h-screen flex justify-center items-center' : 'hidden'}>
        <span className='h-10 w-10 bg-transparent rounded-full border-t-4 border-indigo-600 animate-spin'>
        </span>
      </div>  

    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
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