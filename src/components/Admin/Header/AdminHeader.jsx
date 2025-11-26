import React, { useState } from "react";
import { IoNotificationsOutline } from "react-icons/io5";
import { FiSearch } from "react-icons/fi";
import { GoPerson } from "react-icons/go";
import { Link } from "react-router-dom";
import { LiaEdit  } from "react-icons/lia";
import { IoIosLogOut } from "react-icons/io";

export default function AdminHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-sm px-6 py-4 flex items-center justify-between sticky top-0 z-50">
      
      {/* Page title */}
      <Link to="/admin">
        <h2 className="text-2xl font-semibold text-gray-700 cursor-pointer">
          Dashboard
        </h2>
      </Link>

      {/* Search Bar */}
      <div className="relative hidden md:block">
        <FiSearch className="absolute left-3 top-3 text-gray-400 text-lg" />
        <input
          type="text"
          placeholder="Search..."
          className="pl-10 pr-3 py-2 w-72 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-300 outline-none"
        />
      </div>

      {/* Icons & Profile */}
      <div className="flex items-center gap-6 relative">

        {/* Notifications */}
        <button className="relative text-gray-600 hover:text-gray-800">
          <IoNotificationsOutline className="text-2xl" />
          <span className="absolute -top-1 -right-1 bg-red-600 text-white text-[10px] px-[5px] rounded-full">
            3
          </span>
        </button>

        {/* Profile */}
        <div
          className="relative"
          onClick={() => setOpen(!open)}
          
        >
          <button className="flex items-center gap-2 cursor-pointer">
            <GoPerson className="text-2xl text-gray-600" />
            <span className="hidden md:block text-gray-600 font-light">
              Admin
            </span>
          </button>

          {/* Dropdown */}
          {open && (
            <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-lg py-2 border border-gray-100 animate-fadeIn">
              {/* Profile */}
              <div className="border-gray-500 flex items-center gap-4 px-4 py-2 text-gray-700 cursor-pointer hover:bg-gray-100">
                <GoPerson className="text-xl"/>
                <span>Profile</span>
              </div>

              {/* Edit Profile */}
              <div className="border-gray-500 border-t flex items-center gap-4 px-4 py-2 text-gray-700 cursor-pointer hover:bg-gray-100">
                <LiaEdit  className="text-xl"/>
                <span>Edit</span>
              </div>

              {/* Logout btn */}
              <div className="border-gray-500 border-t flex items-center gap-4 px-4 py-2 text-gray-700 cursor-pointer hover:bg-gray-100">
                <IoIosLogOut className="text-xl"/>
                <span>Log out</span>
              </div>

              {/* status */}
              <div className="border-gray-500 border-t flex items-center gap-4 px-4 py-2 text-gray-700">
                <span className="text-sm">Status:</span>
                <span className="px-2 py-1 text-sm font-medium rounded-full bg-green-100 text-green-700">
                  active
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
