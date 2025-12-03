import { Link, useLocation, useParams } from "react-router-dom";

import { IoArrowBackSharp } from "react-icons/io5";
import { useGetProductByIdQuery } from "../../services/products.api";

export default function DashboardProductDetail() {
  const { productId } = useParams();
  const {pathname, state} = useLocation();
  const backPath = pathname.includes('/vendor') ? '/vendor/product-list' : '/admin/product-list'
  
  
  const {
    data: product,
    isLoading,
    isError,
    error,
  } = useGetProductByIdQuery(productId);

  /* Loading  */
  if (isLoading) {
    return (
      <div className="h-[60vh] flex justify-center items-center bg-white">
        <span className="h-12 w-12 border-4 border-t-indigo-600 rounded-full animate-spin"></span>
      </div>
    );
  }

  /*  Error  */
  if (isError) {
    return (
      <div className="h-[60vh] flex justify-center items-center bg-white">
        <p className="text-red-600 text-xl font-medium">
          {error?.data?.message || "Something went wrong!"}
        </p>
      </div>
    );
  }

  /*  Reusable Row  */
  const InfoRow = ({ label, value }) => (
    <p className="text-gray-700">
      <span className="font-semibold">{label}: </span>
      {value}
    </p>
  );

  return (
    <div className="bg-gray-100 h-screen p-10 md:p-14 flex flex-col items-center gap-8 relative">
      {/* Back Page arrow */}
      <Link to={backPath}>
        <div className="w-10 h-10 bg-gray-300 hover:bg-gray-400 cursor-pointer border flex justify-center items-center rounded-full group duration-300 transition-all absolute top-10 left-10">
          <IoArrowBackSharp className="text-xl group-hover:text-red-700 transition-all duration-300 group-hover:-translate-x-1" />
        </div>
      </Link>

      <h1 className="text-3xl font-bold text-center">Product Detail</h1>

      <div className="bg-white p-8 md:p-10 rounded-xl grid grid-cols-1 md:grid-cols-2 gap-8 shadow-[0_0_5px_rgba(0,0,0,0.2)] max-w-5xl w-full">
        {/*  Image  */}
        <div className="flex justify-center items-center p-4">
          <img
            src={product?.images?.[0]}
            alt={product.title}
            className="max-w-full max-h-[420px] object-contain rounded-lg drop-shadow-md"
          />
        </div>

        {/*  Details  */}
        <div className="flex flex-col gap-6">
          <h2 className="text-2xl font-bold text-red-600">{product.title}</h2>

          <div className="flex flex-col gap-2">
            <InfoRow label="Category" value={product.category} />
            <InfoRow label="Price" value={`$${product.price}`} />
            <InfoRow label="Stock" value={`${product.stock} units`} />
            <InfoRow
              label="Vendor"
              value={product.vendorName || "Unknown Vendor"}
            />

            <InfoRow
              label="Status"
              value={
                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium ${
                    product.status === "active"
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {product.status === "active" ? "Active" : "Inactive"}
                </span>
              }
            />
          </div>

          {/* Description */}
          <div>
            <p className="font-semibold mb-1">Description:</p>
            <p className="text-gray-700 leading-relaxed">
              {product.description}
            </p>
          </div>

          {/* Delete Btn */}
          <button className="w-full border border-red-400 text-red-500 py-2 rounded-xl hover:bg-red-50 cursor-pointer">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
