import React from "react";

export default function Contact() {
  return (
    <div className="p-14 flex flex-col items-center gap-4">
      <h2 className="text-center text-2xl font-semibold">Contact Us</h2>

      <div className="w-full lg:w-2/4 bg-gray-100 drop-shadow-2xl mx-auto p-6 md:p-10 rounded">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col gap-4"
        >
          {/* Name */}
          <div>
            <label htmlFor="name">Name:</label>
            <input
              id="name"
              type="text"
              placeholder="Enter Name"
              className="bg-white p-4 w-full mt-2 rounded-xl shadow outline-gray-400 outline-offset-4 focus:outline-rose-500 focus:ring-2 focus:ring-rose-300"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email">Email:</label>
            <input
              id="email"
              type="email"
              placeholder="Enter Email"
              className="bg-white p-4 w-full mt-2 rounded-xl shadow outline-gray-400 outline-offset-4 focus:outline-rose-500 focus:ring-2 focus:ring-rose-300"
              required
            />
          </div>

          {/* Message */}
          <div>
            <label htmlFor="msg">Message:</label>
            <textarea
              id="msg"
              rows="5"
              placeholder="Leave your message..."
              className="bg-white p-4 w-full mt-2 rounded-xl shadow outline-gray-400 outline-offset-4 resize-none focus:outline-rose-500 focus:ring-2 focus:ring-rose-300"
              required
            ></textarea>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="bg-rose-700 text-white w-full py-3 text-xl rounded-xl shadow cursor-pointer hover:bg-rose-800 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
