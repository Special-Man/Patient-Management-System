import React, { useState } from "react";
import Modal from "../../../components/Modal";
const MedicationTab = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [medicineData, setMedicineData] = useState([]);
  const [newMedicine, setNewMedicine] = useState({
    medicineName: "",
    manufacturer: "",
    time1: "09:00 AM",
    time2: "12:00 PM",
    time3: "08:00 PM",
  });

  const handleInputChange = (field, value) => {
    setNewMedicine({ ...newMedicine, [field]: value });
  };

  const handleAddMedicine = () => {
    setMedicineData((prev) => [
      ...prev,
      { ...newMedicine, id: prev.length + 1 },
    ]);
    setIsModalOpen(false);
    setNewMedicine({
      medicineName: "",
      manufacturer: "",
      time1: "09:00 AM",
      time2: "12:00 PM",
      time3: "08:00 PM",
    });
  };

  const handleDeleteMedicine = (id) => {
    setMedicineData((prev) => prev.filter((medicine) => medicine.id !== id));
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Medication</h2>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add Medicine +
        </button>
      </div>

      <table className="min-w-full border border-gray-300">
        <thead>
          <tr>
            <th className="border px-4 py-2">SN</th>
            <th className="border px-4 py-2">Medicine Name</th>
            <th className="border px-4 py-2">Manufacturer</th>
            <th className="border px-4 py-2">Time</th>
            <th className="border px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {medicineData.map((medicine, index) => (
            <tr key={medicine.id}>
              <td className="border px-4 py-2">{index + 1}</td>
              <td className="border px-4 py-2">{medicine.medicineName}</td>
              <td className="border px-4 py-2">{medicine.manufacturer}</td>
              <td className="border px-4 py-2">
                {medicine.time1}, {medicine.time2}, {medicine.time3}
              </td>
              <td className="border px-4 py-2">
                <button
                  onClick={() => handleDeleteMedicine(medicine.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded mr-2"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h3 className="text-lg font-bold mb-4">Add New Medicine</h3>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Medicine Name</label>
          <input
            type="text"
            value={newMedicine.medicineName}
            onChange={(e) => handleInputChange("medicineName", e.target.value)}
            className="w-full px-3 py-2 border rounded"
            placeholder="Enter medicine name"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Manufacturer</label>
          <input
            type="text"
            value={newMedicine.manufacturer}
            onChange={(e) => handleInputChange("manufacturer", e.target.value)}
            className="w-full px-3 py-2 border rounded"
            placeholder="Enter manufacturer"
          />
        </div>
        <div className="grid grid-cols-3 gap-4 mb-4">
          <div>
            <label className="block text-gray-700 mb-2">Time 1</label>
            <select
              value={newMedicine.time1}
              onChange={(e) => handleInputChange("time1", e.target.value)}
              className="w-full px-3 py-2 border rounded"
            >
              <option>09:00 AM</option>
              <option>10:00 AM</option>
              <option>11:00 AM</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Time 2</label>
            <select
              value={newMedicine.time2}
              onChange={(e) => handleInputChange("time2", e.target.value)}
              className="w-full px-3 py-2 border rounded"
            >
              <option>12:00 PM</option>
              <option>01:00 PM</option>
              <option>02:00 PM</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Time 3</label>
            <select
              value={newMedicine.time3}
              onChange={(e) => handleInputChange("time3", e.target.value)}
              className="w-full px-3 py-2 border rounded"
            >
              <option>08:00 PM</option>
              <option>09:00 PM</option>
              <option>10:00 PM</option>
            </select>
          </div>
        </div>
        <div className="flex justify-end gap-4">
          <button
            onClick={() => setIsModalOpen(false)}
            className="bg-gray-300 text-gray-700 px-4 py-2 rounded"
          >
            Cancel
          </button>
          <button
            onClick={handleAddMedicine}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Add
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default MedicationTab;
