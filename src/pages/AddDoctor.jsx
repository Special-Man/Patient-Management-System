import React, { useState } from 'react';
import { addDoctor } from '../service/doctorApi';

const AddDoctor = () => {
  const [doctorName, setDoctorName] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const doctorData = { name: doctorName, contactNumber, email };

    try {
      const response = await addDoctor(doctorData);
      alert('Doctor added successfully!');
      // Clear form fields after successful submission
      setDoctorName('');
      setContactNumber('');
      setEmail('');
    } catch (error) {
      alert('Failed to add doctor. Please try again.');
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">Add New Doctor</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="doctorName">
              Doctor Name
            </label>
            <input
              type="text"
              id="doctorName"
              placeholder="Enter doctor's name"
              value={doctorName}
              onChange={(e) => setDoctorName(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="contactNumber">
              Contact Number
            </label>
            <input
              type="tel"
              id="contactNumber"
              placeholder="Enter contact number"
              value={contactNumber}
              onChange={(e) => setContactNumber(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg focus:outline-none"
          >
            Add Doctor
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddDoctor;
