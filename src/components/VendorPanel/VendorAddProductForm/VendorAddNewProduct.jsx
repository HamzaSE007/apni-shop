import { CiShop } from "react-icons/ci";
import { LuBadgeCheck } from "react-icons/lu";
import { discountTypes } from "../../../constant/discountType";

export default function VendorAddNewProduct() {
  return (
    <div className="w-full p-6">
      <div className="max-w-3xl p-2 mx-auto">
        <div className="flex items-center gap-2 mb-4">
          <CiShop className="text-3xl" />
          <h1 className="text-2xl font-semibold ">Add New Product</h1>
        </div>

        {/* form */}
        <form className="bg-white p-4 space-y-4 rounded-lg border border-gray-300 shadow-[0_0_5px_rgba(0,0,0,0.1)]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Product Name */}
            <div>
              <label className="text-sm block font-medium">
                Product Name:
                <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="mt-1 p-2 border border-gray-300 block w-full rounded-md"
              />
            </div>

            {/* Product Category */}
            <div>
              <label className="text-sm block font-medium">
                Product Category:
                <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="mt-1 p-2 border border-gray-300 block w-full rounded-md"
              />
            </div>

            {/* Product description */}
            <div className="col-span-2">
              <label className="text-sm font-medium block">
                Description:
                <span className="text-red-500">*</span>
              </label>
              <textarea
                rows={4}
                className=" mt-1 p-2 border border-gray-300 block w-full rounded-md "
              />
            </div>

            {/* Product Price */}
            <div>
              <label className="text-sm font-medium">
                Price:
                <span className="text-rose-500">*</span>
              </label>
              <input
                type="number"
                className="p-2 border border-gray-300 mt-1 block rounded-md w-full"
              />
            </div>

            {/* Product stock */}
            <div>
              <label className="text-sm font-medium">
                Stock:
                <span className="text-rose-500">*</span>
              </label>
              <input
                type="number"
                className="p-2 border border-gray-300 mt-1 block rounded-md w-full"
              />
            </div>

            {/* Pick gender */}
            <div>
              <label className="text-sm font-medium">
                Gender:
                <span className="text-rose-500">*</span>
              </label>
              <div className="flex gap-10 mt-1">
                <div className="flex gap-2">
                  <input type="radio" name="gender" className="cursor-pointer"/>
                  <span className="text-sm text-gray-500 font-medium">Man</span>
                </div>
                <div className="flex gap-2">
                  <input type="radio" name="gender" className="cursor-pointer"/>
                  <span className="text-sm text-gray-500 font-medium">
                    Woman
                  </span>
                </div>
                <div className="flex gap-2">
                  <input type="radio" name="gender" className="cursor-pointer" />
                  <span className="text-sm text-gray-500 font-medium">
                    Kids
                  </span>
                </div>
              </div>
            </div>

            {/* Size */}
            <div>
              <label className="text-sm font-medium">
                Size:
                <span className="text-rose-500">*</span>
              </label>
              <div className="flex gap-6 mt-1">
                <div className="flex gap-2">
                  <input type="checkbox" name="small" className="cursor-pointer"/>
                  <span className="text-sm text-gray-500 font-medium">
                    Small
                  </span>
                </div>
                <div className="flex gap-2">
                  <input type="checkbox" name="medium" className="cursor-pointer"/>
                  <span className="text-sm text-gray-500 font-medium">
                    Medium
                  </span>
                </div>
                <div className="flex gap-2">
                  <input type="checkbox" name="large" className="cursor-pointer"/>
                  <span className="text-sm text-gray-500 font-medium">
                    Large
                  </span>
                </div>
                <div className="flex gap-2">
                  <input type="checkbox" name="extraLarge" className="cursor-pointer"/>
                  <span className="text-sm text-gray-500 font-medium">
                    {" "}
                    X-Large
                  </span>
                </div>
              </div>
            </div>

            {/* Discount */}
            <div>
              <label className="text-sm font-medium">
                Discount:
              </label>
              <input
                type="number"
                className="p-2 border border-gray-300 mt-1 block rounded-md w-full"
              />
            </div>

            {/* Discount type */}
            <div>
              <label className="text-sm font-medium">
                Discount Type:
              </label>
              <select
                name="discountType"
                className="p-2 border border-gray-300 mt-1 block rounded-md w-full cursor-pointer"
              >
                {discountTypes.map((d) => (
                  <option key={d.value} value={d.value}>
                    {d.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Buutons */}
          <div className="flex justify-end gap-4 pt-4">

            {/* reset */}
            <button className="px-4 py-2 rounded-md border cursor-pointer hover:text-red-700">
              Reset
            </button>
            
            {/* Add Product */}
            <button className="px-4 py-2 rounded-md bg-rose-600 border text-white cursor-pointer hover:bg-transparent hover:text-rose-600 transition-all duration-400 flex items-center gap-2">
              <LuBadgeCheck className="text-xl" />
              <span>Add Product</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
