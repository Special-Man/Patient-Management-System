import React, { useEffect, useState } from "react";
import * as Tabs from "@radix-ui/react-tabs";
import Cookies from "js-cookie";
import doctorpic1 from "../../assets/doctorpic1.jpg"; // Import the image properly
import { fetchAppointmentsByPatientId } from "../../service/appointmentApi";

const PatientsAppointments = () => {
  const [upcomingAppointment, setUpcomingAppointment] = useState(null);
  const [appointmentHistory, setAppointmentHistory] = useState([]);
  const patientId = Cookies.get("id"); // Replace with patient ID from cookies

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const appointments = await fetchAppointmentsByPatientId(patientId);
        console.log("Fetched Appointments:", appointments);

        // Separate upcoming appointment and history
        const today = new Date().toISOString().split("T")[0];
        const formattedAppointments = appointments.map((appt) => ({
          ...appt,
          date: new Date(appt.date).toISOString().split("T")[0], // Normalize date
        }));

        const upcoming = formattedAppointments.find((appt) => appt.date === today);
        const history = formattedAppointments.filter((appt) => appt.date !== today);

        setUpcomingAppointment(upcoming || null);
        setAppointmentHistory(history);
      } catch (error) {
        console.error("Error fetching appointments:", error);
      }
    };

    fetchAppointments();
  }, [patientId]);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Appointments</h1>

      <Tabs.Root defaultValue="history">
        <Tabs.List className="flex space-x-6 mb-4 border-b border-gray-200">
        
          <Tabs.Trigger
            value="history"
            className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 focus:text-blue-600"
          >
            Appointments
          </Tabs.Trigger>
        </Tabs.List>

        {/* Upcoming Appointment Tab */}
        <Tabs.Content value="upcoming">
          {upcomingAppointment ? (
            <div className="p-4 bg-white border border-gray-200 rounded-lg shadow">
              <h2 className="text-lg font-bold mb-2">
                You have an upcoming appointment with Dr. {upcomingAppointment.doctor_first_name}
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
                  <p className="font-medium">Dr. {upcomingAppointment.doctor_first_name}</p>
                  <p>Type of Illness: {upcomingAppointment.illness}</p>
                  <p>Date: {upcomingAppointment.date}</p>
                  <p>Time: {upcomingAppointment.time_from} to {upcomingAppointment.time_to}</p>
                </div>
              </div>
            </div>
          ) : (
            <p className="text-gray-600">No upcoming appointments.</p>
          )}
        </Tabs.Content>

        {/* Appointment History Tab */}
        <Tabs.Content value="history">
          <div className="p-4 bg-white border border-gray-200 rounded-lg shadow">
            <h2 className="text-lg font-bold mb-4">Your appointment history:</h2>

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
                {appointmentHistory.length > 0 ? (
                  appointmentHistory.map((appointment, index) => (
                    <tr key={appointment.id} className="hover:bg-gray-50">
                      <td className="py-2 px-4 border-b border-gray-200">{index + 1}</td>
                      <td className="py-2 px-4 border-b border-gray-200">{appointment.date}</td>
                      <td className="py-2 px-4 border-b border-gray-200">
                        {appointment.time_from} to {appointment.time_to}
                      </td>
                      <td className="py-2 px-4 border-b border-gray-200">
                        <button className="bg-blue-500 text-white px-4 py-1 rounded">
                          View Medical Record
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      className="py-2 px-4 border-b border-gray-200 text-center"
                      colSpan="4"
                    >
                      No appointment history found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </Tabs.Content>
      </Tabs.Root>
    </div>
  );
};

export default PatientsAppointments;
