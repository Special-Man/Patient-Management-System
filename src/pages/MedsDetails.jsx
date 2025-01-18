import React, { useEffect, useState } from 'react';
import Table from '../components/Table';
import Modal from '../components/Modal';
import { getMedicines } from '../service/medsApi';

const MedsDetails = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMed, setSelectedMed] = useState(null);

  const columns = [
    { key: 'name', label: 'Medication Name' }, // Updated key
    { key: 'manufacturer', label: 'Manufacturer' },
    { key: 'dosage', label: 'Dosage' },
    { key: 'price', label: 'Price' },
    { key: 'expiry_date', label: 'Expiration Date' },
    { key: 'actions', label: 'Actions' }
  ];

  // Fetch medicines from API
  useEffect(() => {
    const fetchMedicines = async () => {
      try {
        const medicines = await getMedicines();
        setData(medicines); // Assuming the response is an array of medicines
      } catch (error) {
        console.error('Error fetching medicines:', error);
        setData([]); // Handle error by setting empty data
      } finally {
        setLoading(false);
      }
    };

    fetchMedicines();
  }, []);

  const handleEdit = (id) => {
    const med = data.find((med) => med.id === id);
    setSelectedMed(med);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedMed(null);
  };

  const handleDelete = (id) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this medication?');
    if (confirmDelete) {
      setData(data.filter((med) => med.id !== id));
      console.log('Deleted medication with ID:', id);
    }
  };

  const handleSave = () => {
    console.log('Saved changes for medication:', selectedMed);
    handleCloseModal();
  };

  if (loading) {
    return <p>Please wait a minute, Loading...</p>;
  }

  return (
    <div>
      <Table
        columns={columns}
        data={data}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

      <Modal isOpen={isModalOpen} onClose={handleCloseModal} title="Edit Medication">
        {selectedMed && (
          <div>
            <label className="block text-sm font-medium text-gray-700">Medication Name</label>
            <input
              type="text"
              value={selectedMed.name} // Updated key
              onChange={(e) => setSelectedMed({ ...selectedMed, name: e.target.value })} // Updated key
              className="w-full px-3 py-2 mb-4 border rounded"
            />
            <label className="block text-sm font-medium text-gray-700">Manufacturer</label>
            <input
              type="text"
              value={selectedMed.manufacturer}
              onChange={(e) => setSelectedMed({ ...selectedMed, manufacturer: e.target.value })}
              className="w-full px-3 py-2 mb-4 border rounded"
            />
            <label className="block text-sm font-medium text-gray-700">Dosage</label>
            <input
              type="text"
              value={selectedMed.dosage}
              onChange={(e) => setSelectedMed({ ...selectedMed, dosage: e.target.value })}
              className="w-full px-3 py-2 mb-4 border rounded"
            />
            <label className="block text-sm font-medium text-gray-700">Price</label>
            <input
              type="text"
              value={selectedMed.price}
              onChange={(e) => setSelectedMed({ ...selectedMed, price: e.target.value })}
              className="w-full px-3 py-2 mb-4 border rounded"
            />
            <label className="block text-sm font-medium text-gray-700">Expiration Date</label>
            <input
              type="text"
              value={selectedMed.expiry_date}
              onChange={(e) => setSelectedMed({ ...selectedMed, expiry_date: e.target.value })}
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

export default MedsDetails;
