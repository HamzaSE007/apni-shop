import React, { useState } from "react";
import { useGetAllProductsQuery } from "../../../../services/products.api";
import Search from "../../Search";

export default function ProductList() {
  const [searchProduct, setSearchProduct] = useState("");
  const { data, isLoading, isError, error } = useGetAllProductsQuery();

  if (isLoading) return <h2 className="p-6">Loading...</h2>;
  if (isError)
    return <h2 className="p-6 text-red-600">Error: {error?.status}</h2>;

  return (
    <div className="p-6 w-full">

      {/* title & search bar */}
      <div className="flex justify-between items-center mb-4 sticky top-0 z-10 bg-gray-50">
        {/* title */}
        <h2 className="text-3xl font-bold  text-gray-800 tracking-tight">
          Product List
        </h2>

        {/* category search bar */}
        <div className="p-4">
          <Search value={searchProduct}
                  onChange={setSearchProduct}
                  placeholder={'Search product by title...'}/>
        </div>
      </div>

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
            {data?.products
              ?.filter((p) => p.title.toLowerCase().includes(searchProduct))
              .map((p) => (
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
                  <td className="p-3 text-purple-600 font-medium cursor-pointer ">
                    Details
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
