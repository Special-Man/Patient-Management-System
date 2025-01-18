import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Table from '../../components/Table';
import Modal from '../../components/Modal';
import AddPatient from './AddPatient';

const PatientTable = () => {
  const [data, setData] = useState([
    {
      id: 1,
      first_name: 'John',
      last_name: 'Doe',
      email: 'johndoe@gmail.com',
      phone_number: '1234567890',
      address: '123 Main St',
      age: 30,
    },
  ]); // Initialize with 1 dummy data
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [selectedPatient, setSelectedPatient] = useState(null);

  const navigate = useNavigate();

  const columns = [
    { key: 'first_name', label: 'First Name' },
    { key: 'last_name', label: 'Last Name' },
    { key: 'email', label: 'Email' },
    { key: 'phone_number', label: 'Phone Number' },
    { key: 'actions', label: 'Actions' },
  ];

  const handleNameClick = () => {
    navigate(`/dashboard/patient-details`);
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

  const handleDelete = (id) => {
    setData(data.filter((patient) => patient.id !== id));
  };

  const handleSave = () => {
    setData((prevData) =>
      prevData.map((patient) =>
        patient.id === selectedPatient.id ? selectedPatient : patient
      )
    );
    setIsModalOpen(false);
  };

  const handlePatientAdded = (newPatient) => {
    setData((prevData) => [...prevData, newPatient]);
    setIsAddModalOpen(false);
  };

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
        onNameClick={handleNameClick}
      />

      {/* Edit Modal */}
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} title="Edit Patient">
        {selectedPatient && (
          <div>
            <label className="block text-sm font-medium text-gray-700">First Name</label>
            <input
              type="text"
              value={selectedPatient.first_name}
              onChange={(e) =>
                setSelectedPatient({ ...selectedPatient, first_name: e.target.value })
              }
              className="w-full px-3 py-2 mb-4 border rounded"
            />
            <label className="block text-sm font-medium text-gray-700">Last Name</label>
            <input
              type="text"
              value={selectedPatient.last_name}
              onChange={(e) =>
                setSelectedPatient({ ...selectedPatient, last_name: e.target.value })
              }
              className="w-full px-3 py-2 mb-4 border rounded"
            />
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              value={selectedPatient.email}
              onChange={(e) =>
                setSelectedPatient({ ...selectedPatient, email: e.target.value })
              }
              className="w-full px-3 py-2 mb-4 border rounded"
            />
            <label className="block text-sm font-medium text-gray-700">Phone Number</label>
            <input
              type="tel"
              value={selectedPatient.phone_number}
              onChange={(e) =>
                setSelectedPatient({ ...selectedPatient, phone_number: e.target.value })
              }
              className="w-full px-3 py-2 mb-4 border rounded"
            />
            <label className="block text-sm font-medium text-gray-700">Address</label>
            <input
              type="text"
              value={selectedPatient.address}
              onChange={(e) =>
                setSelectedPatient({ ...selectedPatient, address: e.target.value })
              }
              className="w-full px-3 py-2 mb-4 border rounded"
            />
            <label className="block text-sm font-medium text-gray-700">Age</label>
            <input
              type="number"
              value={selectedPatient.age}
              onChange={(e) =>
                setSelectedPatient({ ...selectedPatient, age: parseInt(e.target.value) })
              }
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
