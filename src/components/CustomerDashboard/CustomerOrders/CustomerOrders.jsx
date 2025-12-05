import React, { useState } from "react";
import { MdDeleteSweep } from "react-icons/md";
import { IoWarningOutline } from "react-icons/io5";
import Search from "../../sharedComponents/Search";
import { specificCustomerOrders } from "../../../constant/specificCustomerOrders";

export default function CustomerOrders() {
  const [searchOrder, setSearchOrder] = useState("");
  const [deletePopup, setDeletePopup] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);

  const orders = specificCustomerOrders;
  const statusColors = {
    pending: "bg-yellow-100 text-yellow-700",
    completed: "bg-green-100 text-green-700",
    cancelled: "bg-red-100 text-red-700",
    shipped: "bg-purple-100 text-purple-700",
    delivered: "bg-teal-100 text-teal-700",
    processing: "bg-blue-100 text-blue-700",
  };

  const handleDeleteClick = (order) => {
    setSelectedOrder(order);
    setDeletePopup(true);
  };

  return (
    <div className="p-6 w-full">
      {/* title & search bar */}
      <div className="flex justify-between items-center mb-4 sticky top-0 z-10 bg-gray-50">
        <h2 className="text-3xl font-bold text-gray-800 tracking-tight">
          My Order
        </h2>

        <div className="p-4">
          <Search
            value={searchOrder}
            onChange={setSearchOrder}
            placeholder="Search order by status or product..."
          />
        </div>
      </div>

      {/* body */}
      <div className="bg-white rounded-lg shadow-sm border min-w-3xl overflow-x-auto">
        <table className="w-full text-left overflow-auto">
          <thead>
            <tr className="border-b bg-gray-50 text-gray-600 text-sm">
              <th className="p-3">Order #</th>
              <th className="p-3">Product</th>
              <th className="p-3">Price</th>
              <th className="p-3">Status</th>
              <th className="p-3">Date</th>
              <th className="p-3">Action</th>
            </tr>
          </thead>

          <tbody className="text-sm">
            {orders
              ?.filter(
                (order) =>
                  order.status
                    .toLowerCase()
                    .includes(searchOrder.toLowerCase()) ||
                  order.product
                    .toLowerCase()
                    .includes(searchOrder.toLowerCase())
              )
              .map((order, idx) => (
                <tr key={idx} className="border-b hover:bg-gray-50 transition">
                  <td className="p-3 font-semibold text-indigo-700">
                    {order.orderNo}
                  </td>
                  <td className="p-3">{order.product}</td>
                  <td className="p-3 font-medium">${order.price}</td>
                  <td className="p-3">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        statusColors[order.status]
                      }`}
                    >
                      {order.status}
                    </span>
                  </td>
                  <td className="p-3 text-gray-600">{order.date}</td>
                  <td
                    className="p-3"
                    onClick={() => !['delivered', 'shipped'].includes(order.status) &&handleDeleteClick(order)}
                  >
                    {order.status === "delivered" ||
                    order.status === "shipped" ? (
                      <MdDeleteSweep className="text-xl text-gray-400 cursor-not-allowed" />
                    ) : (
                      <MdDeleteSweep className="text-xl hover:text-rose-600 cursor-pointer" />
                    )}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      {/* Delete popup */}
      {deletePopup &&  (
        <div className="fixed inset-0 z-50 backdrop-blur-sm bg-black/40 flex items-center justify-center p-4">
          <div className="bg-white border rounded-2xl p-6 w-full max-w-sm shadow-lg">
            <div className="text-xl font-bold flex gap-3 items-center">
              <IoWarningOutline className="text-rose-600 text-2xl" />
              <h1>Confirm Delete</h1>
            </div>

            <p className="mt-2 text-gray-600">
              Do you really want to delete order{" "}
              <span className="font-semibold">{selectedOrder?.orderNo}</span>?
            </p>

            <div className="mt-6 flex gap-3">
              <button
                onClick={() => setDeletePopup(false)}
                className="w-1/2 py-2 rounded-xl bg-black/10 hover:bg-black/20"
              >
                Cancel
              </button>

              <button className="w-1/2 py-2 rounded-xl bg-red-600 hover:bg-red-700 text-white">
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
