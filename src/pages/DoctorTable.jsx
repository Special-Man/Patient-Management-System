import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import Table from '../components/Table';
import Modal from '../components/Modal';
import AddDoctor from './AddDoctor';
import { getDoctors, editDoctor, deleteDoctor } from '../service/doctorApi';

const DoctorTable = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  const navigate = useNavigate(); // Initialize navigate

  const columns = [
    { key: 'name', label: 'Name' },
    { key: 'contact_number', label: 'Contact Number' },
    { key: 'email', label: 'Email' },
    { key: 'actions', label: 'Actions' },
  ];

  const fetchDoctors = async () => {
    setLoading(true);
    try {
      const doctors = await getDoctors();
      const formattedData = doctors.map((doctor) => ({
        id: doctor.id,
        name: `${doctor.first_name} ${doctor.last_name}`,
        contact_number: doctor.phone_number,
        email: doctor.email,
      }));
      setData(formattedData);
    } catch (error) {
      console.error('Error fetching doctors:', error);
    } finally {
      setLoading(false);
    }
  };
  

  useEffect(() => {
    fetchDoctors();
  }, []);

const handleNameClick = (doctorId) => {
  navigate(`/dashboard/doctor-details/${doctorId}`); // Redirect with the doctor ID
};


  const handleEdit = (id) => {
    const doctor = data.find((doctor) => doctor.id === id);
    setSelectedDoctor(doctor);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setIsAddModalOpen(false);
    setSelectedDoctor(null);
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this doctor?');
    if (confirmDelete) {
      try {
        await deleteDoctor(id);
        setData(data.filter((doctor) => doctor.id !== id));
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
        password: selectedDoctor.password,
      });
      await fetchDoctors();
      setIsModalOpen(false);
    } catch (error) {
      console.error('Error updating doctor:', error);
    }
  };

  const handleDoctorAdded = async (newDoctor) => {
    try {
      const formattedDoctor = {
        id: newDoctor.id,
        name: `${newDoctor.first_name} ${newDoctor.last_name}`,
        contact_number: newDoctor.phone_number,
        email: newDoctor.email,
      };
      
      // Update the state with the formatted doctor immediately
      setData((prevData) => [...prevData, formattedDoctor]);
  
      // Optionally, refresh the list from the backend to ensure consistency
      const updatedDoctors = await getDoctors();
      const formattedData = updatedDoctors.map((doctor) => ({
        id: doctor.id,
        name: `${doctor.first_name} ${doctor.last_name}`,
        contact_number: doctor.phone_number,
        email: doctor.email,
      }));
      setData(formattedData);
  
      setIsAddModalOpen(false);
    } catch (error) {
      console.error('Error adding doctor to the state:', error);
    }
  };
  

  if (loading) {
    return <p>Please wait a min, Loading...</p>;
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-bold">Admin</h1>
        <button
          onClick={() => setIsAddModalOpen(true)}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add Doctor +
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
              <button onClick={handleSave} className="px-4 py-2 bg-blue-500 text-white rounded">
                Save
              </button>
            </div>
          </div>
        )}
      </Modal>

      {/* Add Doctor Modal */}
      <Modal isOpen={isAddModalOpen} onClose={handleCloseModal} title="Add New Doctor">
        <AddDoctor onDoctorAdded={handleDoctorAdded} />
      </Modal>
    </div>
  );
};

export default DoctorTable;
