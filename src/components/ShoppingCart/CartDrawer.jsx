import { RxCross2 } from "react-icons/rx";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { decrementQuantity, incrementQuantity, removeItemFromCart } from "../../redux/slices/addToCartSlice";
import { setIsOpen } from "../../redux/slices/openCartDrawerSlice";

export default function CartDrawer() {
  const cart = useSelector(state => state.cart.items);
  const isOpen = useSelector(state => state.cartDrawer.isOpen);
  const dispatch = useDispatch();

  // Increment quantity
  function increaseQuantity(id) {
    dispatch(incrementQuantity(id))
  }

  // Decrement quantity
  function decreaseQuantity(id) {
    dispatch(decrementQuantity(id))
  }

  // Delete cart item
  function delCart(id) {
    dispatch(removeItemFromCart(id))
  }

  return (
    <div
      className={`
        fixed top-0 right-0 z-50 h-full w-96 bg-gray-200 
        flex flex-col p-10 items-center gap-4 shadow-2xl 
        overflow-y-auto duration-500
        ${isOpen ? "translate-x-0" : "translate-x-full"}
      `}
    >
      {/* Close Icon */}
      <RxCross2
        onClick={() => dispatch(setIsOpen(false))}
        className="absolute top-5 right-8 text-2xl cursor-pointer"
      />

      <h1 className="text-2xl font-bold">Shopping Cart</h1>

      {/* Empty Cart Message */}
      {cart.length === 0 && (
        <p className="text-gray-600 mt-10">Your cart is empty 🛒</p>
      )}

      {/* Cart Items */}
      {cart.map(item => (
        <div
          key={item.id}
          className="grid grid-cols-3 gap-4 place-items-center w-full py-4 border-b odd:bg-gray-300"
        >
          {/* Image */}
          <img
            src={item.image}
            className="w-24 h-24 object-contain"
            alt={item.title}
          />

          <div className="flex flex-col gap-2">

            {/* Title */}
            <h2 className="font-bold">
              {item.title?.slice(0, 12) + '..' || "Loading..."}
            </h2>

            {/* Price */}
            <p className="font-semibold">${item.price}</p>

            {/* Quantity */}
            <div className="flex border rounded overflow-hidden">
              <button
                onClick={() => decreaseQuantity(item.id)}
                className="px-3 py-1 border-r text-gray-600 hover:bg-gray-100 cursor-pointer"
              >
                -
              </button>
              <span className="px-3 py-1">{item.quantity}</span>
              <button
                onClick={() => increaseQuantity(item.id)}
                className="px-3 py-1 border-l hover:bg-gray-100 cursor-pointer"
              >
                +
              </button>
            </div>
          </div>

          {/* Delete Button */}
          <RiDeleteBin6Line
            onClick={() => delCart(item.id)}
            className="text-2xl cursor-pointer hover:text-red-600"
          />
        </div>
      ))}

      {/* View Cart Page */}
      {cart.length > 0 && (
        <Link
          onClick={() => dispatch(setIsOpen(false))}
          to="/shopping-cart"
          className="bg-rose-600 w-full p-3 text-white rounded text-lg text-center shadow hover:bg-rose-700 mt-auto"
        >
          View Cart Page
        </Link>
      )}
    </div>
  );
}
