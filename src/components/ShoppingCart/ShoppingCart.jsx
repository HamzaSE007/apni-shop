import { MdDelete } from "react-icons/md";
import { IoBagCheckOutline } from "react-icons/io5";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeItemFromCart, incrementQuantity, decrementQuantity } from "../../redux/slices/addToCartSlice";

export default function ShoppingCart() {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart.items);


  // Increment
  function increaseQuantity(id) {
   dispatch(incrementQuantity(id))
  }

  // Decrement
  function decreaseQuantity(id) {
    dispatch(decrementQuantity(id))
  }

  // Delete item
  function handleDelCart(id) {
    dispatch(removeItemFromCart(id))
  }

  return (
    <div className="p-14 bg-white flex flex-col items-center gap-6">
      <h1 className="text-2xl font-bold">Shopping Cart</h1>

      <div className="bg-gray-100 p-4 rounded shadow-xl w-full max-w-6xl overflow-x-auto">
        {/* Empty cart UI */}
        {cart.length === 0 && (
          <p className="text-center text-gray-600 py-10 text-xl">
            Your cart is empty 🛒
          </p>
        )}

        {cart.length > 0 && (
          <table className="w-full min-w-[800px]">
            <thead className="border-b border-gray-400 bg-white sticky top-0">
              <tr className="grid grid-cols-5 font-semibold text-gray-700 text-center p-2">
                <th>Image</th>
                <th>Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {cart.map(item => (
                <tr
                  key={item.id}
                  className="grid grid-cols-5 items-center text-center p-3 odd:bg-gray-200"
                >
                  <td>
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-14 mx-auto object-contain"
                    />
                  </td>

                  <td>
                    <h3 className="font-semibold">{item.title}</h3>
                  </td>

                  <td>
                    <p className="font-medium">${item.price}</p>
                  </td>

                  <td>
                    <div className="flex gap-4 items-center justify-center">
                      <button
                        onClick={() => decreaseQuantity(item.id)}
                        className="bg-gray-300 h-8 w-8 rounded-full font-bold hover:bg-gray-400 cursor-pointer"
                      >
                        -
                      </button>

                      <span className="text-xl">{item.quantity}</span>

                      <button
                        onClick={() => increaseQuantity(item.id)}
                        className="bg-gray-300 h-8 w-8 rounded-full font-bold hover:bg-gray-400 cursor-pointer"
                      >
                        +
                      </button>
                    </div>
                  </td>

                  <td>
                    <MdDelete
                      onClick={() => handleDelCart(item.id)}
                      className="text-2xl cursor-pointer hover:text-red-600 mx-auto"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

        {/* Buttons */}
        {cart.length > 0 && (
          <div className="flex flex-col md:flex-row justify-between items-center mt-4 gap-4">

            {/* Continue Shopping */}
            <Link to="/">
              <button className="font-semibold flex items-center gap-2 hover:text-red-600 group">
                <FaArrowLeftLong className="opacity-0 group-hover:opacity-100 duration-300" />
                Continue Shopping
              </button>
            </Link>

            {/* Checkout Button */}
            <button className="bg-gray-300 px-4 py-2 rounded flex items-center gap-2 hover:bg-transparent border border-gray-400 group">
              <IoBagCheckOutline className="group-hover:text-red-600" />
              Check Out
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
