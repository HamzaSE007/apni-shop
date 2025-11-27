import React from "react";
import { useGetProductByIdQuery } from "../../../../services/products.api";

export default function ProductDetailAdmin({ productId, onClose }) {
  // Get Product by id
  const {
    data: product,
    isLoading,
    isError,
    error,
  } = useGetProductByIdQuery(productId);

  // Loading state
  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
        <div className="h-12 w-12 border-4 border-gray-300 border-t-indigo-600 rounded-full animate-spin"></div>
      </div>
    );
  }

  // Error state
  if (isError) {
    const errorMessage = error?.data?.message || "Something went wrong!";
    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
        <p className="text-red-600 text-xl font-medium">{errorMessage}</p>
      </div>
    );
  }

  const isInStock = product?.stock > 0;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-lg p-6 relative animate-in fade-in zoom-in">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 h-10 w-10 bg-gray-300 hover:bg-gray-400 rounded-full p-2 cursor-pointer"
        >
          ✕
        </button>

        {/* Product Image */}
        <div className="w-full h-60 bg-gray-100 rounded-xl overflow-hidden flex items-center justify-center mb-4">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="object-contain h-full"
          />
        </div>

        {/* Product Details */}
        <h2 className="text-2xl font-semibold mb-2">{product.title}</h2>

        <p className="text-gray-600 mb-4 text-sm leading-relaxed">
          {product.description}
        </p>

        {/* Price + Stock */}
        <div className="flex items-center justify-between mb-5">
          <span className="text-xl font-bold">${product.price}</span>
          <span
            className={`text-sm px-3 py-1 rounded-full ${
              isInStock
                ? "bg-green-100 text-green-600"
                : "bg-red-100 text-red-600"
            }`}
          >
            {isInStock ? `In Stock (${product.stock})` : "Out of Stock"}
          </span>
        </div>

        {/* Admin Action Button */}
        <button className="w-full flex-1 border border-red-400 text-red-500 py-2 rounded-xl hover:bg-red-50 cursor-pointer">
          Delete
        </button>
      </div>
    </div>
  );
}
