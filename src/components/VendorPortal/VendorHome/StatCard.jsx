import React from 'react'
import { CiMenuKebab } from "react-icons/ci";
import { FaArrowUp } from "react-icons/fa6";
import { BsGraphUpArrow, BsGraphDownArrow } from "react-icons/bs";

export default function StatCard({ title, value, percentage, isPositive }) {
  return (
    <div className="p-6 flex flex-col gap-3 border border-gray-200 rounded-2xl shadow-[0_0_5px_rgba(0,0,0,0.1)] bg-white">
      {/* Header */}
      <div className="flex justify-between items-center">
        <span className="text-lg font-medium text-gray-700">{title}</span>
        <CiMenuKebab className="text-xl text-gray-600 cursor-pointer hover:text-black" />
      </div>

      {/* Value */}
      <div className="text-3xl font-semibold text-gray-900">{value}</div>

      {/* Footer Row */}
      <div className="flex justify-between items-center pt-1">
        <div className="flex gap-1 items-center">
          <FaArrowUp
            className={`${
              isPositive ? "text-green-500" : "text-red-500 rotate-180"
            }`}
          />
          <span
            className={`text-sm font-medium ${
              isPositive ? "text-green-700" : "text-red-700"
            }`}
          >
            {percentage}
          </span>

          <span className="text-sm text-gray-500 ml-2">vs last month</span>
        </div>

        {isPositive ? (
          <BsGraphUpArrow className="text-3xl text-green-500 drop-shadow-2xl" />
        ) : (
          <BsGraphDownArrow className="text-3xl text-red-500 drop-shadow-2xl" />
        )}
      </div>
    </div>
  );
}