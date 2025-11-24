import React, { useContext, useEffect, useState } from 'react'
import { FcShop } from "react-icons/fc";
import { MdOutlineShoppingCart } from "react-icons/md";
import { Link, NavLink } from 'react-router-dom';

import { useSelector } from 'react-redux';

export default function Header() {
  const cart = useSelector(state => state.cart.items);
  const [quantity, setQuantity] = useState(0);
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    const totalQuantity = cart.reduce(
      (preVal, currVal) => preVal + currVal.quantity,
      0
    );
    setQuantity(totalQuantity);
  }, [cart]);

  return (
    <header className="w-full bg-gray-100 px-8 py-4 flex justify-between items-center shadow-2xl sticky top-0 z-20">

      {/* LOGO */}
      <NavLink to='/'>
        <div className="flex items-center gap-2 cursor-pointer">
          <span>
            <span className="text-red-600 font-bold text-2xl">Apni</span>
            <span>Shop.</span>
          </span>
          <FcShop className="text-2xl" />
        </div>
      </NavLink>

      {/* Desktop Links */}
      <ul className="hidden md:flex gap-8 text-gray-700 text-lg *:cursor-pointer *:hover:text-rose-600">

        <li>
          <NavLink to='/' className={({ isActive }) => isActive ? 'text-red-600' : ''}>
            Home
          </NavLink>
        </li>

        <li>
          <NavLink to='/collections' className={({ isActive }) => isActive ? 'text-red-600' : ''}>
            Collections
          </NavLink>
        </li>

        <li>
          <NavLink to='/about' className={({ isActive }) => isActive ? 'text-red-600' : ''}>
            About
          </NavLink>
        </li>

        <li>
          <NavLink to='/contact' className={({ isActive }) => isActive ? 'text-red-600' : ''}>
            Contact us
          </NavLink>
        </li>
      </ul>

      {/* Desktop Buttons */}
      <div className='hidden md:flex gap-6 items-center'>

        <Link to='/shopping-cart'>
          <div className='relative cursor-pointer'>
            <MdOutlineShoppingCart className='text-3xl' />
            <span className='absolute -top-2.5 -right-2.5 rounded-full bg-rose-600 text-white size-4 flex items-center justify-center text-sm'>
              {quantity}
            </span>
          </div>
        </Link>

        <Link to='/login'>
        <button className="bg-rose-700 text-white py-2 px-4 rounded hover:bg-transparent hover:text-black border duration-300 cursor-pointer">
          Get Started
        </button>
        </Link>
      </div>

      {/* Hamburger (Animated) */}
      <div
        onClick={() => setOpenMenu(!openMenu)}
        className="w-7 h-6 flex flex-col justify-between md:hidden cursor-pointer"
      >
        <span
          className={`block w-full h-[3px] bg-gray-900 rounded transition-all duration-300 
            ${openMenu ? 'rotate-45 translate-y-3' : ''}`}
        ></span>

        <span
          className={`block w-full h-[3px] bg-gray-900 rounded transition-all duration-300 
            ${openMenu ? 'opacity-0' : 'opacity-100'}`}
        ></span>

        <span
          className={`block w-full h-[3px] bg-gray-900 rounded transition-all duration-300 
            ${openMenu ? '-rotate-45 -translate-y-2' : ''}`}
        ></span>
      </div>

      {/* Mobile Dropdown Menu */}
      {openMenu && (
        <div
          className="absolute top-16 left-0 w-full bg-white shadow-lg md:hidden p-5 flex flex-col gap-5 text-lg 
          animate-dropdown"
        >
          <NavLink onClick={() => setOpenMenu(false)} to='/' className="hover:text-rose-600">
            Home
          </NavLink>

          <NavLink onClick={() => setOpenMenu(false)} to='/collections' className="hover:text-rose-600">
            Collections
          </NavLink>

          <NavLink onClick={() => setOpenMenu(false)} to='/about' className="hover:text-rose-600">
            About
          </NavLink>

          <NavLink onClick={() => setOpenMenu(false)} to='/contact' className="hover:text-rose-600">
            Contact Us
          </NavLink>

          <Link to='/shopping-cart' onClick={() => setOpenMenu(false)}>
            <div className='flex items-center gap-2'>
              <MdOutlineShoppingCart className='text-3xl' />
              <span>Cart ({quantity})</span>
            </div>
          </Link>

          <button className="bg-rose-700 text-white py-2 px-4 rounded hover:bg-transparent hover:text-black border duration-300">
            Get Started
          </button>
        </div>
      )}

    </header>
  );
}
