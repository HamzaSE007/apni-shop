import React from "react";
import { useGetAllProductsQuery } from "../../../../services/products.api";

export default function ProductList() {
  const { data, isLoading, isError, error } = useGetAllProductsQuery();
  console.log(data);

  // const statusColors = {
  //   Active: "text-green-600 bg-green-100",
  //   Draft: "text-orange-600 bg-orange-100",
  //   Scheduled: "text-blue-600 bg-blue-100",
  // };

  if (isLoading) return <h2 className="p-6">Loading...</h2>;
  if (isError) return <h2 className="p-6 text-red-600">Error: {error?.status}</h2>;

  return (
    <div className="p-6 w-full">
      <h2 className="text-2xl font-semibold mb-6">Products</h2>

      <div className="bg-white rounded-lg shadow-sm border min-w-3xl overflow-x-auto">
        <table className="w-full text-left overflow-auto ">
          <thead>
            <tr className="border-b bg-gray-50 text-gray-600 text-sm">
              <th className="p-3">Product Image</th>
              <th className="p-3">Product Name</th>
              <th className="p-3">Category</th>
              <th className="p-3">Price</th>
              <th className="p-3">Stock</th>
              <th className="p-3">Action</th>
            </tr>
          </thead>

          <tbody className="text-sm">
            {data?.products?.map((p) => (
              <tr key={p.id} className="border-b hover:bg-gray-50 transition">
                <td className="p-3 flex items-center gap-3">
                  <img
                    src={p.thumbnail}
                    alt={p.name}
                    className="w-10 h-10 rounded-md object-cover"
                  />
                </td>
                <td className="p-3">{p.title}</td>
                <td className="p-3">{p.category}</td>
                <td className="p-3">${p.price}</td>
                <td className="p-3">{p.stock}</td>
                <td className="p-3 text-purple-600 font-medium cursor-pointer ">Details</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
