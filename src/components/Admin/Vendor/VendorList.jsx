import React from "react";
import { vendorsInfo } from "../../../constant/vendorsInfo";

export default function VendorList() {
  const vendors = vendorsInfo;
  const statusClasses = {
    Active:
      "px-3 py-1 text-sm font-medium rounded-full bg-green-100 text-green-700",
    Inactive:
      "px-3 py-1 text-sm font-medium rounded-full bg-red-100 text-red-700",
  };
  return (
    <div className="p-6 w-full">
      <h2 className="text-2xl font-semibold mb-6">Vendors</h2>

      <div className="bg-white rounded-lg shadow-sm border min-w-3xl overflow-x-auto">
        <table className="w-full text-left overflow-auto ">
          <thead>
            <tr className="border-b bg-gray-50 text-gray-600 text-sm">
              <th className="p-3">Vendor Name</th>
              <th className="p-3">Phone</th>
              <th className="p-3">Email</th>
              <th className="p-3">Address</th>
              <th className="p-3">Status</th>
            </tr>
          </thead>

          <tbody className="text-sm">
            {vendors?.map((vendor) => (
              <tr
                key={vendor.id}
                className="border-b hover:bg-gray-50 transition"
              >
                <td className="p-3">{vendor.name}</td>
                <td className="p-3 text-indigo-700">{vendor.phone}</td>
                <td className="p-3">{vendor.email}</td>
                <td className="p-3 italic">{vendor.address}</td>
                <td className="p-3">
                  <span
                    class={`px-3 py-1 rounded-full text-xs font-semibold ${
                      statusClasses[vendor.status]
                    }`}
                  >
                    {vendor.status}
                  </span>
                </td>
                {/* <td className="p-3">
                  <MdDeleteSweep className="text-xl cursor-pointer hover:text-rose-700" />
                </td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
