import React, { useState } from "react";
import { FcShop } from "react-icons/fc";
import { AiOutlineProduct } from "react-icons/ai";
import { IoPricetagsOutline } from "react-icons/io5";
import { GoPerson } from "react-icons/go";
import { MdOutlineLogout } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { BsBoxSeam } from "react-icons/bs";
import { CiBoxList, CiShop, CiCircleList } from "react-icons/ci";
import { IoCreateOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";

export default function AdminSidebar() {
  const [openProducts, setOpenProducts] = useState(false);
  const [openVendor, setOpenVendor] = useState(false);

  return (
    <div className="bg-gray-100 h-screen w-64 px-6 py-6 border-r border-gray-300 flex flex-col justify-between ">
      <div className="overflow-y-auto">
        {/* LOGO */}
        <div className="flex items-center gap-2 mb-12 cursor-pointer">
          <span className="text-2xl font-bold">
            <span className="text-red-600">Apni</span>Shop.
          </span>
          <FcShop className="text-3xl" />
        </div>

        {/* MENU */}

        <ul className="flex flex-col gap-4">
          {/* PRODUCTS DROPDOWN */}
          <li>
            <div
              onClick={() => setOpenProducts(!openProducts)}
              className="flex justify-between items-center cursor-pointer p-2 rounded-lg hover:bg-white hover:shadow-sm"
            >
              <div className="flex items-center gap-4 text-gray-700 text-lg">
                <AiOutlineProduct className="text-xl" />
                <span className="font-light">Products</span>
              </div>
              <IoIosArrowDown
                className={`transition-transform duration-300 ${
                  openProducts ? "rotate-180" : ""
                }`}
              />
            </div>

            {/* DROPDOWN ITEMS */}
            {openProducts && (
              <ul className="ml-10 mt-3 flex flex-col gap-6 text-gray-600 text-base">
                <li className="hover:text-black cursor-pointer ">
                  <NavLink
                    to="product-list"
                    className={({ isActive }) =>
                      `flex gap-2 items-center ${
                        isActive ? "text-rose-700 font-semibold" : ""
                      }`
                    }
                  >
                    <BsBoxSeam />
                    <span>Product List</span>
                  </NavLink>
                </li>
                <li className="hover:text-black cursor-pointer flex gap-2 items-center">
                  <NavLink
                    to="product-category-list"
                    className={({ isActive }) =>
                      `flex gap-2 items-center ${
                        isActive ? "text-rose-700 font-semibold" : ""
                      }`
                    }
                  >
                    <CiBoxList className="text-xl" />
                    <span>Categories</span>
                  </NavLink>
                </li>
              </ul>
            )}
          </li>

          {/* Orders */}
          <li className=" text-gray-700 text-lg cursor-pointer p-2 rounded-lg hover:bg-white hover:shadow-sm">
            <NavLink to='orders' className={({isActive}) => `flex items-center gap-4 font-light ${isActive ? 'text-rose-700! font-semibold' : ''}`}>
            <IoPricetagsOutline className="text-xl" />
            <span >Orders</span>
            </NavLink>
          </li>

          {/* CUSTOMERS */}
          <li className="flex items-center gap-4 text-gray-700 text-lg cursor-pointer p-2 rounded-lg hover:bg-white hover:shadow-sm">
            <NavLink to='customers' className={({isActive}) => `flex items-center gap-4 font-light ${isActive ? 'text-rose-700! font-semibold' : ''}`}>
            <GoPerson className="text-xl" />
            <span>Customers</span>
            </NavLink>
            
          </li>

          {/* Vendor create & List */}
          <li
            onClick={() => setOpenVendor(!openVendor)}
            className="flex justify-between items-center gap-4 text-gray-700 text-lg cursor-pointer p-2 rounded-lg hover:bg-white hover:shadow-sm"
          >
            <div className="flex gap-4 items-center hover:font-black">
              <CiShop className="text-xl" />
              <span className="font-light">Vendor</span>
            </div>
            <IoIosArrowDown
              className={`transition-transform duration-300 ${
                openVendor ? "rotate-180" : ""
              } `}
            />
          </li>

          {/* Show dropdown of vendor */}
          {openVendor && (
            <ul className="ml-10 mt-3 flex flex-col gap-6 text-gray-600 text-base">
              <li className="hover:text-black cursor-pointer flex gap-2 items-center">
                <NavLink
                    to="vendors-list"
                    className={({ isActive }) =>
                      `flex gap-2 items-center ${
                        isActive ? "text-rose-700 font-semibold" : ""
                      }`
                    }
                  >
                   <CiCircleList className="text-xl" />
                   <span>Vendor List</span>
                  </NavLink>
                
              </li>
              <li className="hover:text-black cursor-pointer flex gap-2 items-center">
                <IoCreateOutline className="text-xl" />
                Create Vendor
              </li>
            </ul>
          )}
        </ul>
      </div>

      {/* LOGOUT */}
      <button className="bg-rose-700 hover:bg-rose-800 text-white flex items-center gap-3 px-4 py-2 rounded-lg transition-all cursor-pointer">
        <MdOutlineLogout className="text-xl" />
        <span className="font-light">Log out</span>
      </button>
    </div>
  );
}
