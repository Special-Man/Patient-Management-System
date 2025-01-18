import React from "react";
import doctorPic from "../../assets/doctorpic1.jpg"; // Use the doctor image from the assets folder

const PatientDashboard = () => {
  return (
    <div>
      {/* Header Section */}
      <div
        className="relative h-64 bg-cover bg-center"
        style={{
          backgroundImage: `url(${doctorPic})`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-6">
          <h1 className="text-3xl font-bold">THE BEST WAYS TO CURE YOU HERE</h1>
        </div>
      </div>

      {/* Welcome Section */}
      <div className="text-center my-10 px-6">
        <h2 className="text-2xl font-bold mb-4">WELCOME MARVIN!!</h2>
        <h3 className="text-lg font-semibold mb-2">
          THIS IS MEDS PLUS TO HELP YOU DIE!
        </h3>
        <p className="text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-6 mb-10">
        {/* Medicine Card */}
        <div className="border rounded-lg shadow-md overflow-hidden">
          <img src={doctorPic} alt="Medicine" className="w-full h-48 object-cover" />
          <div className="p-4">
            <p className="text-gray-500 text-sm">4 Feb 2025</p>
            <h3 className="text-lg font-semibold mb-2">
              View your assigned Medicine here
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              You can view your assigned medicine from this link down below.
              Doctor has assigned you some medicines and can see here.
            </p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded">
              VIEW MEDICINE
            </button>
          </div>
        </div>

        {/* Appointment Card */}
        <div className="border rounded-lg shadow-md overflow-hidden">
          <img src={doctorPic} alt="Appointments" className="w-full h-48 object-cover" />
          <div className="p-4">
            <p className="text-gray-500 text-sm">4 Feb 2025</p>
            <h3 className="text-lg font-semibold mb-2">
              View your upcoming Appointments
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              You can view your upcoming appointments from this link down
              below. Doctor will set the appointments for you.
            </p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded">
              VIEW APPOINTMENTS
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientDashboard;
