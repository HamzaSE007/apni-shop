import React, { useState } from "react";
import { FcShop } from "react-icons/fc";
import { AiOutlineProduct } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";
import { BsBoxSeam } from "react-icons/bs";
import { CiBoxList, CiShop, CiCircleList } from "react-icons/ci";
import { IoCreateOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { FiUsers, FiShoppingBag } from "react-icons/fi";

export default function AdminSidebar() {
  const [openProducts, setOpenProducts] = useState(false);
  const [openVendor, setOpenVendor] = useState(false);

  
  return (
    <div className="bg-gray-100 h-full w-64 px-6 py-6 border-r border-gray-300 flex flex-col justify-between overflow-y-auto">
      
      <div>
        {/* LOGO */}
        <div className="flex items-center gap-2 mb-12 cursor-pointer">
          <span className="text-2xl font-bold">
            <span className="text-red-600">Apni</span>Shop.
          </span>
          <FcShop className="text-3xl" />
        </div>

        {/* Menu */}
        <ul className="flex flex-col gap-4">
          {/* Product Dropdown */}
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

            {openProducts && (
              <ul className="ml-10 mt-3 flex flex-col gap-6 text-gray-600 text-base">
                <li className="hover:text-black cursor-pointer">
                  <NavLink               
                    to="product-list"
                    className={({ isActive }) =>(
                      `flex gap-2 items-center ${
                        isActive ? "text-rose-700 font-semibold" : ""
                      }`)
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
          <li className="text-gray-700 text-lg cursor-pointer p-2 rounded-lg hover:bg-white hover:shadow-sm">
            <NavLink
              to="orders"
              className={({ isActive }) =>
                `flex items-center gap-4 font-light ${
                  isActive ? "text-rose-700 font-semibold" : ""
                }`
              }
            >
              <FiShoppingBag className="text-xl" />
              <span>Orders</span>
            </NavLink>
          </li>

          {/* Customers */}
          <li className="text-gray-700 text-lg cursor-pointer p-2 rounded-lg hover:bg-white hover:shadow-sm">
            <NavLink
              to="customers"
              className={({ isActive }) =>
                `flex items-center gap-4 font-light ${
                  isActive ? "text-rose-700 font-semibold" : ""
                }`
              }
            >
              <FiUsers className="text-xl" />
              <span>Customers</span>
            </NavLink>
          </li>

          {/* VENDOR DROPDOWN */}
          <li
            onClick={() => setOpenVendor(!openVendor)}
            className="flex justify-between items-center gap-4 text-gray-700 text-lg cursor-pointer p-2 rounded-lg hover:bg-white hover:shadow-sm"
          >
            <div className="flex gap-4 items-center">
              <CiShop className="text-xl" />
              <span className="font-light">Vendor</span>
            </div>

            <IoIosArrowDown
              className={`transition-transform duration-300 ${
                openVendor ? "rotate-180" : ""
              }`}
            />
          </li>

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
                <NavLink
                  to="vendor-creation"
                  className={({ isActive }) =>
                    `flex gap-2 items-center ${
                      isActive ? "text-rose-700 font-semibold" : ""
                    }`
                  }
                >
                  <IoCreateOutline className="text-xl" />
                  <span>Create Vendor</span>
                </NavLink>
              </li>
            </ul>
          )}
        </ul>
      </div>

      
    </div>
  );
}
