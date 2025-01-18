import React, { useState } from "react";
import DoctorTable from "./DoctorTable";
import AddDoctor from "./AddDoctor"; // Ensure this file is created for the AddDoctor component
import { DeleteIcon } from "lucide-react";

export const Homepage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [doctors, setDoctors] = useState([]); // State to manage doctor data

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  // Callback to handle newly added doctor
  const handleDoctorAdded = (newDoctor) => {
    setDoctors((prevDoctors) => [...prevDoctors, newDoctor]); // Update the doctors list
    setIsModalOpen(false); // Close the modal
  };

  return (
    <div className="relative">
      <div className="flex justify-between items-center p-4">
    
      </div>
      <DoctorTable doctors={doctors} setDoctors={setDoctors} />


    </div>
  );
};

export default Homepage;
