
export default function VendorDetailPopup({open, setOpen}) {
  
  return (
    <div className="p-10 flex justify-center items-center h-screen">
      
      {open && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex justify-center items-center p-4">
          <div className="w-full max-w-md bg-white rounded-2xl p-6 shadow-2xl ">
        
            <h2 className="text-2xl font-semibold mb-4">Vendor Details</h2>

            <div className="grid grid-cols-2 gap-4 text-sm">
              <p className="font-semibold">Vendor Name:</p>
              <p>ABC Suppliers</p>

              <p className="font-semibold">Email:</p>
              <p>vendor@example.com</p>

              <p className="font-semibold">Phone:</p>
              <p>+1 987 654 321</p>

              <p className="font-semibold">Address:</p>
              <p>456 Street, City, Country</p>

              <p className="font-semibold">Status:</p>
              <p className="text-green-600 font-semibold">Active</p>
            </div>

            
              <button
                onClick={setOpen}
                className="w-full mt-4 px-4 py-2 rounded-xl border border-gray-300 hover:bg-gray-100 transition cursor-pointer"
              >
                Close
              </button>
              
          </div>
        </div>
      )}
    </div>
  );
}
