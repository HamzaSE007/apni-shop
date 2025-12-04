import { useState } from "react";
import Search from "./Search";
import { customersInfo } from "../../constant/customersInfo";

export default function DashboardCustomerList() {
  const [searchCus, setSearchCus] = useState("");
  const [custDetailPopup, setCustDetailPopup] = useState(false);
  const customers = customersInfo;

  return (
    <div className="p-6 w-full">
      {/* title & search bar */}
      <div className="flex justify-between items-center mb-4 sticky top-0 z-10 bg-gray-50">
        {/* title */}
        <h2 className="text-3xl font-bold  text-gray-800 tracking-tight">
          Customers List
        </h2>

        {/* category search bar */}
        <div className="p-4">
          <Search
            value={searchCus}
            onChange={setSearchCus}
            placeholder={"Search customer by email..."}
          />
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm border min-w-3xl overflow-x-auto">
        <table className="w-full text-left overflow-auto ">
          <thead>
            <tr className="border-b bg-gray-50 text-gray-600 text-sm">
              <th className="p-3">Customer Name</th>
              <th className="p-3">Phone</th>
              <th className="p-3">Email</th>
              <th className="p-3">Action</th>
            </tr>
          </thead>

          <tbody className="text-sm">
            {customers
              ?.filter((cus) =>
                cus.email.toLowerCase().includes(searchCus.toLowerCase())
              )
              .map((customer) => (
                <tr
                  key={customer.id}
                  className="border-b hover:bg-gray-50 transition"
                >
                  <td className="p-3">{customer.name}</td>
                  <td className="p-3 text-indigo-700">{customer.phone}</td>
                  <td className="p-3">{customer.email}</td>
                  <td onClick={() => setCustDetailPopup(true)}  className="p-3 text-rose-600  cursor-pointer hover:font-bold">
                    Detail
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      {/* Open customer detail popoup */}
      {
        custDetailPopup && (
          <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex justify-center items-center p-4">
          <div className="w-full max-w-md bg-white rounded-2xl p-6 shadow-2xl duration-300">
            
            <h2 className="text-2xl font-semibold mb-4">Customer Details</h2>

            <div className="grid grid-cols-2 gap-4 text-sm">
              <p className="font-semibold">Name:</p>
              <p>John Doe</p>

              <p className="font-semibold">Email:</p>
              <p>john.doe@example.com</p>

              <p className="font-semibold">Phone:</p>
              <p>+1 234 567 890</p>

              <p className="font-semibold">Address:</p>
              <p>123 Street, City, Country</p>

              <p className="font-semibold">Status:</p>
              <p className="text-green-600 font-semibold">Active</p>
            </div>

            
              <button
                onClick={() => setCustDetailPopup(false)}
                className="w-full mt-4 px-4 py-2 rounded-xl border border-gray-300 hover:bg-gray-100 transition cursor-pointer"
              >
                Close
              </button>
              
          </div>
        </div>
        )
      }
    </div>
  );
}
