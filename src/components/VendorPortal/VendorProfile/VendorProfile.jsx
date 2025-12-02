import React, { useState } from "react";
import { GoPerson } from "react-icons/go";
import { FiMail, FiPhone, FiMapPin, FiEdit } from "react-icons/fi";
import { RiLockPasswordLine } from "react-icons/ri";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";
import { IoArrowBackSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

export default function VendorProfile() {
  const [showPas, setShowPas] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);

  return (
    <div className="min-h-screen p-4 md:p-10 bg-gray-200 relative">

      {/* Back Page arrow */}
      <Link to='/vendor'>
      <div className="w-10 h-10 bg-gray-300 hover:bg-gray-400 cursor-pointer border flex justify-center items-center rounded-full group duration-300 transition-all">
        <IoArrowBackSharp className="text-xl group-hover:text-red-700 transition-all duration-300 group-hover:-translate-x-1"/>
      </div>
      </Link>

      {/* body */}
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-semibold text-gray-700 mb-6">
          Vendor Profile
        </h2>

        <div className="bg-white shadow rounded-2xl p-6">
          {/* Profile Header */}
          <div className="flex flex-wrap md:flex-nowrap items-center gap-5 pb-6 border-b">
            <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center">
              <GoPerson className="text-4xl text-gray-600" />
            </div>

            <div>
              <h3 className="text-xl font-medium text-gray-800">Vendor Name</h3>
              <p className="text-gray-500 text-sm">System Administrator</p>
            </div>

            <button
              onClick={() => setOpenEdit(true)}
              className="ml-auto px-4 py-2 bg-rose-500 text-white rounded-lg flex items-center gap-2 hover:bg-rose-600 cursor-pointer"
            >
              <FiEdit /> Edit
            </button>
          </div>

          {/* Profile Details */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Email */}
            <div className="flex items-center gap-3 p-4 bg-gray-100 rounded-xl">
              <FiMail className="text-lg text-rose-500" />
              <div>
                <p className="text-xs text-gray-500">Email</p>
                <p className="text-gray-700 font-medium">vendor@example.com</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-3 p-4 bg-gray-100 rounded-xl">
              <FiPhone className="text-lg text-rose-500" />
              <div>
                <p className="text-xs text-gray-500">Phone</p>
                <p className="text-gray-700 font-medium">+92 300 1234567</p>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-center gap-3 p-4 bg-gray-100 rounded-xl">
              <FiMapPin className="text-lg text-rose-500" />
              <div>
                <p className="text-xs text-gray-500">Address</p>
                <p className="text-gray-700 font-medium">Lahore, Pakistan</p>
              </div>
            </div>

            {/* Role */}
            <div className="flex items-center gap-3 p-4 bg-gray-100 rounded-xl">
              <GoPerson className="text-lg text-rose-500" />
              <div>
                <p className="text-xs text-gray-500">Role</p>
                <p className="text-gray-700 font-medium">Vendor</p>
              </div>
            </div>

            {/* Password */}
            <div className="flex items-center gap-3 p-4 bg-gray-100 rounded-xl">
              <RiLockPasswordLine className="text-lg text-rose-500" />
              <div>
                <p className="text-xs text-gray-500">Password</p>
                <div className="flex justify-between items-center">
                  <input value={showPas ? "Hello@1234" : "........."} />
                  {showPas ? (
                    <FaRegEye
                      onClick={() => setShowPas(!showPas)}
                      className="cursor-pointer text-lg"
                    />
                  ) : (
                    <FaRegEyeSlash
                      onClick={() => setShowPas(!showPas)}
                      className="cursor-pointer text-lg"
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Edit profile dialog */}
      {openEdit && (
        <div className="fixed inset-0 z-50 bg-black/40 flex justify-center items-center backdrop-blur-xs">
          <div className="w-[700px] max-h-[85vh] bg-white p-10 rounded-xl shadow-2xl overflow-y-auto animate-scaleUp">
            {/* Title */}
            <h1 className="text-3xl font-semibold text-center text-gray-700 pb-6 border-b border-gray-400">
              Edit Profile
            </h1>

            {/* form */}
            <form onSubmit={(e) => e.preventDefault()} 
                  className="my-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Name */}
                <div>
                  <label className="block text-sm font-medium">Name</label>
                  <input
                    type="text"
                    placeholder="Enter name"
                    className="mt-1 block w-full rounded-md border p-2"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium">Email</label>
                  <input
                    type="email"
                    placeholder="Enter email"
                    className="mt-1 block w-full rounded-md border p-2"
                  />
                </div>

                {/* Address */}
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium">Address</label>
                  <textarea
                    rows={4}
                    type="text"
                    placeholder="Enter address"
                    className="mt-1 block w-full rounded-md border p-2"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-medium">Phone</label>
                  <input
                    type="text"
                    placeholder="Enter phone"
                    className="mt-1 block w-full rounded-md border p-2"
                  />
                </div>

                {/* Change Password */}
                <div>
                  <label className="block text-sm font-medium">Change Password</label>
                  <input
                    type="password"
                    placeholder="Enter new password"
                    className="mt-1 block w-full rounded-md border p-2"
                  />
                </div>
              </div>

              {/* Footer Buttons */}
              <div className="flex justify-end gap-4 mt-8">
                <button
                  type="button"
                  onClick={() => setOpenEdit(false)}
                  className="px-5 py-2 bg-gray-300 rounded-lg hover:bg-gray-400 cursor-pointer"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="px-5 py-2 bg-rose-500 text-white rounded-lg hover:bg-rose-600 cursor-pointer"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
