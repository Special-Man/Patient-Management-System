import React, { useState } from 'react';

import Modal from '../components/Modal';

const AddTable = () => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const users = [
    { id: 1, name: 'Ben Reilly', email: 'ben.reilly@flowbite.com', position: 'Disco Dancer' },
    { id: 2, name: 'Roberta Casas', email: 'roberta.casas@flowbite.com', position: 'Designer' },
  ];

  const handleEditClick = (user) => {
    setSelectedUser(user);
    setIsEditModalOpen(true);
  };

  const handleDeleteClick = (user) => {
    setSelectedUser(user);
    setIsDeleteModalOpen(true);
  };

  const closeModal = () => {
    setIsEditModalOpen(false);
    setIsDeleteModalOpen(false);
    setSelectedUser(null);
  };

  return (
    <div className="p-4">
      <table className="min-w-full bg-white border">
        <thead>
          <tr>
            <th className="py-2 px-4 border">Name</th>
            <th className="py-2 px-4 border">Email</th>
            <th className="py-2 px-4 border">Position</th>
            <th className="py-2 px-4 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td className="py-2 px-4 border">{user.name}</td>
              <td className="py-2 px-4 border">{user.email}</td>
              <td className="py-2 px-4 border">{user.position}</td>
              <td className="py-2 px-4 border">
                <button
                  className="mr-2 bg-blue-500 text-white py-1 px-3 rounded"
                  onClick={() => handleEditClick(user)}
                >
                  Edit
                </button>
                <button
                  className="bg-red-500 text-white py-1 px-3 rounded"
                  onClick={() => handleDeleteClick(user)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Edit Modal */}
      <Modal isOpen={isEditModalOpen} onClose={closeModal} title="Edit User">
        {selectedUser && (
          <form>
            <label className="block mb-2">First Name</label>
            <input
              type="text"
              value={selectedUser.name.split(' ')[0]}
              className="w-full mb-4 px-4 py-2 border rounded-lg"
              required
            />
            <label className="block mb-2">Email</label>
            <input
              type="email"
              value={selectedUser.email}
              className="w-full mb-4 px-4 py-2 border rounded-lg"
              required
            />
            <label className="block mb-2">Position</label>
            <input
              type="text"
              value={selectedUser.position}
              className="w-full mb-4 px-4 py-2 border rounded-lg"
              required
            />
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg mt-4"
            >
              Save
            </button>
          </form>
        )}
      </Modal>

      {/* Delete Modal */}
      <Modal isOpen={isDeleteModalOpen} onClose={closeModal} title="Delete User">
        {selectedUser && (
          <div>
            <p>Are you sure you want to delete {selectedUser.name}?</p>
            <div className="flex mt-4">
              <button
                className="bg-red-500 text-white py-2 px-4 rounded-lg mr-2"
                onClick={() => {
                  // Handle delete logic
                  closeModal();
                }}
              >
                Delete
              </button>
              <button
                className="bg-gray-300 text-gray-700 py-2 px-4 rounded-lg"
                onClick={closeModal}
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default AddTable;
