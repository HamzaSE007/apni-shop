import React, { useContext } from 'react';
import { MdDelete } from "react-icons/md";
import { IoBagCheckOutline } from "react-icons/io5";
import { AddContext } from '../../context/addCartContext';
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link } from 'react-router-dom';

export default function ShoppingCart() {

  const {cart,setCart} = useContext(AddContext);
  

  // increment Quantity
  function incrementQuantity(id){
    setCart(prev => prev.map(item => {
      if(item.id !== id) return item;

      const unitPrice = item.price / item.quantity;
      if(item.quantity < 10){
        return {
          ...item,
          price: (unitPrice * (item.quantity + 1)).toFixed(2),
          quantity: item.quantity + 1,
        }
      }
      return item;
   }))
  }

  // decrement Quantity
  function decrementQuantity(id){
    setCart(prev => prev.map(item =>{
      if(item.id !== id) return item;

      const unitPrice = item.price / item.quantity;
      if(item.quantity > 1){
        return {
          ...item,
          price: (unitPrice * (item.quantity - 1)).toFixed(2),
          quantity: item.quantity - 1,
        }
      }

      return item;
    }))
  }
  

  // handle Delete 
  function handleDelCart(id){
    setCart(prev => prev.filter(item => item.id !== id))
  }


  return (
    <div className="p-14 bg-white flex flex-col justify-center items-center gap-6 ">
      <h1 className="text-2xl font-bold">Shopping Cart</h1>

     <div className="bg-gray-100 p-4 rounded shadow-2xl w-full max-w-11/12 overflow-x-auto ">
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
      {
        cart.map(item => (
          <tr className="grid grid-cols-5 items-center text-center duration-200 odd:bg-gray-200">
        <td>
          <div className="w-12 mx-auto">
            <img
              src={item.image}
              alt={item.title}
              className="object-contain"
            />
          </div>
        </td>

        <td>
          <h3 className="font-semibold">{item.title}</h3>
        </td>

        <td>
          <p className="font-medium">${item.price}</p>
        </td>

        <td>
          <div className="flex gap-4 items-center justify-center">
            <button onClick={()=>decrementQuantity(item.id)} className="bg-gray-400 h-8 w-10 p-1 rounded-full font-bold cursor-pointer hover:bg-gray-500">
              -
            </button>
            <span className="text-2xl">{item.quantity}</span>
            <button onClick={()=>incrementQuantity(item.id)} className="bg-gray-400 h-8 w-10 p-1 rounded-full font-bold cursor-pointer hover:bg-gray-500">
              +
            </button>
          </div>
        </td>

        <td>
          <div className="flex gap-3 justify-center items-center">
            
            <MdDelete onClick={()=>handleDelCart(item.id)} className="hover:text-rose-600 text-2xl cursor-pointer" />
          </div>
        </td>
      </tr>
        ))
      }
      
    </tbody>
  </table>
  {/* button */}
  {
    cart.length >= 1 ?
    (<div className='flex-col justify-center items-center *:cursor-pointer mt-4 md:flex md:flex-row md:justify-between'>

   <Link to='/'>
    <button className='font-semibold hover:text-red-600 gap-1 flex items-center group cursor-pointer'>
      <FaArrowLeftLong className='hidden group-hover:inline duration-500'/>
      Continue Shopping
    </button>
   </Link>

    <button className="bg-gray-300 px-2 py-1 rounded flex items-center gap-1 hover:bg-transparent border border-gray-400 group">
      <IoBagCheckOutline className="group-hover:text-red-600" />
      Check Out
    </button>
  </div>)

  : ''

}
</div>

    </div>
  );
}
