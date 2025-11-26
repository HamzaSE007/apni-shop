import React, { useState } from "react";
import {
  useGetAllProductCategoryQuery,
  useGetProductByCategoryQuery,
} from "../../../../services/products.api";
import Search from "../../Search";

export default function ProductCategoryList() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [productCategory, setProductCategory] = useState(null);
  const [searchProduct, setSearchProduct] = useState("");
  const [catSearch, setCatSearch] = useState("");

  const {
    data,
    isLoading: isLoadingCat,
    isError: isErrorCat,
    error: errorCat,
  } = useGetAllProductCategoryQuery();

  const {
    data: relaventProducts,
    isLoading: isLoadingProduct,
    isError: isErrorProduct,
  } = useGetProductByCategoryQuery(productCategory);

  const openDialogBox = (cat) => {
    setProductCategory(cat);
    setSelectedCategory(cat);
  };

  const closeDialogBox = () => {
    setSearchProduct("");
    setSelectedCategory(null);
  };

  if (isLoadingCat)
    return (
      <div className="p-6 text-xl animate-pulse">Loading Categories...</div>
    );

  if (isErrorCat)
    return (
      <div className="p-6 text-red-600">Error loading: {errorCat?.message}</div>
    );

  return (
    <div className="p-6 w-full">
      {/* title and search bar */}

      <div className="flex justify-between items-center mb-4 sticky top-0 z-10 bg-gray-50">
        {/* title */}
        <h2 className="text-3xl font-bold  text-gray-800 tracking-tight">
          Product Categories
        </h2>

        {/* category search bar */}
        <div className="p-4  sticky top-0 z-10">
          <Search value={catSearch}
                  onChange={setCatSearch}
                  placeholder={"Search category..."}/>
        </div>
      </div>

      {/* Category List */}
      <div className="bg-white rounded-xl shadow-md ">
        {data
          ?.filter((cat) => cat.toLowerCase().includes(catSearch))
          .map((category, idx) => (
            <div key={idx} className="border-b last:border-none">
              <div
                onClick={() => openDialogBox(category)}
                className="flex justify-between items-center p-5 cursor-pointer 
                         hover:bg-gray-100 transition-all group"
              >
                <h3 className="text-lg font-semibold text-gray-700 group-hover:text-black">
                  {category}
                </h3>
                <span className="text-gray-400 group-hover:text-black text-2xl font-bold">
                  +
                </span>
              </div>
            </div>
          ))}
      </div>

      {/* Dialog box */}
      {selectedCategory && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex justify-center items-center">
          <div className="w-[700px] max-h-[85vh] bg-white rounded-xl shadow-2xl overflow-y-auto animate-scaleUp">
            {/* Dialog Header */}
            <div className="p-5 bg-gray-100 border-b flex justify-between items-center">
              <h2 className="text-xl font-bold text-gray-700">
                Category: <span className="text-black">{selectedCategory}</span>
              </h2>
              <button
                onClick={closeDialogBox}
                className="text-2xl text-gray-500 hover:text-black cursor-pointer"
              >
                ✕
              </button>
            </div>

            {/* Search Bar */}
            <div className="p-4 border-b bg-white sticky top-0 z-10">
              <Search value={searchProduct}
                      onChange={setSearchProduct}
                      placeholder={'Search product by title...'}
                      className="w-full"/>
            </div>

            {/* dialog Body */}
            <div className="p-4 overflow-y-auto">
              {isLoadingProduct ? (
                <SkeletonLoader />
              ) : (
                <div className="grid grid-cols-1 gap-4">
                  {relaventProducts?.products
                    ?.filter((p) =>
                      p.title.toLowerCase().includes(searchProduct.toLowerCase())
                    )
                    .map((p) => (
                      <div
                        key={p.id}
                        className="flex items-center justify-between bg-white p-4 rounded-lg shadow-sm border hover:shadow-md transition"
                      >
                        <div className="flex items-center gap-4">
                          <img
                            src={p.thumbnail}
                            alt={p.title}
                            className="w-14 h-14 rounded-md object-cover"
                          />
                          <div>
                            <h4 className="font-semibold text-gray-800">
                              {p.title}
                            </h4>
                            <p className="text-gray-500 text-sm">
                              {p.category}
                            </p>
                          </div>
                        </div>

                        <div className="text-right">
                          <p className="font-bold text-black">${p.price}</p>
                          <p className="text-sm text-gray-500">
                            Stock: {p.stock}
                          </p>
                        </div>
                      </div>
                    ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/* --Skeleton Loader -- */
function SkeletonLoader() {
  return (
    <div className="space-y-4">
      {[1, 2, 3, 4].map((i) => (
        <div
          key={i}
          className="flex items-center justify-between p-4 bg-gray-100 rounded-xl animate-pulse"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gray-300 rounded-lg" />
            <div>
              <div className="w-32 h-4 bg-gray-300 rounded mb-2" />
              <div className="w-20 h-3 bg-gray-200 rounded" />
            </div>
          </div>
          <div className="w-14 h-4 bg-gray-300 rounded" />
        </div>
      ))}
    </div>
  );
}
