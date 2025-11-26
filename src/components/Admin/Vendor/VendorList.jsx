import React, { useState } from "react";
import { vendorsInfo } from "../../../constant/vendorsInfo";
import Search from "../Search";

export default function VendorList() {
  const [searchVen, setSearchVen] = useState("");
  const vendors = vendorsInfo;
  const statusClasses = {
    Active:
      "px-3 py-1 text-sm font-medium rounded-full bg-green-100 text-green-700",
    Inactive:
      "px-3 py-1 text-sm font-medium rounded-full bg-red-100 text-red-700",
  };
  return (
    <div className="p-6 w-full">
      {/* title & search bar */}
      <div className="flex justify-between items-center mb-4 sticky top-0 z-10 bg-gray-50">
        {/* title */}
        <h2 className="text-3xl font-bold  text-gray-800 tracking-tight">
          Vendor List
        </h2>

        {/* category search bar */}
        <div className="p-4">
          <Search
            value={searchVen}
            onChange={setSearchVen}
            placeholder={"Search vendor by email..."}
          />
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm border min-w-3xl overflow-x-auto">
        <table className="w-full text-left overflow-auto ">
          <thead>
            <tr className="border-b bg-gray-50 text-gray-600 text-sm">
              <th className="p-3">Vendor Name</th>
              <th className="p-3">Phone</th>
              <th className="p-3">Email</th>
              <th className="p-3">Address</th>
              <th className="p-3">Status</th>
              <th className="p-3">Action</th>
            </tr>
          </thead>

          <tbody className="text-sm">
            {vendors
              ?.filter((ven) =>
                ven.email.toLowerCase().includes(searchVen.toLowerCase())
              )
              .map((vendor) => (
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
                  <td className="p-3 text-rose-600  cursor-pointer hover:font-bold">
                    Detail
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
