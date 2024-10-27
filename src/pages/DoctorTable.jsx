import React, { useEffect, useState } from 'react';
import Table from '../components/Table';
import { getDoctors } from '../service/doctorApi';
const App = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const columns = [
    { key: 'name', label: 'Name' },
    { key: 'contact_number', label: 'Contact Number' },
    { key: 'email', label: 'Email' },
    { key: 'actions', label: 'Actions' }
  ];

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const doctors = await getDoctors();
        setData(doctors);
      } catch (error) {
        console.error('Error fetching doctors:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchDoctors();
  }, []);

  const handleEdit = (id) => {
    console.log('Edit doctor with ID:', id);
  };

  const handleDelete = (id) => {
    console.log('Delete doctor with ID:', id);
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <Table
      columns={columns}
      data={data}
      onEdit={handleEdit}
      onDelete={handleDelete}
    />
  );
};

export default App;
