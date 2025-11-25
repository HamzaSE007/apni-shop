import { AdminHeader, AdminSidebar } from "../adminIndex";
import { Outlet } from "react-router-dom";

export default function MainAdminPage() {
  return (
    <div className="h-screen flex flex-col ">

      {/* HEADER */}
      <AdminHeader />

      {/* BODY (Sidebar + Page Content) */}
      <div className="flex w-full h-full">

        {/* SIDEBAR */}
        <AdminSidebar />

        {/* PAGE CONTENT */}
        <div className="flex-1 p-6 pb-6 bg-gray-50 overflow-auto">
          <Outlet />
        </div>

      </div>
    </div>
  );
}
