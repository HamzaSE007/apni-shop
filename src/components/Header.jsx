import React, { useContext } from 'react'
import { FcShop } from "react-icons/fc";
import { MdOutlineShoppingCart } from "react-icons/md";
import { Link, NavLink } from 'react-router-dom';
import { AddContext } from '../context/addCartContext';


export default function Header() {
  const {cart} = useContext(AddContext);
  
  return (
    <header className="w-full bg-gray-100 p-4 flex justify-around items-center flex-wrap shadow-2xl sticky top-0 z-20 duration-300">

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

      {/* Links */}
      <ul className="hidden gap-6 text-l  lg:text-xl lg:gap-10 *:cursor-pointer *:hover:text-rose-600 md:flex text-gray-700">

        <li>
          <NavLink to='/' className={({isActive}) => isActive ? 'text-red-600' : ''}>
           Home
          </NavLink>
        </li>

        <li>
          <NavLink to='/collections' className={({isActive}) => isActive ? 'text-red-600' : ''}>
           Collections
          </NavLink>
        </li>

        <li>
          <NavLink to='/about' className={({isActive}) => isActive ? 'text-red-600' : ''}>
           About
          </NavLink>
        </li>

        <li>
          <NavLink to='/contact'className={({isActive}) => isActive ? 'text-red-600' : ''}>
           Contact us
          </NavLink>
        </li>
      </ul>

      {/* Buttons  */}
      <div className='hidden gap-8 justify-center items-center md:flex'>

        <Link to='/shopping-cart'>
        <div className='relative cursor-pointer'>
          <MdOutlineShoppingCart className='text-3xl'/>
          <span className='absolute -top-2.5 -right-2.5 rounded-full bg-rose-600 text-white size-4 flex items-center justify-center text-sm'>
              {cart.length}
          </span>
        </div>
        </Link>

        <button className="bg-rose-700 text-white py-2 px-4 text-l rounded cursor-pointer  hover:bg-transparent hover:text-black border duration-300">
          Get Started
        </button>
      </div>

      {/* Humburger menu */}
      <div className='w-6 *:w-full *:h-[3px] *:bg-gray-900 *:rounded flex flex-col gap-1 md:hidden '>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>
  );
}
