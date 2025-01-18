import React, { useEffect, useState } from 'react';
import Table from '../components/Table';
import Modal from '../components/Modal';
import { getDoctors, editDoctor, deleteDoctor } from '../service/doctorApi';

const DoctorTable = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  const columns = [
    { key: 'name', label: 'Name' },
    { key: 'contact_number', label: 'Contact Number' },
    { key: 'email', label: 'Email' },
    { key: 'actions', label: 'Actions' }
  ];

  // Fetch doctors from the backend
  const fetchDoctors = async () => {
    setLoading(true);
    try {
      const doctors = await getDoctors();
      setData(doctors);
    } catch (error) {
      console.error('Error fetching doctors:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDoctors();
  }, []);

  const handleEdit = (id) => {
    const doctor = data.find((doctor) => doctor.id === id);
    setSelectedDoctor(doctor);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedDoctor(null);
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this doctor?');
    if (confirmDelete) {
      try {
        await deleteDoctor(id);
        setData(data.filter((doctor) => doctor.id !== id)); // Remove from local state
        console.log('Deleted doctor with ID:', id);
      } catch (error) {
        console.error('Error deleting doctor:', error);
      }
    }
  };

  const handleSave = async () => {
    try {
      await editDoctor(selectedDoctor.id, {
        doctor_name: selectedDoctor.name,
        contact_number: selectedDoctor.contact_number,
        email: selectedDoctor.email,
        password: selectedDoctor.password, // Include the password field in the update
      });
      // Refresh the list after saving changes
      await fetchDoctors();
      setIsModalOpen(false);
    } catch (error) {
      console.error('Error updating doctor:', error);
    }
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

      <Modal isOpen={isModalOpen} onClose={handleCloseModal} title="Edit Doctor">
        {selectedDoctor && (
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              value={selectedDoctor.name}
              onChange={(e) => setSelectedDoctor({ ...selectedDoctor, name: e.target.value })}
              className="w-full px-3 py-2 mb-4 border rounded"
            />
            <label className="block text-sm font-medium text-gray-700">Contact Number</label>
            <input
              type="text"
              value={selectedDoctor.contact_number}
              onChange={(e) => setSelectedDoctor({ ...selectedDoctor, contact_number: e.target.value })}
              className="w-full px-3 py-2 mb-4 border rounded"
            />
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              value={selectedDoctor.email}
              onChange={(e) => setSelectedDoctor({ ...selectedDoctor, email: e.target.value })}
              className="w-full px-3 py-2 mb-4 border rounded"
            />
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              value={selectedDoctor.password || ''}
              onChange={(e) => setSelectedDoctor({ ...selectedDoctor, password: e.target.value })}
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

export default DoctorTable;
