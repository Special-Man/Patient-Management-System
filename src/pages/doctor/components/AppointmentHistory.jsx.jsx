import React from "react";

const AppointmentHistory = () => {
  const appointments = [
    { date: "Fri, 21 Jul 2024", time: "2:00 PM to 3:20 PM" },
    { date: "Fri, 2 Jul 2024", time: "12:00 PM to 1:30 PM" },
    { date: "Wed, 29 May 2024", time: "12:30 PM to 1:50 PM" },
    { date: "Mon, 20 May 2024", time: "2:00 PM to 3:30 PM" },
    { date: "Sun, 15 May 2024", time: "2:00 PM to 3:20 PM" },
    { date: "Fri, 2 May 2024", time: "12:00 PM to 1:30 PM" },
    { date: "Thu, 22 Feb 2024", time: "12:30 PM to 1:50 PM" },
    { date: "Tue, 2 Feb 2024", time: "2:00 PM to 3:30 PM" },
  ];

  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">Appointment History</h3>
      <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow">
        <thead>
          <tr>
            <th className="px-4 py-2 border-b border-gray-300 text-left text-gray-600">SN</th>
            <th className="px-4 py-2 border-b border-gray-300 text-left text-gray-600">Date</th>
            <th className="px-4 py-2 border-b border-gray-300 text-left text-gray-600">Time</th>
            <th className="px-4 py-2 border-b border-gray-300 text-left text-gray-600">Action</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((appointment, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="px-4 py-2 border-b border-gray-300">{index + 1}</td>
              <td className="px-4 py-2 border-b border-gray-300">{appointment.date}</td>
              <td className="px-4 py-2 border-b border-gray-300">{appointment.time}</td>
              <td className="px-4 py-2 border-b border-gray-300">
                <button className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600">
                  View Medical Record
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AppointmentHistory;
