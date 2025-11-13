import React, { useEffect, useState } from 'react';
import { getProductById } from '../../services/Products';
import { MdDelete } from "react-icons/md";
import { IoBagCheckOutline } from "react-icons/io5";

export default function ShoppingCart() {
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);

  // handle Quantity
  function handleQuantity(e){
    if(e.target.id === 'decrement'){
      console.log('dec');
      
      if(quantity <= 1) return;
      setQuantity(preVal => preVal -1);
    }
    else if(e.target.id === 'increment'){
      console.log('incre');
      if(quantity >= 10) return;
      setQuantity(preVal => preVal + 1);
    }
  }

  const getOneProduct = async () => {
    try {
      const data = await getProductById(1);
      setProduct(data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    getOneProduct();
  }, []);

  return (
    <div className="p-14 bg-white flex flex-col justify-center items-center gap-6 ">
      <h1 className="text-2xl font-bold">Shopping Cart</h1>

     <div className="bg-gray-100 p-4 rounded shadow-2xl w-full max-w-11/12 overflow-x-auto overflow-y-auto max-h-[400px]">
  <table className="w-full min-w-5xl rounded">
    <thead className="border-b border-gray-400 *:p-2 bg-white sticky top-0 z-10">
      <tr className="grid grid-cols-5 font-semibold text-gray-700">
        <th>Product Image</th>
        <th>Name</th>
        <th>Price</th>
        <th>Quantity</th>
        <th>Action</th>
      </tr>
    </thead>

    <tbody className="border-b border-gray-400 *:p-2 ">
      <tr className="grid grid-cols-5 items-center text-center duration-200 odd:bg-gray-200">
        <td>
          <div className="w-12 mx-auto">
            <img
              src={product.image}
              alt={product.title}
              className="object-contain"
            />
          </div>
        </td>

        <td>
          <h3 className="font-semibold">{product.title}</h3>
        </td>

        <td>
          <p className="font-medium">${product.price}</p>
        </td>

        <td>
          <div className="flex gap-4 items-center justify-center">
            <button onClick={handleQuantity} id='decrement' className="bg-gray-400 h-8 w-10 p-1 rounded-full font-bold cursor-pointer hover:bg-gray-500">
              -
            </button>
            <span className="text-2xl">{quantity}</span>
            <button onClick={handleQuantity} id='increment'  className="bg-gray-400 h-8 w-10 p-1 rounded-full font-bold cursor-pointer hover:bg-gray-500">
              +
            </button>
          </div>
        </td>

        <td>
          <div className="flex gap-3 justify-center items-center">
            <button className="bg-gray-300 px-2 py-1 rounded flex items-center gap-1 hover:bg-transparent border border-gray-400 group cursor-pointer">
              <IoBagCheckOutline className="group-hover:text-red-600" />
              Check Out
            </button>
            <MdDelete className="hover:text-rose-600 text-2xl cursor-pointer" />
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</div>

    </div>
  );
}
