import React from "react";
import DashboardCard from "../DashboardCard";
import { dashboardStats } from "../../../constant/dashboardStats";
import { Link } from "react-router-dom";

export default function AdminHome() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
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
  );
}
