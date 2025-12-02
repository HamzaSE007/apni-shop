import React, { useState, useEffect } from "react";
import { IoNotificationsOutline } from "react-icons/io5";
import { FiSearch } from "react-icons/fi";
import { GoPerson } from "react-icons/go";
import { Link } from "react-router-dom";
import { IoIosLogOut } from "react-icons/io";
import { PiWarningOctagonLight } from "react-icons/pi";

export default function VendorHeader() {
  const [openProfileDropDown, setOpenProfileDropDown] = useState(false);
  const [openLogoutPopup, setOpenLogoutPopup] = useState(false);
  const [openNotiDropdown, setOpenNotiDropdown] = useState(false);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      setOpenProfileDropDown(false);
      setOpenNotiDropdown(false);
    };

    document.body.addEventListener("click", handleClickOutside);

    return () => document.body.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <header className="w-full bg-white shadow-sm px-6 py-4 flex items-center justify-between sticky top-0 z-50">
      {/* Page title */}
      <Link to="/vendor">
        <h2 className="text-2xl font-semibold text-gray-700 cursor-pointer hover:text-gray-800">
          Vendor Dashboard
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
      <div className="flex items-center gap-8 relative">
        {/* Notifications */}
        <div
          className="relative"
          onClick={(e) => {
            e.stopPropagation();
            setOpenNotiDropdown(!openNotiDropdown);
            setOpenProfileDropDown(false)
          }}
        >
          <button className="relative text-gray-600 hover:text-gray-800 cursor-pointer flex items-center">
            <IoNotificationsOutline className="text-2xl" />
            <span className="absolute -top-1 -right-1 bg-red-600 text-white text-[12px] font-semibold size-4 rounded-full flex justify-center items-center">
              3
            </span>
          </button>

          {/* Notification Dropdown */}
          {openNotiDropdown && (
            <div
              className="absolute right-0 mt-2 w-80 bg-white shadow-lg rounded-lg border border-gray-200 z-50"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-4 border-b border-gray-100 flex justify-between items-center">
                <h3 className="text-lg font-semibold text-gray-800">
                  Notifications
                </h3>
                <button className="text-gray-400 hover:text-gray-600 cursor-pointer">
                  Clear All
                </button>
              </div>
              <ul className="max-h-60 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300">
                <li className="p-3 hover:bg-gray-50 cursor-pointer flex items-start gap-4">
                  <div className="bg-blue-100 text-blue-600 h-8 w-8 rounded-full flex justify-center items-center">
                    🔔
                  </div>
                  <div>
                    <p className="text-gray-800 text-sm font-medium">
                      New message received
                    </p>
                    <p className="text-gray-500 text-xs">5 minutes ago</p>
                  </div>
                </li>
                <li className="p-3 hover:bg-gray-50 cursor-pointer flex items-start gap-4">
                  <div className="bg-green-100 text-green-600 h-8 w-8 flex justify-center items-center rounded-full">
                    ✅
                  </div>
                  <div>
                    <p className="text-gray-800 text-sm font-medium">
                      Task completed
                    </p>
                    <p className="text-gray-500 text-xs">10 minutes ago</p>
                  </div>
                </li>
              </ul>
              <div className="p-3 border-t border-gray-100 text-center">
                <button className="text-blue-600 text-sm hover:underline cursor-pointer">
                  View All
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Profile */}
        <div
          className="relative"
          onClick={(e) => {
            e.stopPropagation();
            setOpenProfileDropDown(!openProfileDropDown);
            setOpenNotiDropdown(false)
          }}
        >
          <button className="flex items-center gap-2 cursor-pointer">
            <GoPerson className="text-2xl text-gray-600" />
            <span className="hidden md:block text-gray-600 font-light">
              Vendor
            </span>
          </button>

          {/* Profile Dropdown */}
          {openProfileDropDown && (
            <div
              className="absolute right-0 mt-2 w-44 bg-white shadow-lg rounded-lg py-2 border border-gray-100 animate-fadeIn"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Profile Link */}
              <Link to="/vendor/profile">
                <div className="flex items-center gap-4 p-4 text-gray-700 cursor-pointer hover:bg-gray-100">
                  <GoPerson className="text-xl" />
                  <span>Profile</span>
                </div>
              </Link>

              {/* Logout */}
              <div
                onClick={() => setOpenLogoutPopup(true)}
                className="border-t flex items-center gap-4 p-4 text-gray-700 cursor-pointer hover:bg-gray-100"
              >
                <IoIosLogOut className="text-xl" />
                <span>Log out</span>
              </div>

              {/* Status */}
              <div className="border-t flex items-center gap-2 p-4 text-gray-700">
                <span className="text-sm">Status:</span>
                <span className="px-2 py-1 text-sm font-medium rounded-full bg-green-100 text-green-700">
                  active
                </span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Logout Popup */}
      {openLogoutPopup && (
        <div className="fixed inset-0 backdrop-blur-sm bg-black/40 flex items-center justify-center p-4 z-50">
          <div className="bg-white backdrop-blur-lg border border-white/30 rounded-2xl p-6 w-full max-w-sm shadow-lg">
            <div className="text-xl font-bold flex gap-3 items-center">
              <PiWarningOctagonLight className="text-rose-600 text-2xl" />
              <h1>Confirm Logout</h1>
            </div>
            <p className="mt-2 text-gray-600">
              Do you really want to logout?
            </p>

            <div className="mt-6 flex gap-3">
              <button
                onClick={() => setOpenLogoutPopup(false)}
                className="w-1/2 py-2 rounded-xl bg-black/10 border-white/20 hover:bg-black/20 cursor-pointer"
              >
                Cancel
              </button>
              <button className="w-1/2 py-2 rounded-xl bg-red-600 hover:bg-red-700 cursor-pointer text-white">
                Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
