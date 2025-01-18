import { Edit, Mail, Phone, Video } from "lucide-react";
const DoctorProfile = () => {
  return (
    <div className="p-8 animate-fadeIn">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold text-gray-900">ADMIN</h1>
        <button className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
          GO TO HOME
        </button>
      </div>
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <div className="flex items-start gap-6 mb-8">
          <img
            src="/lovable-uploads/9faa1600-af9c-418f-a1a9-19dae4c65a33.png"
            alt="Dr. Stephen Strange"
            className="w-16 h-16 rounded-full object-cover"
          />
          <div className="flex-1">
            <h2 className="text-xl font-semibold text-gray-900">Dr. Stephen Strange</h2>
            <p className="text-gray-500 text-sm mt-1">Male • Age 52</p>
            <p className="text-gray-500 text-sm">arkhamasylum@dc.com</p>
            <p className="text-gray-500 text-sm">+880 17252423123</p>
          </div>
        </div>
        <div className="flex gap-3 mb-8">
          <button className="flex items-center gap-2 px-4 py-2 text-sm text-primary bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
            <Mail className="w-4 h-4" />
            Send Alert
          </button>
          <button className="flex items-center gap-2 px-4 py-2 text-sm text-primary bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
            <Video className="w-4 h-4" />
            Video Call
          </button>
          <button className="flex items-center gap-2 px-4 py-2 text-sm text-primary bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
            <Phone className="w-4 h-4" />
            Voice Call
          </button>
          <button className="flex items-center gap-2 px-4 py-2 text-sm text-primary bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
            <Mail className="w-4 h-4" />
            Email
          </button>
        </div>
        <div className="border-t border-gray-100 pt-6">
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <label className="block text-sm text-gray-500 mb-1">Full Name</label>
                <input
                  type="text"
                  value="Dr. Stephen Strange"
                  className="w-full p-2 border border-gray-200 rounded-lg"
                  readOnly
                />
              </div>
              <div>
                <label className="block text-sm text-gray-500 mb-1">Age</label>
                <input
                  type="text"
                  value="48"
                  className="w-full p-2 border border-gray-200 rounded-lg"
                  readOnly
                />
              </div>
              <div>
                <label className="block text-sm text-gray-500 mb-1">Email</label>
                <input
                  type="email"
                  value="dr.strange@marvel.com"
                  className="w-full p-2 border border-gray-200 rounded-lg"
                  readOnly
                />
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm text-gray-500 mb-1">Phone Number</label>
                <input
                  type="text"
                  value="616-1610-838"
                  className="w-full p-2 border border-gray-200 rounded-lg"
                  readOnly
                />
              </div>
              <div>
                <label className="block text-sm text-gray-500 mb-1">Address</label>
                <input
                  type="text"
                  value="New York City, 177A Bleecker Street"
                  className="w-full p-2 border border-gray-200 rounded-lg"
                  readOnly
                />
              </div>
              <div>
                <label className="block text-sm text-gray-500 mb-1">Specialty</label>
                <input
                  type="text"
                  value="Master of Mystic Art, Sorcerer"
                  className="w-full p-2 border border-gray-200 rounded-lg"
                  readOnly
                />
              </div>
            </div>
          </div>
          
          <div className="mt-6 flex gap-3">
            <button className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
              <Edit className="w-4 h-4" />
              Edit
            </button>
            <button className="flex items-center gap-2 px-4 py-2 text-red-500 bg-red-50 rounded-lg hover:bg-red-100 transition-colors">
              Remove Doctor
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DoctorProfile;