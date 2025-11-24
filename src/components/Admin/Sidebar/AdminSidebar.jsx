import React from "react";
import { FcShop } from "react-icons/fc";
import { AiOutlineProduct } from "react-icons/ai";
import { IoPricetagsOutline } from "react-icons/io5";
import { GoPerson } from "react-icons/go";
import { MdOutlineLogout } from "react-icons/md";

export default function AdminSidebar() {
  const menu = [
    { name: "Products", icon: <AiOutlineProduct /> },
    { name: "Sales", icon: <IoPricetagsOutline /> },
    { name: "Customers", icon: <GoPerson /> },
  ];

  return (
    <div className="bg-gray-100 min-h-screen w-64 px-6 py-6 border-r border-gray-300 flex flex-col justify-between">
      <div>
        {/* LOGO */}
        <div className="flex items-center gap-2 mb-12 cursor-pointer">
          <span className="text-2xl font-bold">
            <span className="text-red-600">Apni</span>Shop.
          </span>
          <FcShop className="text-3xl" />
        </div>

        {/* Menu Links */}
        <ul className="flex flex-col gap-4">
          {menu.map((item) => (
            <li
              key={item.name}
              className="flex items-center gap-4 text-gray-700 text-lg cursor-pointer p-2 rounded-lg transition-all duration-200 hover:bg-white hover:shadow-sm hover:text-black"
            >
              <span className="text-xl">{item.icon}</span>
              <span className="font-light">{item.name}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Logout */}
      <button className="bg-rose-700 hover:bg-rose-800 text-white flex items-center gap-3 px-4 py-2 rounded-lg transition-all duration-200 mt-10 cursor-pointer">
        <MdOutlineLogout className="text-xl" />
        <span className="font-light">Log out</span>
      </button>
    </div>
  );
}
