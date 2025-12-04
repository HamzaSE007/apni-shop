import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import { FcShop } from "react-icons/fc";

export default function DashboardSidebar({ menu }) {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (key) => {
    setOpenDropdown(openDropdown === key ? null : key);
  };

  return (
    <aside className="bg-gray-100 h-full w-64 px-6 py-6 border-r border-gray-300 overflow-y-auto">
      {/* Logo */}
      <div className="flex items-center gap-2 mb-12 cursor-pointer">
        <span className="text-2xl font-bold">
          <span className="text-red-600">Apni</span>Shop.
        </span>
        <FcShop className="text-3xl" />
      </div>

      {/* Menu List */}
      <ul className="flex flex-col gap-4">
        {menu.map((item, index) => (
          <li key={index}>
            {/* If Dropdown */}
            {item.children ? (
              <>
                <div
                  onClick={() => toggleDropdown(index)}
                  className="flex justify-between items-center cursor-pointer p-2 rounded-lg hover:bg-white hover:shadow-sm"
                >
                  <div className="flex items-center gap-4 text-gray-700 text-lg">
                    {<item.icon/>}
                    <span className="font-light">{item.label}</span>
                  </div>

                  <IoIosArrowDown
                    className={`transition-transform duration-300 ${
                      openDropdown === index ? "rotate-180" : ""
                    }`}
                  />
                </div>

                {openDropdown === index && (
                  <ul className="ml-10 mt-3 flex flex-col gap-6 text-gray-600 text-base">
                    {item.children.map((child, cIndex) => (
                      <li
                        key={cIndex}
                        className="hover:text-black cursor-pointer"
                      >
                        <NavLink
                          to={child.to}
                          className={({ isActive }) =>
                            `flex gap-2 items-center ${
                              isActive ? "text-rose-700 font-semibold" : ""
                            }`
                          }
                        >
                          {<child.icon/>}
                          <span>{child.label}</span>
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                )}
              </>
            ) : (
              // Normal Link
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  `flex items-center gap-4 text-lg cursor-pointer p-2 rounded-lg hover:bg-white hover:shadow-sm font-light text-gray-600 ${
                    isActive ? "text-rose-700 font-semibold" : ""
                  }`
                }
              >
                {<item.icon/>}
                <span>{item.label}</span>
              </NavLink>
            )}
          </li>
        ))}
      </ul>
    </aside>
  );
}
