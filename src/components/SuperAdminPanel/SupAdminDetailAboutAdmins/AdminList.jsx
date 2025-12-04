import React, { useState } from "react";
import { adminsInfo } from "../../../constant/adminsInfo";
import Search from "../../sharedComponents/Search";
import { Link } from "react-router-dom";

export default function AdminList() {
  const [searchAdmin, setSearchAdmin] = useState("");
  const admins = adminsInfo;

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
        <h2 className="text-3xl font-bold text-gray-800 tracking-tight">
          Admin List
        </h2>

        <div className="p-4">
          <Search
            value={searchAdmin}
            onChange={setSearchAdmin}
            placeholder="Search admin by email..."
          />
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm border min-w-3xl overflow-x-auto">
        <table className="w-full text-left overflow-auto">
          <thead>
            <tr className="border-b bg-gray-50 text-gray-600 text-sm">
              <th className="p-3">Admin Name</th>
              <th className="p-3">Role</th>
              <th className="p-3">Phone</th>
              <th className="p-3">Email</th>
              <th className="p-3">Status</th>
              <th className="p-3">Action</th>
            </tr>
          </thead>

          <tbody className="text-sm">
            {admins
              ?.filter((admin) =>
                admin.email.toLowerCase().includes(searchAdmin.toLowerCase())
              )
              .map((admin) => (
                <tr
                  key={admin.id}
                  className="border-b hover:bg-gray-50 transition"
                >
                  <td className="p-3">{admin.name}</td>
                  <td className="p-3 text-indigo-700">{admin.role}</td>
                  <td className="p-3">{admin.phone}</td>
                  <td className="p-3">{admin.email}</td>
                  <td className="p-3">
                    <span
                      className={
                        `px-3 py-1 rounded-full text-xs font-semibold ` +
                        statusClasses[admin.status]
                      }
                    >
                      {admin.status}
                    </span>
                  </td>
                  <td className="p-3 ">
                  <Link  to={`/superAdmin/adminDetail/${admin.id}`}
                         className="text-blue-600 cursor-pointer hover:font-bold">
                    Detail
                  </Link>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
