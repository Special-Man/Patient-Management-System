import React from "react";
import { useNavigate } from "react-router-dom";
import doctorImage from "../assets/doctorpic1.jpg"; // Adjust the path as needed
// import doctrImage from "../assets/doctorpic2.jpg"; 


const DoctorDashboard = () => {
  const navigate = useNavigate();

  const cards = [
    { label: "PATIENTS", path: "/doctor-dashboard/patient-details" },
    { label: "MEDICINES", path: "/doctor-dashboard/medicines" },
    { label: "APPOINTMENTS", path: "/doctor-dashboard/appointments" },
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Welcome Section */}
      <header className="bg-gray-200 py-4 text-center">
        <h1 className="text-2xl font-bold text-gray-800">WELCOME DOCTOR</h1>
      </header>

      {/* Cards Section */}
      <div className="flex flex-col items-center gap-6 p-6">
        {cards.map((card, index) => (
          <div
            key={index}
            onClick={() => navigate(card.path)}
            className="w-full max-w-4xl cursor-pointer rounded-lg overflow-hidden shadow-md relative"
          >
            {/* Background Image */}
            <img
              src={doctorImage}
              alt={card.label}
              className="w-full h-48 object-cover"
            />
           
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <h2 className="text-white text-2xl font-bold">{card.label}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DoctorDashboard;
