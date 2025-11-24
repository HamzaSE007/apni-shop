import { FaCartPlus } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slices/addToCartSlice";
import { setIsOpen } from "../redux/slices/openCartDrawerSlice";

export default function ProductCard({ title, price, category, image, id, quantity = 1, unitPrice }) {

  const dispatch = useDispatch();

  const handleAddToCart = (e) => {
    e.preventDefault();
    dispatch(setIsOpen(true))
    dispatch(addToCart({ title, price, category, image, id, quantity, unitPrice}));
    
  };

 
  
  
  return (
    <div className="flex flex-col gap-5 bg-white rounded-xl p-4 shadow-sm hover:shadow-xl duration-300 hover:-translate-y-1">

      {/* Image */}
      <div className="h-56 overflow-hidden rounded-lg group">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-contain group-hover:scale-110 duration-300"
        />
      </div>

      {/* Title */}
      <h2 className="text-lg font-semibold text-gray-800 truncate">{title}</h2>

      {/* Category */}
      <p className="text-sm text-gray-500">Category: <span className="text-gray-700">{category}</span></p>

      {/* Price */}
      <p className="text-base font-semibold text-rose-600">${price}</p>

      {/* Button */}
      <button
        onClick={handleAddToCart}
        className="w-full flex items-center justify-center gap-2 bg-rose-600 text-white py-2.5 rounded-lg font-medium cursor-pointer hover:bg-rose-700 active:scale-95 duration-200 shadow-md"
      >
        <FaCartPlus className="text-xl" />
        Add to Cart
      </button>
    </div>
  );
}
