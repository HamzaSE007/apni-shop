import React from "react";
import { Outlet } from "react-router-dom";
import CustomerDashboardHeader from "./CustomerDashboardHeader/CustomerDashboardHeader";
import CustomerDashboardSidebar from "./CustomerDashboardSidebar/CustomerDashboardSidebar";

export default function CustomerDashboardLayout() {
  return (
    <div className="h-screen flex flex-col overflow-hidden">
      {/* Header */}
      <CustomerDashboardHeader/>
      {/* body */}
      <div className="w-full h-[calc(100vh-80px)] flex ">

        {/* sidebar */}
        <CustomerDashboardSidebar/>

        {/* outlet */}
        <div className="flex-1 overflow-auto p-6 size-full bg-gray-50">
          <Outlet/>
        </div>

      </div>
    </div>
  );
}
