import { useParams, Link } from "react-router-dom";
import { IoArrowBackSharp } from "react-icons/io5";
import { adminsInfo } from "../../../../constant/adminsInfo";

export default function AdminDetailPage() {
  const { adminId } = useParams();
  const admins = adminsInfo;

  // find admin by ID
  const admin = admins.find((a) => a.id === Number(adminId));

  if (!admin) {
    return (
      <div className="p-6">
        <h2 className="text-2xl font-bold text-red-600">Admin Not Found</h2>
        <Link
          to='/superAdmin/admin-list'
          className="mt-4 inline-flex items-center text-blue-600 hover:underline"
        >
          <IoArrowBackSharp className="mr-2" /> Go Back
        </Link>
      </div>
    );
  }

  const statusClasses = {
    Active:
      "px-3 py-1 text-sm font-medium rounded-full bg-green-100 text-green-700",
    Inactive:
      "px-3 py-1 text-sm font-medium rounded-full bg-red-100 text-red-700",
  };

  return (
    <div className="h-screen bg-gray-100 flex justify-center items-center relative">

        {/* Back Button */}
      <Link
        to='/superAdmin/admin-list'
        className="absolute top-10 left-10 inline-flex items-center text-gray-700 mb-4 hover:text-black"
        >
        <IoArrowBackSharp className="mr-2 text-lg" />
        Back
      </Link>

    
  

      {/* Card */}
      <div className="bg-white max-w-3xl mx-auto shadow-[0_0_5px_rgba(0,0,0,0.2)] rounded-xl border border-gray-300 p-6">
        {/* Header */}
        <h2 className="text-3xl font-bold text-gray-800 mb-6 tracking-tight">
          Admin Details
        </h2>

        {/* Fields */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-6">
          <div>
            <p className="text-gray-500 text-sm">Admin Name</p>
            <p className="text-xl font-semibold">{admin.name}</p>
          </div>

          <div>
            <p className="text-gray-500 text-sm">Role</p>
            <p className="text-lg font-medium text-indigo-700">{admin.role}</p>
          </div>

          <div>
            <p className="text-gray-500 text-sm">Email</p>
            <p className="font-medium">{admin.email}</p>
          </div>

          <div>
            <p className="text-gray-500 text-sm">Phone</p>
            <p className="font-medium">{admin.phone}</p>
          </div>

          <div>
            <p className="text-gray-500 text-sm">Status</p>
            <span className={statusClasses[admin.status]}>
              {admin.status}
            </span>
          </div>

          <div>
            <p className="text-gray-500 text-sm">Created At</p>
            <p className="font-medium">{admin.createdAt || "N/A"}</p>
          </div>
        </div>
      </div>
    </div>
          
  );
}
