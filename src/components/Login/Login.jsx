import React, { useState } from "react";

export default function Login() {
  const [activeForm, setActiveForm] = useState("login");
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center px-4">
      <div className="bg-white w-full max-w-md p-8 rounded-2xl shadow-xl flex flex-col gap-8 border border-gray-200">

        {/* Title */}
        <h1
          className={`text-4xl font-serif text-center text-gray-800 tracking-wide`}
        >
          <span className="text-rose-700 font-bold">—</span>
          {activeForm === "login" && "User Login"}
          {activeForm === "admin" && "Admin Login"}
          {activeForm === "signup" && "Create Account"}
          {activeForm === "vendor" && "Vendor Login"}
          <span className="text-rose-700 font-bold">—</span>
        </h1>

        {/* TOGGLE BUTTONS */}
        <div className="flex justify-center gap-6 text-sm font-medium text-gray-600  *:cursor-pointer">
          <button
            onClick={() => setActiveForm("login")}
            className={`${activeForm === "login" ? "text-red-700" : ""}`}
          >
            User Login
          </button>
          <button
            onClick={() => setActiveForm("admin")}
            className={`${activeForm === "admin" ? "text-red-700" : ""}`}
          >
            Admin Login
          </button>
          <button
            onClick={() => setActiveForm("vendor")}
            className={`${activeForm === "vendor" ? "text-red-700" : ""}`}
          >
            Vendor Login
          </button>
        </div>

        {/* User Login */}

        {activeForm === "login" && (
          <form className="flex flex-col gap-6">
            {/* Username */}
            <div className="flex flex-col gap-1">
              <label htmlFor="username" className="font-semibold text-gray-700">
                Username
              </label>
              <input
                type="text"
                id="username"
                placeholder="Enter username..."
                className="bg-gray-100 py-3 px-3 rounded-lg outline-none border border-gray-300 focus:border-rose-700 focus:ring-2 focus:ring-rose-300 transition"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col gap-1">
              <label htmlFor="email" className="font-semibold text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter email..."
                className="bg-gray-100 py-3 px-3 rounded-lg outline-none border border-gray-300 focus:border-rose-700 focus:ring-2 focus:ring-rose-300 transition"
              />
              <p
                onClick={() => setActiveForm("signup")}
                className="text-indigo-700 cursor-pointer text-right hover:text-rose-800"
              >
                Create new account?
              </p>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="bg-rose-700 rounded-lg py-3 text-lg font-semibold text-white cursor-pointer border border-rose-700 hover:text-rose-700 hover:bg-transparent transition-all duration-300"
            >
              Login
            </button>
          </form>
        )}

        {/* Admin Login */}

        {activeForm === "admin" && (
          <form className="flex flex-col gap-6">

            {/* Username */}
            <div className="flex flex-col gap-1">
              <label htmlFor="username" className="font-semibold text-gray-700">
                Username
              </label>
              <input
                type="text"
                id="username"
                placeholder="Enter username..."
                className="bg-gray-100 py-3 px-3 rounded-lg outline-none border border-gray-300 focus:border-rose-700 focus:ring-2 focus:ring-rose-300 transition"
              />
            </div>

            {/* Password */}
            <div className="flex flex-col gap-1">
              <label htmlFor="email" className="font-semibold text-gray-700">
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter password..."
                className="bg-gray-100 py-3 px-3 rounded-lg outline-none border border-gray-300 focus:border-rose-700 focus:ring-2 focus:ring-rose-300 transition"
              />
            </div>

            {/* Button */}
            <button
              type="submit"
              className="bg-rose-700 rounded-lg py-3 text-lg font-semibold text-white cursor-pointer border border-rose-700 hover:text-rose-700 hover:bg-transparent transition-all duration-300"
            >
              Admin Login
            </button>
          </form>
        )}

        {/* Signup */}

        {activeForm === "signup" && (
          <form className="flex flex-col gap-6">

            {/* Fullname */}
            <div className="flex flex-col gap-1">
              <label htmlFor="username" className="font-semibold text-gray-700">
                Fullname
              </label>
              <input
                type="text"
                id="fullname"
                placeholder="Enter Fullname..."
                className="bg-gray-100 py-3 px-3 rounded-lg outline-none border border-gray-300 focus:border-rose-700 focus:ring-2 focus:ring-rose-300 transition"
              />
            </div>

            {/* Username */}
            <div className="flex flex-col gap-1">
              <label htmlFor="username" className="font-semibold text-gray-700">
                Username
              </label>
              <input
                type="text"
                id="username"
                placeholder="Enter username..."
                className="bg-gray-100 py-3 px-3 rounded-lg outline-none border border-gray-300 focus:border-rose-700 focus:ring-2 focus:ring-rose-300 transition"
              />
            </div>

            {/* Password */}
            <div className="flex flex-col gap-1">
              <label htmlFor="email" className="font-semibold text-gray-700">
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter password..."
                className="bg-gray-100 py-3 px-3 rounded-lg outline-none border border-gray-300 focus:border-rose-700 focus:ring-2 focus:ring-rose-300 transition"
              />
              <p
                onClick={() => setActiveForm("login")}
                className="text-indigo-700 cursor-pointer text-right hover:text-rose-800"
              >
                I have already account?
              </p>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="bg-rose-700 rounded-lg py-3 text-lg font-semibold text-white cursor-pointer border border-rose-700 hover:text-rose-700 hover:bg-transparent transition-all duration-300"
            >
              Create Account
            </button>
          </form>
        )}

        {/* Vendor Login */}
        
        {activeForm === "vendor" && (
          <form className="flex flex-col gap-6">

            {/* Username */}
            <div className="flex flex-col gap-1">
              <label htmlFor="username" className="font-semibold text-gray-700">
                Username
              </label>
              <input
                type="text"
                id="username"
                placeholder="Enter username..."
                className="bg-gray-100 py-3 px-3 rounded-lg outline-none border border-gray-300 focus:border-rose-700 focus:ring-2 focus:ring-rose-300 transition"
              />
            </div>

            {/* Password */}
            <div className="flex flex-col gap-1">
              <label htmlFor="email" className="font-semibold text-gray-700">
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter password..."
                className="bg-gray-100 py-3 px-3 rounded-lg outline-none border border-gray-300 focus:border-rose-700 focus:ring-2 focus:ring-rose-300 transition"
              />
            </div>

            {/* Button */}
            <button
              type="submit"
              className="bg-rose-700 rounded-lg py-3 text-lg font-semibold text-white cursor-pointer border border-rose-700 hover:text-rose-700 hover:bg-transparent transition-all duration-300"
            >
              Vendor Login
            </button>
          </form>
        )}
        
      </div>
    </div>
  );
}
