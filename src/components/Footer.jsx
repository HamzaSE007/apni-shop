import React, { useState } from 'react'
import { FcShop } from "react-icons/fc";
import { IoLocationOutline } from "react-icons/io5";
import { FiPhone } from "react-icons/fi";
import { MdOutlineMail } from "react-icons/md";
import { Link } from 'react-router-dom';
import Portal from './Portal/Portal';
import {portalContent} from '../utils/portalContent'

export default function Footer() {
const [isOpen, setIsOpen] = useState(false);
const [isKey, setIskey] = useState(null);

// portalContent
const content = portalContent;

function handlePortal(e){
  setIsOpen(true);
  setIskey(e.target.id);
}

function onClose(){
  setIsOpen(false);
  setIskey(null);
}

  return (
    <div className='p-14 bg-gray-100 grid grid-cols-1 lg:grid-cols-3'>

        {/* Shop detail */}
      <div className="flex flex-col items-center gap-6">
        <div className="flex items-center gap-2 cursor-pointer">
            <span>
                <span className="text-red-600 font-bold text-2xl">Apni</span>
                <span>Shop.</span>
            </span>
                <FcShop className="text-2xl" />
        </div>
        <p className="w-2/4 mx-auto text-center">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque odit
          aut molestiae suscipit aspernatur expedita.
        </p>

        <div className='flex '>
            <input type="email" 
                   name="email" 
                   id="email"
                   placeholder='Your Email address'
                   className='p-3 bg-white rounded-l w-full shadow outline-none'
            />
            <button className='bg-rose-600 text-white py-3 px-2 shadow cursor-pointer rounded-r'>Subscribe</button>
        </div>
      </div>

      {/* Links */}
      <div className='flex flex-col gap-4 items-center'>
        <h2 className='text-xl font-medium'>Information</h2>
        <ul className='flex flex-col gap-2 *:hover:cursor-pointer *:hover:text-red-500 '>
            <li >
             <Link to='/about'>
              About Us
             </Link>
            </li>
            <li id='returnPolicy' onClick={handlePortal}>Return Policy</li>
            <li id='termCondition' onClick={handlePortal}>Term & Condition</li>
            <li id='privacyPolicy' onClick={handlePortal}>Privacy Policy</li>
            <li id='faq' onClick={handlePortal}>FAQ</li>

            {/* open portal */}
            {
              isOpen && isKey && (
                <Portal isOpen={isOpen} onClose={onClose} >
                  <h1 className='text-2xl font-bold'>{content[isKey].title}</h1>
                  <p>{content[isKey].description}</p>
                </Portal>
              )
            }
        </ul>
      </div>

      {/* Contact */}
      <div className='flex flex-col gap-4 items-center'>

        <h2 className='text-xl font-medium'>Contact</h2>
       
        <ul className='flex flex-col gap-2 *:flex *:items-center *:gap-2 '>
            <li>
                <IoLocationOutline className='text-lg'/>
                Block G 4 
                Phase 2 Johar Town, <br />
                Lahore Pakistan
            </li>
            <li>
                <FiPhone/>
                +923191538407
            </li>
            <li>
                <MdOutlineMail/>
                info@gmail.com
            </li>
        </ul>
      </div>
    </div>
  )
}
