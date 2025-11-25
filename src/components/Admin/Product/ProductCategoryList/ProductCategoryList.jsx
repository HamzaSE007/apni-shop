import React, { useState } from "react";
import { useGetAllProductCategoryQuery, useGetProductByCategoryQuery } from "../../../../services/products.api";

export default function ProductCategoryList({ categories }) {
  const [openCategory, setOpenCategory] = useState(null);
  const [product, setProduct] = useState(null)
  const {data, isLoading: isLoadingCat, isError: isErrorCat, error: errorCat} = useGetAllProductCategoryQuery();
  const {data: relaventProducts, isLoading: isLoadingProduct, isError: isErrorProduct, error:errorProduct} = useGetProductByCategoryQuery(product)  

  const toggleCategory = (cat) => {
    setProduct(cat)
    setOpenCategory(openCategory === cat ? null : cat);
  };

  if (isLoadingCat) return <h2 className="p-6">Loading...</h2>;
  if (isErrorCat) return <h2 className="p-6 text-red-600">Error: {errorCat?.message}</h2>;

  return (
    <div className="p-6 w-full">
      <h2 className="text-2xl font-semibold mb-6">Categories</h2>

      <div className="bg-white rounded-lg shadow-sm border">
        {data?.map((category,idx) => (
          <div key={idx} className="border-b">
            {/* Category Header */}
            <div
              onClick={() => toggleCategory(category)}
              className="flex justify-between items-center p-4 cursor-pointer hover:bg-gray-50"
            >
              <h3 className="text-lg font-medium">{category}</h3>
              <span className="text-gray-500">
                 {openCategory === category ? '-' : '+'}
              </span>
            </div>

            {/* Product Sublist */}
            {openCategory === category && (
              <div className="bg-gray-50 px-6 py-4">
                {isLoadingProduct ? (
                  <p className="text-gray-500">Loading...</p>
                ) : (
                  <ul className="space-y-4">
                    {relaventProducts.products?.map((p) => (
                      <li
                        key={p.id}
                        className="flex items-center justify-between bg-white p-4 rounded-lg shadow-sm border"
                      >
                        <div className="flex items-center gap-4">
                          <img
                            src={p.thumbnail}
                            alt={p.title}
                            className="w-12 h-12 rounded-md object-cover"
                          />
                          <div>
                            <h4 className="font-semibold">{p.title}</h4>
                            <p className="text-gray-500 text-sm">{p.category}</p>
                          </div>
                        </div>

                        <div className="text-right">
                          <p className="font-semibold">${p.price}</p>
                          <p className="text-sm text-gray-500">Stock: {p.stock}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
