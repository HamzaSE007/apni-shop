import { useParams } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa6";
import { useGetProductByIdQuery } from "../../services/products.api";

export default function ProductDetail() {
  const { productId } = useParams();
  const { data: product, isLoading, isError, error } = useGetProductByIdQuery(productId);

  // Loading state
  if (isLoading) {
    return (
      <div className="h-[60vh] flex justify-center items-center bg-white">
        <span className="h-12 w-12 border-4 border-t-indigo-600 rounded-full animate-spin"></span>
      </div>
    );
  }

  // Error state
  if (isError) {
    const errorMessage = error?.data?.message || "Something went wrong!";
    return (
      <div className="h-[60vh] flex justify-center items-center bg-white">
        <p className="text-red-600 text-xl font-medium">{errorMessage}</p>
      </div>
    );
  }

  return (
    <div className="p-10 md:p-14 bg-white flex flex-col items-center gap-8">
      <h1 className="text-3xl font-bold text-center">Product Detail</h1>

      <div className="bg-gray-100 p-8 md:p-10 rounded-xl grid grid-cols-1 md:grid-cols-2 gap-6 shadow-lg max-w-5xl w-full">

        {/* Image */}
        <div className="flex justify-center items-center p-4">
          <img
            src={product.image}
            alt={product.title}
            className="max-w-full max-h-[400px] object-contain rounded-lg drop-shadow-2xl"
          />
        </div>

        {/* Details */}
        <div className="flex flex-col gap-6">
          <h2 className="text-2xl font-bold text-red-600">{product.title}</h2>
          <p>
            <span className="font-semibold">Category: </span>{product.category}
          </p>
          <p>
            <span className="font-semibold">Price: </span>
            <span className="text-red-600 font-bold">${product.price}</span>
          </p>
          <div>
            <p className="font-semibold mb-2">Description:</p>
            <p className="text-gray-700">{product.description}</p>
          </div>

          <button className="w-full bg-rose-600 text-white text-lg font-medium border rounded shadow-lg flex justify-center items-center gap-2 py-2 cursor-pointer transition duration-300 hover:bg-transparent hover:text-black hover:border-rose-600">
            Add to Cart <FaCartPlus />
          </button>
        </div>
      </div>
    </div>
  );
}
