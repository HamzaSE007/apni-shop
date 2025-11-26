import React, { useState } from "react";
import { salesData } from "../../../constant/sales";
import { MdDeleteSweep } from "react-icons/md";
import Search from "../Search";

export default function Orders() {
  const [searchOrder, setSearchOrder] = useState('')
  const orders = salesData;
  const statusColors = {
    pending: "bg-yellow-100 text-yellow-700",
    completed: "bg-green-100 text-green-700",
    cancelled: "bg-red-100 text-red-700",
    shipped: "bg-purple-100 text-purple-700",
    "in-progress": "bg-blue-100 text-blue-700",
  };

  return (
    <div className="p-6 w-full">

      {/* title & search bar */}
      <div className="flex justify-between items-center mb-4 sticky top-0 z-10 bg-gray-50">
        {/* title */}
        <h2 className="text-3xl font-bold  text-gray-800 tracking-tight">
          Orders List
        </h2>

        {/* category search bar */}
        <div className="p-4">
          <Search value={searchOrder}
                  onChange={setSearchOrder}
                  placeholder={"Search order by status..."}/>
        </div>
      </div>

      {/* body */}
      <div className="bg-white rounded-lg shadow-sm border min-w-3xl overflow-x-auto">
        <table className="w-full text-left overflow-auto ">
          <thead>
            <tr className="border-b bg-gray-50 text-gray-600 text-sm">
              <th className="p-3">Customer Name</th>
              <th className="p-3">Vendor</th>
              <th className="p-3">Phone</th>
              <th className="p-3">Email</th>
              <th className="p-3">Status</th>
              <th className="p-3">Action</th>
            </tr>
          </thead>

          <tbody className="text-sm">
            {orders?.filter(order => order.status.toLowerCase().includes(searchOrder.toLowerCase()))
            .map((order, idx) => (
              <tr key={idx} className="border-b hover:bg-gray-50 transition">
                <td className="p-3">{order.buyerName}</td>
                <td className="p-3">{order.vendor}</td>
                <td className="p-3 text-indigo-700">{order.buyerPhone}</td>
                <td className="p-3">{order.email}</td>
                <td className="p-3">
                  <span
                  class={`px-3 py-1 rounded-full text-xs font-semibold ${statusColors[order.status]}`}
                >
                  {order.status}
                </span>
                </td>
                <td className="p-3">
                  <MdDeleteSweep className="text-xl cursor-pointer hover:text-rose-700"/>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
