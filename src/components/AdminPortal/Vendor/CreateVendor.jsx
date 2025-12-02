import React from "react";
import { useForm } from "react-hook-form";

export default function CreateVendor() {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();

  const countries = [
    "Pakistan",
    "United States",
    "United Kingdom",
    "India",
    "Other",
  ];

  const onSubmit = (data) => {
    console.log("Vendor Created:", data);
    reset(); // clear form after submit
  };

  const password = watch("password");

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-semibold mb-4">Create Vendor</h1>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4 bg-white p-6 rounded-2xl shadow"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium">
              Email<span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              {...register("email", { 
                required: "Email is required!",
                pattern: {
                    value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,63}$/,
                    message: 'Please enter valid email!'
                }
             })}
              className={`mt-1 block w-full rounded-md border p-2 ${
                errors.email ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.email?.message && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-medium">
              Phone<span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              placeholder="e.g. +92 300 0000000"
              {...register("phone", {
                required: "Phone is required!",
                pattern: {
                  value: /^\+92[0-9]{10}$/,
                  message: "Invalid phone number",
                },
              })}
              className={`mt-1 block w-full rounded-md border p-2 ${
                errors.phone ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.phone?.message && (
              <p className="text-red-500 text-sm mt-1">
                {errors.phone.message}
              </p>
            )}
          </div>

          {/* Address */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium">
              Address<span className="text-red-500">*</span>
            </label>
            <textarea
            rows={4}
              {...register("address", { required: "Address is required!" })}
              className={`mt-1 block w-full rounded-md border p-2 ${
                errors.address ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.address?.message && (
              <p className="text-red-500 text-sm mt-1">
                {errors.address.message}
              </p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium">
              Password<span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              {...register("password", {
                required: "Password is required!",
                minLength: {
                  value: 8,
                  message: "Password must be 8 letter!",
                },
              })}
              className={`mt-1 block w-full rounded-md border p-2 ${
                errors.password ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.password?.message && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-sm font-medium">
              Confirm Password<span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              {...register("confirmPassword", {
                required: "Confirm password is required!",
                validate: (value) =>
                  value === password || "Passwords do not match!",
              })}
              className={`mt-1 block w-full rounded-md border p-2 ${
                errors.confirmPassword ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.confirmPassword?.message && (
              <p className="text-red-500 text-sm mt-1">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>

          {/* City */}
          <div>
            <label className="block text-sm font-medium">
              City<span className="text-red-500">*</span>
            </label>
            <input
              {...register("city", { required: "City is required!" })}
              className={`mt-1 block w-full rounded-md border p-2 ${
                errors.city ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.city?.message && (
              <p className="text-red-500 text-sm mt-1">{errors.city.message}</p>
            )}
          </div>

          {/* Country */}
          <div>
            <label className="block text-sm font-medium">
              Country<span className="text-red-500">*</span>
            </label>
            <select
              {...register("country", { required: "Country is required!" })}
              className={`mt-1 block w-full rounded-md border p-2 ${
                errors.country ? "border-red-500" : "border-gray-300"
              }`}
            >
              <option value="">Select country</option>
              {countries.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
            {errors.country?.message && (
              <p className="text-red-500 text-sm mt-1">
                {errors.country.message}
              </p>
            )}
          </div>

          {/* Vendor Percentage */}
          <div>
            <label className="block text-sm font-medium">
              Vendor Percentage (%)<span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              min="0"
              max="100"
              step="0.1"
              placeholder="0 - 100"
              {...register("vendorPercentage", {
                required: "Percentage is required!",
              })}
              className={`mt-1 block w-full rounded-md border p-2 ${
                errors.vendorPercentage ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.vendorPercentage?.message && (
              <p className="text-red-500 text-sm mt-1">
                {errors.vendorPercentage.message}
              </p>
            )}
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-end items-center gap-3 mt-4">
          {/* Reset Form btn */}
          <button
            type="button"
            onClick={() => reset()}
            className="px-4 py-2 rounded-md border cursor-pointer hover:text-red-700"
          >
            Reset
          </button>

          {/* Form Submit btn */}
          <button
            type="submit"
            className="px-4 py-2 rounded-md bg-blue-600 border text-white cursor-pointer hover:bg-transparent hover:text-blue-600 transition-all duration-400 "
          >
            Create Vendor
          </button>
        </div>
      </form>
    </div>
  );
}
