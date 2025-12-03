import React from "react";
import DashboardCard from "../../sharedComponents/DashboardCard";
import { dashboardStats } from "../../../constant/adminDashboardStats";
import { Link } from "react-router-dom";

export default function AdminHome() {
  return (
    <div className="flex flex-col gap-10 p-6">

      {/* Welcome Section */}
      <div>
        <h1 className="text-3xl font-semibold text-gray-800">
          Welcome back, Hamza
        </h1>
        <p className="text-sm text-gray-500">
          Track, manage, and forecast your customers and orders
        </p>
      </div>

      {/* Stats */}

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
      <Link to='product-list'>
        <DashboardCard {...dashboardStats.products} />
      </Link>

      <Link to='product-category-list'>
        <DashboardCard {...dashboardStats.categories} />
      </Link>

      <Link to='orders'>
        <DashboardCard {...dashboardStats.orders} />
      </Link>

      <Link to='customers'>
        <DashboardCard {...dashboardStats.customers} />
      </Link>

      <Link to='vendors-list'>
        <DashboardCard {...dashboardStats.vendors} />
      </Link>
    </div>
    </div>
  );
}
