import React from "react";
import { useNavigate } from "react-router-dom";

const Appointments = () => {
    const navigate = useNavigate();

  const appointments = [
    {
      id: 1,
      name: "Marvin McKinney",
      gender: "Male",
      age: 32,
      email: "mamckinder@gmail.com",
      phone: "+880 172524123123",
      illness: "Acrophobia",
      date: "Fri, 21 Jul 2024",
      timeFrom: "02:00 PM",
      timeTo: "03:20 PM",
      status: "Today",
    },
    {
      id: 2,
      name: "Sam Witwicky",
      gender: "Male",
      age: 43,
      email: "witwicky123@gmail.com",
      phone: "+880 172524123123",
      illness: "Thyroid",
      date: "Sat, 22 Jul 2024",
      timeFrom: "10:00 AM",
      timeTo: "11:20 AM",
      status: "Tomorrow",
    },
    {
      id: 3,
      name: "Mary McGuiness",
      gender: "Female",
      age: 25,
      email: "quirkygirl123@gmail.com",
      phone: "+880 172524123123",
      illness: "Cancer",
      date: "Wed, 29 Jul 2024",
      timeFrom: "02:00 PM",
      timeTo: "11:20 PM",
      status: "Upcoming",
    },
  ];

  const handleAddAppointment = () => {
    navigate("/doctor-dashboard/add-appointment"); // Navigate to AddAppointments component
  };


  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Appointments</h1>
        <button
          onClick={handleAddAppointment}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add Appointment +
        </button>
      </div>

      {appointments.map((appointment) => (
        <div
          key={appointment.id}
          className="flex justify-between items-start bg-white shadow-md rounded-lg p-6 mb-6"
        >
          <div>
            <h2 className="text-xl font-bold">{appointment.name}</h2>
            <p className="text-sm text-gray-600">
              {appointment.gender} · Age {appointment.age}
            </p>
            <p className="text-sm text-gray-600">{appointment.email}</p>
            <p className="text-sm text-gray-600">{appointment.phone}</p>

            <div className="flex gap-2 mt-4">
              <button className="bg-blue-100 text-blue-500 px-3 py-1 rounded">
                Send Alert
              </button>
              <button className="bg-blue-100 text-blue-500 px-3 py-1 rounded">
                Video Call
              </button>
              <button className="bg-blue-100 text-blue-500 px-3 py-1 rounded">
                Voice Call
              </button>
              <button className="bg-blue-100 text-blue-500 px-3 py-1 rounded">
                Email
              </button>
            </div>
          </div>

          <div className="flex flex-col items-end">
            <div className="text-sm text-gray-600">
              <span className="font-bold">Type of Illness:</span> {appointment.illness}
            </div>
            <div className="text-sm text-gray-600">
              <span className="font-bold">Time:</span> {appointment.status},{" "}
              {appointment.date}
            </div>
            <div className="text-sm text-gray-600">
              <span className="font-bold">From:</span> {appointment.timeFrom}{" "}
              <span className="font-bold">To:</span> {appointment.timeTo}
            </div>

            <div className="flex gap-2 mt-4">
              <button className="bg-blue-500 text-white px-4 py-2 rounded">
                Patient Details
              </button>
              <button className="bg-blue-500 text-white px-4 py-2 rounded">
                Edit Schedule
              </button>
              <button className="bg-red-500 text-white px-4 py-2 rounded">
                Cancel Appointment
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Appointments;
