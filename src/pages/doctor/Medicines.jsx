import React, { useState } from "react";
import Table from "../../components/Table";
import Modal from "../../components/Modal";

const Medicines = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [medicineName, setMedicineName] = useState("");
  const [manufacturer, setManufacturer] = useState("");
  const [price, setPrice] = useState("");
  const [medicinesData, setMedicinesData] = useState([
    { id: 1, name: "Gobulin Green", manufacturer: "Oscorp Org.", price: "Rs. 30,000" },
    { id: 2, name: "Lexilon", manufacturer: "Luthor Corp.", price: "Rs. 25,999" },
    { id: 3, name: "Mountain Dew", manufacturer: "Pepsico.", price: "Rs. 100" },
  ]);

  const columns = [
    { key: "name", label: "Medicine Name" },
    { key: "manufacturer", label: "Manufacturer" },
    { key: "price", label: "Price" },
    { key: "actions", label: "Action" },
  ];

  const handleAddMedicine = () => {
    if (medicineName && manufacturer && price) {
      setMedicinesData([
        ...medicinesData,
        {
          id: medicinesData.length + 1,
          name: medicineName,
          manufacturer: manufacturer,
          price: `Rs. ${price}`,
        },
      ]);
      setMedicineName("");
      setManufacturer("");
      setPrice("");
      setIsModalOpen(false);
    } else {
      alert("Please fill out all fields!");
    }
  };

  const handleEdit = (id) => {
    alert(`Edit medicine with ID: ${id}`);
  };

  const handleDelete = (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this medicine?");
    if (confirmDelete) {
      setMedicinesData(medicinesData.filter((medicine) => medicine.id !== id));
    }
  };

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
        onEdit={handleEdit}
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
