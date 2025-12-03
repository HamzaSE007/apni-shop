import DashboardCard from "../../sharedComponents/DashboardCard";
import { Link } from "react-router-dom";
import DashboardStatCard from "../../sharedComponents/DashboardStatCard";
import { superAdminDashboardStats } from "../../../constant/superAdminDashboardStats";

export default function SuperAdminDashboard() {

  return (
    <div className="flex flex-col gap-10 p-6">
      {/* Welcome Section */}
      <div>
        <h1 className="text-3xl font-semibold text-gray-800">
          Welcome, Hamza
        </h1>
        <p className="text-sm text-gray-500">
          Track, manage, and forecast your admins, vendors, customers and orders
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <DashboardStatCard
          title="Total Revenue"
          value="2,54,420"
          percentage="10%"
          isPositive={true}
        />

        <DashboardStatCard
          title="Total Product Sales"
          value="3170"
          percentage="-5%"
          isPositive={false}
        />
      </div>

      {/* Show Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Link to="admin-list">
          <DashboardCard {...superAdminDashboardStats.admins} />
        </Link>
        <Link to="vendor-list">
          <DashboardCard {...superAdminDashboardStats.vendors} />
        </Link>
        <Link to="orders">
          <DashboardCard {...superAdminDashboardStats.orders} />
        </Link>
        <Link to="customers">
          <DashboardCard {...superAdminDashboardStats.customers} />
        </Link>
        <Link to="product-category-list">
          <DashboardCard {...superAdminDashboardStats.categories} />
        </Link>
        <Link to="products-list">
          <DashboardCard {...superAdminDashboardStats.products} />
        </Link>
      </div>
    </div>
  );
}
