import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Edit, Mail, Phone, Video } from 'lucide-react';
import { getDoctorById } from '../../service/doctorApi';
const DoctorProfile = () => {
  const { id } = useParams(); // Get doctor ID from URL
  const navigate = useNavigate();
  const [doctor, setDoctor] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDoctor = async () => {
      try {
        const data = await getDoctorById(id); // Fetch doctor details
        setDoctor(data);
      } catch (error) {
        console.error('Error fetching doctor:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchDoctor();
  }, [id]);

  if (loading) {
    return <p>Loading doctor details...</p>;
  }

  if (!doctor) {
    return <p>Doctor not found.</p>;
  }

  return (
    <div className="p-8 animate-fadeIn">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold text-gray-900">ADMIN</h1>
        <button
          onClick={() => navigate('/dashboard')}
          className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
        >
          GO TO HOME
        </button>
      </div>
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <div className="flex items-start gap-6 mb-8">
          <img
            src={doctor.profile_picture || '/default-profile.png'}
            alt={`${doctor.first_name} ${doctor.last_name}`}
            className="w-16 h-16 rounded-full object-cover"
          />
          <div className="flex-1">
            <h2 className="text-xl font-semibold text-gray-900">
              Dr. {doctor.first_name} {doctor.last_name}
            </h2>
            <p className="text-gray-500 text-sm mt-1">{doctor.gender || 'N/A'} • Age {doctor.age}</p>
            <p className="text-gray-500 text-sm">{doctor.email}</p>
            <p className="text-gray-500 text-sm">{doctor.phone_number}</p>
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
                  value={`Dr. ${doctor.first_name} ${doctor.last_name}`}
                  className="w-full p-2 border border-gray-200 rounded-lg"
                  readOnly
                />
              </div>
              <div>
                <label className="block text-sm text-gray-500 mb-1">Age</label>
                <input
                  type="text"
                  value={doctor.age || 'N/A'}
                  className="w-full p-2 border border-gray-200 rounded-lg"
                  readOnly
                />
              </div>
              <div>
                <label className="block text-sm text-gray-500 mb-1">Email</label>
                <input
                  type="email"
                  value={doctor.email}
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
                  value={doctor.phone_number || 'N/A'}
                  className="w-full p-2 border border-gray-200 rounded-lg"
                  readOnly
                />
              </div>
              <div>
                <label className="block text-sm text-gray-500 mb-1">Address</label>
                <input
                  type="text"
                  value={doctor.address || 'N/A'}
                  className="w-full p-2 border border-gray-200 rounded-lg"
                  readOnly
                />
              </div>
              <div>
                <label className="block text-sm text-gray-500 mb-1">Specialty</label>
                <input
                  type="text"
                  value={doctor.specialty || 'N/A'}
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
