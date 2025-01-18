import React, { useEffect, useState } from "react";
import Cookies from "js-cookie"; // For accessing cookies
import { fetchAllPatients, addAppointment } from "../../../service/appointmentApi";

const AddAppointments = ({ onAppointmentAdded }) => {
  const [patients, setPatients] = useState([]);
  const [formData, setFormData] = useState({
    p_id: "", // Use p_id instead of name
    email: "",
    phone: "",
    age: "",
    illness: "",
    visitType: "",
    date: "",
    timeFrom: "",
    timeTo: "",
  });

  const doctorId = Cookies.get("id"); // Fetch doctor ID from cookies

  // Visit types
  const visitTypes = ["Consultant", "Follow-up", "Check-Up"];

  // Fetch patients on component mount
  useEffect(() => {
    const fetchDropdownData = async () => {
      try {
        const fetchedPatients = await fetchAllPatients();
        console.log("Fetched Patients:", fetchedPatients); // Debug log for patients
        setPatients(fetchedPatients);
      } catch (error) {
        console.error("Error fetching patients:", error);
      }
    };

    fetchDropdownData();
  }, []);

  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const appointmentData = {
      ...formData,
      d_id: doctorId, // Add doctor ID from cookies to the form data
    };

    try {
      console.log("Appointment Data Sent:", appointmentData);
      const newAppointment = await addAppointment(appointmentData);
      console.log("New Appointment:", newAppointment);
      if (onAppointmentAdded) {
        onAppointmentAdded(newAppointment); // Callback to update UI
      }
    } catch (error) {
      console.error("Error adding appointment:", error);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Add Appointment:</h1>
      <form onSubmit={handleSubmit} className="grid gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Patient *</label>
          <select
            value={formData.p_id} // Bind to p_id
            onChange={(e) => handleInputChange("p_id", e.target.value)} // Update p_id
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="">Select Patient</option>
            {patients.map((patient) => (
              <option key={patient.id} value={patient.id}>
                {patient.first_name}
              </option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Email *</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Phone Number *</label>
            <input
              type="text"
              value={formData.phone}
              onChange={(e) => handleInputChange("phone", e.target.value)}
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Age *</label>
            <input
              type="number"
              value={formData.age}
              onChange={(e) => handleInputChange("age", e.target.value)}
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Type of Illness *</label>
          <input
            type="text"
            value={formData.illness}
            onChange={(e) => handleInputChange("illness", e.target.value)}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Visit Type *</label>
          <select
            value={formData.visitType}
            onChange={(e) => handleInputChange("visitType", e.target.value)}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="">Enter Visit Type</option>
            {visitTypes.map((type, index) => (
              <option key={index} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Date *</label>
            <input
              type="date"
              value={formData.date}
              onChange={(e) => handleInputChange("date", e.target.value)}
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className="block text-sm font-medium text-gray-700">Time From *</label>
              <input
                type="time"
                value={formData.timeFrom}
                onChange={(e) => handleInputChange("timeFrom", e.target.value)}
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Time To *</label>
              <input
                type="time"
                value={formData.timeTo}
                onChange={(e) => handleInputChange("timeTo", e.target.value)}
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none"
        >
          Add Appointment +
        </button>
      </form>
    </div>
  );
};

export default AddAppointments;
