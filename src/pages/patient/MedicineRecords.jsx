import React, { useState } from "react";
import Modal from "../../components/Modal";
const MedicineRecords = () => {
  const [selectedRecord, setSelectedRecord] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const records = [
    {
      id: 1,
      date: "Fri, 21 Jul 2024",
      typeOfIllness: "Acrophobia",
      remarks:
        "Extreme case of Acrophobia, gets scared even as little height as standing up in a chair. This is very serious case in which the patient won't even climb the ladder upstairs bcuz he is scared of even slanted heights like a jackass. So the cure is, face the fear, kyunki darr ke aagey jeet hai, aur iske nichey maut hai. And that is it for today.",
      doctor: {
        name: "Dr. Hugo Strange",
        age: 52,
        email: "arkham.asylum@dc.com",
        phone: "+880 172524123123",
      },
    },
    {
      id: 2,
      date: "Fri, 2 Jul 2024",
      typeOfIllness: "Acrophobia",
      remarks:
        "So the extreme case of Acrophobia, we did face the fear but he didn’t take the medication of fear, which is ‘Mountain Dew’, that is why he broke his leg and so far he didn’t die.",
      doctor: {
        name: "Dr. Hugo Strange",
        age: 52,
        email: "arkham.asylum@dc.com",
        phone: "+880 172524123123",
      },
    },
  ];

  const handleView = (record) => {
    setSelectedRecord(record);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedRecord(null);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Medical Records</h1>
      <div className="grid grid-cols-2 gap-6 mb-6">
        <div>
          <h2 className="text-lg font-semibold">You</h2>
          <div className="bg-gray-100 p-4 rounded">
            <p>Marvin McKinney</p>
            <p>Male · Age 32</p>
            <p>mamckinder@gmail.com</p>
            <p>+880 172524123123</p>
          </div>
        </div>
        <div>
          <h2 className="text-lg font-semibold">Your Doctor</h2>
          <div className="bg-gray-100 p-4 rounded">
            <p>{records[0].doctor.name}</p>
            <p>Male · Age {records[0].doctor.age}</p>
            <p>{records[0].doctor.email}</p>
            <p>{records[0].doctor.phone}</p>
          </div>
        </div>
      </div>
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b border-gray-200 bg-gray-100 text-left text-gray-700 font-semibold">
              Date
            </th>
            <th className="py-2 px-4 border-b border-gray-200 bg-gray-100 text-left text-gray-700 font-semibold">
              Type of Illness
            </th>
            <th className="py-2 px-4 border-b border-gray-200 bg-gray-100 text-left text-gray-700 font-semibold">
              Remarks
            </th>
            <th className="py-2 px-4 border-b border-gray-200 bg-gray-100 text-left text-gray-700 font-semibold">
              Doctor
            </th>
            <th className="py-2 px-4 border-b border-gray-200 bg-gray-100 text-left text-gray-700 font-semibold">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {records.map((record, index) => (
            <tr key={record.id} className="hover:bg-gray-50">
              <td className="py-2 px-4 border-b border-gray-200">{record.date}</td>
              <td className="py-2 px-4 border-b border-gray-200">{record.typeOfIllness}</td>
              <td className="py-2 px-4 border-b border-gray-200">
                {record.remarks.substring(0, 50)}...
              </td>
              <td className="py-2 px-4 border-b border-gray-200">{record.doctor.name}</td>
              <td className="py-2 px-4 border-b border-gray-200">
                <button
                  onClick={() => handleView(record)}
                  className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                >
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal */}
      {selectedRecord && (
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <div className="p-4">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded"
            >
              X
            </button>
            <h2 className="text-lg font-bold">{selectedRecord.date}</h2>
            <p>
              <span className="font-semibold">Type of illness:</span>{" "}
              {selectedRecord.typeOfIllness}
            </p>
            <p>
              <span className="font-semibold">Remarks:</span>{" "}
              {selectedRecord.remarks}
            </p>
            <button
              onClick={closeModal}
              className="mt-4 bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
            >
              View Medicines
            </button>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default MedicineRecords;
