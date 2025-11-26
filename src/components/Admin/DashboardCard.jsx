import React from "react";
import { FiBox, FiCheckCircle, FiXCircle, FiAlertTriangle } from "react-icons/fi";

export default function DashboardCard({
  title = "Product Overview",
  total = 0,
  active = 0,
  inactive = 0,
  lowStock = 0,
  icon: Icon
}) {
  return (
    <div className="p-5 bg-white rounded-xl shadow-md hover:shadow-xl transition-all cursor-pointer border border-gray-300">
      <div className="flex flex-col gap-6  overflow-auto">

        {/* Title */}
        <h1 className="text-xl font-bold text-gray-800 text-center flex justify-center items-center gap-2">
          {Icon && <Icon className="text-gray-700 text-2xl" />}
          {title}
        </h1>

        {/* Total Products */}
        <div className="flex justify-between items-center p-3 bg-gray-100 rounded-lg">
          <div className="flex items-center gap-2">
            <FiBox className="text-gray-600 text-xl" />
            <p className="font-medium text-gray-700">Total Products</p>
          </div>
          <p className="font-bold text-lg text-gray-900">{total}</p>
        </div>

        {/* Active Products */}
        <div className="flex justify-between items-center p-3 bg-green-50 border border-green-200 rounded-lg">
          <div className="flex items-center gap-2">
            <FiCheckCircle className="text-green-600 text-xl" />
            <p className="font-medium text-green-700">Active Products</p>
          </div>
          <p className="font-bold text-lg text-green-700">{active}</p>
        </div>

        {/* Inactive Products */}
        <div className="flex justify-between items-center p-3 bg-red-50 border border-red-200 rounded-lg">
          <div className="flex items-center gap-2">
            <FiXCircle className="text-red-600 text-xl" />
            <p className="font-medium text-red-700">Inactive Products</p>
          </div>
          <p className="font-bold text-lg text-red-700">{inactive}</p>
        </div>

        {/* Low Stock */}
        <div className="flex justify-between items-center p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
          <div className="flex items-center gap-2">
            <FiAlertTriangle className="text-yellow-600 text-xl" />
            <p className="font-medium text-yellow-700">Low Stock Items</p>
          </div>
          <p className="font-bold text-lg text-yellow-700">{lowStock}</p>
        </div>

      </div>
    </div>
  );
}
