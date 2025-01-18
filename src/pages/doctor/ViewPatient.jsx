import React, { useState } from "react";
import AppointmentHistory from "./components/AppointmentHistory.jsx";
import PatientRecords from "./components/PatientRecords.jsx";
import MedicationTab from "./components/MedicationTab.jsx";

const ViewPatient = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Patient Header */}
      <div className="bg-white rounded-lg shadow p-6 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <img
            src="https://via.placeholder.com/100"
            alt="Patient"
            className="w-20 h-20 rounded-full object-cover"
          />
          <div>
            <h2 className="text-lg font-semibold">Marvin McKinney</h2>
            <p className="text-gray-500">Male · Age 32</p>
            <p className="text-gray-500">mamckinder@gmail.com</p>
            <p className="text-gray-500">+880 17252421323</p>
          </div>
        </div>
        <div className="flex gap-2">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">Send Alert</button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">Video Call</button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">Voice Call</button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">Email</button>
        </div>
        <div className="flex gap-2">
          <button className="bg-red-500 text-white px-4 py-2 rounded-lg">Remove Patient</button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">Edit</button>
        </div>
      </div>

      {/* Tabs */}
      <div className="mt-6 bg-white rounded-lg shadow">
        <div className="border-b border-gray-200 flex justify-around">
          <button
            onClick={() => handleTabClick("overview")}
            className={`w-full py-2 text-sm font-semibold ${
              activeTab === "overview" ? "border-b-4 border-blue-500 text-blue-500" : "text-gray-500"
            }`}
          >
            Overview
          </button>
          <button
            onClick={() => handleTabClick("appointmentHistory")}
            className={`w-full py-2 text-sm font-semibold ${
              activeTab === "appointmentHistory"
                ? "border-b-4 border-blue-500 text-blue-500"
                : "text-gray-500"
            }`}
          >
            Appointment History
          </button>
          <button
            onClick={() => handleTabClick("patientRecord")}
            className={`w-full py-2 text-sm font-semibold ${
              activeTab === "patientRecord"
                ? "border-b-4 border-blue-500 text-blue-500"
                : "text-gray-500"
            }`}
          >
            Patient Record
          </button>
          <button
            onClick={() => handleTabClick("medication")}
            className={`w-full py-2 text-sm font-semibold ${
              activeTab === "medication"
                ? "border-b-4 border-blue-500 text-blue-500"
                : "text-gray-500"
            }`}
          >
            Medication
          </button>
        </div>

        {/* Tab Content */}
        <div className="p-6">
          {activeTab === "overview" && (
            <div>
              <h3 className="text-lg font-semibold mb-4">Overview</h3>
              <div className="flex gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700">
                    Type of Illness:
                  </label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter the type of illness here"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700">Remarks:</label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter the patient's pain points here"
                  />
                </div>
              </div>
              <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg">Add +</button>
            </div>
          )}
                  {activeTab === "appointmentHistory" && <AppointmentHistory />} {/* Render the new component */}

                  {activeTab === "patientRecord" && <PatientRecords />}

                  {activeTab === "medication" && <MedicationTab />}

        </div>
      </div>
    </div>
  );
};

export default ViewPatient;
