import React, { useState } from "react";
import * as Tabs from "@radix-ui/react-tabs";
import doctorpic1 from "../../assets/doctorpic1.jpg"; // Import the image properly

const PatientsAppointments = () => {
  const upcomingAppointment = {
    doctor: {
      name: "Dr. Hugo Strange",
      gender: "Male",
      age: 52,
      email: "arkham.asylum@dc.com",
      phone: "+880 172524123123",
    },
    illness: "Acrophobia",
    date: "Fri, 21 Jul 2024",
    timeFrom: "02:00 PM",
    timeTo: "03:20 PM",
    status: "Today",
  };

  const appointmentHistory = [
    {
      id: 1,
      date: "Fri, 21 Jul 2024",
      timeFrom: "02:00 PM",
      timeTo: "03:20 PM",
    },
    {
      id: 2,
      date: "Fri, 2 Jul 2024",
      timeFrom: "12:00 PM",
      timeTo: "01:30 PM",
    },
    {
      id: 3,
      date: "Wed, 29 May 2024",
      timeFrom: "12:30 PM",
      timeTo: "01:50 PM",
    },
    {
      id: 4,
      date: "Mon, 20 May 2024",
      timeFrom: "02:00 PM",
      timeTo: "03:30 PM",
    },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Appointments</h1>

      <Tabs.Root defaultValue="upcoming">
        <Tabs.List className="flex space-x-6 mb-4 border-b border-gray-200">
          <Tabs.Trigger
            value="upcoming"
            className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 focus:text-blue-600"
          >
            Upcoming Appointment
          </Tabs.Trigger>
          <Tabs.Trigger
            value="history"
            className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 focus:text-blue-600"
          >
            Appointment History
          </Tabs.Trigger>
        </Tabs.List>

        {/* Upcoming Appointment Tab */}
        <Tabs.Content value="upcoming">
          <div className="p-4 bg-white border border-gray-200 rounded-lg shadow">
            <h2 className="text-lg font-bold mb-2">
              You have an upcoming appointment with {upcomingAppointment.doctor.name}
            </h2>

            <div className="flex items-center gap-6 mb-4">
              <div className="flex flex-col items-center">
                <img
                  src={doctorpic1}
                  alt="Doctor"
                  className="rounded-full mb-2 w-32"
                />
                <button className="bg-blue-500 text-white px-4 py-1 rounded">Doctor Details</button>
              </div>
              <div>
                <p className="font-medium">{upcomingAppointment.doctor.name}</p>
                <p>Gender: {upcomingAppointment.doctor.gender}</p>
                <p>Age: {upcomingAppointment.doctor.age}</p>
                <p>Email: {upcomingAppointment.doctor.email}</p>
                <p>Phone: {upcomingAppointment.doctor.phone}</p>
              </div>
            </div>

            <div>
              <p className="font-medium">Type of Illness: {upcomingAppointment.illness}</p>
              <p>Date: {upcomingAppointment.date}</p>
              <p>Time: {upcomingAppointment.timeFrom} to {upcomingAppointment.timeTo}</p>
            </div>
          </div>
        </Tabs.Content>

        {/* Appointment History Tab */}
        <Tabs.Content value="history">
          <div className="p-4 bg-white border border-gray-200 rounded-lg shadow">
            <h2 className="text-lg font-bold mb-4">Your appointments history:</h2>

            <table className="min-w-full bg-white border border-gray-200">
              <thead>
                <tr>
                  <th className="py-2 px-4 border-b border-gray-200 bg-gray-100 text-left text-gray-700 font-semibold">
                    S.N
                  </th>
                  <th className="py-2 px-4 border-b border-gray-200 bg-gray-100 text-left text-gray-700 font-semibold">
                    Date
                  </th>
                  <th className="py-2 px-4 border-b border-gray-200 bg-gray-100 text-left text-gray-700 font-semibold">
                    Time
                  </th>
                  <th className="py-2 px-4 border-b border-gray-200 bg-gray-100 text-left text-gray-700 font-semibold">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {appointmentHistory.map((appointment, index) => (
                  <tr key={appointment.id} className="hover:bg-gray-50">
                    <td className="py-2 px-4 border-b border-gray-200">{index + 1}</td>
                    <td className="py-2 px-4 border-b border-gray-200">{appointment.date}</td>
                    <td className="py-2 px-4 border-b border-gray-200">
                      {appointment.timeFrom} to {appointment.timeTo}
                    </td>
                    <td className="py-2 px-4 border-b border-gray-200">
                      <button className="bg-blue-500 text-white px-4 py-1 rounded">
                        View Medical Record
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Tabs.Content>
      </Tabs.Root>
    </div>
  );
};

export default PatientsAppointments;
