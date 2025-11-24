import ProductCard from "../ProductCard";
import { Link } from "react-router-dom";
import { useGetTrendingProductsQuery } from "../../services/products.api";

export default function TrendingProduct({ productsRef }) {
  const { data, isLoading, isError, error } = useGetTrendingProductsQuery();

  return (
    <div className="bg-gray-100 p-14 flex flex-col gap-14 " ref={productsRef}>
      {/* Title */}
      <h2 className="text-center text-3xl font-semibold">
        Our Trending Products
      </h2>

      {/* handle Loading state */}
      {isLoading && (
        <div className="h-screen flex justify-center items-center bg-gray-100">
          <span className="h-12 w-12 border-4 border-transparent border-t-indigo-600 rounded-full animate-spin"></span>
        </div>
      )}

      {/* handle Error state */}
      {isError && (
        <div className="h-screen flex justify-center items-center">
          <span className="text-red-600 text-2xl">
            {error.error || "Something went wrong!"}
          </span>
        </div>
      )}

      {/* show products */}

      {!isLoading && !isError && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {data?.map((product) => (
            <Link key={product.id} to={`/product-detail/${product.id}`}>
              <ProductCard
                id={product.id}
                title={product.title}
                price={product.price}
                unitPrice= {product.price}
                category={product.category}
                image={product.image}
              />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
