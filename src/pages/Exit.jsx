import React from 'react';

const Exit = () => {
  const data = [
    {
      id: 1,
      name: 'Dr. John Doe',
      contactNumber: '+1 123 456 7890',
      email: 'john.doe@example.com',
    },
    {
      id: 2,
      name: 'Dr. Jane Smith',
      contactNumber: '+1 098 765 4321',
      email: 'jane.smith@example.com',
    },
  ];

  const handleEdit = (id) => {
    console.log(`Edit doctor with ID: ${id}`);
  };

  const handleUpdate = (id) => {
    console.log(`Update doctor with ID: ${id}`);
  };

  const handleDelete = (id) => {
    console.log(`Delete doctor with ID: ${id}`);
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b border-gray-200 bg-gray-100 text-left text-gray-700 font-semibold">S.N</th>
            <th className="py-2 px-4 border-b border-gray-200 bg-gray-100 text-left text-gray-700 font-semibold">Name</th>
            <th className="py-2 px-4 border-b border-gray-200 bg-gray-100 text-left text-gray-700 font-semibold">Contact Number</th>
            <th className="py-2 px-4 border-b border-gray-200 bg-gray-100 text-left text-gray-700 font-semibold">Email</th>
            <th className="py-2 px-4 border-b border-gray-200 bg-gray-100 text-left text-gray-700 font-semibold">Edit</th>
          
            <th className="py-2 px-4 border-b border-gray-200 bg-gray-100 text-left text-gray-700 font-semibold">Delete</th>
          </tr>
        </thead>
        <tbody>
          {data.map((doctor, index) => (
            <tr key={doctor.id} className="hover:bg-gray-50">
              <td className="py-2 px-4 border-b border-gray-200">{index + 1}</td>
              <td className="py-2 px-4 border-b border-gray-200">{doctor.name}</td>
              <td className="py-2 px-4 border-b border-gray-200">{doctor.contactNumber}</td>
              <td className="py-2 px-4 border-b border-gray-200">{doctor.email}</td>
              <td className="py-2 px-4 border-b border-gray-200">
                <button
                  onClick={() => handleEdit(doctor.id)}
                  className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                >
                  Edit
                </button>
              </td>
              <td className="py-2 px-4 border-b border-gray-200">
                <button
                  onClick={() => handleUpdate(doctor.id)}
                  className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
                >
                
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// export default DoctorTable;


export default Exit