import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addPatient } from "../../service/patientApi";
import PopupModal from "./components/PopupModel";
const AddPatient = ({ onPatientAdded }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [password, setPassword] = useState("");
  const [showPopup, setShowPopup] = useState(false); // State for modal visibility
  const [addedPatientId, setAddedPatientId] = useState(null); // State for storing patient ID
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newPatient = {
      first_name: firstName,
      last_name: lastName,
      address,
      phone_number: phoneNumber,
      email,
      age: parseInt(age),
      password,
    };

    try {
      const addedPatient = await addPatient(newPatient);
      if (addedPatient && addedPatient.id) {
        onPatientAdded(addedPatient); // Notify parent
        setAddedPatientId(addedPatient.id); // Store patient ID
        setShowPopup(true); // Open modal after submission
        resetFormFields();
      } else {
        throw new Error("Failed to add patient: Missing patient ID.");
      }
    } catch (error) {
      console.error("Error adding patient:", error);
      alert("Failed to add patient. Please try again.");
    }
  };

  const resetFormFields = () => {
    setFirstName("");
    setLastName("");
    setAddress("");
    setPhoneNumber("");
    setEmail("");
    setAge("");
    setPassword("");
  };

  const handleAssignMedicine = () => {
    setShowPopup(false); // Close modal
    navigate("/doctor-dashboard/assign-medicine");
  };

  const handleViewPatient = () => {
    if (addedPatientId) {
      setShowPopup(false); // Close modal
      navigate(`/doctor-dashboard/view-patient?id=${addedPatientId}`);
    } else {
      alert("Patient ID is not available.");
    }
  };

  return (
    <div className="flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">Add New Patient</h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-gray-700 text-sm font-semibold mb-2">First Name</label>
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-semibold mb-2">Last Name</label>
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-semibold mb-2">Address</label>
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-gray-700 text-sm font-semibold mb-2">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-semibold mb-2">Phone Number</label>
              <input
                type="tel"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-semibold mb-2">Age</label>
            <input
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-semibold mb-2">Password</label>
            <input
              type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg focus:outline-none"
          >
            Submit
          </button>
        </form>
      </div>

      {/* Render PopupModal */}
      <PopupModal
        showPopup={showPopup}
        onAssignMedicine={handleAssignMedicine}
        onViewPatient={handleViewPatient}
      />
    </div>
  );
};

export default AddPatient;
