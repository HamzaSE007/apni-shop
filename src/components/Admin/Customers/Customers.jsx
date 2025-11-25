
export default function Customers() {
  const customers = [
    { id: 1, name: "John Doe", email: "john@example.com", phone: "+923004445556", status: "active" },
    { id: 2, name: "Sarah Khan", email: "sarah@example.com", phone: "+923115556677", status: "inactive" },
    { id: 3, name: "Ali Raza", email: "ali@example.com", phone: "+923332224455", status: "active" },
    { id: 4, name: "Emily Davis", email: "emily@example.com", phone: "+923217665544", status: "blocked" },
  ];

  const statusStyle = {
    active: "bg-green-100 text-green-700",
    inactive: "bg-yellow-100 text-yellow-700",
    blocked: "bg-red-100 text-red-700",
  };

  return (
    <div className="p-6 min-h-screen bg-gray-50">
      <h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold mb-8"
      >
        Customers
      </h1>

      {/* Search Bar */}
      <div className="flex items-center gap-3 mb-6 max-w-md">
        <input type="search" className="text-gray-600" />
        <input placeholder="Search customer..." className="rounded-xl" />
      </div>

      {/* Customer List */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {customers.map((cust) => (
          <div
            key={cust.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <div className="rounded-2xl shadow-md hover:shadow-lg transition-all">
              <div className="p-5">
                <div className="flex flex-col gap-2 mb-4">
                  <h2 className="text-xl font-semibold">{cust.name}</h2>
                  <p className="text-gray-600 text-sm">{cust.email}</p>
                  <p className="text-gray-600 text-sm">{cust.phone}</p>
                </div>

                {/* Status */}
                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold ${statusStyle[cust.status]}`}
                >
                  {cust.status}
                </span>

                <div className="mt-4 flex gap-3">
                  <button className="rounded-xl px-4 py-1 text-sm">View</button>
                  <button variant="outline" className="rounded-xl px-4 py-1 text-sm">
                    Message
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
