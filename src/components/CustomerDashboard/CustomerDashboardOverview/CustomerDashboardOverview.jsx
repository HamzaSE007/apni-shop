import React from "react";
import { GoPerson } from "react-icons/go";

export default function CustomerDashboardOverview() {
  return (
    <div className="flex flex-col p-3 gap-8">
      {/* Title */}
      <h1 className="text-3xl font-bold  text-gray-800 tracking-tight">
        Overview
      </h1>

      {/* Dashboard UI */}

      <div className="flex flex-col gap-8 ">
        {/* Card */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white shadow-[0_0_5px_rgba(0,0,0,0.2)] p-6 rounded-xl border border-gray-300 flex flex-col justify-center items-center gap-2">
            {/* Profile image */}
            <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center">
              <GoPerson className="text-4xl text-gray-600" />
            </div>

            {/* profile name */}
            <h3 className="text-lg font-semibold text-gray-700 ">Customer Name</h3>

            {/* Status  */}
            <div className="flex gap-4 justify-center">
                <span className="text-gray-600 font-medium">Status: </span>
                <span className="px-3 py-1 text-sm font-medium rounded-full bg-green-100 text-green-700">Active</span>
            </div>

            {/* View Profile */}
            <button className="p-3 bg-rose-700 text-white mt-4 rounded-lg font-medium cursor-pointer border hover:bg-transparent hover:border hover:text-rose-700 transition-all duration-300">
                Edit Profile
            </button>

          </div>
        </div>

        {/*  */}
      </div>
    </div>
  );
}
