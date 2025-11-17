import React, { useContext, } from "react";
import { RxCross2 } from "react-icons/rx";
import { RiDeleteBin6Line } from "react-icons/ri";
import { AddContext } from "../../context/addCartContext";
import { CartDrawerContext } from "../../context/CartDrawerContext";
import { Link } from "react-router-dom";

export default function CartDrawer() {
  const {isOpen, setIsOpen} = useContext(CartDrawerContext);
  const {cart, setCart} = useContext(AddContext);

  // increment quantity
  function incrementQuantity(id){
    setCart(prev => prev.map(item => {
      if(item.id !== id) return item;

      const unitPrice = item.price / item.quantity;
      if(item.quantity < 10){
        return {
          ...item,
          price: (unitPrice * (item.quantity + 1)).toFixed(2),
          quantity: item.quantity + 1
        }
      }
      return item;
    }))
  }

  // decrement quantity
  function decrementQuantity(id){
    setCart(prev => prev.map(item => {
      if(item.id !== id) return item;

      const unitPrice = item.price / item.quantity;
      if(item.quantity > 1){
        return{
          ...item,
          price: (unitPrice * (item.quantity - 1)).toFixed(2),
          quantity: item.quantity - 1
        }
      }
      return item;
    }))
  }

  // delete cart from shopping cart list
  function delCart(id){
    setCart(prev => prev.filter(item => item.id !== id))
  }


  return (
    <div className={`
             fixed top-0 right-0 z-100 h-full w-96 bg-[#d6d4d4] flex flex-col p-10 items-center gap-4 shadow-black shadow-2xl
             duration-500 overflow-y-auto
             ${isOpen ? 'translate-x-0' : "translate-x-full"}
           `}
    >
      <RxCross2
        onClick={() => setIsOpen(false)}
        className="absolute top-5 right-8 text-2xl cursor-pointer"
      />

      <h1 className="text-2xl font-bold ">Shopping Cart</h1>

      {cart.map(item => (

        <div key={item.id} className="grid grid-cols-3 gap-4 place-items-center odd:bg-[#c2bfbf] border-b ">
        {/* image */}

        <img
          src={item.image}
          className="object-contain self-center w-24 h-24"
          />

        <div className="flex flex-col gap-2 p-4">
          {/* Title */}
          <h2 className="font-bold">
            {item.title
              ? item.title.length > 11
              ? item.title.slice(0, 11)
              : item.title
              : "Loading..."}
          </h2>

          {/* price */}
          <p>${item.price}</p>

          {/* quantity btn */}
          <div className="w-20 flex justify-center border border-gray-500 rounded *:odd:cursor-pointer text-lg">
            <button onClick={() => decrementQuantity(item.id)} className="border-r px-2 text-gray-500">-</button>
            <span className="px-2">{item.quantity}</span>
            <button onClick={() => incrementQuantity(item.id)} className="border-l px-2 ">+</button>
          </div>
        </div>

        {/* delete cart btn */}
        <RiDeleteBin6Line onClick={() => delCart(item.id)} className="text-2xl cursor-pointer hover:text-red-600" />
      </div>
      ))}

      {/* View cart page */}
      <Link onClick={() => setIsOpen(false)} to='/shopping-cart'
            className="bg-rose-600 w-full p-2 text-white rounded cursor-pointer hover:bg-rose-700 text-lg shadow sticky bottom-0 text-center">
      <button className="cursor-pointer">
        View Cart Page
      </button>
      </Link>
    </div>
  );
}
