import React, { useState } from "react";
import { useGetAllProductsQuery } from "../../../../services/products.api";
import Search from "../../../sharedComponents/Search";
import { Link } from "react-router-dom";

export default function VendorProductList() {
  const [searchProduct, setSearchProduct] = useState("");
  const { data, isLoading, isError, error } = useGetAllProductsQuery();

  // Loading
  if (isLoading) return <h2 className="p-6">Loading...</h2>;

  // Error
  if (isError)
    return <h2 className="p-6 text-red-600">Error: {error?.status}</h2>;

  const filteredProducts = data?.products?.filter((p) =>
    p.title.toLowerCase().includes(searchProduct.toLowerCase())
  );

  return (
    <div className="p-6 w-full">
      {/* Title & Search */}
      <div className="flex justify-between items-center mb-4 sticky top-0 z-10 bg-gray-50 py-3">
        <h2 className="text-3xl font-bold text-gray-800 tracking-tight">
          Product List
        </h2>

        <div className="p-2">
          <Search
            value={searchProduct}
            onChange={setSearchProduct}
            placeholder={"Search product by title..."}
          />
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-lg shadow-sm border min-w-3xl overflow-x-auto overflow-y-hidden">
        <table className="w-full text-left">
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
            {filteredProducts?.map((p) => (
              <tr key={p.id} className="border-b hover:bg-gray-50 transition">
                {/* Image */}
                <td className="p-3 flex items-center gap-3">
                  <img
                    src={p.thumbnail}
                    alt={p.title}
                    className="w-10 h-10 rounded-md object-cover"
                  />
                </td>

                {/* Title */}
                <td className="p-3">{p.title}</td>

                {/* Category */}
                <td className="p-3">{p.category}</td>

                {/* Price */}
                <td className="p-3">${p.price}</td>

                {/* Stock */}
                <td className="p-3">{p.stock}</td>

                {/* Details Button */}
                
                <td className="p-3 text-rose-600   ">
                  <Link to={`/vendor/productDetail/${p.id}`}
                       className="cursor-pointer hover:font-bold" >
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
