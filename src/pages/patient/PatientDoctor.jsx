import React, { useState } from "react";
import doctorpic1 from "../../assets/doctorpic1.jpg"; // Import the image properly

const PatientDoctor = () => {
  const [activeTab, setActiveTab] = useState("info");

  const doctorInfo = {
    name: "Dr. Stephen Strange",
    age: 52,
    email: "arkham.asylum@dc.com",
    phone: "+880 172524123123",
    profilePic: doctorpic1, // Use imported image
  };

  const previousDoctors = [
    {
      id: 1,
      name: "Dr. Stephen Strange",
      age: 52,
      email: "arkham.asylum@dc.com",
      phone: "+880 172524123123",
      profilePic: doctorpic1,
    },
    {
      id: 2,
      name: "Dr. Amirul Haque",
      age: 52,
      email: "arkham.asylum@dc.com",
      phone: "+880 172524123123",
      profilePic: doctorpic1,
    },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">DOCTOR</h1>
      <div className="flex border-b border-gray-300 mb-4">
        <button
          className={`py-2 px-4 ${
            activeTab === "info" ? "border-b-2 border-blue-500 text-blue-500" : "text-gray-500"
          }`}
          onClick={() => setActiveTab("info")}
        >
          Doctor Information
        </button>
        <button
          className={`py-2 px-4 ${
            activeTab === "previous"
              ? "border-b-2 border-blue-500 text-blue-500"
              : "text-gray-500"
          }`}
          onClick={() => setActiveTab("previous")}
        >
          Previous Doctors
        </button>
      </div>

      {activeTab === "info" && (
        <div className="p-4 bg-white rounded shadow-md">
          <div className="flex items-center gap-4">
            <img
              src={doctorInfo.profilePic}
              alt={doctorInfo.name}
              className="h-20 w-20 rounded-full object-cover"
            />
            <div>
              <h2 className="text-xl font-semibold">{doctorInfo.name}</h2>
              <p className="text-gray-600">Male • Age {doctorInfo.age}</p>
              <p className="text-gray-600">{doctorInfo.email}</p>
              <p className="text-gray-600">{doctorInfo.phone}</p>
            </div>
          </div>
        </div>
      )}

      {activeTab === "previous" && (
        <div>
          <h2 className="text-lg font-semibold mb-4">Your Previous Doctors:</h2>
          <div className="grid grid-cols-2 gap-4">
            {previousDoctors.map((doctor) => (
              <div key={doctor.id} className="p-4 bg-white rounded shadow-md">
                <div className="flex items-center gap-4">
                  <img
                    src={doctor.profilePic}
                    alt={doctor.name}
                    className="h-16 w-16 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="text-lg font-semibold">{doctor.name}</h3>
                    <p className="text-gray-600">Male • Age {doctor.age}</p>
                    <p className="text-gray-600">{doctor.email}</p>
                    <p className="text-gray-600">{doctor.phone}</p>
                  </div>
                </div>
                <div className="flex gap-2 mt-4">
                  <button className="bg-blue-500 text-white px-3 py-1 rounded">Send Alert</button>
                  <button className="bg-blue-500 text-white px-3 py-1 rounded">Video Call</button>
                  <button className="bg-blue-500 text-white px-3 py-1 rounded">Voice Call</button>
                  <button className="bg-blue-500 text-white px-3 py-1 rounded">Email</button>
                </div>
                <button className="mt-2 bg-blue-600 text-white px-4 py-2 rounded w-full">
                  DOCTOR DETAILS
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default PatientDoctor;
