import React from "react";
import { Outlet } from "react-router-dom";
import CustomerDashboardHeader from "./CustomerDashboardHeader/CustomerDashboardHeader";

export default function CustomerDashboardLayout() {
  return (
    <div className="h-screen flex flex-col overflow-hidden">
      {/* Header */}
      <CustomerDashboardHeader/>
      {/* body */}
      <div className="w-full h-[calc(100vh-80px)] flex">
        {/* Sidebar */}

        {/* outlet */}
        <div className="flex-1 p-6 overflow-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
