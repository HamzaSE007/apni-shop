import React from "react";
import { IoNotificationsOutline } from "react-icons/io5";
import { FiSearch } from "react-icons/fi";
import { GoPerson } from "react-icons/go";

export default function AdminHeader() {
  return (
    <header className="w-full bg-white shadow-sm px-6 py-4 flex items-center justify-between sticky top-0 z-50">

      {/* Page title */}
      <h2 className="text-2xl font-semibold text-gray-700">
        Dashboard
      </h2>

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
      <div className="flex items-center gap-6">
        {/* Notifications */}
        <button className="relative text-gray-600 hover:text-gray-800">
          <IoNotificationsOutline className="text-2xl" />
          <span className="absolute -top-1 -right-1 bg-red-600 text-white text-[10px] px-[5px] rounded-full">
            3
          </span>
        </button>

        {/* Profile */}
        <button className="flex items-center gap-2 cursor-pointer">
          <GoPerson className="text-2xl text-gray-600" />
          <span className="hidden md:block text-gray-600 font-light">
            Admin
          </span>
        </button>
      </div>
    </header>
  );
}
