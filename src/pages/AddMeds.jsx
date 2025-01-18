import React, { useState } from 'react';
import { addMedicine } from '../service/medsApi';
const AddMeds = () => {
  const [name, setName] = useState('');
  const [manufacturer, setManufacturer] = useState('');
  const [dosage, setDosage] = useState('');
  const [price, setPrice] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [statusMessage, setStatusMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const medsData = {
      name: name,
      manufacturer: manufacturer,
      dosage: dosage,
      price: parseFloat(price), // Ensure price is sent as a number
      expiration_date: expirationDate,
    };

    try {
      await addMedicine(medsData); // Call the API service
      setStatusMessage('Medicine added successfully!');
      setName('');
      setManufacturer('');
      setDosage('');
      setPrice('');
      setExpirationDate('');
    } catch (error) {
      setStatusMessage('Failed to add medicine. Please try again.');
      console.error('Error adding medicine:', error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">Add New Medicine</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="name">
              Medicine Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter Medicine name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="manufacturer">
              Manufacturer
            </label>
            <input
              type="text"
              id="manufacturer"
              placeholder="Enter manufacturer"
              value={manufacturer}
              onChange={(e) => setManufacturer(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="dosage">
              Dosage
            </label>
            <input
              type="text"
              id="dosage"
              placeholder="Enter dosage"
              value={dosage}
              onChange={(e) => setDosage(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="price">
              Price
            </label>
            <input
              type="number"
              id="price"
              placeholder="Enter price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="expirationDate">
              Expiration Date
            </label>
            <input
              type="date"
              id="expirationDate"
              value={expirationDate}
              onChange={(e) => setExpirationDate(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg focus:outline-none"
          >
            Add Medicine
          </button>
        </form>
        {statusMessage && <p className="mt-4 text-center text-sm text-gray-600">{statusMessage}</p>}
      </div>
    </div>
  );
};

export default AddMeds;
