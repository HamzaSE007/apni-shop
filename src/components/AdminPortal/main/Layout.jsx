import { AdminHeader, AdminSidebar } from "../adminIndex";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="h-screen flex flex-col overflow-hidden">

      {/* HEADER */}
      <AdminHeader />

      {/* BODY */}
      <div className="flex w-full h-[calc(100vh-80px)]">

        {/* SIDEBAR */}
        <AdminSidebar />

        {/* PAGE CONTENT  */}
        <div className="flex-1 p-6 pb-6 bg-gray-50 overflow-y-auto">
          <Outlet />
        </div>

      </div>
    </div>
  );
}
