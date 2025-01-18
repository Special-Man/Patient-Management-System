import React, { useEffect, useState } from "react";
import Modal from "../../../components/Modal";
import Cookies from "js-cookie";
import { fetchMedicines } from "../../../service/medicineApi"; // Fetch medicines API
import { addMedication, fetchMedicationsByPatientId  } from "../../../service/medicationApi"; // Add medication API
import { useParams } from "react-router-dom"; // For patientId from URL params

const MedicationTab = () => {
  const { id: patientId } = useParams(); // Get p_id (patientId) from URL params
  const doctorId = Cookies.get("id"); // Get d_id (doctorId) from cookies

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [medicineData, setMedicineData] = useState([]);
  const [medicineList, setMedicineList] = useState([]); // List of medicines from API
  const [newMedicine, setNewMedicine] = useState({
    medicineId: "",
    time1: "09:00 AM",
    time2: "12:00 PM",
    time3: "08:00 PM",
  });

  // Fetch medicines from API
  useEffect(() => {
    const fetchAllData = async () => {
      try {
        const medicines = await fetchMedicines();
        setMedicineList(medicines);

        const medications = await fetchMedicationsByPatientId(patientId);
        setMedicineData(medications); // Populate existing medications
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchAllData();
  }, [patientId]);

  const handleInputChange = (field, value) => {
    setNewMedicine({ ...newMedicine, [field]: value });
  };

  const handleAddMedicine = async () => {
    const medicinePayload = {
      m_id: newMedicine.medicineId, // Submit the medicine ID
      time1: newMedicine.time1,
      time2: newMedicine.time2,
      time3: newMedicine.time3,
      d_id: doctorId, // Include doctorId from cookies
      p_id: patientId, // Include patientId from URL params
    };
console.log(medicinePayload);
    try {
      // Send data to the backend
      const savedMedication = await addMedication(medicinePayload);

      // Log the response
      console.log("Added Medication:", savedMedication);

      // Update the UI
      setMedicineData((prev) => [
        ...prev,
        {
          ...newMedicine,
          id: savedMedication.id,
          medicineName: medicineList.find((m) => m.id === newMedicine.medicineId)?.name, // Fetch name by ID
        },
      ]);

      // Reset modal state
      setIsModalOpen(false);
      setNewMedicine({
        medicineId: "",
        time1: "09:00 AM",
        time2: "12:00 PM",
        time3: "08:00 PM",
      });
    } catch (error) {
      console.error("Error adding medication:", error);
    }
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
            <th className="border px-4 py-2">Time</th>
          </tr>
        </thead>
        <tbody>
          {medicineData.map((medicine, index) => (
            <tr key={medicine.id}>
              <td className="border px-4 py-2">{index + 1}</td>
              <td className="border px-4 py-2">{medicine.medicine_name}</td>
              <td className="border px-4 py-2">
                {medicine.time1}, {medicine.time2}, {medicine.time3}
              </td>
            </tr>
          ))}
        </tbody>
      </table>


<Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
  <h3 className="text-lg font-bold mb-4">Add New Medicine</h3>

  <div className="mb-4">
    <label className="block text-gray-700 mb-2">Medicine Name</label>
    <select
      value={newMedicine.medicineId}
      onChange={(e) => handleInputChange("medicineId", e.target.value)}
      className="w-full px-3 py-2 border rounded"
    >
      <option value="">Select a medicine</option>
      {medicineList.map((medicine) => (
        <option key={medicine.id} value={medicine.id}>
          {medicine.name}
        </option>
      ))}
    </select>
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
