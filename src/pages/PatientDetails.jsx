// PatientDetails.js
import React, { useEffect, useState } from 'react';
import { getPatients } from '../service/patientApi';
import Table from '../components/Table';
import Modal from '../components/Modal';
const PatientDetails = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPatient, setSelectedPatient] = useState(null);

  const columns = [
    { key: 'name', label: 'Name' },
    { key: 'contact_number', label: 'Contact Number' },
    { key: 'email', label: 'Email' },
    { key: 'actions', label: 'Actions' }
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const patients = await getPatients();
        setData(patients);
      } catch (error) {
        console.error('Error fetching patients:', error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleEdit = (id) => {
    const patient = data.find((patient) => patient.id === id);
    setSelectedPatient(patient);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedPatient(null);
  };

  const handleDelete = (id) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this patient?');
    if (confirmDelete) {
      setData(data.filter((patient) => patient.id !== id));
      console.log('Deleted patient with ID:', id);
    }
  };

  const handleSave = () => {
    // Simulate save functionality
    console.log('Saved changes for patient:', selectedPatient);
    handleCloseModal();
  };

  if (loading) {
    return <p>Please wait a min, Loading...</p>;
  }

  return (
    <div>
      <Table
        columns={columns}
        data={data}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

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
              onChange={(e) => setSelectedPatient({ ...selectedPatient, contact_number: e.target.value })}
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
              <button onClick={handleCloseModal} className="px-4 py-2 bg-gray-500 text-white rounded">Cancel</button>
              <button onClick={handleSave} className="px-4 py-2 bg-blue-500 text-white rounded">Save</button>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default PatientDetails;