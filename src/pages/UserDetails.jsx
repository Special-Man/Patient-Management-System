import React from 'react';
import { useParams } from 'react-router-dom';

const UserDetails = () => {
  const { userId } = useParams();

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">User Details</h2>
      <p>User ID: {userId}</p>
      {/* Fetch and display more details based on the userId */}
    </div>
  );
};

export default UserDetails;
