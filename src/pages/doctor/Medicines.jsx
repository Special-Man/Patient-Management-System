import React, { useState, useEffect } from "react";
import Table from "../../components/Table";
import Modal from "../../components/Modal";
import { fetchMedicines, addMedicine, deleteMedicine } from "../../service/medicineApi";

const Medicines = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [medicineName, setMedicineName] = useState("");
  const [manufacturer, setManufacturer] = useState("");
  const [price, setPrice] = useState("");
  const [medicinesData, setMedicinesData] = useState([]);

  const columns = [
    { key: "name", label: "Medicine Name" },
    { key: "manufacturer", label: "Manufacturer" },
    { key: "price", label: "Price" },
    { key: "actions", label: "Action" },
  ];

  // Format medicines data to include "Rs." prefix for the price
  const formatMedicinesData = (data) => {
    return data.map((medicine) => ({
      ...medicine,
      price: `Rs. ${medicine.price}`,
    }));
  };

  // Fetch medicines from the backend
  const fetchAllMedicines = async () => {
    try {
      const data = await fetchMedicines();
      setMedicinesData(formatMedicinesData(data)); // Format data before setting state
    } catch (error) {
      console.error("Error fetching medicines:", error);
    }
  };

  // Add a new medicine
  const handleAddMedicine = async () => {
    if (medicineName && manufacturer && price) {
      const newMedicine = {
        name: medicineName,
        manufacturer,
        price: parseFloat(price),
      };
      try {
        const addedMedicine = await addMedicine(newMedicine);
        setMedicinesData((prevData) => [
          ...prevData,
          { ...addedMedicine, price: `Rs. ${addedMedicine.price}` },
        ]); // Format and update state instantly
        setMedicineName("");
        setManufacturer("");
        setPrice("");
        setIsModalOpen(false);
      } catch (error) {
        console.error("Error adding medicine:", error);
      }
    } else {
      alert("Please fill out all fields!");
    }
  };

  // Delete a medicine (soft delete)
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this medicine?");
    if (confirmDelete) {
      try {
        await deleteMedicine(id);
        setMedicinesData((prevData) => prevData.filter((medicine) => medicine.id !== id)); // Instant update
      } catch (error) {
        console.error("Error deleting medicine:", error);
      }
    }
  };

  useEffect(() => {
    fetchAllMedicines(); // Fetch medicines on component mount
  }, []);

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Medicines</h1>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add Medicine +
        </button>
      </div>

      <Table
        columns={columns}
        data={medicinesData}
        onEdit={(id) => alert(`Edit medicine with ID: ${id}`)}
        onDelete={handleDelete}
      />

      {/* Add Medicine Modal */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Add New Medicine">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Medicine Name</label>
          <input
            type="text"
            value={medicineName}
            onChange={(e) => setMedicineName(e.target.value)}
            placeholder="Enter medicine name"
            className="w-full px-4 py-2 mb-4 border rounded"
            required
          />

          <label className="block text-sm font-medium text-gray-700 mb-2">Manufacturer</label>
          <input
            type="text"
            value={manufacturer}
            onChange={(e) => setManufacturer(e.target.value)}
            placeholder="Enter manufacturer name"
            className="w-full px-4 py-2 mb-4 border rounded"
            required
          />

          <label className="block text-sm font-medium text-gray-700 mb-2">Price</label>
          <input
            type="text"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="Enter price"
            className="w-full px-4 py-2 mb-4 border rounded"
            required
          />

          <div className="flex justify-end gap-4">
            <button
              onClick={() => setIsModalOpen(false)}
              className="px-4 py-2 bg-gray-300 text-gray-700 rounded"
            >
              Cancel
            </button>
            <button
              onClick={handleAddMedicine}
              className="px-4 py-2 bg-blue-500 text-white rounded"
            >
              Add Medicine
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Medicines;
