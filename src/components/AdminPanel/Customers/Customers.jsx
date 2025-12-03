import { useState } from "react";
import { customersInfo } from "../../../constant/customersInfo";
import Search from "../../sharedComponents/Search";
import CustomerDetailPopup from "./CustomerDetailPopup";

export default function Customers() {
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
          <CustomerDetailPopup open={custDetailPopup} setOpen={() => setCustDetailPopup(false)}/>
        )
      }
    </div>
  );
}
