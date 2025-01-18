import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Table from "../../components/Table";
import Modal from "../../components/Modal";
import AddPatient from "./AddPatient";
import { getPatients, editPatient, deletePatient } from "../../service/patientApi";

const PatientTable = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [selectedPatient, setSelectedPatient] = useState(null);

  const navigate = useNavigate();

  const columns = [
    { key: "name", label: "Name" },
    { key: "contact_number", label: "Contact Number" },
    { key: "email", label: "Email" },
    { key: "actions", label: "Actions" },
  ];

  const fetchPatients = async () => {
    setLoading(true);
    try {
      const patients = await getPatients();
      const formattedData = patients.map((patient) => ({
        id: patient.id,
        name: `${patient.first_name} ${patient.last_name}`,
        contact_number: patient.phone_number,
        email: patient.email,
      }));
      setData(formattedData);
    } catch (error) {
      console.error("Error fetching patients:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPatients();
  }, []);

  const handleNameClick = (patientId) => {
    navigate(`/doctor-dashboard/view-patient/${patientId}`); // Redirect with the patient ID
  };

  const handleEdit = (id) => {
    const patient = data.find((patient) => patient.id === id);
    setSelectedPatient(patient);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setIsAddModalOpen(false);
    setSelectedPatient(null);
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this patient?");
    if (confirmDelete) {
      try {
        await deletePatient(id);
        setData(data.filter((patient) => patient.id !== id));
      } catch (error) {
        console.error("Error deleting patient:", error);
      }
    }
  };

  const handleSave = async () => {
    try {
      await editPatient(selectedPatient.id, {
        first_name: selectedPatient.name.split(" ")[0],
        last_name: selectedPatient.name.split(" ")[1],
        phone_number: selectedPatient.contact_number,
        email: selectedPatient.email,
      });
      await fetchPatients();
      setIsModalOpen(false);
    } catch (error) {
      console.error("Error updating patient:", error);
    }
  };

  const handlePatientAdded = async (newPatient) => {
    try {
      const formattedPatient = {
        id: newPatient.id,
        name: `${newPatient.first_name} ${newPatient.last_name}`,
        contact_number: newPatient.phone_number,
        email: newPatient.email,
      };

      // Update the state with the formatted patient immediately
      setData((prevData) => [...prevData, formattedPatient]);

      // Optionally, refresh the list from the backend to ensure consistency
      const updatedPatients = await getPatients();
      const formattedData = updatedPatients.map((patient) => ({
        id: patient.id,
        name: `${patient.first_name} ${patient.last_name}`,
        contact_number: patient.phone_number,
        email: patient.email,
      }));
      setData(formattedData);

      setIsAddModalOpen(false);
    } catch (error) {
      console.error("Error adding patient to the state:", error);
    }
  };

  if (loading) {
    return <p>Please wait a moment, loading...</p>;
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-bold">Patients</h1>
        <button
          onClick={() => setIsAddModalOpen(true)}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add Patient +
        </button>
      </div>
      <Table
        columns={columns}
        data={data}
        onEdit={handleEdit}
        onDelete={handleDelete}
        onNameClick={handleNameClick} // Pass the handleNameClick function to the Table component
      />

      {/* Edit Modal */}
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} title="Edit Patient">
        {selectedPatient && (
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              value={selectedPatient.name}
              onChange={(e) => setSelectedPatient({ ...selectedPatient, name: e.target.value })}
              className="w-full px-3 py-2 mb-4 border rounded"
            />
            <label className="block text-sm font-medium text-gray-700">Contact Number</label>
            <input
              type="text"
              value={selectedPatient.contact_number}
              onChange={(e) =>
                setSelectedPatient({ ...selectedPatient, contact_number: e.target.value })
              }
              className="w-full px-3 py-2 mb-4 border rounded"
            />
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              value={selectedPatient.email}
              onChange={(e) => setSelectedPatient({ ...selectedPatient, email: e.target.value })}
              className="w-full px-3 py-2 mb-4 border rounded"
            />
            <div className="flex justify-end gap-4">
              <button onClick={handleSave} className="px-4 py-2 bg-blue-500 text-white rounded">
                Save
              </button>
            </div>
          </div>
        )}
      </Modal>

      {/* Add Patient Modal */}
      <Modal isOpen={isAddModalOpen} onClose={handleCloseModal} title="Add New Patient">
        <AddPatient onPatientAdded={handlePatientAdded} />
      </Modal>
    </div>
  );
};

export default PatientTable;
