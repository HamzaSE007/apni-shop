import ProductCard from "../ProductCard";
import { Link } from "react-router-dom";
import { useGetAllProductsQuery } from "../../services/products.api";

export default function Collections() {
  const { data, isLoading, isError, error } = useGetAllProductsQuery();

  // Handle Loading
  if (isLoading) {
    return (
      <div className="h-screen flex justify-center items-center bg-gray-100">
        <span className="h-12 w-12 border-4 border-transparent border-t-indigo-600 rounded-full animate-spin"></span>
      </div>
    );
  }

  // Handle Error
  if (isError) {
    const errorMessage =
      error?.originalStatus === 404
        ? "404 - The products URL is incorrect."
        : "Something went wrong. Please try again later.";

    return (
      <div className="h-screen flex justify-center items-center bg-gray-100">
        <p className="text-red-600 text-xl font-medium">{errorMessage}</p>
      </div>
    );
  }

  // Handle Empty Data
  if (!data || data.length === 0) {
    return (
      <div className="h-screen flex justify-center items-center bg-gray-100">
        <p className="text-gray-700 text-xl">No products available.</p>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 p-14 flex flex-col gap-10">
      
      {/* Title */}
      <h2 className="text-center text-3xl font-semibold">
        Our Collections
      </h2>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {data.products.map((product) => (
          <Link
            key={product.id}
            to={`/product-detail/${product.id}`}
            className="group block focus:outline-none focus:ring-2 focus:ring-indigo-600 rounded"
          >
            <ProductCard
              id={product.id}
              title={product.title}
              price={product.price}
              unitPrice= {product.price}
              category={product.category}
              image={product.thumbnail}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
