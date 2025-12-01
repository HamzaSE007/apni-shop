import React from "react";
import StatCard from "./StatCard";
import DashboardCard from "../../sharedComponents/DashboardCard";
import { vendorDashboardStats } from "../../../constant/vendorDashboardStats";
import { Link } from "react-router-dom";

export default function VendorHome() {
  return (
    <div className="flex flex-col gap-10">
      {/* Welcome Section */}
      <div>
        <h1 className="text-3xl font-semibold text-gray-800">
          Welcome back, Hamza
        </h1>
        <p className="text-sm text-gray-500">
          Track, manage, and forecast your customers and orders
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <StatCard
          title="Total Revenue"
          value="2,420"
          percentage="40%"
          isPositive={true}
        />

        <StatCard
          title="Total Product Sales"
          value="317"
          percentage="-2%"
          isPositive={false}
        />
      </div>

      {/* Show Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Link to="product-list">
          <DashboardCard {...vendorDashboardStats.products} />
        </Link>
        <Link to="product-category-list">
          <DashboardCard {...vendorDashboardStats.categories} />
        </Link>
        <Link to="orders">
          <DashboardCard {...vendorDashboardStats.orders} />
        </Link>
      </div>
    </div>
  );
}
