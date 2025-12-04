import React from "react";
import { useForm } from "react-hook-form";

export default function CreateAdmin() {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();

  const adminRoles = ["Admin", "Manager", "Support"];

  const password = watch("password");

  const onSubmit = (data) => {
    console.log("Admin Created:", data);
    reset();
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-semibold mb-4">Create Admin</h1>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4 bg-white p-6 rounded-2xl shadow"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium">
              Full Name<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              {...register("fullName", {
                required: "Full name is required!",
                minLength: {
                  value: 3,
                  message: "Name must be at least 3 characters!",
                },
              })}
              className={`mt-1 block w-full rounded-md border p-2 ${
                errors.fullName ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.fullName && (
              <p className="text-red-500 text-sm mt-1">
                {errors.fullName.message}
              </p>
            )}
          </div>

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
                  value:
                    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,63}$/,
                  message: "Please enter a valid email!",
                },
              })}
              className={`mt-1 block w-full rounded-md border p-2 ${
                errors.email ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.email && (
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
              placeholder="+92 300 0000000"
              {...register("phone", {
                required: "Phone is required!",
                pattern: {
                  value: /^\+92[0-9]{10}$/,
                  message: "Phone format must be +92XXXXXXXXXX",
                },
              })}
              className={`mt-1 block w-full rounded-md border p-2 ${
                errors.phone ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">
                {errors.phone.message}
              </p>
            )}
          </div>

          {/* Admin Role */}
          <div>
            <label className="block text-sm font-medium">
              Admin Role<span className="text-red-500">*</span>
            </label>
            <select
              {...register("role", { required: "Admin role is required!" })}
              className={`mt-1 block w-full rounded-md border p-2 ${
                errors.role ? "border-red-500" : "border-gray-300"
              }`}
            >
              <option value="">Select Role</option>
              {adminRoles.map((r) => (
                <option key={r} value={r}>
                  {r}
                </option>
              ))}
            </select>
            {errors.role && (
              <p className="text-red-500 text-sm mt-1">{errors.role.message}</p>
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
                  message: "Password must be at least 8 characters!",
                },
              })}
              className={`mt-1 block w-full rounded-md border p-2 ${
                errors.password ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.password && (
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
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm mt-1">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>

          {/* Status */}
          <div>
            <label className="block text-sm font-medium mb-1">Status</label>

            <div className="flex items-center gap-6">
              {/* Active */}
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  value="active"
                  {...register("status", {
                    required: "Status is required!",
                  })}
                />
                <span className="text-green-700">Active</span>
              </label>

              {/* Inactive */}
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  value="inactive"
                  {...register("status", {
                    required: "Status is required!",
                  })}
                />
                <span className="text-red-700">Inactive</span>
              </label>
            </div>

            {/* Error */}
            {errors.status && (
              <p className="text-red-500 text-sm mt-1">
                {errors.status.message}
              </p>
            )}
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-end items-center gap-3 mt-4">
          <button
            type="button"
            onClick={() => reset()}
            className="px-4 py-2 rounded-md border cursor-pointer hover:text-red-700"
          >
            Reset
          </button>

          <button
            type="submit"
            className="px-4 py-2 rounded-md bg-blue-600 text-white cursor-pointer hover:bg-transparent hover:text-blue-600 border transition-all"
          >
            Create Admin
          </button>
        </div>
      </form>
    </div>
  );
}
